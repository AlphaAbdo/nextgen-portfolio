import type { IParticle, ISegment } from '../models';
import { SpatialHashGrid } from '../spatial';
import { getNormalizedToroidalVector } from '../utils';

/**
 * Configuration for connection building
 */
export interface ConnectionBuilderConfig {
  connectionDistance: number;
  enableGlow: boolean;
  maxConnectionsPerParticle: number; // Cap connections by density
}

/**
 * Performance metrics for connection building
 */
export interface ConnectionMetrics {
  gridBuildTime: number;
  connectionQueryTime: number;
}

/**
 * Result from connection building with timing info
 */
export interface ConnectionBuildResult {
  segments: ISegment[];
  gridBuildTime: number;
  queryAndSegmentTime: number;
}

/**
 * ConnectionBuilder handles spatial queries and segment generation
 * Optimized with Spatial Hash Grid for O(1) lookups
 * Supports toroidal wrapping for full-screen mode
 */
export class ConnectionBuilder {
  private spatialGrid: SpatialHashGrid | null = null;
  
  constructor(
    private config: ConnectionBuilderConfig
  ) {}
  
  /**
   * Update configuration (e.g., when switching between card/fullscreen mode)
   */
  updateConfig(config: Partial<ConnectionBuilderConfig>): void {
    Object.assign(this.config, config);
  }
  
  /**
   * Build Spatial Hash Grid from current particle positions
   * O(n) construction cost - much faster than Quadtree O(n log n)
   */
  private buildSpatialGrid(
    particles: IParticle[],
    width: number,
    height: number
  ): void {
    // Create or reuse spatial grid
    if (!this.spatialGrid) {
      this.spatialGrid = new SpatialHashGrid(width, height, this.config.connectionDistance);
    } else {
      this.spatialGrid.clear();
    }
    
    // Insert all particles - O(1) per insertion
    particles.forEach((particle, index) => {
      this.spatialGrid!.insert(particle, index);
    });
  }
  
  /**
   * Find connections using Spatial Hash Grid and build segments in single pass
   * O(n) grid lookups + O(m) segment creation
   * Uses squared distance comparisons (eliminates expensive sqrt calls)
   * Merges connection finding and segment building for better cache locality
   * 
   * @param particles Array of particles to process
   * @param width Canvas width
   * @param height Canvas height
   * @returns Result object with segments and timing information
   */
  findConnectionsAndBuildSegments(
    particles: IParticle[],
    width: number,
    height: number
  ): ConnectionBuildResult {
    // Build Spatial Grid for current frame - O(n)
    const gridBuildStart = performance.now();
    this.buildSpatialGrid(particles, width, height);
    const gridBuildTime = performance.now() - gridBuildStart;
    
    const segments: ISegment[] = [];
    
    // Pre-calculate squared distance threshold (avoid sqrt in hot loop)
    const maxDistSq = this.config.connectionDistance * this.config.connectionDistance;
    
    // Query and build segments
    const queryStart = performance.now();
    
    // Query nearby particles for each particle and build segments immediately
    particles.forEach((particle, i) => {
      particle.connections = [];
      
      // Query particles within connectionDistance radius - O(1) grid lookup
      const candidates = this.spatialGrid!.query(particle.x, particle.y);
      
      // Store potential connections with their distances for sorting
      const potentialConnections: Array<{ index: number; distSq: number }> = [];
      
      // Check actual distance for each candidate using squared distance (no sqrt!)
      candidates.forEach((j: number) => {
        if (j <= i) return; // Avoid duplicates and self-connection
        
        const other = particles[j];
        const dx = other.x - particle.x;
        const dy = other.y - particle.y;
        const distSq = dx * dx + dy * dy;
        
        if (distSq < maxDistSq) {
          potentialConnections.push({ index: j, distSq });
          
          // OPTIMIZATION: Keep only the closest N during collection (min-heap behavior)
          // If we have more than maxConnections, remove the farthest one
          if (potentialConnections.length > this.config.maxConnectionsPerParticle) {
            // Find and remove the farthest connection
            let maxDistIdx = 0;
            let maxDist = potentialConnections[0].distSq;
            
            for (let k = 1; k < potentialConnections.length; k++) {
              if (potentialConnections[k].distSq > maxDist) {
                maxDist = potentialConnections[k].distSq;
                maxDistIdx = k;
              }
            }
            
            potentialConnections.splice(maxDistIdx, 1);
          }
        }
      });
      
      // Already limited to maxConnectionsPerParticle, no need to sort!
      // Just use them as-is (optional: sort for deterministic rendering order)
      const connectionsToMake = potentialConnections;
      
      // Build segments for the closest connections only
      connectionsToMake.forEach(({ index: j, distSq }) => {
        const other = particles[j];
        particle.connections.push(j);
        
        // BUILD SEGMENT IMMEDIATELY (merged operation)
        // Calculate opacity from squared distance
        const distance = Math.sqrt(distSq);
        const opacity = 1 - (distance / this.config.connectionDistance);
        
        // Average glow intensity and hue
        const glowIntensity = (particle.glowIntensity + other.glowIntensity) / 2;
        const hue = (particle.hue + other.hue) / 2;
        
        // Get normalized toroidal vector (considers wrapping)
        const vector = getNormalizedToroidalVector(particle, other, width, height);
        const segmentDx = vector.dx;
        const segmentDy = vector.dy;
        
        // Create primary segment
        const segment: ISegment = {
          fromX: particle.x,
          fromY: particle.y,
          toX: particle.x + segmentDx,
          toY: particle.y + segmentDy,
          opacity: opacity,
          glowIntensity: glowIntensity,
          hue: hue
        };
        
        segments.push(segment);
        
        // Create wrapped segments if line crosses edges
        const endX = particle.x + segmentDx;
        const endY = particle.y + segmentDy;
        
        const wrapsX = endX < 0 || endX > width;
        const wrapsY = endY < 0 || endY > height;
        
        if (wrapsX || wrapsY) {
          let wrapDx = 0, wrapDy = 0;
          
          if (wrapsX) {
            wrapDx = endX < 0 ? width : -width;
          }
          if (wrapsY) {
            wrapDy = endY < 0 ? height : -height;
          }
          
          // Create wrapped segment
          const wrappedSegment: ISegment = {
            fromX: particle.x + wrapDx,
            fromY: particle.y + wrapDy,
            toX: endX + wrapDx,
            toY: endY + wrapDy,
            opacity: opacity,
            glowIntensity: glowIntensity,
            hue: hue
          };
          
          segments.push(wrappedSegment);
        }
      });
      
      // Handle toroidal wrapping: query wrapped positions ONLY if particle is near edge
      // Optimization: Only check wrapped positions if particle is within connectionDistance of edge
      const nearLeftEdge = particle.x < this.config.connectionDistance;
      const nearRightEdge = particle.x > width - this.config.connectionDistance;
      const nearTopEdge = particle.y < this.config.connectionDistance;
      const nearBottomEdge = particle.y > height - this.config.connectionDistance;
      
      // Only query wrapped positions if particle is near an edge
      if (nearLeftEdge || nearRightEdge || nearTopEdge || nearBottomEdge) {
        const wrappedQueries: Array<{x: number, y: number}> = [];
        
        // Only add relevant wrapped positions based on which edges we're near
        if (nearRightEdge) wrappedQueries.push({ x: particle.x - width, y: particle.y });
        if (nearLeftEdge) wrappedQueries.push({ x: particle.x + width, y: particle.y });
        if (nearBottomEdge) wrappedQueries.push({ x: particle.x, y: particle.y - height });
        if (nearTopEdge) wrappedQueries.push({ x: particle.x, y: particle.y + height });
        
        // Corner cases (only if near both edges)
        if (nearRightEdge && nearBottomEdge) wrappedQueries.push({ x: particle.x - width, y: particle.y - height });
        if (nearLeftEdge && nearBottomEdge) wrappedQueries.push({ x: particle.x + width, y: particle.y - height });
        if (nearRightEdge && nearTopEdge) wrappedQueries.push({ x: particle.x - width, y: particle.y + height });
        if (nearLeftEdge && nearTopEdge) wrappedQueries.push({ x: particle.x + width, y: particle.y + height });
        
        wrappedQueries.forEach(pos => {
          const wrappedCandidates = this.spatialGrid!.query(pos.x, pos.y);
          
          wrappedCandidates.forEach((j: number) => {
            if (j <= i) return;
            if (particle.connections.includes(j)) return; // Already connected
            
            const other = particles[j];
            const dx = other.x - particle.x;
            const dy = other.y - particle.y;
            const distSq = dx * dx + dy * dy;
            
            if (distSq < maxDistSq) {
              particle.connections.push(j);
              
              // BUILD WRAPPED SEGMENT IMMEDIATELY
              const distance = Math.sqrt(distSq);
              const opacity = 1 - (distance / this.config.connectionDistance);
              const glowIntensity = (particle.glowIntensity + other.glowIntensity) / 2;
              const hue = (particle.hue + other.hue) / 2;
              
              const vector = getNormalizedToroidalVector(particle, other, width, height);
              
              const segment: ISegment = {
                fromX: particle.x,
                fromY: particle.y,
                toX: particle.x + vector.dx,
                toY: particle.y + vector.dy,
                  opacity: opacity,
                  glowIntensity: glowIntensity,
                  hue: hue
                };
                
                segments.push(segment);
                
                // Check if wrapped segment crosses edges
                const endX = particle.x + vector.dx;
                const endY = particle.y + vector.dy;
                
                const wrapsX = endX < 0 || endX > width;
                const wrapsY = endY < 0 || endY > height;
                
                if (wrapsX || wrapsY) {
                  let wrapDx = 0, wrapDy = 0;
                  
                  if (wrapsX) {
                    wrapDx = endX < 0 ? width : -width;
                  }
                  if (wrapsY) {
                    wrapDy = endY < 0 ? height : -height;
                  }
                  
                  const wrappedSegment: ISegment = {
                    fromX: particle.x + wrapDx,
                    fromY: particle.y + wrapDy,
                    toX: endX + wrapDx,
                    toY: endY + wrapDy,
                    opacity: opacity,
                    glowIntensity: glowIntensity,
                    hue: hue
                  };
                  
                  segments.push(wrappedSegment);
                }
              }
            });
          });
        }
    });
    
    const queryAndSegmentTime = performance.now() - queryStart;
    
    return {
      segments,
      gridBuildTime,
      queryAndSegmentTime
    };
  }
}
