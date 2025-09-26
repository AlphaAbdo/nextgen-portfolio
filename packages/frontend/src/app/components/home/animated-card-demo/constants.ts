import { ParticleType } from './particle.model';

// Phase 1: Base System Constants
export const BASE_FORCE_CONSTANT = 0.001;
export const DAMPING_FACTOR = 0.99;

// Phase 2: Individual Field Behavior Constants
export const ELECTRIC_FORCE_STRENGTH = 0.04;  // Increased electric strength
export const MAGNETIC_FORCE_STRENGTH = 0.015;
export const GRAVITATIONAL_FORCE_STRENGTH = 0.01;
export const QUANTUM_NOISE_FACTOR = 0.003;

// Phase 3: Binary Force Interaction Constants
export const COULOMB_FORCE_STRENGTH = 0.035;  // Increased electric interaction
export const MAGNETIC_INTERACTION_STRENGTH = 0.018;
export const GRAVITATIONAL_INTERACTION_STRENGTH = 0.012;
export const QUANTUM_ENTANGLEMENT_STRENGTH = 0.008;

// Phase 5: Advanced Effects System Constants
export const RESONANCE_THRESHOLD = 0.8;
export const ENERGY_CASCADE_STRENGTH = 0.05;
export const STANDING_WAVE_AMPLITUDE = 15;
export const FIELD_INTERFERENCE_FACTOR = 0.3;

// Phase 3: Interaction strengths between particle types
export const INTERACTION_MATRIX = {
  // Electric interactions
  ELECTRIC_ELECTRIC: 0.8,   // Strong repulsion/attraction
  ELECTRIC_MAGNETIC: 0.3,   // Electromagnetic coupling
  ELECTRIC_GRAVITATIONAL: 0.1, // Weak gravitational effect
  ELECTRIC_QUANTUM: 0.4,    // Quantum electromagnetic coupling

  // Magnetic interactions
  MAGNETIC_MAGNETIC: 0.3,   // Magnetic field interactions (reduced to prevent clustering)
  MAGNETIC_GRAVITATIONAL: 0.05, // Very weak
  MAGNETIC_QUANTUM: 0.35,   // Quantum magnetic effects

  // Gravitational interactions
  GRAVITATIONAL_GRAVITATIONAL: 0.9, // Strong gravitational coupling
  GRAVITATIONAL_QUANTUM: 0.2,   // Quantum gravity effects

  // Quantum interactions
  QUANTUM_QUANTUM: 0.7,     // Quantum entanglement effects
};

// Other constants
export const PARTICLE_COUNT = 50;
export const CONNECTION_DISTANCE = 80;