import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as THREE from 'three';
import { DeviceDetectionService } from '../../../../services/device-detection.service';

@Component({
  selector: 'app-cern-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class CernHeroComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('particleCanvas', { static: false }) canvasRef!: ElementRef<HTMLDivElement>;

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private particles!: THREE.Points;
  private animationId!: number;
  private mouse = new THREE.Vector2();
  private targetRotation = new THREE.Vector2();
  private currentRotation = new THREE.Vector2();
  private deviceDetection = inject(DeviceDetectionService);
  private lastFrameTime = 0;
  private frameInterval = 16.67; // 60fps by default
  private isVisible = true;
  private intersectionObserver?: IntersectionObserver;

  constructor() {}

  ngOnInit(): void {
    // Mouse move listener
    window.addEventListener('mousemove', this.onMouseMove.bind(this));
    
    // Set up visibility observer to pause when not visible
    this.setupVisibilityObserver();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.initParticleSystem();
      this.animate();
      
      // Start observing for visibility
      if (this.intersectionObserver && this.canvasRef) {
        this.intersectionObserver.observe(this.canvasRef.nativeElement);
      }
    }, 0);
  }

  ngOnDestroy(): void {
    window.removeEventListener('mousemove', this.onMouseMove.bind(this));
    
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }

    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }

    if (this.renderer) {
      this.renderer.dispose();
      this.canvasRef.nativeElement.removeChild(this.renderer.domElement);
    }

    if (this.scene) {
      this.scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry?.dispose();
          if (Array.isArray(object.material)) {
            object.material.forEach(m => m.dispose());
          } else {
            object.material?.dispose();
          }
        }
      });
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
  }

  private initParticleSystem(): void {
    const container = this.canvasRef.nativeElement;
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // Get lightweight settings (same for everyone)
    const settings = this.deviceDetection.getThreeJSSettings();

    // Scene (no fog - too expensive)
    this.scene = new THREE.Scene();

    // Camera
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.camera.position.z = 5;

    // Renderer with lightweight settings
    this.renderer = new THREE.WebGLRenderer({ 
      antialias: settings.antialias,
      alpha: false,
      powerPreference: 'default'  // Balanced power mode
    });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(settings.pixelRatio);
    this.renderer.setClearColor(0x1a1a2e, 1);
    
    // Ensure canvas has proper styling
    this.renderer.domElement.style.display = 'block';
    this.renderer.domElement.style.width = '100%';
    this.renderer.domElement.style.height = '100%';
    
    container.appendChild(this.renderer.domElement);

    // Particles with lightweight count
    this.particles = this.createParticles(settings.particleCount);
    this.scene.add(this.particles);

    // Simple lighting only
    const ambientLight = new THREE.AmbientLight(0x00a8e1, 0.7);
    this.scene.add(ambientLight);

    // Handle resize
    window.addEventListener('resize', this.onResize.bind(this));
  }

  private createParticles(particleCount: number = 2000): THREE.Points {
    const geometry = new THREE.BufferGeometry();
    const vertices: number[] = [];
    const colors: number[] = [];

    // CERN blue color palette
    const color1 = new THREE.Color(0x0053a1); // CERN blue
    const color2 = new THREE.Color(0x00a8e1); // Light blue
    const color3 = new THREE.Color(0x00c48c); // Green

    for (let i = 0; i < particleCount; i++) {
      // Create particle positions in a sphere
      const radius = 8 + Math.random() * 4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      vertices.push(x, y, z);

      // Random color from palette
      const colorChoice = Math.random();
      let color: THREE.Color;
      if (colorChoice < 0.5) {
        color = color1;
      } else if (colorChoice < 0.8) {
        color = color2;
      } else {
        color = color3;
      }

      colors.push(color.r, color.g, color.b);
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.08,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    return new THREE.Points(geometry, material);
  }

  private animate(): void {
    if (!this.isVisible) return; // Don't animate if not visible
    
    this.animationId = requestAnimationFrame(this.animate.bind(this));

    // Smooth rotation based on mouse position
    this.currentRotation.x += (this.targetRotation.x - this.currentRotation.x) * 0.05;
    this.currentRotation.y += (this.targetRotation.y - this.currentRotation.y) * 0.05;

    // Auto rotation
    this.particles.rotation.y += 0.0005;
    
    // Mouse-based rotation
    this.particles.rotation.x = this.currentRotation.y * 0.5;
    this.particles.rotation.y += this.currentRotation.x * 0.001;

    // Pulse effect
    const time = Date.now() * 0.001;
    const scale = 1 + Math.sin(time * 0.5) * 0.05;
    this.particles.scale.set(scale, scale, scale);

    this.renderer.render(this.scene, this.camera);
  }

  private onMouseMove(event: MouseEvent): void {
    this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    this.targetRotation.x = this.mouse.x * Math.PI;
    this.targetRotation.y = this.mouse.y * Math.PI;
  }

  private onResize(): void {
    const container = this.canvasRef.nativeElement;
    const width = container.clientWidth;
    const height = container.clientHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }
}
