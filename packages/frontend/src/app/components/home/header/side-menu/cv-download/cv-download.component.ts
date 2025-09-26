import { Component, Input, OnInit, OnDestroy, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Subject, takeUntil, fromEvent, timer, interval, Observable, Subscription } from 'rxjs';
import type { MenuAction } from '../../header.types';
import { DataLoadingService } from '../../../../../services/data-loading.service';

interface IHologramLayer {
  id: string;
  translateX: number;
  translateY: number;
  translateZ: number;
  rotateX: number;
  rotateY: number;
  rotateZ: number;
  opacity: number;
  scale: number;
  content: string;
  computedStyles?: { [key: string]: string };
}

interface IParticle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  computedStyles?: { [key: string]: string };
}

@Component({
  selector: 'app-cv-download',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cv-download.component.html',
  styleUrls: ['./cv-download.component.scss']
})
export class CvDownloadComponent implements OnInit, OnDestroy {
  @Input() cvUrl: string = '';
  @Input() accessibilityMode: boolean = false;
  @Input() menuInteraction$?: Observable<MenuAction>;
  
  private destroy$ = new Subject<void>();
  private animationFrame: number | null = null;
  private hologramInterval: any;
  private scanlineInterval: any;
  private particleInterval: any;
  private easterEggTimer: any;
  private menuInteractionSubscription?: Subscription;
  
  // Component states
  isHovered = false;
  isDownloading = false;
  showRainbow = false;
  
  // Hologram system
  hologramLayers: IHologramLayer[] = [];
  scanlinePosition = 0;
  glitchIntensity = 0;
  particles: IParticle[] = [];
  particleId = 0;
  
  // Animation optimization
  private sinCache = new Map<string, number>();
  private cosCache = new Map<string, number>();
  private lastCacheClear = 0;
  
  // Animation timing
  private lastTime = 0;
  private timeAccumulator = 0;
  private lastFrameTime = 0;
  
  // Dynamic styles
  terminalStyles: { [key: string]: string } = {};
  scanlineStyles: { [key: string]: string } = {};
  
  constructor(
    private elementRef: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object,
    private dataLoadingService: DataLoadingService
  ) {}

  ngOnInit() {
    this.initializeHologramSystem();
    this.setupSideMenuListener();
    this.startEasterEggTimer();
    this.startHologramAnimation();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.stopAllAnimations();
  }

  private getCachedSin(value: number, precision: number = 100): number {
    const key = `sin_${Math.round(value * precision)}`;
    if (!this.sinCache.has(key)) {
      this.sinCache.set(key, Math.sin(value));
    }
    return this.sinCache.get(key)!;
  }

  private getCachedCos(value: number, precision: number = 100): number {
    const key = `cos_${Math.round(value * precision)}`;
    if (!this.cosCache.has(key)) {
      this.cosCache.set(key, Math.cos(value));
    }
    return this.cosCache.get(key)!;
  }

  private clearTrigCacheIfNeeded() {
    const now = performance.now();
    if (now - this.lastCacheClear > 10000) { // Clear every 10 seconds (more aggressive)
      this.sinCache.clear();
      this.cosCache.clear();
      this.lastCacheClear = now;
    }
  }

  private initializeHologramSystem() {
    // Initialize CV data layers as holograms
    this.hologramLayers = [
      {
        id: 'header',
        translateX: 0,
        translateY: -20,
        translateZ: 30,
        rotateX: -5,
        rotateY: 2,
        rotateZ: 0,
        opacity: 0.7,
        scale: 1,
        content: 'PROFILE.DATA'
      },
      {
        id: 'experience',
        translateX: -15,
        translateY: 0,
        translateZ: 15,
        rotateX: 2,
        rotateY: -3,
        rotateZ: 1,
        opacity: 0.6,
        scale: 0.95,
        content: 'EXPERIENCE.LOG'
      },
      {
        id: 'skills',
        translateX: 15,
        translateY: 10,
        translateZ: 0,
        rotateX: 1,
        rotateY: 4,
        rotateZ: -1,
        opacity: 0.65,
        scale: 0.9,
        content: 'SKILLS.MATRIX'
      },
      {
        id: 'education',
        translateX: 0,
        translateY: 25,
        translateZ: -10,
        rotateX: 3,
        rotateY: 0,
        rotateZ: 0,
        opacity: 0.55,
        scale: 0.85,
        content: 'EDUCATION.DB'
      }
    ];
    
    this.updateTerminalStyles();
  }

  private setupSideMenuListener() {
    if (!isPlatformBrowser(this.platformId)) return;

    // Try to find the closest app-side-menu ancestor first (works after moving side-menu under header)
    let sideMenu: Element | null = null;
    try {
      let el: Element | null = this.elementRef.nativeElement;
      while (el && el !== document.documentElement) {
        const found = el.querySelector && el.querySelector('app-side-menu');
        if (found) { sideMenu = found as Element; break; }
        el = el.parentElement;
      }
    } catch (e) {
      // ignore DOM traversal errors
    }

    // If a side-menu ancestor exists, listen to its mouseenter; otherwise rely on parent-provided observable
    if (sideMenu) {
      fromEvent(sideMenu, 'mouseenter')
        .pipe(takeUntil(this.destroy$))
        .subscribe(() => this.onSideMenuInteraction());
    }

    // Subscribe to parent-provided menu interaction observable if available
    if (this.menuInteraction$) {
      this.menuInteractionSubscription = this.menuInteraction$.subscribe((action) => {
        // Accept typed MenuAction; any interaction should reset the easter egg
        this.onSideMenuInteraction();
        // Optionally react to navigation payloads in future
      });
    }
  }

  private startEasterEggTimer() {
    this.easterEggTimer = setTimeout(() => {
      if (!this.showRainbow) {
        this.activateStabilizationBeam();
      }
    }, 3000);
  }

  private onSideMenuInteraction() {
    if (this.easterEggTimer) {
      clearTimeout(this.easterEggTimer);
    }
    this.deactivateStabilizationBeam();
  }

  private activateStabilizationBeam() {
    this.showRainbow = true;
    this.glitchIntensity = 0.3;
    
    if (!this.shouldReduceMotion) {
      this.startScanlineAnimation();
    }
    
    this.updateTerminalStyles();
  }

  private deactivateStabilizationBeam() {
    this.showRainbow = false;
    this.glitchIntensity = 0;
    this.stopScanlineAnimation();
    this.updateTerminalStyles();
  }

  private startHologramAnimation() {
    if (!isPlatformBrowser(this.platformId)) return;
    
    const animate = (currentTime: number) => {
      // 🎯 45fps frame limiting for optimal performance
      const targetFrameTime = 1000 / 45; // ~22.22ms per frame
      if (currentTime - this.lastFrameTime < targetFrameTime) {
        this.animationFrame = requestAnimationFrame(animate);
        return; // Skip frame to maintain 45fps
      }
      this.lastFrameTime = currentTime;
      
      const frameStartTime = performance.now();
      
      if (this.lastTime === 0) this.lastTime = currentTime;
      const deltaTime = currentTime - this.lastTime;
      this.lastTime = currentTime;
      
      this.timeAccumulator += deltaTime * 0.001; // Convert to seconds
      
      this.updateHologramLayers();
      this.updateParticles(deltaTime);
      
      this.animationFrame = requestAnimationFrame(animate);
    };
    
    this.animationFrame = requestAnimationFrame(animate);
  }

  private updateHologramLayers() {
    if (this.shouldReduceMotion) return;

    // Clear cache periodically to prevent memory bloat
    this.clearTrigCacheIfNeeded();

    const time = this.timeAccumulator;
    const isHovered = this.isHovered;

    this.hologramLayers.forEach((layer, index) => {
      // Pre-calculate common values to reduce redundant computations
      const baseFreq = 0.5 + index * 0.1;
      const timeFreq = time * baseFreq;
      const timeFreq07 = time * baseFreq * 0.7;
      const timeFreq05 = time * baseFreq * 0.5;

      if (!isHovered) {
        // Subtle floating animation - batch trig calculations
        const sin1 = this.getCachedSin(timeFreq);
        const sin2 = this.getCachedSin(timeFreq07);
        const cos1 = this.getCachedCos(timeFreq05);

        // Apply transformations with reduced calculations
        layer.translateY += sin1 * 0.3;
        layer.rotateY += sin2 * 0.2;
        layer.rotateX += cos1 * 0.15;
      } else {
        // Hover state: layers separate and become more defined
        const targetZ = 50 + index * 25;
        layer.translateZ += (targetZ - layer.translateZ) * 0.1;
        layer.opacity += (0.9 - layer.opacity) * 0.05;
        layer.scale += (1.1 - layer.scale) * 0.05;
      }

      // Glitch effect during stabilization beam - reduced frequency and calculations
      if (this.showRainbow && this.glitchIntensity > 0 && Math.random() < 0.05) { // Reduced from 0.1
        const glitch = (Math.random() - 0.5) * this.glitchIntensity * 5; // Reduced multiplier
        layer.translateX += glitch;
        layer.opacity += glitch * 0.1;
      }

      // Pre-compute styles immediately after updates
      this.updateLayerStyle(layer);
    });
  }

  private updateLayerStyle(layer: IHologramLayer) {
    layer.computedStyles = {
      'transform': `translate3d(${Math.round(layer.translateX * 100) / 100}px, ${Math.round(layer.translateY * 100) / 100}px, ${Math.round(layer.translateZ * 100) / 100}px)
                   rotateX(${Math.round(layer.rotateX * 100) / 100}deg) rotateY(${Math.round(layer.rotateY * 100) / 100}deg) rotateZ(${Math.round(layer.rotateZ * 100) / 100}deg)
                   scale(${Math.round(layer.scale * 1000) / 1000})`,
      'opacity': (Math.round(layer.opacity * 1000) / 1000).toString()
    };
  }

  getLayerStyles(layer: IHologramLayer): { [key: string]: string } {
    // Styles are now pre-computed in animation loop
    return layer.computedStyles || {
      'transform': 'translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(1)',
      'opacity': '1'
    };
  }

  getParticleStyles(particle: IParticle): { [key: string]: string } {
    // Styles are now pre-computed in animation loop
    return particle.computedStyles || {
      'transform': 'translate3d(0px, 0px, 0px)',
      'opacity': '1',
      'width': '0px',
      'height': '0px'
    };
  }

  private startScanlineAnimation() {
    this.stopScanlineAnimation();
    
    this.scanlineInterval = setInterval(() => {
      this.scanlinePosition = (this.scanlinePosition + 1) % 100; // Reduced speed from 2 to 1
      this.updateScanlineStyles();
    }, 100); // Increased interval from 50ms to 100ms (50% less frequent)
  }

  private stopScanlineAnimation() {
    if (this.scanlineInterval) {
      clearInterval(this.scanlineInterval);
      this.scanlineInterval = null;
    }
  }

  private updateScanlineStyles() {
    const hue = (this.scanlinePosition * 3.6) % 360; // Full rainbow cycle
    
    this.scanlineStyles = {
      'top': `${this.scanlinePosition}%`,
      'background': `linear-gradient(90deg, 
        transparent, 
        hsla(${hue}, 100%, 60%, 0.8), 
        transparent)`,
      'box-shadow': `0 0 20px hsla(${hue}, 100%, 60%, 0.5)`
    };
  }

  private createParticle(x: number, y: number): IParticle {
    return {
      id: this.particleId++,
      x: x + (Math.random() - 0.5) * 100,
      y: y + (Math.random() - 0.5) * 100,
      vx: (Math.random() - 0.5) * 200,
      vy: (Math.random() - 0.5) * 200,
      life: 0,
      maxLife: 1000 + Math.random() * 1000,
      size: 2 + Math.random() * 4
    };
  }

  private updateParticles(deltaTime: number) {
    // Skip particle updates if no particles (common case)
    if (this.particles.length === 0) return;

    const deltaSeconds = deltaTime * 0.001;
    const friction = 0.99;

    // Pre-calculate common values
    const invFriction = 1 - friction;

    this.particles = this.particles.filter(particle => {
      particle.life += deltaTime;

      // Batch calculations to reduce property access and computations
      const vx = particle.vx;
      const vy = particle.vy;
      const newX = particle.x + vx * deltaSeconds;
      const newY = particle.y + vy * deltaSeconds;

      particle.x = Math.round(newX * 100) / 100; // Round to reduce precision
      particle.y = Math.round(newY * 100) / 100;
      particle.vx = vx * friction;
      particle.vy = vy * friction;

      // Pre-compute particle styles with optimized calculations
      const lifeRatio = particle.life / particle.maxLife;
      const opacity = Math.sin(lifeRatio * Math.PI);

      particle.computedStyles = {
        'transform': `translate3d(${particle.x}px, ${particle.y}px, 0)`,
        'opacity': (Math.round(opacity * 1000) / 1000).toString(),
        'width': `${particle.size}px`,
        'height': `${particle.size}px`
      };

      return particle.life < particle.maxLife;
    });
  }

  private updateTerminalStyles() {
    if (this.showRainbow && !this.shouldReduceMotion) {
      this.terminalStyles = {
        '--terminal-glow': 'var(--theme-primary, #0066cc)',
        '--terminal-border': '0 0 20px var(--theme-primary, #0066cc)',
        '--glitch-intensity': this.glitchIntensity.toString()
      };
    } else if (this.showRainbow && this.shouldReduceMotion) {
      this.terminalStyles = {
        '--terminal-glow': 'var(--theme-primary, #0066cc)',
        '--terminal-border': '0 0 10px var(--theme-primary, #0066cc)'
      };
    } else {
      this.terminalStyles = {
        '--terminal-glow': 'var(--theme-border, #e0e0e0)',
        '--terminal-border': '0 0 5px var(--theme-border, #e0e0e0)'
      };
    }
  }

  onMouseEnter() {
    this.isHovered = true;
    this.stopScanlineAnimation();
    
    // Create hover particles
    if (!this.shouldReduceMotion) {
      for (let i = 0; i < 20; i++) {
        this.particles.push(this.createParticle(0, 0));
      }
    }
  }

  onMouseLeave() {
    this.isHovered = false;
    
    // Reset layer positions
    this.initializeHologramSystem();
    
    // Resume stabilization beam if active
    if (this.showRainbow) {
      this.activateStabilizationBeam();
    }
  }

  async onDownloadClick() {
    if (!this.cvUrl) {
      console.warn('CV URL not provided');
      return;
    }

    this.isDownloading = true;

    // Materialization effect
    if (!this.shouldReduceMotion) {
      for (let i = 0; i < 50; i++) {
        this.particles.push(this.createParticle(0, 0));
      }
    }

    try {
      // Use the enhanced DataLoadingService to fetch the PDF
      const pdfBlob = await this.dataLoadingService.getBlob(this.cvUrl);

      // Create download link with the blob
      const blobUrl = URL.createObjectURL(pdfBlob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = 'CV-Abdelkader-Kantaoui.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Clean up the blob URL
      URL.revokeObjectURL(blobUrl);

      setTimeout(() => {
        this.isDownloading = false;
      }, 1000);
    } catch (error) {
      console.error('Failed to download CV:', error);
      this.isDownloading = false;

      // Fallback to direct link if blob download fails
      const link = document.createElement('a');
      link.href = this.cvUrl;
      link.download = 'CV-Abdelkader-Kantaoui.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }

  private stopAllAnimations() {
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
    }
    if (this.hologramInterval) {
      clearInterval(this.hologramInterval);
    }
    if (this.scanlineInterval) {
      clearInterval(this.scanlineInterval);
    }
    if (this.particleInterval) {
      clearInterval(this.particleInterval);
    }
    if (this.easterEggTimer) {
      clearTimeout(this.easterEggTimer);
    }
  }

  get shouldReduceMotion(): boolean {
    if (!isPlatformBrowser(this.platformId)) return true;
    
    return this.accessibilityMode || 
           window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
}