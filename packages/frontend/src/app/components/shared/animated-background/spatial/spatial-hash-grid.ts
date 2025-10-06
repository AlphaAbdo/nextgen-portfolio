import { IParticle } from '../models/particle.interface';

/**
 * Spatial Hash Grid for O(1) particle lookups
 * Replaces Quadtree for better performance with uniform distributions
 * Fixed-size grid cells eliminate tree construction overhead
 * Optimized to minimize allocations in hot path
 */
export class SpatialHashGrid {
  private grid: Map<string, number[]>;
  private cellSize: number;
  private width: number;
  private height: number;
  private cellArrayPool: number[][] = []; // Reuse cell arrays
  
  constructor(width: number, height: number, cellSize: number = 120) {
    this.grid = new Map();
    this.cellSize = cellSize;
    this.width = width;
    this.height = height;
  }
  
  /**
   * Clear all grid cells - reuse arrays to avoid allocation
   */
  clear(): void {
    // Return cell arrays to pool for reuse
    this.grid.forEach(cell => {
      cell.length = 0; // Clear array
      this.cellArrayPool.push(cell);
    });
    this.grid.clear();
  }
  
  /**
   * Insert particle into grid - O(1) operation
   * Optimized to minimize string allocations
   * @param particle Particle data
   * @param index Particle index in global array
   */
  insert(particle: IParticle, index: number): void {
    const cellX = Math.floor(particle.x / this.cellSize);
    const cellY = Math.floor(particle.y / this.cellSize);
    const key = `${cellX},${cellY}`;
    
    let cell = this.grid.get(key);
    if (!cell) {
      // Reuse pooled array if available
      cell = this.cellArrayPool.pop() || [];
      this.grid.set(key, cell);
    }
    cell.push(index);
  }
  
  /**
   * Query particles in neighboring cells - O(1) operation
   * Checks 9 cells (3×3 grid) around query point
   * Optimized to avoid array spread operator
   * @param x Query X coordinate
   * @param y Query Y coordinate
   * @returns Array of particle indices
   */
  query(x: number, y: number): number[] {
    const cellX = Math.floor(x / this.cellSize);
    const cellY = Math.floor(y / this.cellSize);
    const result: number[] = [];
    
    // Check 9 neighboring cells (including center)
    for (let dx = -1; dx <= 1; dx++) {
      for (let dy = -1; dy <= 1; dy++) {
        const key = `${cellX + dx},${cellY + dy}`;
        const cell = this.grid.get(key);
        if (cell) {
          // Manual loop instead of spread operator (avoids allocation)
          for (let i = 0; i < cell.length; i++) {
            result.push(cell[i]);
          }
        }
      }
    }
    
    return result;
  }
}
