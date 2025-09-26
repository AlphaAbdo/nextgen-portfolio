import { IParticle, ParticleType } from './particle.model';
import { ParticleFactory } from './particle-factory';
import { ParticlePhysics } from './particle-physics';
import { ParticleRenderer } from './particle-renderer';
import * as Constants from './constants';

interface ResonanceNode {
  x: number;
  y: number;
  strength: number;
  type: string;
}

interface EnergyCascade {
  source: IParticle;
  targets: IParticle[];
  strength: number;
}

interface StandingWave {
  particles: IParticle[];
  amplitude: number;
  frequency: number;
}

export class ParticleSystem {
  private particles: IParticle[] = [];
  private time = 0;
  private animationId?: number;
  private resizeObserver?: ResizeObserver;
  private currentTheme = 'default';
  private isDebugMode = false;

  // Cached canvas dimensions to prevent layout thrashing
  private canvasWidth = 0;
  private canvasHeight = 0;

  // Advanced effects
  private resonanceNodes: ResonanceNode[] = [];
  private energyCascades: EnergyCascade[] = [];
  private standingWaves: StandingWave[] = [];

  // Subsystems
  private factory: ParticleFactory;
  private physics: ParticlePhysics;
  private renderer: ParticleRenderer;

  constructor(private canvas: HTMLCanvasElement, private ctx: CanvasRenderingContext2D) {
    this.factory = new ParticleFactory();
    this.physics = new ParticlePhysics();
    this.renderer = new ParticleRenderer(ctx);
    this.physics.setQuantumTunnelCallback((particle) => this.performQuantumTunnel(particle));
  }

  init(): void {
    this.createParticles();
    this.setupResizeObserver();
    this.animate();
  }

  destroy(): void {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }

  setDebugMode(debug: boolean): void {
    this.isDebugMode = debug;
    this.renderer.setDebugMode(debug);
  }

  updateTheme(theme: string): void {
    this.currentTheme = theme;
    // Update particle colors for regular particles
    this.particles.forEach(particle => {
      if (particle.type === ParticleType.REGULAR) {
        particle.hue = this.getThemeHue();
      }
    });
  }

  private createParticles(): void {
    this.particles = ParticleFactory.createParticles(Constants.PARTICLE_COUNT, this.canvas);
  }

  private setupResizeObserver(): void {
    if (typeof ResizeObserver === 'undefined') return;

    const container = this.canvas.parentElement;
    if (!container) return;

    this.resizeObserver = new ResizeObserver(() => {
      this.resizeCanvas();
    });

    this.resizeObserver.observe(container);
  }

  private resizeCanvas(): void {
    const container = this.canvas.parentElement;
    if (!container) return;

    const displayWidth = container.clientWidth;
    const displayHeight = container.clientHeight;

    // Cache dimensions to avoid DOM queries during animation
    this.canvasWidth = displayWidth;
    this.canvasHeight = displayHeight;

    this.canvas.width = displayWidth * (typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1);
    this.canvas.height = displayHeight * (typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1);

    this.canvas.style.width = displayWidth + 'px';
    this.canvas.style.height = displayHeight + 'px';

    this.ctx.scale(typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1, typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1);
    this.updateParticleBoundaries();
  }

  private updateParticleBoundaries(): void {
    if (!this.canvas || this.particles.length === 0) return;

    // Use cached dimensions to avoid DOM queries
    const width = this.canvasWidth;
    const height = this.canvasHeight;

    this.particles.forEach(particle => {
      if (particle.x > width) particle.x = width - 10;
      if (particle.y > height) particle.y = height - 10;
      if (particle.x < 0) particle.x = 10;
      if (particle.y < 0) particle.y = 10;
    });
  }

  private animate(): void {
    this.time++;

    this.physics.updateTime(this.time);
    this.renderer.updateTime(this.time);

    // Update physics with cached dimensions (no DOM queries!)
    this.physics.updateParticles(this.particles, this.canvasWidth, this.canvasHeight);
    this.physics.findConnections(this.particles);

    // Process advanced effects
    this.processAdvancedEffects();

    // Render with cached dimensions (no DOM queries!)
    this.renderer.drawParticles(this.particles, this.resonanceNodes, this.energyCascades, this.standingWaves, this.canvasWidth, this.canvasHeight);

    this.animationId = requestAnimationFrame(() => this.animate());
  }

  private processAdvancedEffects(): void {
    // Phase 5A: Detect and process resonance nodes
    this.detectResonanceNodes();

    // Phase 5B: Create energy cascades
    this.createEnergyCascades();

    // Phase 5C: Generate standing waves
    this.generateStandingWaves();
  }

  // Phase 5A: Resonance Node Detection
  private detectResonanceNodes(): void {
    this.particles.forEach(particle => {
      this.particles.forEach(otherParticle => {
        if (particle === otherParticle) return;

        const dx = otherParticle.x - particle.x;
        const dy = otherParticle.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 50 && distance > 0) {
          const resonanceStrength = this.calculateResonanceStrength(particle, otherParticle);

          if (resonanceStrength > Constants.RESONANCE_THRESHOLD) {
            const midX = (particle.x + otherParticle.x) / 2;
            const midY = (particle.y + otherParticle.y) / 2;
            const resonanceType = this.getResonanceType(particle.type, otherParticle.type);

            // Add or update resonance node
            const existingNode = this.resonanceNodes.find(node =>
              Math.abs(node.x - midX) < 10 && Math.abs(node.y - midY) < 10
            );

            if (existingNode) {
              existingNode.strength = Math.max(existingNode.strength, resonanceStrength);
            } else {
              this.resonanceNodes.push({
                x: midX,
                y: midY,
                strength: resonanceStrength,
                type: resonanceType
              });
            }
          }
        }
      });
    });

    // Decay existing resonance nodes
    this.resonanceNodes = this.resonanceNodes.filter(node => {
      node.strength *= 0.95;
      return node.strength > 0.1;
    });
  }

  // Phase 5A: Calculate resonance strength between particles
  private calculateResonanceStrength(particle1: IParticle, particle2: IParticle): number {
    let resonance = 0;

    if (particle1.type === particle2.type) {
      switch (particle1.type) {
        case ParticleType.ELECTRIC:
          const chargeSimilarity = 1 - Math.abs(particle1.electricCharge - particle2.electricCharge);
          const phaseSimilarity = 1 - Math.abs(particle1.chargePhase - particle2.chargePhase) / (Math.PI * 2);
          resonance = chargeSimilarity * phaseSimilarity;
          break;
        case ParticleType.MAGNETIC:
          const amplitudeSimilarity = 1 - Math.abs(particle1.waveAmplitude - particle2.waveAmplitude);
          const frequencySimilarity = 1 - Math.abs(particle1.waveFrequency - particle2.waveFrequency);
          resonance = amplitudeSimilarity * frequencySimilarity;
          break;
        case ParticleType.GRAVITATIONAL:
          const massSimilarity = 1 - Math.abs(particle1.gravitationalStrength - particle2.gravitationalStrength);
          resonance = massSimilarity;
          break;
        case ParticleType.QUANTUM:
          const quantumCoherence = Math.cos(particle1.quantumState - particle2.quantumState);
          resonance = Math.abs(quantumCoherence);
          break;
      }
    }

    return Math.max(0, resonance);
  }

  // Phase 5A: Get resonance type string
  private getResonanceType(type1: ParticleType, type2: ParticleType): string {
    if (type1 === type2) {
      switch (type1) {
        case ParticleType.ELECTRIC: return 'ELECTRIC_RESONANCE';
        case ParticleType.MAGNETIC: return 'MAGNETIC_RESONANCE';
        case ParticleType.GRAVITATIONAL: return 'GRAVITATIONAL_RESONANCE';
        case ParticleType.QUANTUM: return 'QUANTUM_COHERENCE';
        default: return 'BASIC_RESONANCE';
      }
    }
    return 'HYBRID_RESONANCE';
  }

  // Phase 5B: Energy Cascade Creation
  private createEnergyCascades(): void {
    this.particles.forEach(particle => {
      const nearbyParticles = this.particles.filter((p, i) => {
        if (p === particle) return false;
        const dx = p.x - particle.x;
        const dy = p.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        return distance < 120;
      });

      if (nearbyParticles.length >= 2) {
        const cascadeStrength = this.calculateCascadeStrength(particle);

        if (cascadeStrength > 0.3) {
          // Remove existing cascades for this particle
          this.energyCascades = this.energyCascades.filter(cascade => cascade.source !== particle);

          // Create new cascade
          this.energyCascades.push({
            source: particle,
            targets: nearbyParticles.slice(0, 3), // Limit to 3 targets
            strength: cascadeStrength
          });
        }
      }
    });

    // Decay existing cascades
    this.energyCascades = this.energyCascades.filter(cascade => {
      cascade.strength *= 0.9;
      return cascade.strength > 0.1;
    });
  }

  // Phase 5B: Calculate energy cascade strength
  private calculateCascadeStrength(particle: IParticle): number {
    switch (particle.type) {
      case ParticleType.ELECTRIC:
        return Math.abs(particle.electricCharge) * particle.glowIntensity;
      case ParticleType.MAGNETIC:
        return particle.waveAmplitude * 1.2;
      case ParticleType.GRAVITATIONAL:
        return particle.gravitationalStrength * 0.8;
      case ParticleType.QUANTUM:
        return particle.tunnelProbability * 2;
      default:
        return particle.glowIntensity * 0.5;
    }
  }

  // Phase 5C: Standing Wave Generation
  private generateStandingWaves(): void {
    this.particles.forEach(particle => {
      if (particle.type !== ParticleType.MAGNETIC) return;

      const compatibleParticles = this.particles.filter(p =>
        p.type === ParticleType.MAGNETIC &&
        p !== particle &&
        Math.abs(p.waveFrequency - particle.waveFrequency) < 0.02
      );

      if (compatibleParticles.length >= 1) {
        const waveGroup = [particle, ...compatibleParticles.slice(0, 2)];
        const avgAmplitude = waveGroup.reduce((sum, p) => sum + p.waveAmplitude, 0) / waveGroup.length;
        const avgFrequency = waveGroup.reduce((sum, p) => sum + p.waveFrequency, 0) / waveGroup.length;

        // Remove existing standing waves with these particles
        this.standingWaves = this.standingWaves.filter(wave =>
          !wave.particles.some(p => waveGroup.includes(p))
        );

        // Create new standing wave
        this.standingWaves.push({
          particles: waveGroup,
          amplitude: avgAmplitude * Constants.STANDING_WAVE_AMPLITUDE,
          frequency: avgFrequency
        });
      }
    });

    // Decay standing waves
    this.standingWaves = this.standingWaves.filter(wave => {
      wave.amplitude *= 0.98;
      return wave.amplitude > 2;
    });
  }

  private getThemeHue(): number {
    const themeHues: Record<string, [number, number]> = {
      'default': [200, 240],
      'dark': [200, 240],
      'light': [200, 240],
      'neon': [280, 320],
      'ocean': [180, 220],
      'sunset': [20, 40],
      'forest': [80, 120],
      'galaxy': [250, 290],
      'autumn': [30, 60],
      'winter': [190, 230],
    };

    const [minHue, maxHue] = themeHues[this.currentTheme] || themeHues['default'];
    return Math.random() * (maxHue - minHue) + minHue;
  }

  // Handle quantum tunneling with canvas reference
  performQuantumTunnel(particle: IParticle): void {
    // Use cached dimensions to avoid DOM queries
    particle.x = Math.random() * this.canvasWidth;
    particle.y = Math.random() * this.canvasHeight;

    // Brief visual effect
    particle.opacity *= 0.3;
    particle.glowIntensity = 1.0;

    // Restore opacity after a moment
    setTimeout(() => {
      particle.opacity /= 0.3;
    }, 100);
  }
}