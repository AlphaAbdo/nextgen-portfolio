import { IParticle, ParticleType } from './particle.model';

export class ParticleFactory {
  private static getTypeSpecificHue(type: ParticleType): number {
    switch (type) {
      case ParticleType.ELECTRIC: return 60;   // Bright yellow/gold - high energy
      case ParticleType.MAGNETIC: return 200;  // Bright cyan/blue - magnetic field
      case ParticleType.GRAVITATIONAL: return 280; // Bright purple - gravitational
      case ParticleType.QUANTUM: return 120;   // Bright green - quantum uncertainty
      default: return 220;      // Regular particles use theme color
    }
  }

  private static getParticleMass(type: ParticleType): number {
    switch (type) {
      case ParticleType.GRAVITATIONAL: return Math.random() * 3 + 2;
      case ParticleType.ELECTRIC: return Math.random() * 1.5 + 0.8;
      case ParticleType.MAGNETIC: return Math.random() * 1.2 + 0.7;
      case ParticleType.QUANTUM: return Math.random() * 0.5 + 0.3;
      default: return Math.random() * 1 + 0.5;
    }
  }

  private static getParticleIntensity(type: ParticleType): number {
    switch (type) {
      case ParticleType.ELECTRIC: return Math.random() * 0.6 + 0.6;    // Much stronger: 0.6-1.2
      case ParticleType.MAGNETIC: return Math.random() * 0.6 + 0.3;
      case ParticleType.GRAVITATIONAL: return Math.random() * 0.5 + 0.5;
      case ParticleType.QUANTUM: return Math.random() * 0.3 + 0.1;
      default: return Math.random() * 0.4 + 0.1;
    }
  }

  private static applyTypeVisualProperties(particle: IParticle, type: ParticleType, baseHue: number): void {
    switch (type) {
      case ParticleType.ELECTRIC:
        particle.hue = (baseHue + 60) % 360; // Yellow-orange
        particle.size *= 1.2;
        break;
      case ParticleType.MAGNETIC:
        particle.hue = (baseHue + 240) % 360; // Blue
        particle.size *= 1.1;
        break;
      case ParticleType.GRAVITATIONAL:
        particle.hue = (baseHue + 300) % 360; // Purple
        particle.size *= 1.5;
        break;
      case ParticleType.QUANTUM:
        particle.hue = (baseHue + 120) % 360; // Green
        particle.opacity *= 0.7;
        break;
    }
  }

  static createParticleOfType(type: ParticleType, canvas: HTMLCanvasElement): IParticle {
    const baseSize = Math.random() * 2 + 1;
    const baseHue = this.getTypeSpecificHue(type);

    const particle: IParticle = {
      // Core properties
      x: Math.random() * canvas.clientWidth,
      y: Math.random() * canvas.clientHeight,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: baseSize,
      opacity: Math.random() * 0.8 + 0.2,
      hue: baseHue,

      // Type classification
      type: type,
      mass: this.getParticleMass(type),
      energy: Math.random() * 100 + 50,

      // Base visual properties
      originalSize: baseSize,
      glowIntensity: 0,

      // Connection system
      connections: [],
      trail: [],

      // Phase properties (for future expansion)
      phase: Math.random() * Math.PI * 2,
      intensity: this.getParticleIntensity(type),

      // Phase 2: Individual Field Behaviors
      electricCharge: type === ParticleType.ELECTRIC ? (Math.random() - 0.5) * 3 : 0,
      isCharging: Math.random() > 0.5,
      chargePhase: Math.random() * Math.PI * 2,

      waveAmplitude: type === ParticleType.MAGNETIC ? Math.random() * 0.5 + 0.2 : 0,
      waveFrequency: type === ParticleType.MAGNETIC ? Math.random() * 0.05 + 0.02 : 0,
      magneticPhase: Math.random() * Math.PI * 2,

      gravitationalStrength: type === ParticleType.GRAVITATIONAL ? Math.random() * 2 + 1 : 0.1,

      tunnelProbability: type === ParticleType.QUANTUM ? Math.random() * 0.01 + 0.002 : 0,
      quantumState: Math.random() * Math.PI * 2,

      // Visual enhancement
      pulsePhase: Math.random() * Math.PI * 2,
      rotationPhase: 0
    };

    // Phase 1: Type-specific visual adjustments
    this.applyTypeVisualProperties(particle, type, baseHue);

    return particle;
  }

  static createParticles(particleCount: number, canvas: HTMLCanvasElement): IParticle[] {
    const particles: IParticle[] = [];

    // Phase 1: Particle type distribution
    const typeDistribution = [
      { type: ParticleType.REGULAR, count: Math.floor(particleCount * 0.40) },
      { type: ParticleType.ELECTRIC, count: Math.floor(particleCount * 0.15) },
      { type: ParticleType.MAGNETIC, count: Math.floor(particleCount * 0.15) },
      { type: ParticleType.GRAVITATIONAL, count: Math.floor(particleCount * 0.15) },
      { type: ParticleType.QUANTUM, count: Math.floor(particleCount * 0.15) }
    ];

    const totalAssigned = typeDistribution.reduce((sum, dist) => sum + dist.count, 0);
    typeDistribution[0].count += particleCount - totalAssigned;

    for (const distribution of typeDistribution) {
      for (let i = 0; i < distribution.count; i++) {
        particles.push(this.createParticleOfType(distribution.type, canvas));
      }
    }

    return particles;
  }
}