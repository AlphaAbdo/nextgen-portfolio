import { Injectable } from '@angular/core';
import { HttpCacheEntry, CacheStats } from '../models/http-hook.models';

/**
 * HTTP Cache Service - Manages caching of HTTP responses
 * 
 * Features:
 * - Single cache architecture for memory efficiency
 * - Request deduplication to prevent duplicate HTTP calls
 * - Type-safe cache entries with metadata
 * - Cache statistics for monitoring
 */
@Injectable({
  providedIn: 'root'
})
export class HttpCacheService {
  /**
   * Single cache: local URL → cache entry (typed)
   * Key is ALWAYS the local URL, value is the loaded data entry or undefined on error
   */
  private cache = new Map<string, HttpCacheEntry | undefined>();

  /**
   * Track in-flight requests to prevent duplicates
   */
  private pendingRequests = new Map<string, Promise<any>>();

  /**
   * Check if URL is cached
   */
  has(url: string): boolean {
    return this.cache.has(url);
  }

  /**
   * Get cached entry for URL
   */
  get(url: string): HttpCacheEntry | undefined {
    return this.cache.get(url);
  }

  /**
   * Set cache entry for URL
   */
  set(url: string, entry: HttpCacheEntry | undefined): void {
    this.cache.set(url, entry);
  }

  /**
   * Delete cached entry for URL
   */
  delete(url: string): void {
    this.cache.delete(url);
  }

  /**
   * Clear all cached entries
   */
  clear(): void {
    this.cache.clear();
  }

  /**
   * Check if request is pending
   */
  hasPending(url: string): boolean {
    return this.pendingRequests.has(url);
  }

  /**
   * Get pending request promise
   */
  getPending(url: string): Promise<any> | undefined {
    return this.pendingRequests.get(url);
  }

  /**
   * Set pending request promise
   */
  setPending(url: string, promise: Promise<any>): void {
    this.pendingRequests.set(url, promise);
  }

  /**
   * Delete pending request
   */
  deletePending(url: string): void {
    this.pendingRequests.delete(url);
  }

  /**
   * Clear all pending requests
   */
  clearPending(): void {
    this.pendingRequests.clear();
  }

  /**
   * Get cache statistics
   */
  getStats(): CacheStats {
    return {
      entries: this.cache.size,
      pending: this.pendingRequests.size
    };
  }

  /**
   * Clear cache for specific path or all paths
   */
  clearCache(path?: string): void {
    if (path) {
      this.delete(path);
      this.deletePending(path);
    } else {
      this.clear();
      this.clearPending();
    }
  }
}
