/**
 * Particle data structure for animated background
 */
export interface IParticle {
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
  // Cached visual bounds (updated per frame to avoid recalculation)
  cachedRadius?: number;
  // Density-based excitement metrics
  excitementLevel: number; // 0-1: How excited/energized the particle is based on density
  densityCount: number; // Number of nearby particles (for excitement calculation)
}
