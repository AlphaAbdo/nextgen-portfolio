import type { IParticle } from '../models';
import { calculateToroidalDistance } from '../utils';

/**
 * Mouse state for particle interactions
 */
export interface MouseState {
  x: number;
  y: number;
  isPressed: boolean;
}

/**
 * Configuration for particle physics
 */
export interface ParticlePhysicsConfig {
  enableDensityEffects: boolean;
  enableTrails: boolean;
  connectionDistance: number;
  time: number;  // Current animation time
}

/**
 * ParticleUpdater handles particle physics, movement, and interactions
 * Includes mouse interaction (attraction/repulsion) and density-based glow effects
 */
export class ParticleUpdater {
  constructor(
    private config: ParticlePhysicsConfig
  ) {}
  
  /**
   * Update configuration (e.g., when settings change)
   */
  updateConfig(config: Partial<ParticlePhysicsConfig>): void {
    Object.assign(this.config, config);
  }
  
  /**
   * Calculate density-based glow intensity for a particle
   * O(n) per particle with optimization: excludes 120px radius around mouse
   * 
   * @param particle Current particle to calculate glow for
   * @param particles All particles array
   * @param mouse Current mouse state
   * @param width Canvas width
   * @param height Canvas height
   */
  calculateDensityGlow(
    particle: IParticle,
    particles: IParticle[],
    mouse: MouseState,
    width: number,
    height: number
  ): void {
    if (!this.config.enableDensityEffects) {
      particle.glowIntensity = 0;
      return;
    }
    
    // INCREASED detection radius for more obvious density effects
    const glowRadius = 150;
    const mouseExclusionRadius = 120;
    
    // Skip glow calculation if particle is within mouse exclusion radius (toroidal distance)
    const mouseDist = calculateToroidalDistance(particle.x, particle.y, mouse.x, mouse.y, width, height);
    
    if (mouseDist < mouseExclusionRadius) {
      particle.glowIntensity = Math.max(0, particle.glowIntensity - 0.1);
      return;
    }
    
    // Count nearby particles using toroidal distance (consider wrapping)
    let nearbyCount = 0;
    
    for (let j = 0; j < particles.length; j++) {
      const other = particles[j];
      if (other === particle) continue;
      
      const dist = calculateToroidalDistance(particle.x, particle.y, other.x, other.y, width, height);
      
      if (dist < glowRadius) {
        nearbyCount++;
      }
    }
    
    // Store density count for excitement calculation
    particle.densityCount = nearbyCount;
    
    // Calculate excitement level based on density (0-1 scale)
    // MUCH MORE SENSITIVE: Excitement with just 2-3 neighbors!
    // Low density (0-1): calm (0-0.25)
    // Medium density (2-3): moderate (0.4-0.6)
    // High density (4-5): very excited (0.75-1.0)
    const excitementTarget = Math.min(1.0, Math.pow(nearbyCount / 5, 0.9));
    
    // Smooth transition to target excitement (organic feel)
    particle.excitementLevel = particle.excitementLevel + (excitementTarget - particle.excitementLevel) * 0.15;
    
    // Apply glow effect when 3+ particles nearby (density threshold)
    // Gradual fade when below threshold
    if (nearbyCount >= 3) {
      const targetIntensity = Math.min(nearbyCount / 10, 1);
      particle.glowIntensity = particle.glowIntensity + (targetIntensity - particle.glowIntensity) * 0.1;
    } else {
      particle.glowIntensity = Math.max(0, particle.glowIntensity - 0.05);
    }
  }
  
  /**
   * Update particle physics, position, and effects
   * Handles:
   * - Position updates (velocity integration)
   * - Mouse interaction (attraction/repulsion within 150px)
   * - Boundary behavior (bounce for card mode, toroidal wrap for full-screen)
   * - Trail management (8-point trails with fading)
   * - Opacity calculation (based on speed and glow)
   * - Hue shifting
   * 
   * @param particles Array of particles to update
   * @param mouse Current mouse state
   * @param width Canvas width
   * @param height Canvas height
   */
  updateParticles(
    particles: IParticle[],
    mouse: MouseState,
    width: number,
    height: number
  ): void {
    const mouseInteractionRadius = 150;
    const mouseInteractionRadiusSq = mouseInteractionRadius * mouseInteractionRadius;
    
    particles.forEach((particle, index) => {
      // Cache radius calculation (used for boundary checks)
      const radius = particle.size * (1 + particle.glowIntensity * 0.5);
      
      // Mouse interaction: attraction (normal) or repulsion (pressed)
      // Uses toroidal distance (wraps at edges)
      
      // Calculate toroidal distance
      const dist = calculateToroidalDistance(particle.x, particle.y, mouse.x, mouse.y, width, height);
      
      // Calculate shortest displacement vector FROM MOUSE TO PARTICLE (for repulsion direction)
      let dx_direct = particle.x - mouse.x;
      let dy_direct = particle.y - mouse.y;
      
      let dx: number, dy: number;
      
      // Check if wrapping gives shorter path for X
      if (Math.abs(dx_direct) > width / 2) {
        // Wrap around: if direct is positive, wrap negative and vice versa
        dx = dx_direct > 0 ? dx_direct - width : dx_direct + width;
      } else {
        dx = dx_direct;
      }
      
      // Check if wrapping gives shorter path for Y
      if (Math.abs(dy_direct) > height / 2) {
        dy = dy_direct > 0 ? dy_direct - height : dy_direct + height;
      } else {
        dy = dy_direct;
      }
      
      // dx and dy now point in the shortest toroidal direction from mouse to particle
      
      if (dist < mouseInteractionRadius) {
        const force = (mouseInteractionRadius - dist) / mouseInteractionRadius;
        
        if (mouse.isPressed) {
          // Repulsion mode: push particles away from mouse
          const angle = Math.atan2(dy, dx);
          particle.vx += Math.cos(angle) * force * 0.08;
          particle.vy += Math.sin(angle) * force * 0.08;
        } else {
          // Attraction mode: pull particles toward mouse
          const angle = Math.atan2(dy, dx);
          particle.vx -= Math.cos(angle) * force * 0.015;
          particle.vy -= Math.sin(angle) * force * 0.015;
        }
      }
      
      // Apply drift based on time for organic movement
      particle.vx += Math.sin(this.config.time * 0.01 + index * 0.1) * 0.002;
      particle.vy += Math.cos(this.config.time * 0.008 + index * 0.15) * 0.002;
      
      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;
      
      // Apply friction
      particle.vx *= 0.99;
      particle.vy *= 0.99;
      
      // Boundary behavior: toroidal wrapping (particles wrap around edges)
      if (particle.x < 0) particle.x += width;
      if (particle.x > width) particle.x -= width;
      if (particle.y < 0) particle.y += height;
      if (particle.y > height) particle.y -= height;
      
      // Trail management: maintain 8-point trail with fading
      if (this.config.enableTrails) {
        if (!particle.trail) {
          particle.trail = [];
        }
        
        // Add current position to trail with full opacity
        particle.trail.push({ x: particle.x, y: particle.y, opacity: 1 });
        
        // Limit trail length to 8 points
        if (particle.trail.length > 8) {
          particle.trail.shift();
        }
      } else {
        // Clear trail when trails are disabled
        particle.trail = [];
      }
      
      // Opacity calculation: based on speed and glow intensity
      const speed = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy);
      const baseOpacity = Math.min(0.9, 0.3 + speed * 20);
      
      // Add glow contribution only if glow effects are enabled
      if (this.config.enableDensityEffects) {
        particle.opacity = baseOpacity + particle.glowIntensity * 0.3;
      } else {
        particle.opacity = baseOpacity;
      }
      
      // Hue shifting over time (subtle color variation) - slower for better theme integration
      particle.hue = (particle.hue + 0.1) % 360;
      
      // Cache visual radius for rendering (avoids recalculating 3x per frame)
      particle.cachedRadius = particle.size * (1 + particle.glowIntensity * 0.5);
    });
  }
}
