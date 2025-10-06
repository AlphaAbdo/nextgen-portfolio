import { isDevMode } from '@angular/core';

/**
 * Particle Count Optimizer
 * 
 * Automatically calibrates the optimal particle count for the current device
 * by running performance tests and finding the "sweet spot" where:
 * - Frame times are consistently under budget (smooth 60 FPS)
 * - Particle count is maximized for visual quality
 * - System has headroom for complexity spikes
 * 
 * INTELLIGENT CACHING:
 * - Runs calibration once per device
 * - Caches result in localStorage with device fingerprint
 * - Auto-recalibrates if device changes (new GPU, browser upgrade, etc.)
 * - Adaptive: detects performance degradation and recalibrates
 */

export interface OptimizationConfig {
  targetFrameTimeMs: number;      // Target frame time (16.67ms = 60fps)
  headroomPercentage: number;      // Safety margin (e.g., 0.2 = 20% headroom)
  minParticles: number;            // Minimum particle count
  maxParticles: number;            // Maximum particle count
  testDurationFrames: number;      // How many frames to test at each level
  stepSize: number;                // How many particles to add per test step
  cacheKey: string;                // localStorage cache key
  cacheDurationDays: number;       // How long to cache results (days)
  revalidationDays: number;        // Re-test every N days to ensure still optimal
}

export interface OptimizationResult {
  optimalParticleCount: number;
  averageFrameTime: number;
  devicePerformanceClass: 'low' | 'medium' | 'high' | 'ultra';
  calibrationTimeMs: number;
  tested: number;                  // How many levels were tested
  timestamp: number;               // When calibration was performed
  deviceFingerprint: string;       // Device identifier for cache validation
}

export interface CalibrationState {
  isCalibrating: boolean;
  currentTestParticles: number;
  currentTestFrames: number;
  frameTimeSamples: number[];
  bestParticleCount: number;
  bestAverageFrameTime: number;
}

export interface CachedResult {
  result: OptimizationResult;
  expiresAt: number;
}

export class ParticleOptimizer {
  private config: OptimizationConfig;
  private state: CalibrationState;
  private calibrationStartTime = 0;
  private onCalibrationComplete?: (result: OptimizationResult) => void;
  private cachedResult: OptimizationResult | null = null;
  
  constructor(config: Partial<OptimizationConfig> = {}) {
    this.config = {
      targetFrameTimeMs: config.targetFrameTimeMs ?? 13.33,  // 75fps target (with headroom)
      headroomPercentage: config.headroomPercentage ?? 0.25,  // 25% safety margin
      minParticles: config.minParticles ?? 20,
      maxParticles: config.maxParticles ?? 400,
      testDurationFrames: config.testDurationFrames ?? 60,    // 1 second @ 60fps
      stepSize: config.stepSize ?? 20,                        // Test in increments of 20
      cacheKey: config.cacheKey ?? 'portfolio_particle_optimization',
      cacheDurationDays: config.cacheDurationDays ?? 30,      // Cache for 30 days
      revalidationDays: config.revalidationDays ?? 7          // Re-test every 7 days
    };
    
    this.state = this.createInitialState();
  }
  
  private createInitialState(): CalibrationState {
    return {
      isCalibrating: false,
      currentTestParticles: this.config.minParticles,
      currentTestFrames: 0,
      frameTimeSamples: [],
      bestParticleCount: this.config.minParticles,
      bestAverageFrameTime: 0
    };
  }
  
  /**
   * Generate device fingerprint for cache validation
   * Combines browser, screen size, memory, and GPU info
   */
  private generateDeviceFingerprint(): string {
    const parts = [
      navigator.userAgent,
      screen.width + 'x' + screen.height,
      (navigator as any).deviceMemory || 'unknown',
      (navigator as any).hardwareConcurrency || 'unknown',
      window.devicePixelRatio
    ];
    
    // Simple hash function
    let hash = 0;
    const str = parts.join('|');
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    
    return 'device_' + Math.abs(hash).toString(36);
  }
  
  /**
   * Try to load cached optimization result
   * Returns cached result if valid, null if needs recalibration
   */
  loadCachedResult(): OptimizationResult | null {
    if (typeof localStorage === 'undefined') {
      return null;
    }
    
    try {
      const cached = localStorage.getItem(this.config.cacheKey);
      if (!cached) {
        if (isDevMode()) {
          console.log('📦 No cached calibration found - will run first-time calibration');
        }
        return null;
      }
      
      const data: CachedResult = JSON.parse(cached);
      const now = Date.now();
      
      // Check if cache expired
      if (now > data.expiresAt) {
        if (isDevMode()) {
          console.log('⏰ Cached calibration expired - recalibrating');
        }
        localStorage.removeItem(this.config.cacheKey);
        return null;
      }
      
      // Check if device changed
      const currentFingerprint = this.generateDeviceFingerprint();
      if (data.result.deviceFingerprint !== currentFingerprint) {
        if (isDevMode()) {
          console.log('🔄 Device changed - recalibrating');
        }
        localStorage.removeItem(this.config.cacheKey);
        return null;
      }
      
      // Check if revalidation is due (re-test periodically to ensure still optimal)
      const revalidationIntervalMs = this.config.revalidationDays * 24 * 60 * 60 * 1000;
      const timeSinceCalibration = now - data.result.timestamp;
      
      if (timeSinceCalibration > revalidationIntervalMs) {
        const daysSince = Math.floor(timeSinceCalibration / (24 * 60 * 60 * 1000));
        if (isDevMode()) {
          console.log(`🔬 Revalidation due (${daysSince} days since last calibration) - will re-test in background soon...`);
        }
        
        // Mark for background revalidation (caller should trigger it)
        this.cachedResult = { ...data.result, needsRevalidation: true } as any;
        
        return data.result; // Return cached result for now
      }
      
      if (isDevMode()) {
        console.log(`✅ Loaded cached calibration: ${data.result.optimalParticleCount} particles (${data.result.devicePerformanceClass} device)`);
      }
      this.cachedResult = data.result;
      return data.result;
      
    } catch (error) {
      console.warn('⚠️ Failed to load cached calibration:', error);
      return null;
    }
  }
  
  /**
   * Save optimization result to cache
   */
  private saveCachedResult(result: OptimizationResult): void {
    if (typeof localStorage === 'undefined') {
      return;
    }
    
    try {
      const expiresAt = Date.now() + (this.config.cacheDurationDays * 24 * 60 * 60 * 1000);
      const cached: CachedResult = {
        result,
        expiresAt
      };
      
      localStorage.setItem(this.config.cacheKey, JSON.stringify(cached));
      if (isDevMode()) {
        console.log(`💾 Cached calibration result (expires in ${this.config.cacheDurationDays} days)`);
      }
      
    } catch (error) {
      console.warn('⚠️ Failed to cache calibration result:', error);
    }
  }
  
  /**
   * Get cached result without running calibration
   */
  getCachedResult(): OptimizationResult | null {
    return this.cachedResult;
  }
  
  /**
   * Start calibration process
   * @param onComplete Callback when calibration finishes
   * @returns The starting particle count for calibration, or -1 if already calibrating
   */
  startCalibration(onComplete: (result: OptimizationResult) => void): number {
    // Prevent multiple simultaneous calibrations
    if (this.state.isCalibrating) {
      console.warn('⚠️ Calibration already in progress - ignoring request');
      return -1;
    }
    
    if (isDevMode()) {
      console.log('🎯 Starting particle count calibration...');
    }
    this.state = this.createInitialState();
    this.state.isCalibrating = true;
    this.calibrationStartTime = performance.now();
    this.onCalibrationComplete = onComplete;
    
    // Start with minimum particles
    return this.config.minParticles;
  }
  
  /**
   * Record a frame time during calibration
   * @param frameTimeMs Frame time in milliseconds
   * @param currentParticleCount Current particle count being tested
   * @returns Adjustment instruction or null if calibration continues
   */
  recordCalibrationFrame(
    frameTimeMs: number, 
    currentParticleCount: number
  ): { newParticleCount: number } | null {
    if (!this.state.isCalibrating) {
      return null;
    }
    
    // Record this frame's timing
    this.state.frameTimeSamples.push(frameTimeMs);
    this.state.currentTestFrames++;
    
    // Check if we've collected enough samples for this particle count
    if (this.state.currentTestFrames >= this.config.testDurationFrames) {
      const averageFrameTime = this.calculateMedian(this.state.frameTimeSamples);
      const p95FrameTime = this.calculatePercentile(this.state.frameTimeSamples, 0.95);
      
      if (isDevMode()) {
        console.log(`📊 Tested ${currentParticleCount} particles: avg=${averageFrameTime.toFixed(2)}ms, p95=${p95FrameTime.toFixed(2)}ms`);
      }
      
      // Calculate the frame time budget (target + headroom)
      const frameBudget = this.config.targetFrameTimeMs * (1 + this.config.headroomPercentage);
      
      // Check if this level passed the test (p95 under budget)
      if (p95FrameTime <= frameBudget) {
        // This level passed! Record it as the best so far
        this.state.bestParticleCount = currentParticleCount;
        this.state.bestAverageFrameTime = averageFrameTime;
        
        // Try the next level (more particles)
        const nextParticleCount = currentParticleCount + this.config.stepSize;
        
        if (nextParticleCount <= this.config.maxParticles) {
          // Move to next test level
          this.state.currentTestParticles = nextParticleCount;
          this.state.currentTestFrames = 0;
          this.state.frameTimeSamples = [];
          
          if (isDevMode()) {
            console.log(`✅ Level passed! Testing ${nextParticleCount} particles...`);
          }
          return { newParticleCount: nextParticleCount };
        } else {
          // Reached max particles - finish calibration
          return this.finishCalibration();
        }
      } else {
        // This level failed (too slow) - finish with previous best
        if (isDevMode()) {
          console.log(`❌ Level failed (${p95FrameTime.toFixed(2)}ms > ${frameBudget.toFixed(2)}ms budget)`);
        }
        return this.finishCalibration();
      }
    }
    
    // Continue testing at current level
    return null;
  }
  
  private finishCalibration(): { newParticleCount: number } {
    const calibrationTimeMs = performance.now() - this.calibrationStartTime;
    const testedLevels = Math.ceil((this.state.bestParticleCount - this.config.minParticles) / this.config.stepSize) + 1;
    
    // Determine device performance class
    const deviceClass = this.classifyDevicePerformance(this.state.bestParticleCount);
    
    const result: OptimizationResult = {
      optimalParticleCount: this.state.bestParticleCount,
      averageFrameTime: this.state.bestAverageFrameTime,
      devicePerformanceClass: deviceClass,
      calibrationTimeMs,
      tested: testedLevels,
      timestamp: Date.now(),
      deviceFingerprint: this.generateDeviceFingerprint()
    };
    
    if (isDevMode()) {
      console.log('🎉 Calibration complete!');
      console.log(`   Optimal particle count: ${result.optimalParticleCount}`);
      console.log(`   Device class: ${result.devicePerformanceClass}`);
      console.log(`   Average frame time: ${result.averageFrameTime.toFixed(2)}ms`);
      console.log(`   Tested ${testedLevels} levels in ${calibrationTimeMs.toFixed(0)}ms`);
    }
    
    // Save to cache for future sessions
    this.saveCachedResult(result);
    this.cachedResult = result;
    
    this.state.isCalibrating = false;
    
    if (this.onCalibrationComplete) {
      this.onCalibrationComplete(result);
    }
    
    return { newParticleCount: result.optimalParticleCount };
  }
  
  private classifyDevicePerformance(particleCount: number): 'low' | 'medium' | 'high' | 'ultra' {
    if (particleCount >= 300) return 'ultra';
    if (particleCount >= 200) return 'high';
    if (particleCount >= 100) return 'medium';
    return 'low';
  }
  
  private calculateMedian(samples: number[]): number {
    if (samples.length === 0) return 0;
    const sorted = [...samples].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 === 0 
      ? (sorted[mid - 1] + sorted[mid]) / 2 
      : sorted[mid];
  }
  
  private calculatePercentile(samples: number[], percentile: number): number {
    if (samples.length === 0) return 0;
    const sorted = [...samples].sort((a, b) => a - b);
    const index = Math.ceil(sorted.length * percentile) - 1;
    return sorted[Math.max(0, index)];
  }
  
  isCalibrating(): boolean {
    return this.state.isCalibrating;
  }
  
  getCurrentState(): Readonly<CalibrationState> {
    return { ...this.state };
  }
  
  /**
   * Check if cached result is still performing well
   * If performance has degraded significantly, suggest recalibration
   * @param recentFrameTimes Recent frame time samples
   * @returns true if recalibration is recommended
   */
  shouldRecalibrate(recentFrameTimes: number[]): boolean {
    if (!this.cachedResult || recentFrameTimes.length < 60) {
      return false;
    }
    
    // Calculate current p95 frame time
    const currentP95 = this.calculatePercentile(recentFrameTimes, 0.95);
    
    // If current performance is significantly worse than cached expectation, recalibrate
    const expectedFrameTime = this.cachedResult.averageFrameTime;
    const degradationThreshold = expectedFrameTime * 1.5; // 50% worse
    
    if (currentP95 > degradationThreshold) {
      if (isDevMode()) {
        console.log(`⚠️ Performance degradation detected (${currentP95.toFixed(2)}ms > ${degradationThreshold.toFixed(2)}ms expected)`);
        console.log('   Recalibration recommended - device may have throttled or environment changed');
      }
      return true;
    }
    
    return false;
  }
  
  /**
   * Invalidate cache and force recalibration
   */
  invalidateCache(): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem(this.config.cacheKey);
    }
    this.cachedResult = null;
    if (isDevMode()) {
      console.log('🔄 Cache invalidated - will recalibrate on next load');
    }
  }
}
