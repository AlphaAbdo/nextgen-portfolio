import { Injectable, isDevMode } from '@angular/core';
import { HttpClient, HttpContext } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { BYPASS_HTTP_HOOK_INTERCEPTOR } from '../interceptors/http-hook.interceptor';

/**
 * Configuration Loader Service - Handles loading and caching of configuration files
 * 
 * Features:
 * - Lazy loading with promise-based state management
 * - Automatic retry prevention for failed configs
 * - Support for both local and external (proxied) configs
 * - Cache busting for local configs
 */
@Injectable({
  providedIn: 'root'
})
export class HttpConfigLoaderService {
  private configCache = new Map<string, { data: any | null; loaded: boolean; promise: Promise<void> | null }>();

  constructor(private http: HttpClient) {}

  /**
   * Get configuration data for a specific path
   */
  getConfig(configPath: string): any | null {
    const cached = this.configCache.get(configPath);
    return cached?.data || null;
  }

  /**
   * Check if configuration is loaded
   */
  isLoaded(configPath: string): boolean {
    return this.configCache.get(configPath)?.loaded || false;
  }

  /**
   * Ensure configuration is loaded
   */
  async ensureLoaded(
    configPath: string, 
    environmentConfig: any = null, 
    useProxyForExternal: boolean = true
  ): Promise<void> {
    const cached = this.configCache.get(configPath);
    
    // If already loading, wait for that promise
    if (cached?.promise) {
      await cached.promise;
      return;
    }

    // If already loaded, return immediately
    if (cached?.loaded) {
      return;
    }

    // Start loading
    const loadPromise = this.loadConfig(configPath, environmentConfig, useProxyForExternal);
    this.configCache.set(configPath, {
      data: null,
      loaded: false,
      promise: loadPromise
    });

    await loadPromise;
  }

  /**
   * Load configuration from the specified path
   */
  private async loadConfig(
    configPath: string,
    environmentConfig: any,
    useProxyForExternal: boolean
  ): Promise<void> {
    try {
      const isExternalUrl = configPath.startsWith('http://') || configPath.startsWith('https://');

      let configData: any;

      if (isExternalUrl && useProxyForExternal) {
        // Use proxy server for external URLs
        const proxyBaseUrl = environmentConfig?.proxy?.baseUrl || 'http://localhost:3001';
        const proxyEndpoint = environmentConfig?.proxy?.endpoint || '/proxy';
        const proxyUrl = `${proxyBaseUrl}${proxyEndpoint}?url=${encodeURIComponent(configPath)}`;

        // Mark as internal request to bypass interceptor (prevent circular dependency)
        const context = new HttpContext().set(BYPASS_HTTP_HOOK_INTERCEPTOR, true);
        configData = await firstValueFrom(this.http.get<any>(proxyUrl, { responseType: 'json' as const, context }));
      } else {
        // Load local file directly
        const cacheBustUrl = `${configPath}?t=${Date.now()}`;
        // Mark as internal request to bypass interceptor (prevent circular dependency)
        const context = new HttpContext().set(BYPASS_HTTP_HOOK_INTERCEPTOR, true);
        configData = await firstValueFrom(this.http.get<any>(cacheBustUrl, { responseType: 'json' as const, context }));
      }

      // Validate and store the config
      if (configData && typeof configData === 'object') {
        this.configCache.set(configPath, {
          data: configData,
          loaded: true,
          promise: null
        });
        return;
      }

      // Invalid config structure
      this.configCache.set(configPath, {
        data: null,
        loaded: false,
        promise: null
      });

    } catch (error) {
      // Config loading failed
      this.configCache.set(configPath, {
        data: null,
        loaded: false,
        promise: null
      });
    }
  }

  /**
   * Reset configuration (useful for testing or config reloading)
   */
  reset(configPath?: string): void {
    if (configPath) {
      this.configCache.delete(configPath);
    } else {
      this.configCache.clear();
    }
  }
}
