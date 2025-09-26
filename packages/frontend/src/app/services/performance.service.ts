import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PerformanceService {
  
  private observer?: PerformanceObserver;
  // Enable console output for performance observer only when DEV_PERF_LOG is true
  private readonly DEV_PERF_LOG = false;

  constructor() {
    this.initWebVitals();
  }

  private initWebVitals(): void {
    if ('PerformanceObserver' in window) {
      // Core Web Vitals monitoring
      this.observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          // Intentionally no automatic console output; manual inspection only
        });
      });

      // Monitor navigation timing
      this.observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint'] });
    }
  }

  // Measure custom performance metrics
  measureUserTiming(name: string, startMark: string, endMark: string): void {
    if ('performance' in window && 'measure' in performance) {
      try {
        performance.measure(name, startMark, endMark);
      } catch (error) {
        // swallow measurement errors silently
      }
    }
  }

  // Mark important application events
  markEvent(eventName: string): void {
    if ('performance' in window && 'mark' in performance) {
      performance.mark(eventName);
    }
  }

  // Get Core Web Vitals data
  getCoreWebVitals(): Promise<any> {
    return new Promise((resolve) => {
      const vitals = {
        lcp: 0, // Largest Contentful Paint
        fid: 0, // First Input Delay
        cls: 0  // Cumulative Layout Shift
      };

      // Use web-vitals library approach for accurate measurements
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry: any) => {
            if (entry.entryType === 'largest-contentful-paint') {
              vitals.lcp = entry.startTime;
            }
          });
          resolve(vitals);
        });
        
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
      } else {
        resolve(vitals);
      }
    });
  }

  // Resource loading performance
  getResourceTimings(): PerformanceResourceTiming[] {
    if ('performance' in window && 'getEntriesByType' in performance) {
      return performance.getEntriesByType('resource') as PerformanceResourceTiming[];
    }
    return [];
  }

  // Memory usage (if available)
  getMemoryUsage(): any {
    if ('performance' in window && 'memory' in (performance as any)) {
      return (performance as any).memory;
    }
    return null;
  }
}
