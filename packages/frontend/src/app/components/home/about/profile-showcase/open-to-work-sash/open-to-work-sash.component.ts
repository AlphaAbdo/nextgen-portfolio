import { 
  Component, 
  Input, 
  signal, 
  computed,
  OnInit, 
  OnDestroy,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  inject,
  ElementRef
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../../../../services/theme.service';
import { CompleteTheme } from '../../../../../models/theme-definitions';

/**
 * Premium Smart Open to Work Sash Component
 * 
 * A flexible, precise sash component that positions itself around any circular element
 * using normalized coordinates and exact radius calculations with premium visual effects.
 * 
 * Note: Visibility is controlled externally via @if directive in the parent component.
 * 
 * @example
 * @if (showSash) {
 *   <app-smart-sash 
 *     [radius]="420" 
 *     [thickness]="28"
 *     [arcAngle]="125"
 *     [startAngle]="220">
 *   </app-smart-sash>
 * }
 */
@Component({
  selector: 'app-smart-sash',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './open-to-work-sash.component.html',
  styleUrls: ['./open-to-work-sash.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    '[style.width.px]': 'containerSize()',
    '[style.height.px]': 'containerSize()',
    '[style.--sash-text-shadow]': 'textShadowSignal()',
    '[style.--sash-shadow-color]': 'shadowColorSignal()',
    '[style.--sash-shimmer-color]': 'shimmerColorSignal()',
    '[style.--sash-continuous-animations]': 'continuousAnimationsEnabled() ? "1" : "0"',
    '[style.--sash-animation-duration]': 'adaptiveAnimationDuration()',
    '[style.--sash-pulse-duration]': 'adaptivePulseDuration()',
    '[style.--sash-glow-duration]': 'adaptiveGlowDuration()',
    '[attr.aria-label]': 'ariaLabel',
    '[attr.role]': '"img"'
  }
})
export class SmartSashComponent implements OnInit, OnDestroy {
  /**
   * Exact radius of the circular element to wrap around
   */
  @Input() set radius(value: number) {
    this._radius.set(Math.max(50, value)); // Minimum 50px for usability
  }

  /**
   * Thickness of the sash in pixels
   */
  @Input() set thickness(value: number) {
    this._thickness.set(Math.max(12, Math.min(50, value))); // 12-50px range
  }

  /**
   * Arc span in degrees (how much of the circle to cover)
   */
  @Input() set arcAngle(value: number) {
    this._arcAngle.set(Math.max(60, Math.min(180, value))); // 60-180 degree range
  }

  /**
   * Start angle in degrees (0 = right, 90 = bottom, 180 = left, 270 = top)
   */
  @Input() set startAngle(value: number) {
    this._startAngle.set(value % 360);
  }

  /**
   * Custom text to display
   */
  @Input() set text(value: string) {
    this._text.set(value.trim() || 'OPEN TO WORK');
  }

  /**
   * Primary color (start/end of gradient)
   */
  @Input() set primaryColor(value: string) {
    this._primaryColor.set(value);
  }

  /**
   * Secondary color (middle of gradient)
   */
  @Input() set secondaryColor(value: string) {
    this._secondaryColor.set(value);
  }

  /**
   * Animation delay in milliseconds
   */
  @Input() animationDelay = 0;

  /**
   * ARIA label for accessibility
   */
  @Input() ariaLabel = 'Profile marked as open to work';

  /**
   * Complete sash configuration object (alternative to individual properties)
   */
  @Input() set config(value: { radius?: number; thickness?: number; arcAngle?: number; startAngle?: number; text?: string }) {
    if (value) {
      if (value.radius !== undefined) this._radius.set(value.radius);
      if (value.thickness !== undefined) this._thickness.set(value.thickness);
      if (value.arcAngle !== undefined) this._arcAngle.set(value.arcAngle);
      if (value.startAngle !== undefined) this._startAngle.set(value.startAngle);
      if (value.text !== undefined) this._text.set(value.text);
    }
  }

  // Reactive signals
  private _radius = signal(200);
  private _thickness = signal(28);
  private _arcAngle = signal(125);
  private _startAngle = signal(220); // Bottom-left start
  private _text = signal('OPEN TO WORK');
  private _primaryColor = signal('#0A66C2');
  private _secondaryColor = signal('#378FE9');

  // Theme integration with reactive signals
  private themeService = inject(ThemeService);
  private elementRef = inject(ElementRef);
  
  // Reactive theme tracking
  currentTheme = computed(() => this.themeService.getCurrentTheme());
  
  // Reactive color computation using full theme palette
  primaryColorSignal = computed(() => {
    const theme = this.currentTheme();
    return theme?.colors.colors.primary || '#0A66C2';
  });
  
  secondaryColorSignal = computed(() => {
    const theme = this.currentTheme();
    return theme?.colors.colors.secondary || '#378FE9';
  });
  
  accentColorSignal = computed(() => {
    const theme = this.currentTheme();
    return theme?.colors.colors.primaryLight || '#5a6dd8';
  });
  
  // Theme-aware visual effects
  glowColorSignal = computed(() => {
    const theme = this.currentTheme();
    const isDark = theme?.mode.id === 'dark';
    return isDark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.2)';
  });
  
  textShadowSignal = computed(() => {
    const shadowColor = this.textShadowColorSignal();
    return `0 1px 3px ${shadowColor}, 0 2px 6px ${shadowColor}`;
  });
  
  // Theme-specific behaviors
  animationDurationSignal = computed(() => {
    const theme = this.currentTheme();
    const isAuto = theme?.colors.id === 'auto';
    return isAuto ? '2s' : '1.5s';
  });
  
  shimmerEnabledSignal = computed(() => {
    const theme = this.currentTheme();
    return theme?.colors.id !== 'auto';
  });
  
  // Consistent white text for maximum visibility and impact
  accessibleTextColorSignal = computed(() => 'white');

  // Consistent dark shadow for white text (works in all themes)
  shadowColorSignal = computed(() => '#000000');

  // CSS text shadow with alpha (consistent dark shadow for white text)
  textShadowColorSignal = computed(() => 'rgba(0, 0, 0, 0.8)');

  // Device performance level for adaptive animations (0-5 scale)
  devicePerformanceLevel = computed(() => {
    if (typeof navigator === 'undefined') return 2; // Default medium performance

    const cores = navigator.hardwareConcurrency || 2;
    const memory = (navigator as any).deviceMemory || 2;
    const connection = (navigator as any).connection?.effectiveType || '3g';

    let score = 0;

    // CPU cores
    if (cores >= 4) score += 1;
    if (cores >= 8) score += 1;

    // Memory
    if (memory >= 4) score += 1;
    if (memory >= 8) score += 1;

    // Connection
    if (connection === '4g') score += 1;
    if (connection === '5g') score += 1;

    return Math.min(5, score); // 0-5 scale
  });

  // Adaptive animation duration based on device performance
  adaptiveAnimationDuration = computed(() => {
    const level = this.devicePerformanceLevel();
    if (level >= 4) return '2s'; // High performance
    if (level >= 2) return '3s'; // Medium performance
    return '4s'; // Low performance
  });

  // Adaptive pulse duration based on device performance
  adaptivePulseDuration = computed(() => {
    const level = this.devicePerformanceLevel();
    if (level >= 4) return '1.5s'; // High performance
    if (level >= 2) return '2.5s'; // Medium performance
    return '3.5s'; // Low performance
  });

  // Adaptive glow duration based on device performance
  adaptiveGlowDuration = computed(() => {
    const level = this.devicePerformanceLevel();
    if (level >= 4) return '3s'; // High performance
    if (level >= 2) return '4s'; // Medium performance
    return '5s'; // Low performance
  });

  // Modern Pointer API mobile detection (highly reliable)
  // Robust mobile device detection
  isMobileDevice = computed(() => {
    if (typeof window === 'undefined' || typeof navigator === 'undefined') return false;

    // Primary: Touch capability (most reliable indicator)
    const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    // Secondary: User agent patterns
    const ua = navigator.userAgent.toLowerCase();
    const mobileUA = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(ua);

    // Tertiary: Screen size and orientation
    const isSmallScreen = window.innerWidth < 768;
    const hasOrientation = typeof window.orientation !== 'undefined' || window.screen?.orientation;

    // Consider mobile if: has touch + (mobile UA OR small screen + orientation support)
    return hasTouch && (mobileUA || (isSmallScreen && hasOrientation));
  });

  // Bright shimmer for white text (high contrast effect)
  shimmerColorSignal = computed(() => '#ffffff');
  
  // Disable continuous animations on low-performance devices and mobile
  continuousAnimationsEnabled = computed(() => this.devicePerformanceLevel() >= 2 && !this.isMobileDevice());

  // Unique IDs for SVG elements
  private componentId = `sash-${Math.random().toString(36).substring(2, 9)}`;

  ngOnInit(): void {
    // Theme changes are now reactive through computed signals
    // No manual event listeners needed

    // Performance optimization: pause animations when page is hidden
    if (typeof document !== 'undefined') {
      document.addEventListener('visibilitychange', () => {
        const hostElement = this.elementRef?.nativeElement as HTMLElement;
        if (hostElement) {
          if (document.hidden) {
            hostElement.style.animationPlayState = 'paused';
          } else {
            hostElement.style.animationPlayState = 'running';
          }
        }
      });
    }

    // Performance optimization: pause animations when component is not in viewport
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      this.intersectionObserver = new IntersectionObserver(
        (entries) => {
          const hostElement = this.elementRef?.nativeElement as HTMLElement;
          if (hostElement) {
            const isIntersecting = entries[0].isIntersecting;
            hostElement.style.animationPlayState = isIntersecting ? 'running' : 'paused';
          }
        },
        { threshold: 0.1 } // Trigger when 10% visible
      );
      
      this.intersectionObserver.observe(this.elementRef.nativeElement);
    }
  }

  ngOnDestroy(): void {
    // Cleanup animation timers and observers
    if (this.animationTimer) {
      clearTimeout(this.animationTimer);
    }
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
  }

  // Container size (diameter + padding for sash)
  containerSize = computed(() => {
    const diameter = this._radius() * 2;
    const padding = this._thickness() * 2;
    return diameter + padding;
  });

  // SVG viewBox in normalized coordinates
  viewBox = computed(() => {
    const size = this.containerSize();
    const halfSize = size / 2;
    return `-${halfSize} -${halfSize} ${size} ${size}`;
  });

  // Normalized thickness for SVG coordinate system
  normalizedThickness = computed(() => this._thickness());

  // Normalized font size
  normalizedFontSize = computed(() => {
    const baseSize = this._thickness() * 0.5;
    return Math.max(10, Math.min(20, baseSize));
  });

  // Arc calculations
  private arcRadius = computed(() => this._radius());

  private startAngleRad = computed(() => (this._startAngle() * Math.PI) / 180);
  private endAngleRad = computed(() => 
    ((this._startAngle() + this._arcAngle()) * Math.PI) / 180
  );

  // Start and end points for the arc
  private startPoint = computed(() => ({
    x: this.arcRadius() * Math.cos(this.startAngleRad()),
    y: this.arcRadius() * Math.sin(this.startAngleRad())
  }));

  private endPoint = computed(() => ({
    x: this.arcRadius() * Math.cos(this.endAngleRad()),
    y: this.arcRadius() * Math.sin(this.endAngleRad())
  }));

  // Arc path for the ribbon
  ribbonPath = computed(() => {
    const start = this.startPoint();
    const end = this.endPoint();
    const radius = this.arcRadius();
    const largeArc = this._arcAngle() > 180 ? 1 : 0;

    return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArc} 1 ${end.x} ${end.y}`;
  });

  // Text path (slightly inward for better text positioning)
  textPath = computed(() => {
    const textRadius = this.arcRadius() - this._thickness() * 0.1;
    const start = {
      x: textRadius * Math.cos(this.startAngleRad()),
      y: textRadius * Math.sin(this.startAngleRad())
    };
    const end = {
      x: textRadius * Math.cos(this.endAngleRad()),
      y: textRadius * Math.sin(this.endAngleRad())
    };
    const largeArc = this._arcAngle() > 180 ? 1 : 0;

    return `M ${start.x} ${start.y} A ${textRadius} ${textRadius} 0 ${largeArc} 1 ${end.x} ${end.y}`;
  });

  // Cap positions
  startCap = computed(() => this.startPoint());
  endCap = computed(() => this.endPoint());

  // SVG element IDs with premium effects
  textPathId = computed(() => `${this.componentId}-text-path`);
  gradientId = computed(() => `${this.componentId}-gradient`);
  shimmerGradientId = computed(() => `${this.componentId}-shimmer`);
  highlightGradientId = computed(() => `${this.componentId}-highlight`);
  shadowId = computed(() => `${this.componentId}-shadow`);
  glowId = computed(() => `${this.componentId}-glow`);
  textOutlineId = computed(() => `${this.componentId}-text-outline`);

  // URL references for SVG with premium effects
  textPathUrl = computed(() => `#${this.textPathId()}`);
  gradientUrl = computed(() => `url(#${this.gradientId()})`);
  shimmerGradientUrl = computed(() => `url(#${this.shimmerGradientId()})`);
  highlightGradientUrl = computed(() => `url(#${this.highlightGradientId()})`);
  shadowUrl = computed(() => `url(#${this.shadowId()})`);
  glowUrl = computed(() => `url(#${this.glowId()})`);
  textOutlineUrl = computed(() => `url(#${this.textOutlineId()})`);

  // Signal getters
  get textSignal() { return this._text; }

  // Color manipulation utility
  brightenColor(color: string, factor: number): string {
    // Simple brightness adjustment - in production you might want a more sophisticated color library
    const hex = color.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    
    const brightenValue = (val: number) => Math.min(255, Math.floor(val + (255 - val) * factor));
    
    const newR = brightenValue(r).toString(16).padStart(2, '0');
    const newG = brightenValue(g).toString(16).padStart(2, '0');
    const newB = brightenValue(b).toString(16).padStart(2, '0');
    
    return `#${newR}${newG}${newB}`;
  }

  private animationTimer?: ReturnType<typeof setTimeout>;
  private intersectionObserver?: IntersectionObserver;

  constructor() {}
}