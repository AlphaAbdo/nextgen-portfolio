import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

// ==========================================
// CUSTOM ERROR CLASSES
// ==========================================

/**
 * Base error class for data loading operations
 */
export class DataLoadError extends Error {
  public readonly path: string;
  public override readonly cause?: Error;

  constructor(message: string, name: string, path: string, cause?: Error) {
    super(message);
    this.name = name;
    this.path = path;
    this.cause = cause;
  }
}

/**
 * Error for external source failures
 */
export class ExternalSourceError extends DataLoadError {
  constructor(path: string, externalUrl: string, cause?: Error) {
    super(`Failed to load external data for ${path} from ${externalUrl}`, 'ExternalSourceError', path, cause);
  }
}

/**
 * Error for configuration loading issues
 */
export class ConfigError extends DataLoadError {
  constructor(message: string, cause?: Error) {
    super(message, 'ConfigError', 'outreachConfig.json', cause);
  }
}

// ==========================================
// CONFIGURATION MANAGEMENT
// ==========================================

/**
 * Generic configuration loader with built-in state management
 */
class ConfigLoader<T = any> {
  private data: T | null = null;
  private loaded = false;
  private loadingPromise: Promise<void> | null = null;

  constructor(
    private configPath: string,
    private http: HttpClient,
    private environmentConfig: any,
    private useProxyForExternal: boolean = true
  ) {}

  /**
   * Get the loaded configuration data
   */
  get config(): T | null {
    return this.data;
  }

  /**
   * Check if configuration is loaded
   */
  get isLoaded(): boolean {
    return this.loaded;
  }

  /**
   * Ensure configuration is loaded
   */
  async ensureLoaded(): Promise<void> {
    if (this.loadingPromise) {
      await this.loadingPromise;
      return;
    }

    if (this.loaded) {
      return;
    }

    this.loadingPromise = this.loadConfig();
    await this.loadingPromise;
  }

  /**
   * Load configuration from the specified path
   */
  private async loadConfig(): Promise<void> {
    try {
      const isExternalUrl = this.configPath.startsWith('http://') || this.configPath.startsWith('https://');

      let configData: any;

      if (isExternalUrl && this.useProxyForExternal) {
        // Use proxy server for external URLs
        const proxyBaseUrl = this.environmentConfig?.proxy?.baseUrl || 'http://localhost:3001';
        const proxyEndpoint = this.environmentConfig?.proxy?.endpoint || '/proxy';
        const proxyUrl = `${proxyBaseUrl}${proxyEndpoint}?url=${encodeURIComponent(this.configPath)}`;

  configData = await firstValueFrom(this.http.get<any>(proxyUrl, { responseType: 'json' as const }));
      } else {
        // Load local file directly
        const cacheBustUrl = `${this.configPath}?t=${Date.now()}`;
  configData = await firstValueFrom(this.http.get<any>(cacheBustUrl, { responseType: 'json' as const }));
      }

      // Validate and clean the config
      if (configData && typeof configData === 'object') {
        this.data = configData as T;
        this.loaded = true;
        return;
      }

      // Invalid config structure
      this.data = null;
      this.loaded = false;

    } catch (error) {
      // Config loading failed
      this.data = null;
      this.loaded = false;
    }
  }

  /**
   * Reset configuration (useful for testing or config reloading)
   */
  reset(): void {
    this.data = null;
    this.loaded = false;
    this.loadingPromise = null;
  }
}

/**
 * Cache entry with metadata and response type
 */
interface DataCacheEntry {
  data: any;
  timestamp: number;
  source: 'local' | 'external';
  responseType: ResponseType;
}

// ==========================================
// RESPONSE TYPE DEFINITIONS
// ==========================================

/**
 * Supported HTTP response types for data loading
 */
type ResponseType = 'json' | 'text' | 'blob' | 'arraybuffer';

/**
 * Type-safe response data based on response type
 */
type ResponseData<T extends ResponseType> =
  T extends 'json' ? any :
  T extends 'text' ? string :
  T extends 'blob' ? Blob :
  T extends 'arraybuffer' ? ArrayBuffer :
  never;

/**
 * Data Loading Service - Unified data loading with caching and fallback
 *
 * Features:
 * - Single cache architecture for memory efficiency
 * - Request deduplication to prevent duplicate HTTP calls
 * - Automatic fallback from external to local sources
 * - Configuration-driven external source overrides
 * - Custom error classes for better error handling
 *
 * @example
 * ```typescript
 * const portfolio = await dataLoadingService.getData<PortfolioData>('assets/data/portfolio.json');
 * ```
 */
@Injectable({
  providedIn: 'root'
})
export class DataLoadingService {
  // ==========================================
  // SINGLE CACHE ARCHITECTURE
  // ==========================================

  /**
   * Single cache: local URL → cache entry (typed)
   * Key is ALWAYS the local URL, value is the loaded data entry or undefined on error
   */
  private cache = new Map<string, DataCacheEntry | undefined>();

  /**
   * Track in-flight requests to prevent duplicates
   */
  private pendingRequests = new Map<string, Promise<any>>();

  private outreachConfigLoader: ConfigLoader<any>;
  private environmentConfigLoader: ConfigLoader<any>;
  private cvPrefetched = false;
  private initializationPromise: Promise<void> | null = null;

  // Testing delay for loading component demonstration (set to 0 to disable)
  private readonly TESTING_DELAY_MS = 0; // 50 seconds - re-enabled for testing

  constructor(private http: HttpClient) {
    // Initialize config loaders
    this.environmentConfigLoader = new ConfigLoader<any>(
      '/assets/environment.json',
      this.http,
      null, // No environment config needed for loading environment config
      false // Don't use proxy for environment config (it's always local)
    );

    this.outreachConfigLoader = new ConfigLoader<any>(
      '/assets/outreachConfig.json', // Default path, will be overridden by environment config
      this.http,
      null, // Will be set after environment config loads
      true // Use proxy for external outreach configs
    );

    // Load environment config first, then outreach config
    this.initializationPromise = this.initializeConfigs();
  }

  /**
   * Initialize configuration loading sequence
   */
  private async initializeConfigs(): Promise<void> {
    try {
      // Load environment config first
      await this.environmentConfigLoader.ensureLoaded();

      // Update outreach config loader with environment config
      const envConfig = this.environmentConfigLoader.config;
      if (envConfig?.outreach?.configPath) {
        this.outreachConfigLoader = new ConfigLoader<any>(
          envConfig.outreach.configPath,
          this.http,
          envConfig,
          true
        );
      }

      // Load outreach config
      await this.outreachConfigLoader.ensureLoaded();

      // Start non-blocking prefetch of the CV PDF (if configured).
      // Use an async IIFE to keep the call scoped and to allow best-effort gating
      // (respect Save-Data and slow connections). This is fire-and-forget.
      (async () => {
        try {
          const isNavigatorAvailable = typeof navigator !== 'undefined' && !!(navigator as any);
          const connection = isNavigatorAvailable ? (navigator as any).connection : null;
          const saveData = connection?.saveData;
          const effectiveType: string | undefined = connection?.effectiveType;

          // Allow prefetch on fast connections and when the user hasn't requested reduced data usage
          const fastTypes = ['4g', 'wifi', 'ethernet'];
          const allowImmediate = !saveData && (!effectiveType || fastTypes.includes(effectiveType));

          if (allowImmediate) {
            await this.prefetchCv();
          } else {
            // Defer and try again later in low-priority (best-effort)
            setTimeout(() => {
              this.prefetchCv().catch(() => {/* silent */});
            }, 60_000);
          }
        } catch (err) {
          console.warn('CV prefetch failed:', err);
        }
      })();

    } catch (error) {
      console.error('Failed to initialize configurations:', error);
    }
  }

  /**
   * Prefetch the CV PDF (as a blob) after configuration is available.
   * This is intentionally non-blocking and best-effort only.
   */
  private async prefetchCv(): Promise<void> {
    try {
      if (this.cvPrefetched) return;

      // Read skills config which contains the CV metadata
      // Use the public API so caching/deduping and external overrides are respected
      const skills = await this.getData<any>('assets/data/skills.json').catch(() => null);
      const cvMeta = skills?.metadata?.cv;
      const cvUrl = cvMeta?.url;
      const enabled = !!cvMeta?.enabled;

      if (!enabled || !cvUrl) {
        return;
      }

      // Request the blob via getBlob: this will use external override if present
      // We don't await strongly; wait briefly so cache fills before user clicks
      try {
        await this.getBlob(cvUrl);
        this.cvPrefetched = true;
        console.log('CV prefetch: success', cvUrl);
      } catch (err) {
        // Prefetch failed — leave for on-demand download and do not mark as prefetched
        console.warn('CV prefetch failed during blob fetch:', err);
      }
    } catch (err) {
      console.warn('CV prefetch unexpected error:', err);
    }
  }

  // ==========================================
  // REFLEXIVE CONFIGURATION MANAGEMENT
  // ==========================================

  // ==========================================
  // UNIFIED PUBLIC API - Single Pattern
  // ==========================================

  /**
   * Get data by path with type-safe response handling
   * @param path Local path to data file (e.g., 'assets/data/portfolio.json')
   *           Can be overridden by outreachConfig.json for external sources
   * @param responseType Expected response type (defaults to 'json')
   * @returns Promise with properly typed response data
   */
  async getData<T = any>(path: string, responseType: ResponseType = 'json'): Promise<T> {
    const actualResponseType = responseType;
    const isJsonResponse = actualResponseType === 'json';
    // Normalize path to local URL
    const localUrl = this.normalizeLocalUrl(path);

    // Check cache first
    if (this.cache.has(localUrl)) {
      const cached = this.cache.get(localUrl);
      if (cached !== undefined && cached.responseType === actualResponseType) {
        // Handle Blob objects specially - don't use spread operator as it breaks them
        return cached.data instanceof Blob ? cached.data as T : { ...cached.data } as T;
      }
      // Cached as undefined or different response type = error occurred, don't retry
      if (cached === undefined) {
        throw new DataLoadError(`Failed to load data for ${path} (previously failed)`, 'DataLoadError', path);
      }
    }

    // Check if request is already in progress
    if (this.pendingRequests.has(localUrl)) {
      return this.pendingRequests.get(localUrl)!;
    }

    // Create and cache the request
    const requestPromise = this.performDataLoad(localUrl, actualResponseType);
    // Store promise that resolves to the data, not the result object
    const dataPromise = requestPromise.then(result => result.data);
    this.pendingRequests.set(localUrl, dataPromise);

    try {
      const result = await requestPromise;
      const cacheEntry: DataCacheEntry = {
        data: result.data,
        timestamp: Date.now(),
        source: result.source,
        responseType: actualResponseType
      };
      this.cache.set(localUrl, cacheEntry);
      // Handle Blob objects specially - don't use spread operator as it breaks them
      return result.data instanceof Blob ? result.data as T : { ...result.data } as T;
    } catch (error) {
      // Cache undefined to prevent retrying failed requests
      this.cache.set(localUrl, undefined);
      throw error;
    } finally {
      this.pendingRequests.delete(localUrl);
    }
  }

  // ==========================================
  // CONVENIENCE METHODS
  // ==========================================

  /**
   * Get text content from a file
   * @param path Local path to text file
   * @returns Promise with text content
   */
  async getText(path: string): Promise<string> {
    return this.getData(path, 'text');
  }

  /**
   * Get binary data as Blob from a file
   * @param path Local path to file
   * @returns Promise with Blob data
   */
  async getBlob(path: string): Promise<Blob> {
    return this.getData(path, 'blob');
  }

  /**
   * Get binary data as ArrayBuffer from a file
   * @param path Local path to file
   * @returns Promise with ArrayBuffer data
   */
  async getArrayBuffer(path: string): Promise<ArrayBuffer> {
    return this.getData(path, 'arraybuffer');
  }

  // ==========================================
  // PRIVATE IMPLEMENTATION
  // ==========================================

  /**
   * Perform the actual data loading with fallback logic
   */
  private async performDataLoad(localUrl: string, responseType: ResponseType): Promise<{ data: any; source: 'local' | 'external' }> {
    // 🧪 TESTING DELAY: Add artificial delay for loading component demonstration
    if (this.TESTING_DELAY_MS > 0) {
      console.log(`🧪 Testing delay: Waiting ${this.TESTING_DELAY_MS}ms before loading ${localUrl}`);
      await new Promise(resolve => setTimeout(resolve, this.TESTING_DELAY_MS));
      console.log(`🧪 Testing delay complete for ${localUrl}`);
    }

    // Ensure config is loaded
    await this.ensureConfigLoaded();

    // Try external source first (if configured)
    const externalUrl = this.getExternalUrl(localUrl);
    if (externalUrl) {
      try {
        const data = await this.fetchExternalData(externalUrl, responseType);
        if (data !== undefined && data !== null) {
          return { data: data, source: 'external' as const };
        }
      } catch (error) {
        console.warn(`External fetch failed for ${localUrl}, trying local fallback`);
        // Continue to local fallback
      }
    }

    // Fallback to local source
    try {
  const data = await firstValueFrom(this.http.get<any>(localUrl, { responseType: responseType as any }));
      if (data !== undefined && data !== null) {
        return { data, source: 'local' as const };
      }
      throw new Error('Local data is null or undefined');
    } catch (error) {
      throw new DataLoadError(`Failed to load data for ${localUrl}: ${error instanceof Error ? error.message : 'Unknown error'}`, 'DataLoadError', localUrl, error instanceof Error ? error : undefined);
    }
  }

  /**
   * Normalize endpoint to local URL
   */
  private normalizeLocalUrl(endpoint: string): string {
    if (endpoint.startsWith('/')) {
      return endpoint;
    }
    if (endpoint.startsWith('assets/')) {
      return `/${endpoint}`;
    }
    return `/assets/${endpoint}`;
  }

  /**
   * Get external URL from outreach config (if exists)
   * This allows overriding local paths with external sources
   */
  private getExternalUrl(localUrl: string): string | null {
    const outreachConfig = this.outreachConfigLoader.config;
    if (!outreachConfig) {
      return null;
    }

    // Try both formats: with and without leading slash
    const override1 = outreachConfig[localUrl];
    const override2 = outreachConfig[localUrl.startsWith('/') ? localUrl.substring(1) : `/${localUrl}`];

    const override = override1 || override2;
    return (override && typeof override === 'string') ? override : null;
  }

  /**
   * Clear cache for specific path or all paths
   * Useful for forcing fresh data or memory management
   */
  clearCache(path?: string): void {
    if (path) {
      // Clear cache for specific path
      const localUrl = this.normalizeLocalUrl(path);
      this.cache.delete(localUrl);
      this.pendingRequests.delete(localUrl);
    } else {
      // Clear all caches
      this.cache.clear();
      this.pendingRequests.clear();
    }
  }

  /**
   * Get cache statistics for monitoring
   */
  getCacheStats(): { entries: number, pending: number } {
    return {
      entries: this.cache.size,
      pending: this.pendingRequests.size
    };
  }

  /**
   * Ensure config is loaded before resolving endpoint
   */
  private async ensureConfigLoaded(): Promise<void> {
    // Wait for initialization to complete if it's still running
    if (this.initializationPromise) {
      await this.initializationPromise;
      this.initializationPromise = null; // Clear the promise once resolved
    }
  }

  /**
   * Ensure environment config is loaded before resolving endpoint
   */
  private async ensureEnvironmentConfigLoaded(): Promise<void> {
    await this.environmentConfigLoader.ensureLoaded();
  }

  /**
   * Fetch data using proxy server approach for external URLs
   */
  private async fetchExternalData(url: string, responseType: ResponseType): Promise<any> {
    // Validate URL before sending to proxy
    if (!url || typeof url !== 'string') {
      throw new Error('Invalid URL provided to fetchExternalData');
    }

    // Handle edge case: falsy or empty URLs
    if (!url.trim()) {
      throw new Error('Empty URL provided');
    }

    // If URL doesn't start with http/https, it's probably a local path that got misrouted
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      throw new Error(`Non-HTTP URL received: ${url}`);
    }

    try {
      // Ensure environment config is loaded
      await this.ensureEnvironmentConfigLoaded();

      // Build proxy URL from environment config
      const envConfig = this.environmentConfigLoader.config;
      const proxyBaseUrl = envConfig?.proxy?.baseUrl || 'http://localhost:3001';
      const proxyEndpoint = envConfig?.proxy?.endpoint || '/proxy';
      const proxyUrl = `${proxyBaseUrl}${proxyEndpoint}?url=${encodeURIComponent(url)}`;

      // Handle different response types
      if (responseType === 'blob') {
  const blobResponse = await firstValueFrom(this.http.get(proxyUrl, { responseType: 'blob' as any }));
        return blobResponse;
      }

      if (responseType === 'arraybuffer') {
  const arrayBufferResponse = await firstValueFrom(this.http.get(proxyUrl, { responseType: 'arraybuffer' as any }));
        return arrayBufferResponse;
      }

      // For text and json, get as text first
      const rawResponse = await firstValueFrom(this.http.get(proxyUrl, { responseType: 'text' as any }));

      // Normalize response to string for parsing and text operations
      let textResponse: string;

      if (rawResponse instanceof ArrayBuffer) {
        try {
          textResponse = new TextDecoder().decode(rawResponse);
        } catch (e) {
          textResponse = '';
        }
  } else if (rawResponse && typeof rawResponse === 'object' && 'size' in (rawResponse as any) && 'type' in (rawResponse as any)) {
        // Convert Blob to text
        try {
          // Use the Response API to read blob as text
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          textResponse = await new Response(rawResponse).text();
        } catch (e) {
          textResponse = '';
        }
      } else if (typeof rawResponse === 'string') {
        textResponse = rawResponse;
      } else if (rawResponse === null || rawResponse === undefined) {
        textResponse = '';
      } else {
        // Fallback conversion
        try {
          textResponse = String(rawResponse);
        } catch (e) {
          textResponse = '';
        }
      }

      // Check if we got a valid response
      if (!textResponse) {
        throw new Error('Empty response from proxy server');
      }

      // Handle based on response type
      if (responseType === 'text') {
        return textResponse;
      }

      // For JSON, try to parse
      try {
        const jsonData = JSON.parse(textResponse);
        // Validate that we have a proper object structure
        if (jsonData && typeof jsonData === 'object') {
          return jsonData;
        } else {
          throw new Error('Invalid JSON structure');
        }
      } catch (jsonError) {
        // If it's HTML, try to extract JSON from it
        if (textResponse.includes('<html') || textResponse.includes('<HTML')) {
          const jsonMatch = textResponse.match(/\{[\s\S]*\}/);
          if (jsonMatch) {
            try {
              const extractedJson = JSON.parse(jsonMatch[0]);
              return extractedJson;
            } catch (parseError) {
              // If no JSON found in HTML, return the HTML as text
              return textResponse;
            }
          }
          // If no JSON found in HTML, return the HTML as text
          return textResponse;
        }

        // For other text content, return as-is
        return textResponse;
      }

    } catch (proxyError: any) {
      // Build proxy URL from environment config for error logging
      const envConfig = this.environmentConfigLoader.config;
      const proxyBaseUrl = envConfig?.proxy?.baseUrl || 'http://localhost:3001';
      const proxyEndpoint = envConfig?.proxy?.endpoint || '/proxy';
      const proxyUrl = `${proxyBaseUrl}${proxyEndpoint}?url=${encodeURIComponent(url)}`;

      console.error('Proxy request failed:', proxyError);
      console.error('Proxy error details:', {
        message: proxyError.message,
        status: proxyError.status,
        statusText: proxyError.statusText,
        url: proxyUrl
      });
      // Always attempt fallback to local asset
      throw proxyError; // Re-throw to trigger fallback in calling code
    }
  }
}
