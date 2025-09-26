import { Component, Input, Output, EventEmitter, signal, computed, OnInit, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SunComponent } from './sun.component';
import { MoonComponent } from './moon.component';

export type ThemeMode = 'dark' | 'light';

@Component({
  selector: 'app-mode-toggler',
  standalone: true,
  imports: [CommonModule, SunComponent, MoonComponent],
  templateUrl: './mode-toggler.component.html',
  styleUrls: ['./mode-toggler.component.scss']
})
export class ModeTogglerComponent implements OnInit {
  /**
   * Initial theme mode - accepts 'dark' or 'light'
   */
  @Input() initialMode: ThemeMode = 'light';

  /**
   * Emits the current theme mode whenever it changes
   */
  @Output() modeChange = new EventEmitter<ThemeMode>();

  // Reactive state management using Angular signals
  private readonly currentMode = signal<ThemeMode>('light');
  private readonly isAnimating = signal<boolean>(false);

  // Computed values for template binding
  protected readonly getCurrentMode = computed(() => this.currentMode());
  protected readonly getIsAnimating = computed(() => this.isAnimating());

  protected readonly ariaLabel = computed(() => {
    const nextMode = this.currentMode() === 'dark' ? 'light' : 'dark';
    return `Switch to ${nextMode} theme. Currently in ${this.currentMode()} mode.`;
  });

  protected readonly getLightFaceTransform = computed(() => {
    return this.currentMode() === 'light' ? 'translateX(0px)' : 'translateX(-50px)';
  });

  protected readonly getDarkFaceTransform = computed(() => {
    return this.currentMode() === 'dark' ? 'translateX(0px)' : 'translateX(50px)';
  });

  constructor() {
    // Effect to handle side effects when mode changes
    effect(() => {
      const mode = this.currentMode();
      // Could add additional side effects here like updating CSS custom properties
      document.documentElement.setAttribute('data-theme', mode);
    });
  }

  ngOnInit(): void {
    // Validate and set initial mode
    if (this.initialMode === 'dark' || this.initialMode === 'light') {
      this.currentMode.set(this.initialMode);
    } else {
      console.warn('ThemeToggleButton: Invalid initialMode provided. Defaulting to "light".');
      this.currentMode.set('light');
    }
  }

  /**
   * Toggles between dark and light theme modes
   */
  protected toggleTheme(): void {
    if (this.isAnimating()) {
      return; // Prevent multiple rapid clicks during animation
    }

    this.isAnimating.set(true);
    
    // Toggle the mode
    const newMode: ThemeMode = this.currentMode() === 'dark' ? 'light' : 'dark';
    this.currentMode.set(newMode);
    
    // Emit the change event
    this.modeChange.emit(newMode);
    
    // Reset animation state after animation completes
    setTimeout(() => {
      this.isAnimating.set(false);
    }, 600); // Matches CSS transition duration
  }

  /**
   * Public API: Get the current theme mode
   */
  public getCurrentTheme(): ThemeMode {
    return this.currentMode();
  }

  /**
   * Public API: Set theme mode programmatically
   */
  public setTheme(mode: ThemeMode): void {
    if (mode !== 'dark' && mode !== 'light') {
      throw new Error('ThemeToggleButton: Mode must be either "dark" or "light"');
    }
    
    if (this.currentMode() !== mode) {
      this.currentMode.set(mode);
      this.modeChange.emit(mode);
    }
  }

  /**
   * Public API: Toggle theme programmatically
   */
  public toggle(): void {
    this.toggleTheme();
  }
}