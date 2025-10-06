import { Injectable } from '@angular/core';

/**
 * Simple performance helper for animations
 * Provides lightweight settings that work well everywhere
 */
@Injectable({
  providedIn: 'root'
})
export class DeviceDetectionService {

  /**
   * Check if user prefers reduced motion (accessibility)
   */
  prefersReducedMotion(): boolean {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  /**
   * Get lightweight performance settings for canvas animations
   * Same settings for everyone - simple and performant
   */
  getPerformanceSettings() {
    // If user prefers reduced motion, give them minimal animation
    if (this.prefersReducedMotion()) {
      return {
        particleCount: 10,
        connectionDistance: 80,
        enableTrails: false,
        enableGlow: false,
        enableDensityEffects: false
      };
    }

    // Lightweight but good-looking settings for everyone
    return {
      particleCount: 350,          // Testing Quadtree with 350 particles
      connectionDistance: 120,
      enableTrails: false,         // Too expensive, skip it
      enableGlow: false,           // Too expensive, skip it
      enableDensityEffects: false  // O(n²), skip it
    };
  }

  /**
   * Get lightweight settings for Three.js particle systems
   * Same for everyone - prioritize performance
   */
  getThreeJSSettings() {
    if (this.prefersReducedMotion()) {
      return {
        particleCount: 100,
        pixelRatio: 1,
        antialias: false,
        enableFog: false
      };
    }

    // Good balance for all devices
    return {
      particleCount: 500,                              // Reduced from 2000
      pixelRatio: Math.min(window.devicePixelRatio || 1, 1.5),  // Cap at 1.5x
      antialias: false,                                // Too expensive
      enableFog: false                                 // Too expensive
    };
  }
}
