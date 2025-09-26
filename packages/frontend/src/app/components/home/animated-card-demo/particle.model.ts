// Phase 1: Clean Particle Type System
export enum ParticleType {
  REGULAR = 'regular',
  ELECTRIC = 'electric',
  MAGNETIC = 'magnetic',
  GRAVITATIONAL = 'gravitational',
  QUANTUM = 'quantum'
}

// Phase 1: Enhanced Base Particle Interface
export interface IParticle {
  // Core Properties
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  hue: number;

  // Type Classification
  type: ParticleType;
  mass: number;
  energy: number;

  // Base Visual Properties
  originalSize: number;
  glowIntensity: number;

  // Connection System
  connections: number[];
  trail: {x: number, y: number, opacity: number}[];

  // Phase Properties (prepared for later phases)
  phase: number;
  intensity: number;

  // Phase 2: Individual Field Behaviors
  // Electric Field Properties
  electricCharge: number;
  isCharging: boolean;
  chargePhase: number;

  // Magnetic Field Properties
  waveAmplitude: number;
  waveFrequency: number;
  magneticPhase: number;

  // Gravitational Properties
  gravitationalStrength: number;

  // Quantum Properties
  tunnelProbability: number;
  quantumState: number;

  // Visual Enhancement Properties
  pulsePhase: number;
  rotationPhase: number;
}