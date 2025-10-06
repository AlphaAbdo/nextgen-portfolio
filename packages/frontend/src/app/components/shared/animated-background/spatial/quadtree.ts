import { IParticle } from '../models/particle.interface';

/**
 * Quadtree spatial bounds
 */
export interface IQuadtreeBounds {
  x: number;      // Center X
  y: number;      // Center Y
  width: number;  // Half-width
  height: number; // Half-height
}

/**
 * Quadtree node for dynamic spatial partitioning
 * Subdivides based on particle density (not fixed grid)
 * Supports toroidal wrapping for edge queries
 * NOTE: Currently replaced by SpatialHashGrid for better performance
 * Kept for reference and potential future use
 */
export class QuadtreeNode {
  bounds: IQuadtreeBounds;
  particles: number[] = [];           // Particle indices in this node (leaf only)
  children: QuadtreeNode[] | null = null;  // 4 children when subdivided: [NW, NE, SW, SE]
  cachedDensity: number = 0;          // Sum of particle densities (for threshold checks)
  isLeaf: boolean = true;
  
  // Configuration
  private readonly maxParticles: number;
  private readonly maxDepth: number;
  private readonly densityThreshold: number;
  private currentDepth: number;
  private particleGetter: (index: number) => IParticle;
  
  constructor(
    bounds: IQuadtreeBounds,
    particleGetter: (index: number) => IParticle,
    maxParticles: number = 4,     // Subdivide when more than 4 particles
    maxDepth: number = 8,          // Prevent infinite subdivision
    densityThreshold: number = 1.0, // Subdivide when density exceeds threshold
    depth: number = 0
  ) {
    this.bounds = bounds;
    this.particleGetter = particleGetter;
    this.maxParticles = maxParticles;
    this.maxDepth = maxDepth;
    this.densityThreshold = densityThreshold;
    this.currentDepth = depth;
  }
  
  /**
   * Insert particle index into quadtree
   * @param index Particle index in global particles array
   * @param particle Particle data (for position/density)
   */
  insert(index: number, particle: IParticle): void {
    if (!this.isLeaf) {
      // Not a leaf, insert into appropriate child
      const childIndex = this.getChildIndex(particle.x, particle.y);
      this.children![childIndex].insert(index, particle);
      return;
    }
    
    // Leaf node: add particle
    this.particles.push(index);
    this.cachedDensity += particle.size * particle.size; // Density ≈ particle area
    
    // Check if we need to subdivide
    if (this.shouldSubdivide()) {
      this.subdivide();
    }
  }
  
  /**
   * Determine if node should subdivide based on particle count and density
   */
  private shouldSubdivide(): boolean {
    if (this.currentDepth >= this.maxDepth) return false;
    if (this.particles.length <= this.maxParticles) return false;
    
    // Calculate density: cachedDensity / node area
    const nodeArea = (this.bounds.width * 2) * (this.bounds.height * 2);
    const density = this.cachedDensity / nodeArea;
    
    return density > this.densityThreshold;
  }
  
  /**
   * Subdivide node into 4 children and redistribute particles
   */
  private subdivide(): void {
    const hw = this.bounds.width / 2;
    const hh = this.bounds.height / 2;
    const cx = this.bounds.x;
    const cy = this.bounds.y;
    
    // Create 4 children: NW, NE, SW, SE
    this.children = [
      new QuadtreeNode(
        { x: cx - hw, y: cy - hh, width: hw, height: hh },
        this.particleGetter,
        this.maxParticles, this.maxDepth, this.densityThreshold, this.currentDepth + 1
      ),
      new QuadtreeNode(
        { x: cx + hw, y: cy - hh, width: hw, height: hh },
        this.particleGetter,
        this.maxParticles, this.maxDepth, this.densityThreshold, this.currentDepth + 1
      ),
      new QuadtreeNode(
        { x: cx - hw, y: cy + hh, width: hw, height: hh },
        this.particleGetter,
        this.maxParticles, this.maxDepth, this.densityThreshold, this.currentDepth + 1
      ),
      new QuadtreeNode(
        { x: cx + hw, y: cy + hh, width: hw, height: hh },
        this.particleGetter,
        this.maxParticles, this.maxDepth, this.densityThreshold, this.currentDepth + 1
      )
    ];
    
    this.isLeaf = false;
    
    // Redistribute particles to children
    const particlesToRedistribute = [...this.particles];
    this.particles = [];
    this.cachedDensity = 0;
    
    particlesToRedistribute.forEach(index => {
      const particle = this.particleGetter(index);
      const childIndex = this.getChildIndex(particle.x, particle.y);
      this.children![childIndex].insert(index, particle);
    });
  }
  
  /**
   * Determine which child quadrant a point belongs to
   * @returns 0=NW, 1=NE, 2=SW, 3=SE
   */
  private getChildIndex(x: number, y: number): number {
    const left = x < this.bounds.x;
    const top = y < this.bounds.y;
    
    if (top && left) return 0;      // NW
    if (top && !left) return 1;     // NE
    if (!top && left) return 2;     // SW
    return 3;                        // SE
  }
  
  /**
   * Query particles within a circular range
   * @param cx Center X
   * @param cy Center Y
   * @param radius Search radius
   * @returns Array of particle indices
   */
  query(cx: number, cy: number, radius: number): number[] {
    const result: number[] = [];
    
    // Check if circle intersects this node's bounds
    if (!this.intersectsCircle(cx, cy, radius)) {
      return result;
    }
    
    if (this.isLeaf) {
      // Leaf node: return particles in this node
      return [...this.particles];
    }
    
    // Not a leaf: query all children
    for (const child of this.children!) {
      result.push(...child.query(cx, cy, radius));
    }
    
    return result;
  }
  
  /**
   * Check if a circle intersects this node's bounds
   */
  private intersectsCircle(cx: number, cy: number, radius: number): boolean {
    // Find closest point on rectangle to circle center
    const closestX = Math.max(
      this.bounds.x - this.bounds.width,
      Math.min(cx, this.bounds.x + this.bounds.width)
    );
    const closestY = Math.max(
      this.bounds.y - this.bounds.height,
      Math.min(cy, this.bounds.y + this.bounds.height)
    );
    
    // Check if closest point is within circle
    const dx = cx - closestX;
    const dy = cy - closestY;
    return (dx * dx + dy * dy) <= (radius * radius);
  }
  
  /**
   * Clear all particles from tree (for rebuild)
   */
  clear(): void {
    this.particles = [];
    this.cachedDensity = 0;
    this.children = null;
    this.isLeaf = true;
  }
}
