/**
 * HTTP Hook Models - Type definitions and error classes for HTTP hook system
 */

// ==========================================
// CUSTOM ERROR CLASSES
// ==========================================

/**
 * Base error class for HTTP hook operations
 */
export class HttpHookError extends Error {
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
export class ExternalSourceError extends HttpHookError {
  constructor(path: string, externalUrl: string, cause?: Error) {
    super(`Failed to load external data for ${path} from ${externalUrl}`, 'ExternalSourceError', path, cause);
  }
}

/**
 * Error for configuration loading issues
 */
export class ConfigError extends HttpHookError {
  constructor(message: string, cause?: Error) {
    super(message, 'ConfigError', 'outreachConfig.json', cause);
  }
}

// ==========================================
// RESPONSE TYPE DEFINITIONS
// ==========================================

/**
 * Supported HTTP response types for data loading
 */
export type ResponseType = 'json' | 'text' | 'blob' | 'arraybuffer';

/**
 * Type-safe response data based on response type
 */
export type ResponseData<T extends ResponseType> =
  T extends 'json' ? any :
  T extends 'text' ? string :
  T extends 'blob' ? Blob :
  T extends 'arraybuffer' ? ArrayBuffer :
  never;

// ==========================================
// CACHE DEFINITIONS
// ==========================================

/**
 * Cache entry with metadata and response type
 */
export interface HttpCacheEntry {
  data: any;
  timestamp: number;
  source: 'local' | 'external';
  responseType: ResponseType;
}

/**
 * Cache statistics for monitoring
 */
export interface CacheStats {
  entries: number;
  pending: number;
}
