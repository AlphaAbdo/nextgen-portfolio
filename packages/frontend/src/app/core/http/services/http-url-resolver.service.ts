import { Injectable } from '@angular/core';

/**
 * HTTP URL Resolver Service - Handles URL normalization and external URL resolution
 * 
 * Features:
 * - Normalizes local URLs to consistent format
 * - Resolves external URL overrides from configuration
 * - Supports both leading-slash and no-slash formats
 */
@Injectable({
  providedIn: 'root'
})
export class HttpUrlResolverService {
  /**
   * Normalize endpoint to local URL
   */
  normalizeLocalUrl(endpoint: string): string {
    if (endpoint.startsWith('/')) {
      return endpoint;
    }
    if (endpoint.startsWith('assets/')) {
      return endpoint;
    }
    return `/assets/${endpoint}`;
  }

  /**
   * Get external URL from outreach config (if exists)
   * This allows overriding local paths with external sources
   */
  getExternalUrl(localUrl: string, outreachConfig: any): string | null {
    if (!outreachConfig) {
      return null;
    }

    // Try both formats: with and without leading slash
    const override1 = outreachConfig[localUrl];
    const override2 = outreachConfig[localUrl.startsWith('/') ? localUrl.substring(1) : `/${localUrl}`];

    const override = override1 || override2;
    return (override && typeof override === 'string') ? override : null;
  }
}
