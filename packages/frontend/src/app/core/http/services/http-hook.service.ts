import { Injectable, isDevMode } from '@angular/core';
import { HttpClient, HttpContext } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { BYPASS_HTTP_HOOK_INTERCEPTOR } from '../interceptors/http-hook.interceptor';
import { 
  HttpHookError, 
  ResponseType, 
  HttpCacheEntry,
  CacheStats
} from '../models/http-hook.models';
import { HttpConfigLoaderService } from './http-config-loader.service';
import { HttpCacheService } from './http-cache.service';
import { HttpUrlResolverService } from './http-url-resolver.service';
import { HttpExternalFetcherService } from './http-external-fetcher.service';

/**
 * HTTP Hook Service - Main orchestrator for enhanced HTTP data loading
 *
 * Features:
 * - Single cache architecture for memory efficiency
 * - Request deduplication to prevent duplicate HTTP calls
 * - Automatic fallback from external to local sources
 * - Configuration-driven external source overrides
 * - CV prefetching with network condition awareness
 *
 * @example
 * ```typescript
 * const portfolio = await httpHookService.getData<PortfolioData>('assets/data/portfolio.json');
 * ```
 */
@Injectable({
  providedIn: 'root'
})
export class HttpHookService {
  private cvPrefetched = false;
  private initializationPromise: Promise<void> | null = null;

  // Testing delay for loading component demonstration (set to 0 to disable)
  private readonly TESTING_DELAY_MS = 0; // 3 seconds delay for debugging loading component

  // Config paths
  private readonly ENV_CONFIG_PATH = 'assets/environment.json';
  private readonly OUTREACH_CONFIG_PATH = 'assets/outreachConfig.json';

  constructor(
    private http: HttpClient,
    private configLoader: HttpConfigLoaderService,
    private cache: HttpCacheService,
    private urlResolver: HttpUrlResolverService,
    private externalFetcher: HttpExternalFetcherService
  ) {
    // Load configs and start CV prefetch
    this.initializationPromise = this.initializeConfigs();
  }

  /**
   * Initialize configuration loading sequence
   */
  private async initializeConfigs(): Promise<void> {
    try {
      // Load environment config first
      await this.configLoader.ensureLoaded(this.ENV_CONFIG_PATH, null, false);

      // Get environment config and update outreach config path if needed
      const envConfig = this.configLoader.getConfig(this.ENV_CONFIG_PATH);
      const outreachPath = envConfig?.outreach?.configPath || this.OUTREACH_CONFIG_PATH;

      // Load outreach config
      await this.configLoader.ensureLoaded(outreachPath, envConfig, true);

      // Start non-blocking prefetch of the CV PDF (if configured)
      this.startCvPrefetch();

    } catch (error) {
      if (isDevMode()) {
        console.error('Failed to initialize configurations:', error);
      }
    }
  }

  /**
   * Start CV prefetch with network condition awareness
   */
  private startCvPrefetch(): void {
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
        if (isDevMode()) {
          console.warn('CV prefetch failed:', err);
        }
      }
    })();
  }

  /**
   * Prefetch the CV PDF (as a blob) after configuration is available
   */
  private async prefetchCv(): Promise<void> {
    try {
      if (this.cvPrefetched) return;

      // Read skills config which contains the CV metadata
      const skills = await this.getData<any>('assets/data/skills.json').catch(() => null);
      const cvMeta = skills?.metadata?.cv;
      const cvUrl = cvMeta?.url;
      const enabled = !!cvMeta?.enabled;

      if (!enabled || !cvUrl) {
        return;
      }

      // Request the blob via getBlob
      try {
        await this.getBlob(cvUrl);
        this.cvPrefetched = true;
        if (isDevMode()) {
          console.log('CV prefetch: success', cvUrl);
        }
      } catch (err) {
        if (isDevMode()) {
          console.warn('CV prefetch failed during blob fetch:', err);
        }
      }
    } catch (err) {
      if (isDevMode()) {
        console.warn('CV prefetch unexpected error:', err);
      }
    }
  }

  // ==========================================
  // PUBLIC API
  // ==========================================

  /**
   * Get data by path with type-safe response handling
   */
  async getData<T = any>(path: string, responseType: ResponseType = 'json'): Promise<T> {
    const actualResponseType = responseType;
    const localUrl = this.urlResolver.normalizeLocalUrl(path);

    // Check cache first
    if (this.cache.has(localUrl)) {
      const cached = this.cache.get(localUrl);
      if (cached !== undefined && cached.responseType === actualResponseType) {
        // Handle Blob objects specially - don't use spread operator
        return cached.data instanceof Blob ? cached.data as T : { ...cached.data } as T;
      }
      // Cached as undefined = error occurred, don't retry
      if (cached === undefined) {
        throw new HttpHookError(`Failed to load data for ${path} (previously failed)`, 'HttpHookError', path);
      }
    }

    // Check if request is already in progress
    if (this.cache.hasPending(localUrl)) {
      return this.cache.getPending(localUrl)!;
    }

    // Create and cache the request
    const requestPromise = this.performDataLoad(localUrl, actualResponseType);
    const dataPromise = requestPromise.then(result => result.data);
    this.cache.setPending(localUrl, dataPromise);

    try {
      const result = await requestPromise;
      const cacheEntry: HttpCacheEntry = {
        data: result.data,
        timestamp: Date.now(),
        source: result.source,
        responseType: actualResponseType
      };
      this.cache.set(localUrl, cacheEntry);
      // Handle Blob objects specially
      return result.data instanceof Blob ? result.data as T : { ...result.data } as T;
    } catch (error) {
      // Cache undefined to prevent retrying failed requests
      this.cache.set(localUrl, undefined);
      throw error;
    } finally {
      this.cache.deletePending(localUrl);
    }
  }

  /**
   * Get text content from a file
   */
  async getText(path: string): Promise<string> {
    return this.getData(path, 'text');
  }

  /**
   * Get binary data as Blob from a file
   */
  async getBlob(path: string): Promise<Blob> {
    return this.getData(path, 'blob');
  }

  /**
   * Get binary data as ArrayBuffer from a file
   */
  async getArrayBuffer(path: string): Promise<ArrayBuffer> {
    return this.getData(path, 'arraybuffer');
  }

  /**
   * Clear cache for specific path or all paths
   */
  clearCache(path?: string): void {
    if (path) {
      const localUrl = this.urlResolver.normalizeLocalUrl(path);
      this.cache.clearCache(localUrl);
    } else {
      this.cache.clearCache();
    }
  }

  /**
   * Get cache statistics for monitoring
   */
  getCacheStats(): CacheStats {
    return this.cache.getStats();
  }

  // ==========================================
  // PRIVATE IMPLEMENTATION
  // ==========================================

  /**
   * Perform the actual data loading with fallback logic
   */
  private async performDataLoad(localUrl: string, responseType: ResponseType): Promise<{ data: any; source: 'local' | 'external' }> {
    // Testing delay for loading component demonstration
    if (this.TESTING_DELAY_MS > 0 && isDevMode()) {
      console.log(`🧪 Testing delay: Waiting ${this.TESTING_DELAY_MS}ms before loading ${localUrl}`);
      await new Promise(resolve => setTimeout(resolve, this.TESTING_DELAY_MS));
      console.log(`🧪 Testing delay complete for ${localUrl}`);
    }

    // Ensure config is loaded
    await this.ensureConfigLoaded();

    // Try external source first (if configured)
    const envConfig = this.configLoader.getConfig(this.ENV_CONFIG_PATH);
    const outreachPath = envConfig?.outreach?.configPath || this.OUTREACH_CONFIG_PATH;
    const outreachConfig = this.configLoader.getConfig(outreachPath);
    const externalUrl = this.urlResolver.getExternalUrl(localUrl, outreachConfig);

    if (externalUrl) {
      try {
        const data = await this.externalFetcher.fetchExternal(externalUrl, responseType, envConfig);
        if (data !== undefined && data !== null) {
          return { data: data, source: 'external' as const };
        }
      } catch (error) {
        if (isDevMode()) {
          console.warn(`External fetch failed for ${localUrl}, trying local fallback`);
        }
        // Continue to local fallback
      }
    }

    // Fallback to local source
    try {
      const context = new HttpContext().set(BYPASS_HTTP_HOOK_INTERCEPTOR, true);
      const data = await firstValueFrom(this.http.get<any>(localUrl, { responseType: responseType as any, context }));
      if (data !== undefined && data !== null) {
        return { data, source: 'local' as const };
      }
      throw new Error('Local data is null or undefined');
    } catch (error) {
      throw new HttpHookError(
        `Failed to load data for ${localUrl}: ${error instanceof Error ? error.message : 'Unknown error'}`, 
        'HttpHookError', 
        localUrl, 
        error instanceof Error ? error : undefined
      );
    }
  }

  /**
   * Ensure config is loaded before resolving endpoint
   */
  private async ensureConfigLoaded(): Promise<void> {
    if (this.initializationPromise) {
      await this.initializationPromise;
      this.initializationPromise = null;
    }
  }
}
