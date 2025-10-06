import { Injectable, ElementRef, inject } from '@angular/core';
import * as THREE from 'three';
import { DeviceDetectionService } from '../../../services/device-detection.service';

@Injectable({
  providedIn: 'root'
})
export class ThreeManagerService {
  private scenes: Map<string, THREE.Scene> = new Map();
  private renderers: Map<string, THREE.WebGLRenderer> = new Map();
  private cameras: Map<string, THREE.Camera> = new Map();
  private animationFrames: Map<string, number> = new Map();
  private deviceDetection = inject(DeviceDetectionService);

  constructor() { }

  /**
   * Initialize a Three.js scene with lightweight settings for all devices
   */
  initScene(
    id: string,
    container: ElementRef | HTMLElement,
    cameraType: 'perspective' | 'orthographic' = 'perspective'
  ): { scene: THREE.Scene; camera: THREE.Camera; renderer: THREE.WebGLRenderer } {
    const element = container instanceof ElementRef ? container.nativeElement : container;
    const width = element.clientWidth;
    const height = element.clientHeight;

    // Get lightweight settings (same for everyone)
    const settings = this.deviceDetection.getThreeJSSettings();

    // Create scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1a1a2e);
    this.scenes.set(id, scene);

    // Create camera
    let camera: THREE.Camera;
    if (cameraType === 'perspective') {
      camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      camera.position.z = 5;
    } else {
      const aspect = width / height;
      camera = new THREE.OrthographicCamera(-aspect, aspect, 1, -1, 0.1, 1000);
      camera.position.z = 5;
    }
    this.cameras.set(id, camera);

    // Create renderer with lightweight settings
    const renderer = new THREE.WebGLRenderer({ 
      antialias: settings.antialias,
      alpha: true,
      powerPreference: 'default'  // Balanced for all devices
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(settings.pixelRatio);
    element.appendChild(renderer.domElement);
    this.renderers.set(id, renderer);

    // Simple lighting only (no expensive directional lights)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    return { scene, camera, renderer };
  }

  /**
   * Start animation loop for a scene
   */
  startAnimation(
    id: string,
    animateCallback: (scene: THREE.Scene, camera: THREE.Camera, renderer: THREE.WebGLRenderer) => void
  ): void {
    const scene = this.scenes.get(id);
    const camera = this.cameras.get(id);
    const renderer = this.renderers.get(id);

    if (!scene || !camera || !renderer) {
      console.error(`Scene with id "${id}" not found`);
      return;
    }

    const animate = () => {
      const frameId = requestAnimationFrame(animate);
      this.animationFrames.set(id, frameId);

      animateCallback(scene, camera, renderer);
      renderer.render(scene, camera);
    };

    animate();
  }

  /**
   * Stop animation loop for a scene
   */
  stopAnimation(id: string): void {
    const frameId = this.animationFrames.get(id);
    if (frameId) {
      cancelAnimationFrame(frameId);
      this.animationFrames.delete(id);
    }
  }

  /**
   * Handle window resize
   */
  onResize(id: string, container: ElementRef | HTMLElement): void {
    const camera = this.cameras.get(id);
    const renderer = this.renderers.get(id);
    const element = container instanceof ElementRef ? container.nativeElement : container;

    if (!camera || !renderer) return;

    const width = element.clientWidth;
    const height = element.clientHeight;

    if (camera instanceof THREE.PerspectiveCamera) {
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    } else if (camera instanceof THREE.OrthographicCamera) {
      const aspect = width / height;
      camera.left = -aspect;
      camera.right = aspect;
      camera.updateProjectionMatrix();
    }

    renderer.setSize(width, height);
  }

  /**
   * Cleanup scene resources
   */
  cleanup(id: string): void {
    // Stop animation
    this.stopAnimation(id);

    // Get resources
    const scene = this.scenes.get(id);
    const renderer = this.renderers.get(id);

    // Dispose scene objects
    if (scene) {
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry?.dispose();
          if (Array.isArray(object.material)) {
            object.material.forEach((material) => material.dispose());
          } else {
            object.material?.dispose();
          }
        }
      });
    }

    // Dispose renderer
    if (renderer) {
      renderer.dispose();
      renderer.domElement.remove();
    }

    // Remove from maps
    this.scenes.delete(id);
    this.cameras.delete(id);
    this.renderers.delete(id);
  }

  /**
   * Cleanup all scenes
   */
  cleanupAll(): void {
    const ids = Array.from(this.scenes.keys());
    ids.forEach((id) => this.cleanup(id));
  }

  /**
   * Get scene by id
   */
  getScene(id: string): THREE.Scene | undefined {
    return this.scenes.get(id);
  }

  /**
   * Get camera by id
   */
  getCamera(id: string): THREE.Camera | undefined {
    return this.cameras.get(id);
  }

  /**
   * Get renderer by id
   */
  getRenderer(id: string): THREE.WebGLRenderer | undefined {
    return this.renderers.get(id);
  }
}
