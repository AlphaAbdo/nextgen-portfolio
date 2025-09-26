import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../../services/theme.service';
import { CompleteTheme } from '../../../models/theme-definitions';
import { ModeTogglerComponent } from './mode-toggler/mode-toggler.component';

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  imports: [CommonModule, ModeTogglerComponent],
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss']
})
export class ThemeSwitcherComponent {
  private themeService = inject(ThemeService);

  isOpen = false;

  get availableThemes(): CompleteTheme[] {
    return this.themeService.getAvailableThemes();
  }

  get themesForCurrentMode(): CompleteTheme[] {
    return this.themeService.getThemesForCurrentMode();
  }

  get currentThemeId(): string {
    return this.themeService.getCurrentThemeId();
  }

  get currentThemeInfo() {
    return this.themeService.getThemeInfo(this.currentThemeId);
  }

  get currentMode(): string {
    return this.themeService.getCurrentMode();
  }

  get currentColorTheme(): string {
    return this.themeService.getCurrentColorTheme();
  }

  toggleDropdown(): void {
    this.isOpen = !this.isOpen;
  }

  selectTheme(themeId: string): void {
    this.themeService.setTheme(themeId);
    this.isOpen = false;
  }

  cycleTheme(): void {
    const themes = this.themesForCurrentMode;
    if (themes.length === 0) return;
    
    const currentIndex = themes.findIndex(theme => theme.id === this.currentThemeId);
    const nextIndex = (currentIndex + 1) % themes.length;
    this.selectTheme(themes[nextIndex].id);
  }

  onModeChange(mode: string): void {
    // Find a theme that matches the current color theme but with the new mode
    const currentColorTheme = this.currentColorTheme;
    const targetThemeId = `${currentColorTheme}-${mode}`;
    
    // Check if the target theme exists
    const availableThemeIds = this.availableThemes.map(theme => theme.id);
    if (availableThemeIds.includes(targetThemeId)) {
      this.themeService.setTheme(targetThemeId);
    } else {
      // Fallback: find any theme with the desired mode
      const fallbackTheme = this.availableThemes.find(theme => theme.mode.id === mode);
      if (fallbackTheme) {
        this.themeService.setTheme(fallbackTheme.id);
      }
    }
  }

  // Helper method to get theme preview class
  getThemePreviewClass(themeId: string): string {
    return `theme-preview-${themeId}`;
  }
}
