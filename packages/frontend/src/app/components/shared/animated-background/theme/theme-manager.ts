/**
 * Theme Manager
 * 
 * Manages theme-related functionality:
 * - Theme color extraction and caching
 * - Theme change handling
 * - Color mode detection (light/dark)
 * - Hue range calculations for particles
 */

import { extractHueFromColor, blendColors, isGrayscaleColor } from '../utils';

export interface ThemeColors {
  primary: string;
  secondary: string;
  bgStart: string;
  bgEnd: string;
  lastUpdate: number;
}

export interface ThemeConfig {
  currentTheme: string;
  currentMode: 'light' | 'dark';
}

export class ThemeManager {
  private cachedColors: ThemeColors = {
    primary: '',
    secondary: '',
    bgStart: '',
    bgEnd: '',
    lastUpdate: 0
  };
  
  private config: ThemeConfig;
  
  // Cached primary color hue for dynamic theme matching
  private primaryHue: number = 200;
  private hueVariation: number = 30; // ±30 degrees variation
  
  constructor(config: ThemeConfig) {
    this.config = config;
    this.updateColorCache();
  }
  
  /**
   * Get color theme from theme ID
   * Theme IDs are in format: "theme-mode" (e.g., "ocean-dark")
   */
  getColorThemeFromId(themeId: string): string {
    return themeId.split('-')[0] || 'default';
  }
  
  /**
   * Check if we're in light mode
   */
  isLightMode(): boolean {
    return this.config.currentMode === 'light';
  }
  
  /**
   * Get theme-appropriate hue for a particle
   * Dynamically extracts hue from primary color instead of using static ranges
   */
  getThemeHue(): number {
    // Return hue within ±30 degrees of primary color
    return this.primaryHue + (Math.random() * this.hueVariation * 2 - this.hueVariation);
  }
  
  /**
   * Get theme-appropriate saturation based on mode
   * Light mode: Lower saturation for subtlety
   * Dark mode: Higher saturation for vibrancy
   */
  getThemeSaturation(densityMultiplier: number = 1.0): number {
    const baseSaturation = this.isLightMode() ? 40 : 70;
    // Density makes particles more saturated (more excited)
    return Math.min(100, baseSaturation + (densityMultiplier * 30));
  }
  
  /**
   * Get theme-appropriate lightness based on mode
   * Light mode: Higher lightness (darker particles on light bg)
   * Dark mode: Medium lightness (brighter particles on dark bg)
   */
  getThemeLightness(densityMultiplier: number = 1.0): number {
    const baseLightness = this.isLightMode() ? 40 : 60;
    // Density makes particles brighter (more excited)
    return Math.min(90, baseLightness + (densityMultiplier * 20));
  }
  
  /**
   * Update cached theme colors from CSS custom properties
   * Throttled to max once per second to avoid excessive DOM access
   */
  updateColorCache(): void {
    const now = performance.now();
    if (now - this.cachedColors.lastUpdate < 1000) {
      return; // Throttle: update max once per second
    }
    
    const root = document.documentElement;
    this.cachedColors.primary = getComputedStyle(root).getPropertyValue('--color-primary').trim();
    this.cachedColors.secondary = getComputedStyle(root).getPropertyValue('--color-secondary').trim();
    this.cachedColors.bgStart = getComputedStyle(root).getPropertyValue('--color-bg-primary').trim();
    this.cachedColors.bgEnd = getComputedStyle(root).getPropertyValue('--color-bg-primary-end').trim();
    this.cachedColors.lastUpdate = now;
    
    // Extract primary hue for dynamic color generation
    if (this.cachedColors.primary) {
      this.primaryHue = extractHueFromColor(this.cachedColors.primary);
    }
  }
  
  /**
   * Update current theme configuration
   */
  updateTheme(themeId: string, mode: 'light' | 'dark'): void {
    this.config.currentTheme = this.getColorThemeFromId(themeId);
    this.config.currentMode = mode;
    this.updateColorCache();
  }
  
  /**
   * Get cached theme colors
   */
  getCachedColors(): Readonly<ThemeColors> {
    return { ...this.cachedColors };
  }
  
  /**
   * Get current theme configuration
   */
  getConfig(): Readonly<ThemeConfig> {
    return { ...this.config };
  }
}
