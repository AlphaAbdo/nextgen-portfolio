import { Component, OnInit, OnDestroy, ElementRef, ViewChild, signal, inject, HostListener, Input, isDevMode } from '@angular/core';

import { ThemeService } from '../../../services/theme.service';
import { DeviceDetectionService } from '../../../services/device-detection.service';

// Models
import type { IParticle, ISegment } from './models';

// Physics
import { ParticleUpdater, ConnectionBuilder, type MouseState, type ParticlePhysicsConfig, type ConnectionBuilderConfig } from './physics';

// Rendering
import { BackgroundRenderer, ParticleRenderer, ConnectionRenderer, type ParticleRenderConfig, type ConnectionRenderConfig } from './rendering';

// Performance
import { PerformanceMonitor, ParticleOptimizer, type AdaptiveAdjustmentResult, type OptimizationResult } from './performance';

// Theme
import { ThemeManager } from './theme';

// Spatial data structures
import { SpatialHashGrid } from './spatial';

// Utilities
import { 
  extractHueFromColor, 
  blendColors, 
  isGrayscaleColor,
  calculateToroidalDistance,
  getNormalizedToroidalVector 
} from './utils';

@Component({
  selector: 'app-animated-background',
  standalone: true,
  templateUrl: './animated-background.component.html',
  styleUrls: ['./animated-background.component.scss']
})
export class AnimatedBackgroundComponent implements OnInit, OnDestroy {
  @Input() enablePerformanceMonitoring = false; // Enable/disable performance tracking (off = zero overhead)
  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('perfControls', { static: false }) perfControlsRef?: ElementRef<HTMLDivElement>;
  
  private ctx!: CanvasRenderingContext2D;
  private particles: IParticle[] = [];
  private segments: ISegment[] = []; // Global segment list for connection rendering
  private animationId: number = 0;
  private mouse = { x: -9999, y: -9999, isPressed: false }; // Initialize off-screen
  private devicePixelRatio = 1; // For high DPI screens
  particleCount = 200; // Testing Quadtree performance with high particle count
  private connectionDistance = 120;
  private time = 0;
  
  // Particle size as percentage of canvas surface area
  // Formula: particleRadius = sqrt(canvasArea * percentage / PI)
  // This ensures consistent visual size regardless of screen dimensions
  private particleSurfacePercentage = 0.00008; // 0.008% of canvas area per particle (moderately big)
  
  // Performance budget and adaptive system (future feature - currently disabled)
  private readonly FRAME_BUDGET_MS = 10; // Complete frame in <10ms (leaves headroom for Angular/browser)
  private readonly MIN_PARTICLES = 20;   // Lower bound
  private readonly MAX_PARTICLES = 150;  // Upper bound  
  private readonly TARGET_SURFACE_COVERAGE = 0.003; // 0.3% of canvas covered by particles (visual density)
  private enableAdaptiveParticles = false; // TODO: Enable after implementing spatial partitioning
  
  // Performance tracking for adaptive system
  private frameTimeSamples: number[] = []; // Rolling window of last N frame times
  private readonly SAMPLE_WINDOW_SIZE = 60; // 1 second worth of frames
  private lastAdjustmentTime = 0;
  private readonly ADJUSTMENT_COOLDOWN_MS = 3000; // Wait 3s between adjustments
  
  // Spatial Hash Grid for O(1) spatial partitioning (replaces Quadtree)
  private spatialGrid: SpatialHashGrid | null = null;
  
  // Physics modules
  private particleUpdater!: ParticleUpdater;
  private connectionBuilder!: ConnectionBuilder;
  
  // Rendering modules
  private backgroundRenderer!: BackgroundRenderer;
  private particleRenderer!: ParticleRenderer;
  private connectionRenderer!: ConnectionRenderer;
  
  // Performance monitoring
  private performanceMonitor!: PerformanceMonitor;
  private particleOptimizer!: ParticleOptimizer;
  isCalibrating = false; // Public for template binding
  
  // Theme management
  private themeManager!: ThemeManager;
  
  // Cached canvas dimensions to prevent layout thrashing
  private canvasWidth = 0;
  private canvasHeight = 0;
  private canvasRect: DOMRect | null = null; // Cache canvas bounding rect
  private resizeObserver?: ResizeObserver;
  
  // Reactive signals for performance monitoring
  fps = signal(60);
  isAnimating = signal(false);
  
  private performanceLogInterval = 5000; // Log every 5 seconds
  showPerformanceControls = false; // Dev mode controls - hidden by default, toggle with Ctrl+Alt+D

  // Manual logging is supported via the performance panel button only.
  // All automatic console output is disabled.
  
  // Theme integration
  private themeService = inject(ThemeService);
  private deviceDetection = inject(DeviceDetectionService);
  
  // Lightweight settings for everyone
  private enableTrails = false;        // Too expensive
  private enableGlow = false;          // Too expensive
  private enableDensityEffects = false;// O(n²) - skip it
  private isVisible = true;
  private intersectionObserver?: IntersectionObserver;
  
  // Event handler references for proper cleanup
  private themeChangeHandler = (event: any) => {
    const mode = this.themeService.getCurrentMode() as 'light' | 'dark';
    this.themeManager.updateTheme(event.detail.theme, mode);
    this.updateThemeColors();
  };
  
  ngOnInit() {
    // Apply device-specific settings
    this.applyDeviceSettings();
    
    // Initialize theme manager
    this.themeManager = new ThemeManager({
      currentTheme: this.themeService.getCurrentThemeId().split('-')[0] || 'default',
      currentMode: this.themeService.getCurrentMode() as 'light' | 'dark'
    });
    
    // Listen for theme changes via custom event
    if (typeof window !== 'undefined') {
      window.addEventListener('themeChanged', this.themeChangeHandler);
    }
    
    // Initialize performance monitoring
    this.performanceMonitor = new PerformanceMonitor({
      enabled: this.enablePerformanceMonitoring,
      frameBudgetMs: this.FRAME_BUDGET_MS,
      minParticles: this.MIN_PARTICLES,
      maxParticles: this.MAX_PARTICLES,
      targetSurfaceCoverage: this.TARGET_SURFACE_COVERAGE,
      sampleWindowSize: this.SAMPLE_WINDOW_SIZE,
      adjustmentCooldownMs: this.ADJUSTMENT_COOLDOWN_MS,
      logIntervalMs: this.performanceLogInterval,
      particleSurfacePercentage: this.particleSurfacePercentage
    });
    
    // Initialize particle optimizer for sweet spot calibration
    this.particleOptimizer = new ParticleOptimizer({
      targetFrameTimeMs: 13.33,  // 75fps target (with headroom below 16.67ms)
      headroomPercentage: 0.25,  // 25% safety margin
      minParticles: this.MIN_PARTICLES,
      maxParticles: this.MAX_PARTICLES,
      testDurationFrames: 60,    // Test each level for 1 second
      stepSize: 20,              // Increment by 20 particles per test
      revalidationDays: 2        // Re-test every 2 days (more frequent validation)
    });
    
    // Initialize physics modules
    this.particleUpdater = new ParticleUpdater({
      enableDensityEffects: this.enableDensityEffects,
      enableTrails: this.enableTrails,
      connectionDistance: this.connectionDistance,
      time: this.time
    });
    
    this.connectionBuilder = new ConnectionBuilder({
      connectionDistance: this.connectionDistance,
      enableGlow: this.enableGlow,
      maxConnectionsPerParticle: 8  // Cap at 8 connections per particle (density limit)
    });
    
    // Initialize rendering modules
    this.backgroundRenderer = new BackgroundRenderer();
    
    this.particleRenderer = new ParticleRenderer({
      enableGlow: this.enableGlow,
      enableTrails: this.enableTrails,
      primaryColor: '', // Will be updated from cached theme colors
      isLightMode: this.themeManager.isLightMode(),
      time: this.time
    });
    
    this.connectionRenderer = new ConnectionRenderer({
      enableGlow: this.enableGlow,
      primaryColor: '', // Will be updated from cached theme colors
      secondaryColor: '' // Will be updated from cached theme colors
    });
    
    this.initCanvas();
    
    // Setup ResizeObserver to update cached dimensions only when canvas resizes
    this.setupResizeObserver();
    
    // Apply intelligent optimization BEFORE creating particles
    // This ensures we create the right number from the start
    this.applyIntelligentOptimization();
    
    this.createParticles();
    this.setupEventListeners();
    this.setupVisibilityObserver();
    
    this.animate();
  }
  
  ngOnDestroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
    if (typeof window !== 'undefined') {
      window.removeEventListener('themeChanged', this.themeChangeHandler);
    }
    window.removeEventListener('mousemove', this.onMouseMove);
    window.removeEventListener('resize', this.onResize);
    
    // Log final performance summary
  // No automatic logging on destroy; manual log only.
  }

  private applyDeviceSettings(): void {
    const settings = this.deviceDetection.getPerformanceSettings();
    
    // These are fallback values - will be overridden by intelligent calibration
    this.particleCount = settings.particleCount;
    this.connectionDistance = settings.connectionDistance;
    this.enableTrails = settings.enableTrails;
    this.enableGlow = settings.enableGlow;
    this.enableDensityEffects = settings.enableDensityEffects;
    // Use full device pixel ratio for crisp rendering on high-DPI displays
    this.devicePixelRatio = window.devicePixelRatio || 1;
  }
  
  /**
   * Apply intelligent particle count optimization
   * Automatically loads cached result or runs first-time calibration
   */
  private applyIntelligentOptimization(): void {
    // Try to load cached result first
    const cachedResult = this.particleOptimizer.loadCachedResult();
    
    if (cachedResult) {
      // Use cached result immediately - instant load!
      this.particleCount = cachedResult.optimalParticleCount;
      console.log(`⚡ Using cached particle count: ${cachedResult.optimalParticleCount} (${cachedResult.devicePerformanceClass} device)`);
      
      // Check if background revalidation is needed
      if ((cachedResult as any).needsRevalidation) {
        console.log('📅 Scheduling background revalidation...');
        
        // Run revalidation in background after initial render
        setTimeout(() => {
          console.log('🎯 Starting background revalidation calibration...');
          const startingCount = this.particleOptimizer.startCalibration((newResult: OptimizationResult) => {
            // Revalidation complete - check if particle count changed
            if (newResult.optimalParticleCount !== cachedResult.optimalParticleCount) {
              console.log(`✅ Revalidation complete: ${newResult.optimalParticleCount} particles (was ${cachedResult.optimalParticleCount}) - updating...`);
              this.adjustParticleCountTo(newResult.optimalParticleCount);
            } else {
              console.log(`✅ Revalidation complete: ${newResult.optimalParticleCount} particles - still optimal!`);
            }
            this.isCalibrating = false;
          });
          
          if (startingCount !== -1) {
            this.isCalibrating = true;
            this.adjustParticleCountTo(startingCount);
          }
        }, 3000); // Wait 3 seconds before revalidation
      }
    } else {
      // No cache - run automatic calibration on first visit
      if (isDevMode()) {
        console.log('🚀 First visit detected - running automatic calibration...');
      }
      
      // Start calibration after a short delay to let initial render happen
      setTimeout(() => {
        this.startCalibration();
      }, 1000);
    }
  }

  private setupVisibilityObserver(): void {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return;
    }

    this.intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          this.isVisible = entry.isIntersecting;
          if (!this.isVisible && this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = 0;
          } else if (this.isVisible && !this.animationId) {
            this.animate();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (this.canvasRef?.nativeElement) {
      this.intersectionObserver.observe(this.canvasRef.nativeElement);
    }
  }
  
  private initCanvas(): void {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;
    
    // Use device-optimized pixel ratio
    // High DPI support is already set in applyDeviceSettings
  // device pixel ratio logging removed

  this.resizeCanvas();
  }
  
  private resizeCanvas(): void {
    const canvas = this.canvasRef.nativeElement;

    // Always use full window dimensions (toroidal mode)
    const displayWidth = window.innerWidth;
    const displayHeight = window.innerHeight;

    // Use the pre-calculated device pixel ratio from settings
    // (already optimized for device capabilities)

    // Set the CSS size (logical pixels)
    canvas.style.width = `${Math.round(displayWidth)}px`;
    canvas.style.height = `${Math.round(displayHeight)}px`;

    // Set the actual drawing buffer size in physical pixels
    canvas.width = Math.max(1, Math.round(displayWidth * this.devicePixelRatio));
    canvas.height = Math.max(1, Math.round(displayHeight * this.devicePixelRatio));

    // Reset any existing transform then scale once for DPR so drawing uses CSS pixels
    if (typeof this.ctx.resetTransform === 'function') {
      this.ctx.resetTransform();
    } else {
      this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    }
    this.ctx.setTransform(this.devicePixelRatio, 0, 0, this.devicePixelRatio, 0, 0);

    // Cache canvas bounding rect to avoid layout thrashing in mouse events
    this.canvasRect = canvas.getBoundingClientRect();

  // canvas size logging removed
  }
  
  /**
   * Calculate particle size based on canvas surface area
   * Uses percentage of total canvas area to ensure consistent visual size
   * across different screen dimensions (mobile, tablet, desktop, 4K, etc.)
   * 
   * Formula: radius = sqrt(canvasArea * percentage / PI)
   * This gives us a radius where the particle circle area = percentage of canvas area
   * 
   * @returns Particle radius in pixels
   */
  private calculateParticleSize(): number {
    const width = Math.max(1, this.canvasWidth || this.canvasRef.nativeElement.width / this.devicePixelRatio);
    const height = Math.max(1, this.canvasHeight || this.canvasRef.nativeElement.height / this.devicePixelRatio);
    const canvasArea = width * height;
    
    // Calculate radius where particle area = percentage of canvas area
    // particleArea = PI * r^2 = canvasArea * percentage
    // r = sqrt(canvasArea * percentage / PI)
    const radius = Math.sqrt(canvasArea * this.particleSurfacePercentage / Math.PI);
    
    // Add some randomness variation (±30%) while maintaining average size
    const variation = 0.7 + Math.random() * 0.6; // Range: 0.7 to 1.3
    return radius * variation;
  }
  
  private createParticles(): void {
    if (isDevMode()) {
      console.log(`🎨 Creating particles - target count: ${this.particleCount}, current array length: ${this.particles.length}`);
    }
    this.particles = [];
    
  // Use cached dimensions to avoid layout thrashing
  const width = Math.max(1, this.canvasWidth || this.canvasRef.nativeElement.width / this.devicePixelRatio);
  const height = Math.max(1, this.canvasHeight || this.canvasRef.nativeElement.height / this.devicePixelRatio);
    
    for (let i = 0; i < this.particleCount; i++) {
      this.particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: this.calculateParticleSize(), // Surface-area based sizing
        opacity: Math.random() * 0.8 + 0.2,
        hue: this.themeManager.getThemeHue(), // Use theme-based color
        connections: [],
        trail: [], // Initialize empty trail
        glowIntensity: 0, // No glow initially
        repelForce: 0, // No repulsion initially
        excitementLevel: 0, // Calm initially
        densityCount: 0 // No neighbors initially
      });
    }
  }
  
  /**
   * Start automatic calibration to find optimal particle count
   */
  startCalibration(): void {
    if (this.isCalibrating) {
      console.warn('Calibration already in progress');
      return;
    }
    
    const startingCount = this.particleOptimizer.startCalibration((result: OptimizationResult) => {
      // Calibration complete callback
      this.isCalibrating = false;
      if (isDevMode()) {
        console.log(`🎯 Optimal particle count set to: ${result.optimalParticleCount}`);
        console.log(`   Device performance class: ${result.devicePerformanceClass}`);
      }
      
      // Update particle count with new calibrated value
      this.adjustParticleCountTo(result.optimalParticleCount);
    });
    
    // Check if calibration actually started
    if (startingCount === -1) {
      console.warn('⚠️ Could not start calibration - already in progress');
      return;
    }
    
    this.isCalibrating = true;
    this.adjustParticleCountTo(startingCount);
  }
  
  /**
   * Adjust particle count (used by adaptive system)
   */
  private adjustParticleCountTo(newCount: number): void {
    const diff = newCount - this.particleCount;
    
    if (diff > 0) {
      // Add particles
      const width = Math.max(1, this.canvasWidth);
      const height = Math.max(1, this.canvasHeight);
      
      for (let i = 0; i < diff; i++) {
        this.particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: this.calculateParticleSize(),
          opacity: Math.random() * 0.8 + 0.2,
          hue: this.themeManager.getThemeHue(),
          connections: [],
          trail: [],
          glowIntensity: 0,
          repelForce: 0,
          excitementLevel: 0,
          densityCount: 0
        });
      }
    } else if (diff < 0) {
      // Remove particles (from end to avoid index issues)
      this.particles.splice(newCount);
    }
    
    this.particleCount = newCount;
  }
  
  private setupResizeObserver(): void {
    if (typeof window !== 'undefined' && 'ResizeObserver' in window) {
      this.resizeObserver = new ResizeObserver(() => {
        // Update cached dimensions only when canvas actually resizes
        const canvas = this.canvasRef.nativeElement;
        this.canvasWidth = canvas.clientWidth;
        this.canvasHeight = canvas.clientHeight;
      });
      
      // Start observing the canvas
      this.resizeObserver.observe(this.canvasRef.nativeElement);
      
      // Initialize cached dimensions
      const canvas = this.canvasRef.nativeElement;
      this.canvasWidth = canvas.clientWidth;
      this.canvasHeight = canvas.clientHeight;
    }
  }
  
  /**
   * Update particle colors when theme changes
   */
  private updateThemeColors(): void {
    this.particles.forEach(particle => {
      particle.hue = this.themeManager.getThemeHue();
    });
    // Update cached colors when theme changes
    this.themeManager.updateColorCache();
  }
  
  private setupEventListeners(): void {
    window.addEventListener('mousemove', this.onMouseMove.bind(this));
    window.addEventListener('mousedown', this.onMouseDown.bind(this));
    window.addEventListener('mouseup', this.onMouseUp.bind(this));
    window.addEventListener('resize', this.onResize.bind(this));
    
    // Touch support for mobile
    window.addEventListener('touchstart', this.onTouchStart.bind(this));
    window.addEventListener('touchmove', this.onTouchMove.bind(this));
    window.addEventListener('touchend', this.onTouchEnd.bind(this));
  }
  
  private onMouseMove = (event: MouseEvent): void => {
    // Use cached rect to avoid getBoundingClientRect() on every mouse move
    if (!this.canvasRect) {
      this.canvasRect = this.canvasRef.nativeElement.getBoundingClientRect();
    }
    // Map to CSS pixels relative to canvas top-left
    this.mouse.x = event.clientX - this.canvasRect.left;
    this.mouse.y = event.clientY - this.canvasRect.top;
  };
  
  private onMouseDown = (event: MouseEvent): void => {
    this.mouse.isPressed = true;
    // Use cached rect
    if (!this.canvasRect) {
      this.canvasRect = this.canvasRef.nativeElement.getBoundingClientRect();
    }
    this.mouse.x = event.clientX - this.canvasRect.left;
    this.mouse.y = event.clientY - this.canvasRect.top;
    // Repulsion is now handled continuously in updateParticles
  };
  
  private onMouseUp = (): void => {
    this.mouse.isPressed = false;
  };
  
  private onTouchStart = (event: TouchEvent): void => {
  event.preventDefault();
  const touch = event.touches[0];
  const rect = this.canvasRef.nativeElement.getBoundingClientRect();
  this.mouse.isPressed = true;
  this.mouse.x = touch.clientX - rect.left;
  this.mouse.y = touch.clientY - rect.top;
    // Repulsion is now handled continuously in updateParticles
  };
  
  private onTouchMove = (event: TouchEvent): void => {
  event.preventDefault();
  const touch = event.touches[0];
  const rect = this.canvasRef.nativeElement.getBoundingClientRect();
  this.mouse.x = touch.clientX - rect.left;
  this.mouse.y = touch.clientY - rect.top;
  };
  
  private onTouchEnd = (): void => {
    this.mouse.isPressed = false;
  };
  
  private onResize = (): void => {
    if (isDevMode()) {
      console.log(`🔄 Resize detected - current particleCount: ${this.particleCount}, actual particles: ${this.particles.length}`);
    }
    this.resizeCanvas();
    this.createParticles();
    if (isDevMode()) {
      console.log(`✅ After resize - particleCount: ${this.particleCount}, actual particles: ${this.particles.length}`);
    }
  };

  private animate = (): void => {
    if (!this.isVisible) return; // Don't animate if not visible
    
    this.isAnimating.set(true);
    const frameStartTime = performance.now();
    
    // Update cached theme colors (throttled to max once per second)
    this.themeManager.updateColorCache();
    
  // Clear canvas using cached dimensions (no DOM queries during animation!)
  const clearStart = performance.now();
  this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
  this.performanceMonitor.recordComponentTime('clearTime', performance.now() - clearStart);
    
    // Draw dynamic background with timing
    const backgroundStart = performance.now();
    const themeColors = this.themeManager.getCachedColors();
    this.backgroundRenderer.drawBackground(
      this.ctx,
      this.canvasWidth,
      this.canvasHeight,
      themeColors.bgStart,
      themeColors.bgEnd
    );
    this.performanceMonitor.recordComponentTime('backgroundRenderTime', performance.now() - backgroundStart);
    
    // Update particles with timing
    const particleStart = performance.now();
    
    // Calculate density glow for each particle (if enabled)
    if (this.enableDensityEffects) {
      this.particles.forEach(particle => {
        this.particleUpdater.calculateDensityGlow(
          particle,
          this.particles,
          this.mouse,
          this.canvasWidth,
          this.canvasHeight
        );
      });
    }
    
    // Update particle physics, positions, and effects
    this.particleUpdater.updateConfig({
      time: this.time
    });
    this.particleUpdater.updateParticles(
      this.particles,
      this.mouse,
      this.canvasWidth,
      this.canvasHeight
    );
    this.performanceMonitor.recordComponentTime('particleUpdateTime', performance.now() - particleStart);
    
    // Find connections and build segments in single pass (merged for performance)
    const connectionStart = performance.now();
    const connectionResult = this.connectionBuilder.findConnectionsAndBuildSegments(
      this.particles,
      this.canvasWidth,
      this.canvasHeight
    );
    this.segments = connectionResult.segments;
    
    // Record sub-timings
    this.performanceMonitor.recordComponentTime('gridBuildTime', connectionResult.gridBuildTime);
    this.performanceMonitor.recordComponentTime('connectionQueryTime', connectionResult.queryAndSegmentTime);
    this.performanceMonitor.recordComponentTime('connectionTime', performance.now() - connectionStart);
    
    // Render connections and particles
    const renderStart = performance.now();
    
    // Update renderer configs with current theme colors and state
    this.particleRenderer.updateConfig({ 
      primaryColor: themeColors.primary,
      isLightMode: this.themeManager.isLightMode(),
      time: this.time
    });
    this.connectionRenderer.updateConfig({ 
      primaryColor: themeColors.primary,
      secondaryColor: themeColors.secondary 
    });
    
    // Draw connections
    const connectionRenderStart = performance.now();
    this.connectionRenderer.drawConnections(
      this.ctx,
      this.segments
    );
    this.performanceMonitor.recordComponentTime('connectionRenderTime', performance.now() - connectionRenderStart);
    
    // Draw particles
    const particleRenderStart = performance.now();
    this.particleRenderer.drawParticles(
      this.ctx,
      this.particles,
      this.canvasWidth,
      this.canvasHeight
    );
    this.performanceMonitor.recordComponentTime('particleRenderTime', performance.now() - particleRenderStart);
    
    this.performanceMonitor.recordComponentTime('renderTime', performance.now() - renderStart);
    
    // Update time
    this.time++;
    
    // Calculate comprehensive performance metrics
    const frameEndTime = performance.now();
    const frameTime = frameEndTime - frameStartTime;
    
    this.performanceMonitor.updateMetrics(frameTime);
    
    // Check if we're in calibration mode
    if (this.isCalibrating) {
      const calibrationResult = this.particleOptimizer.recordCalibrationFrame(frameTime, this.particleCount);
      
      if (calibrationResult) {
        // Calibration wants to change particle count (testing next level or finishing)
        this.adjustParticleCountTo(calibrationResult.newParticleCount);
      }
    }
    // Adaptive particle count adjustment (if enabled and NOT calibrating)
    else if (this.enableAdaptiveParticles) {
      const adjustment = this.performanceMonitor.calculateAdaptiveAdjustment(
        frameTime,
        this.particleCount,
        this.canvasWidth,
        this.canvasHeight,
        this.particles
      );
      
      if (adjustment.adjusted) {
        this.adjustParticleCountTo(adjustment.newParticleCount);
        console.log(`[Adaptive] ${adjustment.reason}`);
      }
      
      // Check if we should recalibrate due to performance degradation
      // Only check every 10 seconds to avoid excessive checking
      if (this.time % 600 === 0) {
        const recentFrameTimes = this.performanceMonitor.getRecentFrameTimes(180); // Last 3 seconds
        if (this.particleOptimizer.shouldRecalibrate(recentFrameTimes)) {
          console.log('🔄 Auto-recalibrating due to performance degradation...');
          this.particleOptimizer.invalidateCache();
          
          // Start recalibration after a short delay
          setTimeout(() => {
            this.startCalibration();
          }, 2000);
        }
      }
    }
    
    this.performanceMonitor.logMetrics(this.particleCount, this.segments.length);
    
    // Update FPS signal
    this.fps.set(Math.round(this.performanceMonitor.getAverageFPS() || 60));
    
    this.animationId = requestAnimationFrame(this.animate);
  };
  
  // Public methods for performance control panel
  @HostListener('window:keydown', ['$event'])
  handleKeyboardShortcut(event: KeyboardEvent): void {
    // Ctrl+Alt+D (Debug) to toggle performance panel
    if (event.ctrlKey && event.altKey && event.key === 'd') {
      event.preventDefault();
      this.togglePerformanceControls();
    }
  }
  
  togglePerformanceControls(): void {
    this.showPerformanceControls = !this.showPerformanceControls;
    // When showing, move the panel to document.body to escape stacking contexts
    if (this.showPerformanceControls && this.perfControlsRef && typeof document !== 'undefined') {
      try {
        const el = this.perfControlsRef.nativeElement as HTMLElement;
        document.body.appendChild(el);
        // Ensure the panel is on top
        el.style.zIndex = '2147483647';
      } catch (e) {
        // ignore DOM errors
      }
    }
  }
  
  logCurrentPerformance(): void {
    // Single on-demand manual log (intentionally the only console output in app)
    console.log('📊 Manual Performance Log Triggered');
    this.performanceMonitor.logMetrics(this.particleCount, this.segments.length);
  }
  
  togglePerformanceMonitoring(): void {
    this.enablePerformanceMonitoring = !this.enablePerformanceMonitoring;
    this.performanceMonitor.updateConfig({ enabled: this.enablePerformanceMonitoring });
    console.log(`🎯 Performance Monitoring: ${this.enablePerformanceMonitoring ? 'ENABLED' : 'DISABLED'}`);
  }
  
  resetPerformanceCounters(): void {
    // Performance monitor handles its own resets internally
  }
}
