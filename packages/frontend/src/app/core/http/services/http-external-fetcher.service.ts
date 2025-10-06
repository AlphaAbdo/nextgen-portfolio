import { Injectable, isDevMode } from '@angular/core';
import { HttpClient, HttpContext } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { BYPASS_HTTP_HOOK_INTERCEPTOR } from '../interceptors/http-hook.interceptor';
import { ResponseType } from '../models/http-hook.models';

/**
 * HTTP External Fetcher Service - Handles fetching data from external URLs via proxy
 * 
 * Features:
 * - Proxy server support for CORS-restricted external sources
 * - URL validation and error handling
 * - Response type conversion (json, text, blob, arraybuffer)
 * - HTML-embedded JSON extraction
 */
@Injectable({
  providedIn: 'root'
})
export class HttpExternalFetcherService {
  constructor(private http: HttpClient) {}

  /**
   * Fetch data using proxy server approach for external URLs
   */
  async fetchExternal(url: string, responseType: ResponseType, environmentConfig: any): Promise<any> {
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
      // Build proxy URL from environment config
      const proxyBaseUrl = environmentConfig?.proxy?.baseUrl || 'http://localhost:3001';
      const proxyEndpoint = environmentConfig?.proxy?.endpoint || '/proxy';
      const proxyUrl = `${proxyBaseUrl}${proxyEndpoint}?url=${encodeURIComponent(url)}`;

      // Mark as internal request to bypass interceptor (prevent circular dependency)
      const context = new HttpContext().set(BYPASS_HTTP_HOOK_INTERCEPTOR, true);

      // Handle different response types
      if (responseType === 'blob') {
        const blobResponse = await firstValueFrom(this.http.get(proxyUrl, { responseType: 'blob' as any, context }));
        return blobResponse;
      }

      if (responseType === 'arraybuffer') {
        const arrayBufferResponse = await firstValueFrom(this.http.get(proxyUrl, { responseType: 'arraybuffer' as any, context }));
        return arrayBufferResponse;
      }

      // For text and json, get as text first
      const rawResponse = await firstValueFrom(this.http.get(proxyUrl, { responseType: 'text' as any, context }));

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
      const proxyBaseUrl = environmentConfig?.proxy?.baseUrl || 'http://localhost:3001';
      const proxyEndpoint = environmentConfig?.proxy?.endpoint || '/proxy';
      const proxyUrl = `${proxyBaseUrl}${proxyEndpoint}?url=${encodeURIComponent(url)}`;

      if (isDevMode()) {
        console.error('Proxy request failed:', proxyError);
        console.error('Proxy error details:', {
          message: proxyError.message,
          status: proxyError.status,
          statusText: proxyError.statusText,
          url: proxyUrl
        });
      }
      // Always attempt fallback to local asset
      throw proxyError; // Re-throw to trigger fallback in calling code
    }
  }
}
