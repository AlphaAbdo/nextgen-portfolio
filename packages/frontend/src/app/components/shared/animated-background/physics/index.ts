/**
 * Physics module - Particle physics and connection building
 * 
 * This module handles:
 * - Particle movement and interactions
 * - Mouse attraction/repulsion
 * - Density-based glow effects
 * - Spatial grid construction
 * - Connection finding and segment building
 */

export { ParticleUpdater, type MouseState, type ParticlePhysicsConfig } from './particle-updater';
export { ConnectionBuilder, type ConnectionBuilderConfig, type ConnectionBuildResult } from './connection-builder';
