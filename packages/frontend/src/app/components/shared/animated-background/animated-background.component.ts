import { Component, OnInit, OnDestroy, ElementRef, ViewChild, signal, inject, HostListener, Input } from '@angular/core';

import { ThemeService } from '../../../services/theme.service';

interface IParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  hue: number;
  connections: number[];
  trail: {x: number, y: number, opacity: number}[]; // Particle trails
  glowIntensity: number; // For proximity glow effects
  repelForce: number; // For click repulsion
}

@Component({
  selector: 'app-animated-background',
  standalone: true,
  templateUrl: './animated-background.component.html',
  styleUrls: ['./animated-background.component.scss']
})
export class AnimatedBackgroundComponent implements OnInit, OnDestroy {
  @Input() hideControls = false; // Hide performance controls when used inside cards
  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('perfControls', { static: false }) perfControlsRef?: ElementRef<HTMLDivElement>;
  
  private ctx!: CanvasRenderingContext2D;
  private particles: IParticle[] = [];
  private animationId: number = 0;
  private mouse = { x: 0, y: 0, isPressed: false };
  private devicePixelRatio = 1; // For high DPI screens
  readonly particleCount = 80; // Made public for template access
  private readonly connectionDistance = 120;
  private time = 0;
  
  // Cached canvas dimensions to prevent layout thrashing
  private canvasWidth = 0;
  private canvasHeight = 0;
  private resizeObserver?: ResizeObserver;
  
  // Reactive signals for performance monitoring
  fps = signal(60);
  isAnimating = signal(false);
  
  // Performance metrics
  private performanceMetrics = {
    frameCount: 0,
    totalFrameTime: 0,
    maxFrameTime: 0,
    minFrameTime: Infinity,
    lastLogTime: performance.now(),
    particleUpdateTime: 0,
    connectionTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    droppedFrames: 0,
    targetFPS: 60
  };
  
  private performanceLogInterval = 5000; // Log every 5 seconds
  showPerformanceControls = false; // Dev mode controls - hidden by default, toggle with Ctrl+Alt+D

  // Manual logging is supported via the performance panel button only.
  // All automatic console output is disabled.
  
  // Theme integration
  private themeService = inject(ThemeService);
  private currentTheme = 'default';
  
  ngOnInit() {
    // Get current theme and set up theme change listener
    this.currentTheme = this.getColorThemeFromId(this.themeService.getCurrentThemeId());
    
    // Listen for theme changes via custom event
    if (typeof window !== 'undefined') {
      window.addEventListener('themeChanged', (event: any) => {
        this.currentTheme = this.getColorThemeFromId(event.detail.theme);
        this.updateThemeColors();
      });
    }
    
    // Initialize performance monitoring
    this.initializePerformanceMonitoring();
    
    this.initCanvas();
    
    // Setup ResizeObserver to update cached dimensions only when canvas resizes
    this.setupResizeObserver();
    
    this.createParticles();
    this.setupEventListeners();
    this.animate();
  }
  
  ngOnDestroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
    window.removeEventListener('mousemove', this.onMouseMove);
    window.removeEventListener('resize', this.onResize);
    
    // Log final performance summary
  // No automatic logging on destroy; manual log only.
  }
  
  private initializePerformanceMonitoring(): void {
  // Initialization logging removed. Manual log only.
    
    // Reset performance metrics
    this.performanceMetrics.lastLogTime = performance.now();
    
    // Log browser performance capabilities
    if (typeof window !== 'undefined') {
  // Browser performance info logging removed.
    }
  }
  
  private initCanvas(): void {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;
    
    // High DPI support
  this.devicePixelRatio = Math.max(1, window.devicePixelRatio || 1);
  // device pixel ratio logging removed

  this.resizeCanvas();
  }
  
  private resizeCanvas(): void {
    const canvas = this.canvasRef.nativeElement;

    // Determine display size from the canvas container (CSS pixels)
    const container = canvas.parentElement || document.documentElement;
    const rect = container.getBoundingClientRect();
    const displayWidth = this.hideControls ? rect.width : window.innerWidth;
    const displayHeight = this.hideControls ? rect.height : window.innerHeight;

    // Update devicePixelRatio in case zoom changed
    this.devicePixelRatio = Math.max(1, window.devicePixelRatio || 1);

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

  // canvas size logging removed
  }
  
  private createParticles(): void {
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
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        hue: this.getThemeHue(), // Use theme-based color
        connections: [],
        trail: [], // Initialize empty trail
        glowIntensity: 0, // No glow initially
        repelForce: 0 // No repulsion initially
      });
    }
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
   * Extract color theme from combined theme ID (e.g., 'default-dark' -> 'default')
   */
  private getColorThemeFromId(themeId: string): string {
    return themeId.split('-')[0] || 'default';
  }

  /**
   * Extract approximate hue from hex color for dynamic animation
   */
  private extractHueFromColor(hexColor: string): number {
    try {
      // Remove # if present
      const hex = hexColor.replace('#', '');

      // Validate hex format
      if (!/^[0-9A-Fa-f]{6,8}$/.test(hex)) {
        return 200; // Default blue hue
      }

      // Convert hex to RGB
      const r = parseInt(hex.substr(0, 2), 16) / 255;
      const g = parseInt(hex.substr(2, 2), 16) / 255;
      const b = parseInt(hex.substr(4, 2), 16) / 255;

      // Find max and min values
      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      const diff = max - min;

      let hue = 0;

      if (diff === 0) {
        hue = 0; // Grayscale
      } else {
        switch (max) {
          case r: hue = ((g - b) / diff) % 6; break;
          case g: hue = (b - r) / diff + 2; break;
          case b: hue = (r - g) / diff + 4; break;
        }
        hue *= 60;
        if (hue < 0) hue += 360;
      }

      return Math.round(hue);
    } catch (error) {
      console.warn('Error extracting hue from color:', hexColor, error);
      return 200; // Default blue hue
    }
  }

  /**
   * Blend two hex colors with alpha support
   */
  private blendColors(color1: string, color2: string, ratio: number): string {
    try {
      // Extract RGB values from hex colors
      const r1 = parseInt(color1.slice(1, 3), 16);
      const g1 = parseInt(color1.slice(3, 5), 16);
      const b1 = parseInt(color1.slice(5, 7), 16);
      const a1 = parseInt(color1.slice(7, 9), 16) || 255;

      const r2 = parseInt(color2.slice(1, 3), 16);
      const g2 = parseInt(color2.slice(3, 5), 16);
      const b2 = parseInt(color2.slice(5, 7), 16);
      const a2 = parseInt(color2.slice(7, 9), 16) || 255;

      // Blend the colors
      const r = Math.round(r1 * (1 - ratio) + r2 * ratio);
      const g = Math.round(g1 * (1 - ratio) + g2 * ratio);
      const b = Math.round(b1 * (1 - ratio) + b2 * ratio);
      const a = Math.round(a1 * (1 - ratio) + a2 * ratio);

      // Return as hex with alpha
      return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}${a.toString(16).padStart(2, '0')}`;
    } catch (error) {
      console.warn('Error blending colors:', color1, color2, error);
      return color1; // Return first color as fallback
    }
  }

  /**
   * Check if we're in light mode based on the current theme mode
   * This gives you full control - no automatic color detection!
   */
  private isLightMode(bgColor: string): boolean {
    // Use the theme mode directly instead of color luminance detection
    // This lets you experiment with any colors you want!
    const currentMode = this.themeService.getCurrentMode();
    return currentMode === 'light';
  }

  /**
   * Check if a color is pure grayscale (R = G = B)
   */
  private isGrayscaleColor(color: string): boolean {
    try {
      // Remove # if present
      const hex = color.replace('#', '');

      // Validate hex format
      if (!/^[0-9A-Fa-f]{6,8}$/.test(hex)) {
        return false; // Invalid hex format
      }

      // Convert hex to RGB
      const r = parseInt(hex.substr(0, 2), 16);
      const g = parseInt(hex.substr(2, 2), 16);
      const b = parseInt(hex.substr(4, 2), 16);

      // Check if all components are equal (grayscale)
      return r === g && g === b;
    } catch (error) {
      console.warn('Error parsing color for grayscale detection:', color, error);
      return false;
    }
  }

  /**
   * Get theme-appropriate hue range for particles
   */
  private getThemeHue(): number {
    const themeHues: Record<string, [number, number]> = {
      'default': [200, 240], // Blue range
      'dark': [220, 260],    // Blue-purple range
      'ocean': [180, 220],   // Cyan-blue range
      'sunset': [20, 60],    // Orange-yellow range
      'royal': [260, 300],   // Purple-magenta range
      'light': [0, 360]      // Full spectrum (won't be used for white theme)
    };
    
    const [min, max] = themeHues[this.currentTheme] || themeHues['default'];
    return Math.random() * (max - min) + min;
  }
  
  /**
   * Update particle colors when theme changes
   */
  private updateThemeColors(): void {
    this.particles.forEach(particle => {
      particle.hue = this.getThemeHue();
    });
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
  const rect = this.canvasRef.nativeElement.getBoundingClientRect();
  // Map to CSS pixels relative to canvas top-left
  this.mouse.x = event.clientX - rect.left;
  this.mouse.y = event.clientY - rect.top;
  };
  
  private onMouseDown = (event: MouseEvent): void => {
  this.mouse.isPressed = true;
  const rect = this.canvasRef.nativeElement.getBoundingClientRect();
  this.mouse.x = event.clientX - rect.left;
  this.mouse.y = event.clientY - rect.top;
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
    this.resizeCanvas();
    this.createParticles();
  };
  
  /**
   * Calculate density-based glow effects for particles in dense regions
   * Excludes areas near mouse to prevent mouse-following glow effect
   */
  private calculateDensityGlow(): void {
    const densityRadius = 80;
    const densityThreshold = 3; // Minimum particles for glow effect
    const mouseExclusionRadius = 120; // Don't apply density glow near mouse
    
    this.particles.forEach(particle => {
      // Skip density glow calculation if particle is near mouse
      const mouseDistance = Math.sqrt(
        Math.pow(this.mouse.x - particle.x, 2) + 
        Math.pow(this.mouse.y - particle.y, 2)
      );
      
      if (mouseDistance < mouseExclusionRadius) {
        particle.glowIntensity *= 0.95; // Fade existing glow near mouse
        return;
      }
      
      let nearbyCount = 0;
      
      // Count nearby particles
      this.particles.forEach(other => {
        if (particle !== other) {
          const distance = Math.sqrt(
            Math.pow(particle.x - other.x, 2) + 
            Math.pow(particle.y - other.y, 2)
          );
          
          if (distance < densityRadius) {
            nearbyCount++;
          }
        }
      });
      
      // Apply density-based glow with gradient effect
      if (nearbyCount >= densityThreshold) {
        const densityRatio = Math.min(1, (nearbyCount - densityThreshold) / 5);
        particle.glowIntensity = Math.max(particle.glowIntensity, densityRatio * 0.6);
      } else {
        particle.glowIntensity *= 0.98; // Gradual fade
      }
    });
  }

  private updateParticles(): void {
  const canvas = this.canvasRef.nativeElement;
  const displayWidth = Math.max(1, canvas.clientWidth || canvas.width / this.devicePixelRatio);
  const displayHeight = Math.max(1, canvas.clientHeight || canvas.height / this.devicePixelRatio);
    
    // First pass: calculate density-based glow for each particle
    this.calculateDensityGlow();
    
    this.particles.forEach((particle, index) => {
      // Add current position to trail
      particle.trail.push({
        x: particle.x,
        y: particle.y,
        opacity: 1.0
      });
      
      // Limit trail length and fade opacity
      if (particle.trail.length > 8) {
        particle.trail.shift();
      }
      particle.trail.forEach((point, i) => {
        point.opacity = (i / particle.trail.length) * 0.3;
      });
      
      // Enhanced mouse interaction with proper repulsion
      const mouseDistance = Math.sqrt(
        Math.pow(this.mouse.x - particle.x, 2) + 
        Math.pow(this.mouse.y - particle.y, 2)
      );
      
      // Mouse interaction: attraction when hovering, repulsion when clicking
      if (mouseDistance < 150) {
        const force = (150 - mouseDistance) / 150;
        const angle = Math.atan2(particle.y - this.mouse.y, particle.x - this.mouse.x);
        
        if (this.mouse.isPressed) {
          // Strong repulsion when clicking - push particles away
          const repulsionStrength = force * 0.08;
          particle.vx += Math.cos(angle) * repulsionStrength;
          particle.vy += Math.sin(angle) * repulsionStrength;
        } else {
          // Gentle attraction when hovering - pull particles towards mouse
          const attractionStrength = force * 0.015;
          particle.vx -= Math.cos(angle) * attractionStrength;
          particle.vy -= Math.sin(angle) * attractionStrength;
        }
      }
      
      // Apply some drift based on time for organic movement
      particle.vx += Math.sin(this.time * 0.01 + index * 0.1) * 0.002;
      particle.vy += Math.cos(this.time * 0.008 + index * 0.15) * 0.002;
      
      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;
      
      // Apply friction
      particle.vx *= 0.99;
      particle.vy *= 0.99;
      
      // Different boundary behavior for card mode vs full-screen
      if (this.hideControls) {
        // Card mode: containment (bounce)
        const margin = 5;
        
        // Left and right boundaries
        if (particle.x < margin) {
          particle.x = margin;
          particle.vx = Math.abs(particle.vx) * 0.8;
        } else if (particle.x > displayWidth - margin) {
          particle.x = displayWidth - margin;
          particle.vx = -Math.abs(particle.vx) * 0.8;
        }
        
        // Top and bottom boundaries
        if (particle.y < margin) {
          particle.y = margin;
          particle.vy = Math.abs(particle.vy) * 0.8;
        } else if (particle.y > displayHeight - margin) {
          particle.y = displayHeight - margin;
          particle.vy = -Math.abs(particle.vy) * 0.8;
        }
      } else {
        // Full-screen mode: wrapping (original behavior)
  if (particle.x < -10) particle.x = displayWidth + 10;
  if (particle.x > displayWidth + 10) particle.x = -10;
  if (particle.y < -10) particle.y = displayHeight + 10;
  if (particle.y > displayHeight + 10) particle.y = -10;
      }
      
      // Update opacity based on movement and glow
      const speed = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy);
      const baseOpacity = Math.min(0.9, 0.3 + speed * 20);
      particle.opacity = baseOpacity + particle.glowIntensity * 0.3;
      
      // Theme-based dynamic hue shifting (slower for better theme integration)
      particle.hue = (particle.hue + 0.1) % 360;
    });
  }
  
  private findConnections(): void {
    this.particles.forEach((particle, i) => {
      particle.connections = [];
      for (let j = i + 1; j < this.particles.length; j++) {
        const distance = Math.sqrt(
          Math.pow(particle.x - this.particles[j].x, 2) + 
          Math.pow(particle.y - this.particles[j].y, 2)
        );
        
        if (distance < this.connectionDistance) {
          particle.connections.push(j);
        }
      }
    });
  }
  
  private drawBackground(): void {
    const canvas = this.canvasRef.nativeElement;
    const displayWidth = Math.max(1, canvas.clientWidth || canvas.width / this.devicePixelRatio);
    const displayHeight = Math.max(1, canvas.clientHeight || canvas.height / this.devicePixelRatio);

    // Get theme background colors from CSS custom properties
    const root = document.documentElement;
    const bgPrimaryStart = getComputedStyle(root).getPropertyValue('--color-bg-primary').trim();
    const bgPrimaryEnd = getComputedStyle(root).getPropertyValue('--color-bg-primary-end').trim();

    // Create radial gradient with user's specified colors
    const centerX = displayWidth / 2;
    const centerY = displayHeight / 2;
    const gradient = this.ctx.createRadialGradient(
      centerX, centerY, 0,
      centerX, centerY, Math.max(displayWidth, displayHeight) * 0.7  // Balanced radius for smooth gradient
    );

    // Use the user's gradient colors directly - simple and reliable
    if (bgPrimaryStart && bgPrimaryEnd) {
      gradient.addColorStop(0, bgPrimaryStart);  // Start color from theme
      gradient.addColorStop(1, bgPrimaryEnd);    // End color from theme
    } else {
      // Fallback to default dark theme colors
      gradient.addColorStop(0, '#0a0a0a');
      gradient.addColorStop(1, '#1a1a1a');
    }

    this.ctx.fillStyle = gradient;
    this.ctx.fillRect(0, 0, displayWidth, displayHeight);
  }
  
  private drawParticles(): void {
    this.particles.forEach(particle => {
      // Draw particle trails first
      this.drawParticleTrail(particle);
      
      this.ctx.save();
      this.ctx.globalAlpha = particle.opacity;
      
      // Enhanced glow effect based on proximity and interaction
      const glowSize = particle.size * (2 + particle.glowIntensity * 3);
      
      // Get theme colors from CSS custom properties
      const root = document.documentElement;
      const primaryColor = getComputedStyle(root).getPropertyValue('--color-primary').trim();
      
      // Use theme colors for particles
      if (primaryColor) {
        // Extract HSL values from the primary color for glow and particle colors
        this.ctx.shadowColor = primaryColor;
        this.ctx.fillStyle = primaryColor;
      } else {
        // Fallback to theme-based colors
        this.ctx.shadowColor = `hsl(${particle.hue}, 100%, 60%)`;
        this.ctx.fillStyle = `hsl(${particle.hue}, 80%, ${70 + particle.glowIntensity * 20}%)`;
      }
      
      this.ctx.shadowBlur = glowSize;
      
      // Larger particle size when glowing
      const renderSize = particle.size * (1 + particle.glowIntensity * 0.5);
      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, renderSize, 0, Math.PI * 2);
      this.ctx.fill();
      
      this.ctx.restore();
    });
  }
  
  /**
   * Draw trailing effect for each particle
   */
  private drawParticleTrail(particle: IParticle): void {
    if (particle.trail.length < 2) return;
    
    this.ctx.save();
    
    // Get theme colors from CSS custom properties
    const root = document.documentElement;
    const primaryColor = getComputedStyle(root).getPropertyValue('--color-primary').trim();
    
    // Use theme colors for trails
    if (primaryColor) {
      this.ctx.strokeStyle = primaryColor;
    } else {
      this.ctx.strokeStyle = `hsl(${particle.hue}, 60%, 50%)`;
    }
    
    this.ctx.lineWidth = 1;
    this.ctx.lineCap = 'round';
    
    for (let i = 1; i < particle.trail.length; i++) {
      const current = particle.trail[i];
      const previous = particle.trail[i - 1];
      
      this.ctx.globalAlpha = current.opacity * particle.opacity;
      this.ctx.beginPath();
      this.ctx.moveTo(previous.x, previous.y);
      this.ctx.lineTo(current.x, current.y);
      this.ctx.stroke();
    }
    
    this.ctx.restore();
  }
  
  private drawConnections(): void {
    // Get theme colors from CSS custom properties
    const root = document.documentElement;
    const primaryColor = getComputedStyle(root).getPropertyValue('--color-primary').trim();
    
    this.particles.forEach((particle, i) => {
      particle.connections.forEach(connectionIndex => {
        const connected = this.particles[connectionIndex];
        const distance = Math.sqrt(
          Math.pow(particle.x - connected.x, 2) + 
          Math.pow(particle.y - connected.y, 2)
        );
        
        const opacity = (1 - distance / this.connectionDistance) * 0.3;
        
        // Enhanced connection with particle glow influence
        const avgGlow = (particle.glowIntensity + connected.glowIntensity) * 0.5;
        const connectionOpacity = opacity * (0.5 + avgGlow * 0.5);
        
        this.ctx.save();
        this.ctx.globalAlpha = connectionOpacity;
        
        // Use theme colors for connections
        if (primaryColor) {
          this.ctx.strokeStyle = primaryColor;
        } else {
          this.ctx.strokeStyle = `hsl(${(particle.hue + connected.hue) / 2}, 60%, ${60 + avgGlow * 20}%)`;
        }
        
        this.ctx.lineWidth = 1 + avgGlow;
        
        this.ctx.beginPath();
        this.ctx.moveTo(particle.x, particle.y);
        this.ctx.lineTo(connected.x, connected.y);
        this.ctx.stroke();
        
        this.ctx.restore();
      });
    });
  }
  
  private animate = (): void => {
    this.isAnimating.set(true);
    const frameStartTime = performance.now();
    
  // Clear canvas using cached dimensions (no DOM queries during animation!)
  this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    
    // Draw dynamic background
    const backgroundStart = performance.now();
    this.drawBackground();
    const backgroundTime = performance.now() - backgroundStart;
    
    // Update particles with timing
    const particleStart = performance.now();
    this.updateParticles();
    this.performanceMetrics.particleUpdateTime = performance.now() - particleStart;
    
    // Find connections with timing
    const connectionStart = performance.now();
    this.findConnections();
    this.performanceMetrics.connectionTime = performance.now() - connectionStart;
    
    // Render with timing
    const renderStart = performance.now();
    this.drawConnections();
    this.drawParticles();
    this.performanceMetrics.renderTime = performance.now() - renderStart;
    
    // Update time
    this.time++;
    
    // Calculate comprehensive performance metrics
    const frameEndTime = performance.now();
    const frameTime = frameEndTime - frameStartTime;
    
    this.updatePerformanceMetrics(frameTime);
    this.logPerformanceMetrics();
    
    // Update FPS signal
    this.fps.set(Math.round(1000 / Math.max(frameTime, 16.67)));
    
    this.animationId = requestAnimationFrame(this.animate);
  };
  
  private updatePerformanceMetrics(frameTime: number): void {
    this.performanceMetrics.frameCount++;
    this.performanceMetrics.totalFrameTime += frameTime;
    this.performanceMetrics.maxFrameTime = Math.max(this.performanceMetrics.maxFrameTime, frameTime);
    this.performanceMetrics.minFrameTime = Math.min(this.performanceMetrics.minFrameTime, frameTime);
    
    // Track dropped frames (frames that took longer than 16.67ms for 60fps)
    if (frameTime > 16.67) {
      this.performanceMetrics.droppedFrames++;
    }
    
    // Update memory usage (if available)
    if ((performance as any).memory) {
      this.performanceMetrics.memoryUsage = (performance as any).memory.usedJSHeapSize / 1024 / 1024; // MB
    }
  }
  
  private logPerformanceMetrics(): void {
    const now = performance.now();
    if (now - this.performanceMetrics.lastLogTime >= this.performanceLogInterval) {
      const avgFrameTime = this.performanceMetrics.totalFrameTime / this.performanceMetrics.frameCount;
      const avgFPS = 1000 / avgFrameTime;
      const dropRatePercent = (this.performanceMetrics.droppedFrames / this.performanceMetrics.frameCount) * 100;
      
  // All automatic performance logs removed. Manual logging will print when forced.
      
      // Reset metrics for next interval
      this.resetPerformanceMetrics();
    }
  }
  
  private resetPerformanceMetrics(): void {
    this.performanceMetrics.frameCount = 0;
    this.performanceMetrics.totalFrameTime = 0;
    this.performanceMetrics.maxFrameTime = 0;
    this.performanceMetrics.minFrameTime = Infinity;
    this.performanceMetrics.droppedFrames = 0;
    this.performanceMetrics.lastLogTime = performance.now();
  }
  
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
  this.logPerformanceMetrics();
  }
  
  resetPerformanceCounters(): void {
    this.resetPerformanceMetrics();
  }
}
