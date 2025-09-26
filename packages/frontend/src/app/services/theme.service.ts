import { Injectable, signal, effect } from '@angular/core';
import { THEME_COMBINATIONS, ThemeId, CompleteTheme } from '../models/theme-definitions';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  // Current theme signal
  currentThemeId = signal<ThemeId>('default-dark');

  // Animation frame id for 'auto' hue wandering
  private autoAnimationId: number | null = null;
  

  constructor() {
    // Load saved theme from localStorage
    this.loadSavedTheme();

    // Effect to apply theme changes
    effect(() => {
      this.applyTheme(this.currentThemeId());
    });
  }

  /**
   * Get all available themes
   */
  getAvailableThemes(): CompleteTheme[] {
    return THEME_COMBINATIONS;
  }

  /**
   * Get themes for the current mode only
   */
  getThemesForCurrentMode(): CompleteTheme[] {
    const currentMode = this.getCurrentMode();
    return THEME_COMBINATIONS.filter(theme => theme.mode.id === currentMode);
  }

  /**
   * Get themes for a specific mode
   */
  getThemesForMode(mode: string): CompleteTheme[] {
    return THEME_COMBINATIONS.filter(theme => theme.mode.id === mode);
  }

  /**
   * Get current theme ID
   */
  getCurrentThemeId(): ThemeId {
    return this.currentThemeId();
  }

  /**
   * Get current mode
   */
  getCurrentMode(): string {
    const theme = this.getCurrentTheme();
    return theme ? theme.mode.id : 'dark';
  }

  /**
   * Get current color theme
   */
  getCurrentColorTheme(): string {
    const theme = this.getCurrentTheme();
    return theme ? theme.colors.id : 'default';
  }

  /**
   * Get current theme object
   */
  getCurrentTheme(): CompleteTheme | undefined {
    return THEME_COMBINATIONS.find(theme => theme.id === this.currentThemeId());
  }

  /**
   * Get theme info by ID
   */
  getThemeInfo(themeId: ThemeId): CompleteTheme | undefined {
    return THEME_COMBINATIONS.find(theme => theme.id === themeId);
  }

  /**
   * Set theme by ID
   */
  setTheme(themeId: ThemeId): void {
    this.currentThemeId.set(themeId);
    this.saveTheme(themeId);
  }

  /**
   * Cycle to next theme
   */
  cycleTheme(): void {
    const currentIndex = THEME_COMBINATIONS.findIndex(theme => theme.id === this.currentThemeId());
    const nextIndex = (currentIndex + 1) % THEME_COMBINATIONS.length;
    this.setTheme(THEME_COMBINATIONS[nextIndex].id);
  }

  /**
   * Apply theme to document
   */
  private applyTheme(themeId: ThemeId): void {
    const theme = this.getThemeInfo(themeId);
    if (!theme) return;

    const root = document.documentElement;

    // Apply mode-based backgrounds
    root.style.setProperty('--color-bg-primary', theme.mode.background.primary[0]); // Start color
    root.style.setProperty('--color-bg-primary-end', theme.mode.background.primary[1]); // End color
    root.style.setProperty('--color-bg-secondary', theme.mode.background.secondary);
    root.style.setProperty('--color-bg-overlay', theme.mode.background.overlay);
    root.style.setProperty('--color-bg-glass', theme.mode.background.glass);
    root.style.setProperty('--color-bg-glass-hover', theme.mode.background.glassHover);

    // Apply mode-based text colors
    root.style.setProperty('--color-text-primary', theme.mode.text.primary);
    root.style.setProperty('--color-text-secondary', theme.mode.text.secondary);
    root.style.setProperty('--color-text-muted', theme.mode.text.muted);

    // If color theme is 'auto' start animated hue wandering
    const colorThemeId = theme.colors.id;
    if (colorThemeId === 'auto') {
      this.startAutoHueWander();
    } else {
      this.stopAutoHueWander();
      root.style.setProperty('--color-primary', theme.colors.colors.primary);
      root.style.setProperty('--color-primary-light', theme.colors.colors.primaryLight);
      root.style.setProperty('--color-primary-dark', theme.colors.colors.primaryDark);
    }
    root.style.setProperty('--color-secondary', theme.colors.colors.secondary);
    root.style.setProperty('--color-secondary-light', theme.colors.colors.secondaryLight);
    root.style.setProperty('--color-secondary-dark', theme.colors.colors.secondaryDark);

    // Update derived colors (use a small helper to convert hex -> rgba)
    const primaryHex = theme.colors.colors.primary;
    root.style.setProperty('--color-primary-alpha-10', this.hexToRgba(primaryHex, 0.1));
    root.style.setProperty('--color-primary-alpha-70', this.hexToRgba(primaryHex, 0.7));
    root.style.setProperty('--color-border-accent', theme.colors.colors.primary);

    // Dispatch custom event for components that need to react
    window.dispatchEvent(new CustomEvent('themeChanged', {
      detail: { theme: themeId, themeData: theme }
    }));
  }

  // -- Auto hue wandering implementation ---------------------------------
  private startAutoHueWander(): void {
    if (this.autoAnimationId !== null) return; // already running
    const speed = 15; // degrees per second
    const step = () => {
      // Use current time to determine hue so it's time-based and deterministic
      const hue = ((Date.now() / 1000) * speed) % 360;
      const primary = `hsl(${hue} 70% 50%)`;
      const primaryLight = `hsl(${(hue*0.9 + 15) % 360} 70% 60%)`;
      const primaryDark = `hsl(${(hue*1.2 + 345) % 360} 70% 40%)`;
      // Derive a complementary/offset hue for secondary colors
      const secondaryHue = (hue + 150) % 360;
      const secondary = `hsl(${secondaryHue} 75% 45%)`;
      const secondaryLight = `hsl(${(secondaryHue + 12) % 360} 75% 55%)`;
      const secondaryDark = `hsl(${(secondaryHue + 345) % 360} 75% 35%)`;
      const root = document.documentElement;
      root.style.setProperty('--color-primary', primary);
      root.style.setProperty('--color-primary-light', primaryLight);
      root.style.setProperty('--color-primary-dark', primaryDark);
      // Update secondary variables as requested
      root.style.setProperty('--color-secondary', secondary);
      root.style.setProperty('--color-secondary-light', secondaryLight);
      root.style.setProperty('--color-secondary-dark', secondaryDark);
      this.autoAnimationId = requestAnimationFrame(step);
    };
    this.autoAnimationId = requestAnimationFrame(step);
  }

  private stopAutoHueWander(): void {
    if (this.autoAnimationId !== null) {
      cancelAnimationFrame(this.autoAnimationId);
      this.autoAnimationId = null;
    }
  }

  private hexToRgba(hex: string, alpha: number): string {
    // Accept #RRGGBB or #RGB
    const h = hex.replace('#', '').trim();
    let r = 0, g = 0, b = 0;
    if (h.length === 3) {
      r = parseInt(h[0] + h[0], 16);
      g = parseInt(h[1] + h[1], 16);
      b = parseInt(h[2] + h[2], 16);
    } else if (h.length === 6) {
      r = parseInt(h.substring(0,2), 16);
      g = parseInt(h.substring(2,4), 16);
      b = parseInt(h.substring(4,6), 16);
    }
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  /**
   * Save theme to localStorage
   */
  private saveTheme(themeId: ThemeId): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem('portfolio-theme', themeId);
    }
  }

  /**
   * Load saved theme from localStorage
   */
  private loadSavedTheme(): void {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio-theme');
      if (saved && THEME_COMBINATIONS.some(theme => theme.id === saved)) {
        this.currentThemeId.set(saved as ThemeId);
      }
    }
  }
}
