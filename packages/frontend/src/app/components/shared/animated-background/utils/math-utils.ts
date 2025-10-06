import { IParticle } from '../models/particle.interface';

/**
 * Calculate toroidal (wrapping) distance between two points
 * Considers screen wrapping for shortest path calculation
 * 
 * @param x1 First point X coordinate
 * @param y1 First point Y coordinate
 * @param x2 Second point X coordinate
 * @param y2 Second point Y coordinate
 * @param width Canvas width (wrapping boundary)
 * @param height Canvas height (wrapping boundary)
 * @returns Shortest distance considering toroidal topology
 */
export function calculateToroidalDistance(
  x1: number, 
  y1: number, 
  x2: number, 
  y2: number, 
  width: number, 
  height: number
): number {
  // Calculate absolute differences
  let dx = Math.abs(x1 - x2);
  let dy = Math.abs(y1 - y2);
  
  // Consider wrapping - if distance is more than half the dimension,
  // the shorter path is to go around the other side
  if (dx > width / 2) {
    dx = width - dx;
  }
  if (dy > height / 2) {
    dy = height - dy;
  }
  
  // Return shortest distance
  return Math.sqrt(dx * dx + dy * dy);
}

/**
 * Calculate normalized toroidal vector from one particle to another
 * Returns the shortest displacement vector in toroidal space
 * The vector may point "off-screen" but wrapping makes it connect correctly
 * 
 * For each axis, considers 3 cases:
 * - Direct path: to - from
 * - Wrap-right/down: (to + dimension) - from  
 * - Wrap-left/up: (to - dimension) - from
 * 
 * Chooses shortest displacement by absolute value
 * 
 * @param from Source particle
 * @param to Target particle
 * @param width Canvas width
 * @param height Canvas height
 * @returns Object with dx and dy representing shortest toroidal displacement
 */
export function getNormalizedToroidalVector(
  from: IParticle, 
  to: IParticle, 
  width: number, 
  height: number
): { dx: number; dy: number } {
  // Calculate 3 possible X displacements
  const directX = to.x - from.x;
  const wrapRightX = (to.x + width) - from.x;
  const wrapLeftX = (to.x - width) - from.x;
  
  // Find shortest X displacement by absolute value
  const xOptions = [directX, wrapRightX, wrapLeftX];
  const dx = xOptions.reduce((shortest, current) => 
    Math.abs(current) < Math.abs(shortest) ? current : shortest
  );
  
  // Calculate 3 possible Y displacements
  const directY = to.y - from.y;
  const wrapDownY = (to.y + height) - from.y;
  const wrapUpY = (to.y - height) - from.y;
  
  // Find shortest Y displacement by absolute value
  const yOptions = [directY, wrapDownY, wrapUpY];
  const dy = yOptions.reduce((shortest, current) => 
    Math.abs(current) < Math.abs(shortest) ? current : shortest
  );
  
  return { dx, dy };
}
