import type { IParticle } from '../models';

/**
 * Configuration for particle rendering
 */
export interface ParticleRenderConfig {
  enableGlow: boolean;
  enableTrails: boolean;
  primaryColor: string;  // Theme primary color (cached)
  isLightMode: boolean;  // Theme mode for density-based color adjustments
  time: number; // Animation time for pulsing effects
}

/**
 * Particle renderer handles drawing particles, trails, and decoys for toroidal wrapping
 */
export class ParticleRenderer {
  constructor(private config: ParticleRenderConfig) {}
  
  /**
   * Update configuration (e.g., when theme changes)
   */
  updateConfig(config: Partial<ParticleRenderConfig>): void {
    Object.assign(this.config, config);
  }
  
  /**
   * Draw all particles and their decoys for toroidal wrapping
   * Decoys are rendered inline - no separate data structure needed
   * 
   * @param ctx Canvas rendering context
   * @param particles Array of particles to render
   * @param width Canvas width
   * @param height Canvas height
   */
  drawParticles(
    ctx: CanvasRenderingContext2D,
    particles: IParticle[],
    width: number,
    height: number
  ): void {
    particles.forEach(particle => {
      // Draw particle trails first (only if enabled)
      if (this.config.enableTrails) {
        this.drawParticleTrail(ctx, particle);
      }
      
      // Draw the main particle
      this.drawSingleParticle(ctx, particle, particle.x, particle.y);
      
      // Calculate and render decoys inline (non-Euclidean geometry projection)
      // Use cached radius to determine if particle extends past edges
      const radius = particle.cachedRadius || particle.size;
      
      const leftOverhang = radius - particle.x;
      const rightOverhang = (particle.x + radius) - width;
      const topOverhang = radius - particle.y;
      const bottomOverhang = (particle.y + radius) - height;
      
      // Render decoys on opposite edges when particle extends past boundaries
      if (leftOverhang > 0) {
        this.drawSingleParticle(ctx, particle, particle.x + width, particle.y);
      }
      if (rightOverhang > 0) {
        this.drawSingleParticle(ctx, particle, particle.x - width, particle.y);
      }
      if (topOverhang > 0) {
        this.drawSingleParticle(ctx, particle, particle.x, particle.y + height);
      }
      if (bottomOverhang > 0) {
        this.drawSingleParticle(ctx, particle, particle.x, particle.y - height);
      }
      
      // Diagonal decoys for corner cases
      if (leftOverhang > 0 && topOverhang > 0) {
        this.drawSingleParticle(ctx, particle, particle.x + width, particle.y + height);
      }
      if (rightOverhang > 0 && topOverhang > 0) {
        this.drawSingleParticle(ctx, particle, particle.x - width, particle.y + height);
      }
      if (leftOverhang > 0 && bottomOverhang > 0) {
        this.drawSingleParticle(ctx, particle, particle.x + width, particle.y - height);
      }
      if (rightOverhang > 0 && bottomOverhang > 0) {
        this.drawSingleParticle(ctx, particle, particle.x - width, particle.y - height);
      }
    });
  }
  
  /**
   * Draw a single particle at the specified position
   * Enhanced with density-based excitement:
   * - Low density: Small, calm, subtle colors
   * - High density: Larger, excited, vibrant colors, pulsing
   * 
   * @param ctx Canvas rendering context
   * @param particle Particle to render
   * @param x X position to render at
   * @param y Y position to render at
   */
  private drawSingleParticle(
    ctx: CanvasRenderingContext2D,
    particle: IParticle,
    x: number,
    y: number
  ): void {
    ctx.save();
    ctx.globalAlpha = particle.opacity;
    
    // Excitement-based visual effects
    const excitementLevel = particle.excitementLevel;
    
    // 1. Size: Particles grow DRAMATICALLY when excited (high density)
    // Calm: 0.8x base size (slightly smaller), Excited: 3.5x base size (HUGE!)
    const sizeMultiplier = 0.8 + (excitementLevel * 2.7);
    
    // 2. Pulsing effect for excited particles (lower threshold, more dramatic)
    const pulseMultiplier = excitementLevel > 0.3 
      ? 1 + Math.sin(this.config.time * 0.008 + particle.x * 0.01) * excitementLevel * 0.4
      : 1;
    
    // 3. Opacity: Excited particles are MORE visible
    ctx.globalAlpha = particle.opacity * (0.7 + excitementLevel * 0.3);
    
    // 4. Glow intensity MUCH more dramatic with excitement (works even without enableGlow!)
    const baseGlowSize = this.config.enableGlow ? 3 : 1.5;
    const totalGlowMultiplier = baseGlowSize + particle.glowIntensity * 4 + excitementLevel * 6;
    const glowSize = particle.size * totalGlowMultiplier * sizeMultiplier * pulseMultiplier;
    
    // 5. Color saturation and lightness DRAMATICALLY based on excitement and mode
    const baseSaturation = this.config.isLightMode ? 30 : 55;
    const baseLightness = this.config.isLightMode ? 35 : 50;
    
    // Excited particles are MUCH more saturated and brighter
    const saturation = Math.min(100, baseSaturation + (excitementLevel * 70));
    const lightness = Math.min(95, baseLightness + (excitementLevel * 40));
    
    // Use theme colors for particles
    if (this.config.primaryColor) {
      // Use primary color from theme (todo: could modulate based on excitement)
      ctx.shadowColor = this.config.primaryColor;
      ctx.fillStyle = this.config.primaryColor;
    } else {
      // Fallback to HSL with excitement-driven saturation/lightness
      ctx.shadowColor = `hsl(${particle.hue}, ${saturation}%, ${lightness}%)`;
      ctx.fillStyle = `hsl(${particle.hue}, ${saturation}%, ${lightness}%)`;
    }
    
    // Always apply shadow for depth (even without glow enabled)
    ctx.shadowBlur = glowSize;
    
    // Final render size: base size × excitement × pulse
    const renderSize = particle.size * sizeMultiplier * pulseMultiplier;
    
    // Draw main particle
    ctx.beginPath();
    ctx.arc(x, y, renderSize, 0, Math.PI * 2);
    ctx.fill();
    
    // Draw excitement ring for highly excited particles (makes it super obvious!)
    if (excitementLevel > 0.5) {
      ctx.strokeStyle = `hsla(${particle.hue}, ${saturation}%, ${lightness}%, ${excitementLevel * 0.6})`;
      ctx.lineWidth = renderSize * 0.3;
      ctx.beginPath();
      ctx.arc(x, y, renderSize * (1.3 + excitementLevel * 0.3), 0, Math.PI * 2);
      ctx.stroke();
    }
    
    ctx.restore();
  }
  
  /**
   * Draw trailing effect for each particle
   * DISABLED ON MOBILE FOR PERFORMANCE
   * 
   * @param ctx Canvas rendering context
   * @param particle Particle with trail to render
   */
  private drawParticleTrail(
    ctx: CanvasRenderingContext2D,
    particle: IParticle
  ): void {
    if (!this.config.enableTrails || particle.trail.length < 2) return;
    
    ctx.save();
    
    // Use theme colors for trails
    if (this.config.primaryColor) {
      ctx.strokeStyle = this.config.primaryColor;
    } else {
      ctx.strokeStyle = `hsl(${particle.hue}, 60%, 50%)`;
    }
    
    ctx.lineWidth = 1;
    ctx.lineCap = 'round';
    
    for (let i = 1; i < particle.trail.length; i++) {
      const current = particle.trail[i];
      const previous = particle.trail[i - 1];
      
      ctx.globalAlpha = current.opacity * particle.opacity;
      ctx.beginPath();
      ctx.moveTo(previous.x, previous.y);
      ctx.lineTo(current.x, current.y);
      ctx.stroke();
    }
    
    ctx.restore();
  }
}
