import { Component, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit, inject } from '@angular/core';
import { ThemeService } from '../../../services/theme.service';
import { ParticleSystem } from './particle-system';

@Component({
  selector: 'app-animated-card-demo',
  standalone: true,
  template: `
    <div class="card-particle-container">
      <canvas
        #canvas
        class="card-canvas">
      </canvas>
    </div>
  `,
  styles: [`
    .card-particle-container {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 1;
    }

    .card-canvas {
      width: 100%;
      height: 100%;
      display: block;
      transform: translateZ(0);
      will-change: transform;
    }
  `]
})
export class AnimatedCardDemoComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;

  private themeService = inject(ThemeService);
  private particleSystem?: ParticleSystem;
  private isDebugMode = false;

  ngAfterViewInit(): void {
    // Temporarily disabled for build
    // this.currentTheme = this.themeService.currentTheme();

    if (typeof window !== 'undefined') {
      window.addEventListener('themeChanged', (event: any) => {
        this.particleSystem?.updateTheme(event.detail.theme);
      });
    }

    this.initParticleSystem();
  }

  ngOnInit(): void {
    this.setupDebugListener();
  }

  ngOnDestroy(): void {
    this.particleSystem?.destroy();
  }

  private initParticleSystem(): void {
    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d')!;

    if (typeof window !== 'undefined') {
      const devicePixelRatio = window.devicePixelRatio || 1;
      canvas.width = canvas.clientWidth * devicePixelRatio;
      canvas.height = canvas.clientHeight * devicePixelRatio;
      canvas.style.width = canvas.clientWidth + 'px';
      canvas.style.height = canvas.clientHeight + 'px';
      ctx.scale(devicePixelRatio, devicePixelRatio);
    }

    this.particleSystem = new ParticleSystem(canvas, ctx);
    this.particleSystem.init();
  }

  private setupDebugListener(): void {
    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', (event: KeyboardEvent) => {
        if (event.key === 'd' || event.key === 'D') {
          this.isDebugMode = !this.isDebugMode;
          this.particleSystem?.setDebugMode(this.isDebugMode);
        }
      });
    }
  }
}