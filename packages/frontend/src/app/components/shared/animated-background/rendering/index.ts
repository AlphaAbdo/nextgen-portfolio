/**
 * Rendering module - Canvas rendering for background, particles, and connections
 * 
 * This module handles:
 * - Background gradient rendering with caching
 * - Particle rendering with trails and glow effects
 * - Decoy particles for toroidal wrapping
 * - Connection line rendering with optimized batch operations
 */

export { BackgroundRenderer } from './background-renderer';
export { ParticleRenderer, type ParticleRenderConfig } from './particle-renderer';
export { ConnectionRenderer, type ConnectionRenderConfig } from './connection-renderer';
