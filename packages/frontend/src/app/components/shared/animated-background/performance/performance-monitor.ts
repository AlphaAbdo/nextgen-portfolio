/**
 * Performance Monitor
 * 
 * Tracks and manages animation performance metrics including:
 * - Frame timing (avg, min, max)
 * - FPS calculation
 * - Dropped frame detection
 * - Memory usage tracking
 * - Component-level timing breakdown
 * - Adaptive particle count adjustment based on performance budget
 */

export interface PerformanceMetrics {
  frameCount: number;
  totalFrameTime: number;
  maxFrameTime: number;
  minFrameTime: number;
  lastLogTime: number;
  particleUpdateTime: number;
  connectionTime: number;
  renderTime: number;
  memoryUsage: number;
  droppedFrames: number;
  targetFPS: number;
  
  // Detailed sub-component timings
  gridBuildTime: number;
  connectionQueryTime: number;
  segmentBuildTime: number;
  connectionRenderTime: number;
  particleRenderTime: number;
  backgroundRenderTime: number;
  clearTime: number;
}

export interface PerformanceConfig {
  enabled: boolean;
  frameBudgetMs: number;
  minParticles: number;
  maxParticles: number;
  targetSurfaceCoverage: number;
  sampleWindowSize: number;
  adjustmentCooldownMs: number;
  logIntervalMs: number;
  particleSurfacePercentage: number;
}

export interface AdaptiveAdjustmentResult {
  adjusted: boolean;
  newParticleCount: number;
  reason?: string;
  medianFrameTime?: number;
}

export class PerformanceMonitor {
  private metrics: PerformanceMetrics;
  private config: PerformanceConfig;
  private frameTimeSamples: number[] = [];
  private lastAdjustmentTime = 0;
  
  constructor(config: Partial<PerformanceConfig> = {}) {
    this.config = {
      enabled: config.enabled ?? true,
      frameBudgetMs: config.frameBudgetMs ?? 10,
      minParticles: config.minParticles ?? 20,
      maxParticles: config.maxParticles ?? 150,
      targetSurfaceCoverage: config.targetSurfaceCoverage ?? 0.003,
      sampleWindowSize: config.sampleWindowSize ?? 60,
      adjustmentCooldownMs: config.adjustmentCooldownMs ?? 3000,
      logIntervalMs: config.logIntervalMs ?? 5000,
      particleSurfacePercentage: config.particleSurfacePercentage ?? 0.00008
    };
    
    this.metrics = this.createFreshMetrics();
  }
  
  private createFreshMetrics(): PerformanceMetrics {
    return {
      frameCount: 0,
      totalFrameTime: 0,
      maxFrameTime: 0,
      minFrameTime: Infinity,
      lastLogTime: performance.now(),
      particleUpdateTime: 0,
      connectionTime: 0,
      renderTime: 0,
      memoryUsage: 0,
      droppedFrames: 0,
      targetFPS: 60,
      gridBuildTime: 0,
      connectionQueryTime: 0,
      segmentBuildTime: 0,
      connectionRenderTime: 0,
      particleRenderTime: 0,
      backgroundRenderTime: 0,
      clearTime: 0
    };
  }
  
  /**
   * Update performance metrics for the current frame
   */
  updateMetrics(frameTime: number): void {
    if (!this.config.enabled) return;
    
    this.metrics.frameCount++;
    this.metrics.totalFrameTime += frameTime;
    this.metrics.maxFrameTime = Math.max(this.metrics.maxFrameTime, frameTime);
    this.metrics.minFrameTime = Math.min(this.metrics.minFrameTime, frameTime);
    
    // Track dropped frames (frames that took longer than 16.67ms for 60fps)
    if (frameTime > 16.67) {
      this.metrics.droppedFrames++;
    }
    
    // Update memory usage (if available)
    if ((performance as any).memory) {
      this.metrics.memoryUsage = (performance as any).memory.usedJSHeapSize / 1024 / 1024; // MB
    }
  }
  
  /**
   * Record timing for a specific component
   */
  recordComponentTime(component: keyof Pick<PerformanceMetrics, 
    'particleUpdateTime' | 'connectionTime' | 'renderTime' | 'gridBuildTime' | 
    'connectionQueryTime' | 'segmentBuildTime' | 'connectionRenderTime' | 
    'particleRenderTime' | 'backgroundRenderTime' | 'clearTime'>, 
    time: number): void {
    if (!this.config.enabled) return;
    this.metrics[component] += time;
  }
  
  /**
   * Adaptive particle count adjustment based on frame budget
   * 
   * Algorithm prioritizes staying under frameBudgetMs while maximizing visual density
   * - Uses rolling window median (not average) to avoid spike bias
   * - Adjusts based on surface coverage, not fixed particle count
   * - Cooldown period prevents oscillation from Angular component loads
   * - Conservative: Only adjust if consistently over/under budget
   */
  calculateAdaptiveAdjustment(
    frameTime: number,
    currentParticleCount: number,
    canvasWidth: number,
    canvasHeight: number,
    particles: Array<{ cachedRadius?: number; size: number }>
  ): AdaptiveAdjustmentResult {
    if (!this.config.enabled) {
      return { adjusted: false, newParticleCount: currentParticleCount };
    }
    
    // Add current frame time to rolling window
    this.frameTimeSamples.push(frameTime);
    if (this.frameTimeSamples.length > this.config.sampleWindowSize) {
      this.frameTimeSamples.shift();
    }
    
    // Need enough samples and cooldown period elapsed
    const now = performance.now();
    if (this.frameTimeSamples.length < this.config.sampleWindowSize || 
        now - this.lastAdjustmentTime < this.config.adjustmentCooldownMs) {
      return { adjusted: false, newParticleCount: currentParticleCount };
    }
    
    // Calculate MEDIAN frame time (resistant to spikes from Angular/user interaction)
    const sortedSamples = [...this.frameTimeSamples].sort((a, b) => a - b);
    const medianFrameTime = sortedSamples[Math.floor(sortedSamples.length / 2)];
    
    // Calculate current surface coverage
    const canvasArea = canvasWidth * canvasHeight;
    const particleArea = particles.reduce((sum, p) => {
      const radius = p.cachedRadius || p.size;
      return sum + Math.PI * radius * radius;
    }, 0);
    const currentCoverage = particleArea / canvasArea;
    
    // Decision logic: Stay under budget while maximizing coverage
    if (medianFrameTime > this.config.frameBudgetMs && currentParticleCount > this.config.minParticles) {
      // Over budget: reduce particles (decrease coverage)
      const reductionFactor = 0.9; // Reduce by 10%
      const targetCoverage = currentCoverage * reductionFactor;
      const newCount = this.calculateParticleCountForCoverage(targetCoverage, canvasArea);
      
      this.lastAdjustmentTime = now;
      this.frameTimeSamples = []; // Clear samples after adjustment
      
      return {
        adjusted: true,
        newParticleCount: newCount,
        reason: `Reduced particles (median: ${medianFrameTime.toFixed(2)}ms > ${this.config.frameBudgetMs}ms)`,
        medianFrameTime
      };
      
    } else if (medianFrameTime < this.config.frameBudgetMs * 0.7 && currentParticleCount < this.config.maxParticles) {
      // Well under budget (< 70% of budget): can add more particles for richer visuals
      const increaseFactor = 1.1; // Increase by 10%
      const targetCoverage = Math.min(currentCoverage * increaseFactor, this.config.targetSurfaceCoverage);
      const newCount = this.calculateParticleCountForCoverage(targetCoverage, canvasArea);
      
      this.lastAdjustmentTime = now;
      this.frameTimeSamples = []; // Clear samples after adjustment
      
      return {
        adjusted: true,
        newParticleCount: newCount,
        reason: `Increased particles (median: ${medianFrameTime.toFixed(2)}ms < ${(this.config.frameBudgetMs * 0.7).toFixed(2)}ms)`,
        medianFrameTime
      };
    }
    
    return { adjusted: false, newParticleCount: currentParticleCount };
  }
  
  /**
   * Calculate particle count needed to achieve target surface coverage
   */
  private calculateParticleCountForCoverage(targetCoverage: number, canvasArea: number): number {
    const avgParticleRadius = Math.sqrt(canvasArea * this.config.particleSurfacePercentage / Math.PI);
    const avgParticleArea = Math.PI * avgParticleRadius * avgParticleRadius;
    
    // Calculate how many particles needed for target coverage
    const targetCount = Math.round((targetCoverage * canvasArea) / avgParticleArea);
    return Math.max(this.config.minParticles, Math.min(this.config.maxParticles, targetCount));
  }
  
  /**
   * Log performance metrics to console
   */
  logMetrics(particleCount: number, segmentCount: number): void {
    if (!this.config.enabled) return;
    
    const now = performance.now();
    if (now - this.metrics.lastLogTime < this.config.logIntervalMs) {
      return;
    }
    
    const avgFrameTime = this.metrics.totalFrameTime / this.metrics.frameCount;
    const avgFPS = 1000 / avgFrameTime;
    const dropRatePercent = (this.metrics.droppedFrames / this.metrics.frameCount) * 100;
    
    // Calculate component breakdown
    const avgParticleUpdate = this.metrics.particleUpdateTime / this.metrics.frameCount;
    const avgConnection = this.metrics.connectionTime / this.metrics.frameCount;
    const avgRender = this.metrics.renderTime / this.metrics.frameCount;
    
    // Calculate detailed sub-component times
    const avgGridBuild = this.metrics.gridBuildTime / this.metrics.frameCount;
    const avgConnectionQuery = this.metrics.connectionQueryTime / this.metrics.frameCount;
    const avgConnectionRender = this.metrics.connectionRenderTime / this.metrics.frameCount;
    const avgParticleRender = this.metrics.particleRenderTime / this.metrics.frameCount;
    const avgBackground = this.metrics.backgroundRenderTime / this.metrics.frameCount;
    const avgClear = this.metrics.clearTime / this.metrics.frameCount;
    
    const particlePercent = (avgParticleUpdate / avgFrameTime) * 100;
    const connectionPercent = (avgConnection / avgFrameTime) * 100;
    const renderPercent = (avgRender / avgFrameTime) * 100;
    
    // Calculate "Other" time (frame overhead not captured in main components)
    const accountedTime = avgClear + avgBackground + avgParticleUpdate + avgConnection + avgRender;
    const otherTime = avgFrameTime - accountedTime;
    
    console.log(`
┌─────────────────────────────────────────────────────────────┐
│ 🎬 Animated Background Performance (${particleCount} particles, ${segmentCount} segments)
├─────────────────────────────────────────────────────────────┤
│ Frame Stats:
│   Average Frame Time: ${avgFrameTime.toFixed(2)}ms
│   Average FPS:        ${avgFPS.toFixed(1)} fps
│   Min Frame Time:     ${this.metrics.minFrameTime.toFixed(2)}ms
│   Max Frame Time:     ${this.metrics.maxFrameTime.toFixed(2)}ms
│   Dropped Frames:     ${this.metrics.droppedFrames} (${dropRatePercent.toFixed(1)}%)
│
│ Component Breakdown:
│   Canvas Clear:       ${avgClear.toFixed(2)}ms (${((avgClear/avgFrameTime)*100).toFixed(1)}%)
│   Background:         ${avgBackground.toFixed(2)}ms (${((avgBackground/avgFrameTime)*100).toFixed(1)}%)
│   Particle Update:    ${avgParticleUpdate.toFixed(2)}ms (${particlePercent.toFixed(1)}%)
│
│   Connection Finding: ${avgConnection.toFixed(2)}ms (${connectionPercent.toFixed(1)}%) [Spatial Hash Grid O(1)]
│     ├─ Grid Build:    ${avgGridBuild.toFixed(2)}ms (${((avgGridBuild/avgFrameTime)*100).toFixed(1)}%)
│     └─ Query+Segment: ${avgConnectionQuery.toFixed(2)}ms (${((avgConnectionQuery/avgFrameTime)*100).toFixed(1)}%)
│
│   Rendering:          ${avgRender.toFixed(2)}ms (${renderPercent.toFixed(1)}%)
│     ├─ Connections:   ${avgConnectionRender.toFixed(2)}ms (${((avgConnectionRender/avgFrameTime)*100).toFixed(1)}%)
│     └─ Particles:     ${avgParticleRender.toFixed(2)}ms (${((avgParticleRender/avgFrameTime)*100).toFixed(1)}%)
│
│   Other/Overhead:     ${otherTime.toFixed(2)}ms (${((otherTime/avgFrameTime)*100).toFixed(1)}%)
│
│ Performance Budget: ${avgFrameTime > this.config.frameBudgetMs ? '❌' : '✅'} ${avgFrameTime.toFixed(2)}ms / ${this.config.frameBudgetMs}ms target
│ Frame Budget Status: ${avgFrameTime > this.config.frameBudgetMs ? 'OVER BUDGET!' : 'Within budget ✓'}
└─────────────────────────────────────────────────────────────┘
    `);
    
    this.resetMetrics();
  }
  
  /**
   * Reset metrics for next interval
   */
  private resetMetrics(): void {
    this.metrics = this.createFreshMetrics();
  }
  
  /**
   * Get current average FPS
   */
  getAverageFPS(): number {
    if (this.metrics.frameCount === 0) return 0;
    const avgFrameTime = this.metrics.totalFrameTime / this.metrics.frameCount;
    return 1000 / avgFrameTime;
  }
  
  /**
   * Get raw metrics object (for UI display)
   */
  getMetrics(): Readonly<PerformanceMetrics> {
    return { ...this.metrics };
  }
  
  /**
   * Update configuration (including enabling/disabling monitoring)
   */
  updateConfig(config: Partial<PerformanceConfig>): void {
    this.config = { ...this.config, ...config };
  }
  
  /**
   * Check if performance monitoring is enabled
   */
  isEnabled(): boolean {
    return this.config.enabled;
  }
  
  /**
   * Get recent frame time samples for analysis
   * @param count Number of recent samples to return (default: all available)
   */
  getRecentFrameTimes(count?: number): number[] {
    if (count === undefined) {
      return [...this.frameTimeSamples];
    }
    return this.frameTimeSamples.slice(-count);
  }
}
