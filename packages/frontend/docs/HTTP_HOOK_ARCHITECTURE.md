# HTTP Hook System Architecture

## Overview
The HTTP Hook system provides an intelligent HTTP layer that hooks into Angular's HttpClient to provide caching, external URL overrides, proxy support, and automatic fallback mechanisms.

## Architecture

### Core Components

#### 1. **http-hook.models.ts** (in `models/`) - Types & Errors
- `HttpHookError` - Base error class
- `ExternalSourceError` - External fetch failures
- `ConfigError` - Configuration loading issues
- `ResponseType` - Type definitions for response types
- `HttpCacheEntry` - Cache entry structure
- `CacheStats` - Cache statistics interface

#### 2. **http-config-loader.service.ts** (in `services/`) - Configuration Management
**Responsibility:** Load and cache configuration files (environment.json, outreachConfig.json)

**Features:**
- Lazy loading with promise-based state management
- Automatic retry prevention for failed configs
- Support for both local and external (proxied) configs
- Cache busting for local configs

**Key Methods:**
- `getConfig(path)` - Get loaded configuration data
- `isLoaded(path)` - Check if configuration is loaded
- `ensureLoaded(path, envConfig, useProxy)` - Load configuration if not already loaded
- `reset(path?)` - Clear configuration cache

#### 3. **http-cache.service.ts** (in `services/`) - Cache Management
**Responsibility:** Manage HTTP response caching and request deduplication

**Features:**
- Single cache architecture for memory efficiency
- Request deduplication to prevent duplicate HTTP calls
- Type-safe cache entries with metadata
- Cache statistics for monitoring

**Key Methods:**
- `has(url)`, `get(url)`, `set(url, entry)`, `delete(url)` - Cache operations
- `hasPending(url)`, `getPending(url)`, `setPending(url, promise)` - Pending request tracking
- `getStats()` - Get cache statistics
- `clearCache(path?)` - Clear cache

#### 4. **http-url-resolver.service.ts** (in `services/`) - URL Resolution
**Responsibility:** Normalize URLs and resolve external overrides

**Features:**
- Normalizes local URLs to consistent format
- Resolves external URL overrides from configuration
- Supports both leading-slash and no-slash formats

**Key Methods:**
- `normalizeLocalUrl(endpoint)` - Normalize endpoint to local URL
- `getExternalUrl(localUrl, config)` - Get external URL override from config

#### 5. **http-external-fetcher.service.ts** (in `services/`) - External Data Fetching
**Responsibility:** Fetch data from external URLs via proxy server

**Features:**
- Proxy server support for CORS-restricted external sources
- URL validation and error handling
- Response type conversion (json, text, blob, arraybuffer)
- HTML-embedded JSON extraction

**Key Methods:**
- `fetchExternal(url, responseType, envConfig)` - Fetch data via proxy

#### 6. **http-hook.service.ts** (in `services/`) - Main Orchestrator
**Responsibility:** Coordinate all HTTP hook functionality

**Features:**
- Unified API for data loading
- Automatic fallback from external to local sources
- CV prefetching with network condition awareness
- Testing delay support for loading demonstrations

**Public API:**
- `getData<T>(path, responseType?)` - Get data with type-safe response
- `getText(path)` - Get text content
- `getBlob(path)` - Get binary data as Blob
- `getArrayBuffer(path)` - Get binary data as ArrayBuffer
- `clearCache(path?)` - Clear cache
- `getCacheStats()` - Get cache statistics

**Private Methods:**
- `initializeConfigs()` - Load environment and outreach configs
- `startCvPrefetch()` - Start CV prefetch with network awareness
- `prefetchCv()` - Prefetch CV PDF
- `performDataLoad(localUrl, responseType)` - Core data loading logic
- `ensureConfigLoaded()` - Ensure configs are loaded

#### 7. **http-hook.interceptor.ts** (in `interceptors/`) - HTTP Interceptor
**Responsibility:** Intercept HTTP requests and route through HttpHookService

**Features:**
- Intercepts GET requests only
- Converts Promise-based service to Observable
- Provides transparent caching and external URL support
- Fallback to default HttpClient on error

**Key Token:**
- `BYPASS_HTTP_HOOK_INTERCEPTOR` - Context token to bypass interceptor (prevents circular dependencies)

## Data Flow

```
Component
    ↓
  HttpClient.get()
    ↓
  http-hook.interceptor
    ↓
  HttpHookService.getData()
    ↓
  ┌─────────────────────────────────┐
  │ 1. Check cache (HttpCacheService)
  │ 2. Check pending requests
  │ 3. Normalize URL (HttpUrlResolverService)
  │ 4. Load configs (HttpConfigLoaderService)
  │ 5. Try external URL (HttpExternalFetcherService)
  │ 6. Fallback to local (HttpClient with BYPASS token)
  │ 7. Cache result
  └─────────────────────────────────┘
    ↓
  Return data to component
```

## Configuration

### environment.json
```json
{
  "proxy": {
    "baseUrl": "http://localhost:3001",
    "endpoint": "/proxy"
  },
  "outreach": {
    "configPath": "assets/outreachConfig.json"
  }
}
```

### outreachConfig.json
```json
{
  "assets/data/portfolio.json": "https://external-source.com/portfolio.json",
  "/assets/data/skills.json": "https://external-source.com/skills.json"
}
```

## Benefits of Modular Architecture

1. **Separation of Concerns** - Each service has a single, clear responsibility
2. **Testability** - Easy to unit test individual services in isolation
3. **Maintainability** - Changes to one aspect don't affect others
4. **Reusability** - Services can be used independently if needed
5. **Clarity** - Code organization reflects system architecture
6. **Type Safety** - Shared models ensure consistency

## Usage Example

```typescript
// In a component - using barrel imports
import { HttpHookService } from './core/http';

constructor(private httpHook: HttpHookService) {}

async loadData() {
  // Automatically checks outreachConfig.json for URL overrides
  // Gets caching, proxy support, external fallback - all transparent
  const data = await this.httpHook.getData<MyDataType>('assets/data/mydata.json');
  
  // Or use HttpClient directly - interceptor handles everything
  this.http.get('assets/data/mydata.json').subscribe(data => {
    // Same benefits, transparent
  });
}
```

## File Structure

```
src/app/core/http/
├── index.ts                         (Main barrel export)
├── interceptors/
│   ├── http-hook.interceptor.ts     (HTTP interceptor)
│   └── index.ts                     (Interceptors barrel)
├── models/
│   ├── http-hook.models.ts          (Types & Errors)
│   └── index.ts                     (Models barrel)
├── services/
│   ├── http-cache.service.ts        (Cache Management)
│   ├── http-config-loader.service.ts (Config Management)
│   ├── http-external-fetcher.service.ts (External Fetching)
│   ├── http-hook.service.ts         (Main Orchestrator)
│   ├── http-url-resolver.service.ts (URL Resolution)
│   └── index.ts                     (Services barrel)
└── utils/
    └── (Reserved for pure utility functions)
```

## Clean Imports

Thanks to barrel exports, you can import from the main module:

```typescript
// Clean import from main barrel
import { httpHookInterceptor, HttpHookService, HttpHookError } from './core/http';

// Or from specific submodules
import { httpHookInterceptor } from './core/http/interceptors';
import { HttpHookService } from './core/http/services';
import { HttpHookError } from './core/http/models';
```

## Dev Mode Features

All console logging is wrapped in `isDevMode()` checks:
- CV prefetch status logging
- External fetch failure warnings
- Proxy error details
- Testing delay notifications

In production builds, all dev logging is automatically stripped out.
