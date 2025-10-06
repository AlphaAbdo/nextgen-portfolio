import { HttpInterceptorFn, HttpResponse, HttpContext, HttpContextToken } from '@angular/common/http';
import { inject, isDevMode } from '@angular/core';
import { from, Observable } from 'rxjs';
import { HttpHookService } from '../services/http-hook.service';

/**
 * Context token to mark requests that should bypass the HTTP hook interceptor.
 * HttpHookService sets this to true for its own internal HTTP requests
 * to prevent circular dependency.
 */
export const BYPASS_HTTP_HOOK_INTERCEPTOR = new HttpContextToken<boolean>(() => false);

/**
 * HTTP Interceptor that hooks into the HTTP pipeline to provide:
 * - Automatic URL overrides from outreachConfig.json
 * - Intelligent caching and request deduplication
 * - Proxy server support for external sources
 * - Automatic fallback from external to local sources
 * 
 * Components use standard HttpClient and automatically benefit from these features.
 * 
 * @example
 * ```typescript
 * // Component code (unchanged):
 * http.get('assets/data/portfolio.json').subscribe(data => {
 *   // Automatically checks outreachConfig.json for URL overrides
 *   // Gets caching, proxy support, external fallback - all transparent
 * });
 * ```
 */
export const httpHookInterceptor: HttpInterceptorFn = (req, next) => {
  // Check if this request should bypass the interceptor
  // (marked by HttpHookService to prevent circular dependency)
  if (req.context.get(BYPASS_HTTP_HOOK_INTERCEPTOR)) {
    return next(req);
  }

  const httpHookService = inject(HttpHookService);

  // Only intercept GET requests (DataLoadingService is read-only)
  if (req.method !== 'GET') {
    return next(req);
  }

  // Determine response type from request
  const responseType = req.responseType || 'json';

  // Convert the Promise-based DataLoadingService call to an Observable
  return from(
    (async () => {
      try {
        // Extract the URL path
        const url = new URL(req.url, window.location.origin);
        const path = url.pathname;

        if (isDevMode()) {
          console.log(`🔄 [HttpHookInterceptor] Intercepting: ${req.method} ${path}`);
        }

        // Use HttpHookService to fetch with all enhancements
        let data: any;
        
        switch (responseType) {
          case 'text':
            data = await httpHookService.getText(path);
            break;
          case 'blob':
            data = await httpHookService.getBlob(path);
            break;
          case 'arraybuffer':
            data = await httpHookService.getArrayBuffer(path);
            break;
          case 'json':
          default:
            data = await httpHookService.getData(path, 'json');
            break;
        }

        // Log success with cache stats
        if (isDevMode()) {
          const stats = httpHookService.getCacheStats();
          console.log(`✅ [HttpHookInterceptor] Success: ${path} (Cache: ${stats.entries} entries, ${stats.pending} pending)`);
        }

        // Return as HttpResponse
        return new HttpResponse({
          body: data,
          status: 200,
          statusText: 'OK',
          url: req.url
        });
      } catch (error) {
        if (isDevMode()) {
          console.error(`❌ [HttpHookInterceptor] Error fetching ${req.url}:`, error);
          
          // Fall back to default HttpClient behavior on error
          console.log(`🔄 [HttpHookInterceptor] Falling back to default HttpClient for ${req.url}`);
        }
        
        return next(req).toPromise() as Promise<HttpResponse<any>>;
      }
    })()
  ) as Observable<any>;
};
