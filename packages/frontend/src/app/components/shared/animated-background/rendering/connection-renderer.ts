import type { ISegment } from '../models';

/**
 * Configuration for connection rendering
 */
export interface ConnectionRenderConfig {
  enableGlow: boolean;
  primaryColor: string;  // Theme primary color (cached)
  secondaryColor: string;  // Theme secondary color for connections
}

/**
 * Connection renderer with optimized batch rendering
 * Uses manual state tracking to minimize redundant state changes
 */
export class ConnectionRenderer {
  constructor(private config: ConnectionRenderConfig) {}
  
  /**
   * Update configuration (e.g., when theme changes)
   */
  updateConfig(config: Partial<ConnectionRenderConfig>): void {
    Object.assign(this.config, config);
  }
  
  /**
   * Draw connection lines from segment list
   * Segments use normalized toroidal vectors, so they may point "off-screen"
   * but the wrapping topology makes them connect correctly
   * 
   * PERFORMANCE OPTIMIZATIONS:
   * - Manual state tracking eliminates redundant ctx property changes
   * - No save/restore in the loop (single reset at end)
   * - No sorting (segments already in spatial locality order from grid query)
   * 
   * @param ctx Canvas rendering context
   * @param segments Array of connection segments to render
   */
  drawConnections(
    ctx: CanvasRenderingContext2D,
    segments: ISegment[]
  ): void {
    // Manual state tracking (eliminates redundant state changes)
    let lastOpacity = -1;
    let lastGlowIntensity = -1;
    let lastLineWidth = -1;
    
    // Render all segments with minimal state changes
    // NOTE: Removed sort (was 0.90ms) - segments are already in spatial locality order
    // from the grid query, which is better for cache coherency
    segments.forEach(segment => {
      // Calculate final opacity with MUCH more dramatic glow effect
      const baseOpacity = segment.opacity * 0.25;
      const glowBoost = this.config.enableGlow ? (0.4 + segment.glowIntensity * 1.2) : 0.5;
      const connectionOpacity = baseOpacity * glowBoost;
      
      // Only update opacity if it changed significantly (avoid redundant state changes)
      if (Math.abs(connectionOpacity - lastOpacity) > 0.01) {
        ctx.globalAlpha = connectionOpacity;
        lastOpacity = connectionOpacity;
      }
      
      // Calculate line width - MUCH thicker when glowing (more dramatic)
      const lineWidth = 0.8 + segment.glowIntensity * 2.5;
      
      // Only update line width if it changed
      if (lineWidth !== lastLineWidth) {
        ctx.lineWidth = lineWidth;
        lastLineWidth = lineWidth;
      }
      
      // Only update color if glow intensity changed (affects color in HSL mode)
      if (!this.config.secondaryColor && segment.glowIntensity !== lastGlowIntensity) {
        // Fallback to HSL if no secondary color provided
        const complementaryHue = (segment.hue + 180) % 360;
        ctx.strokeStyle = `hsl(${complementaryHue}, ${50 + segment.glowIntensity * 40}%, ${55 + segment.glowIntensity * 30}%)`;
        lastGlowIntensity = segment.glowIntensity;
      } else if (this.config.secondaryColor && lastGlowIntensity === -1) {
        // Use theme secondary color for connections
        ctx.strokeStyle = this.config.secondaryColor;
        lastGlowIntensity = 0; // Mark as set
      }
      
      // Draw segment line (no save/restore!)
      ctx.beginPath();
      ctx.moveTo(segment.fromX, segment.fromY);
      ctx.lineTo(segment.toX, segment.toY);
      ctx.stroke();
    });
    
    // Reset state after batch (single restore instead of 1000+)
    ctx.globalAlpha = 1.0;
    ctx.lineWidth = 1.0;
  }
}
