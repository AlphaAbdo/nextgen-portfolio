import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of, filter } from 'rxjs';
import { DataLoadingService } from '../../../../services/data-loading.service';
import { SkillsData, OrbitConfig as IOrbitConfig, OrbitStyles as IOrbitStyles } from '../../../../models/skills-definitions';

// Use the unified SkillsData interface instead of ISkillsData
type ISkillsData = SkillsData;

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private skillsDataSubject = new BehaviorSubject<ISkillsData | null>(null);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  private errorSubject = new BehaviorSubject<string | null>(null);

  // Public observables
  public skillsData$ = this.skillsDataSubject.asObservable();
  public loading$ = this.loadingSubject.asObservable();
  public error$ = this.errorSubject.asObservable();

  // Cached data to prevent multiple HTTP requests
  private cachedSkillsData: ISkillsData | null = null;
  private isLoading = false;

  constructor(private dataLoadingService: DataLoadingService) {}

  /**
   * Get skills data with unified loading logic
   */
  async getSkillsData(): Promise<Observable<ISkillsData>> {
    if (this.cachedSkillsData) {
      // Return cached data
      return of(this.cachedSkillsData);
    }

    if (this.isLoading) {
      // Wait for ongoing request - return non-null observable
      return this.skillsData$.pipe(
        filter((data): data is ISkillsData => data !== null)
      );
    }

    try {
      this.isLoading = true;
      this.loadingSubject.next(true);
      this.errorSubject.next(null);

      // Use the unified getData method with direct path
      const data = await this.dataLoadingService.getData<ISkillsData>('assets/data/skills.json');

      this.cachedSkillsData = data;
      this.skillsDataSubject.next(data);
      this.loadingSubject.next(false);

      return of(data);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to load skills data';
      this.errorSubject.next(errorMessage);
      this.loadingSubject.next(false);
      throw error;
    } finally {
      this.isLoading = false;
    }
  }

  /**
   * Get current skills data synchronously (for templates)
   */
  getCurrentSkillsData(): ISkillsData | null {
    return this.skillsDataSubject.value;
  }

  /**
   * Extract top skills for display (e.g., for orbit animations)
   */
  extractTopSkills(skillsData: ISkillsData, count: number = 3): string[] {
    // If orbits are specified in metadata, use those (return all, not limited to count)
    if (skillsData.metadata.orbits && skillsData.metadata.orbits.length > 0) {
      return skillsData.metadata.orbits;
    }
    // Otherwise, extract from skills strings
    const allTechnologies: string[] = [];
    skillsData.skills.forEach(skill => {
      // Split skills string by comma and clean up whitespace
      const technologies = skill.skills.split(',').map(tech => tech.trim());
      allTechnologies.push(...technologies.slice(0, 2)); // Take first 2 from each category
    });
    return allTechnologies.slice(0, count);
  }

  /**
   * Get fallback skills when data loading fails
   */
  getFallbackSkills(): string[] {
    return ['C++', 'Python', 'JavaScript'];
  }

  /**
   * Retry loading data
   */
  async retry(): Promise<void> {
    this.cachedSkillsData = null; // Reset cache
    this.skillsDataSubject.next(null);
    await this.getSkillsData();
  }

  /**
   * Clear cache
   */
  clearCache(): void {
    this.cachedSkillsData = null;
    this.skillsDataSubject.next(null);
  }
}

// ============================================================================
// ORBIT SERVICE - Advanced, Configurable Orbit System
// ============================================================================

@Injectable({
  providedIn: 'root'
})
export class OrbitService {

  // Store random starting angles and delays for stable positioning
  private startAngles = new Map<number, number>();
  private animationDelays = new Map<number, number>();

  /**
   * Calculate orbit styles with improved distribution
   */
  calculateOrbitStyles(index: number, config: IOrbitConfig, totalOrbits: number): IOrbitStyles {
    // Use modulo to reuse orbits beyond maxOrbits
    const orbitIndex = index % config.maxOrbits;
    
    const size = this.calculateSize(orbitIndex, config, Math.min(totalOrbits, config.maxOrbits));
    const duration = this.calculateDuration(index, config);
    const direction = this.calculateDirection(index, config);
    const position = this.calculatePosition(orbitIndex, size);
    
    // Get or generate random delay for this skill index (unique per skill)
    if (!this.animationDelays.has(index)) {
      this.animationDelays.set(index, -Math.random() * 20);
    }
    const delay = this.animationDelays.get(index)!;

    return {
      'z-index': '0',
      width: `${size}%`,
      height: `${size}%`,
      top: `${position.top}%`,
      left: `${position.left}%`,
      'animation-duration': `${duration}s`,
      'animation-direction': direction,
      'animation-delay': `${delay}s`
    };
  }

  /**
   * Improved size calculation that prevents orbit collapse
   * Uses smooth interpolation instead of linear decrement
   */
  private calculateSize(index: number, config: IOrbitConfig, totalOrbits: number): number {
    // Normalize index to 0-1 range for smooth interpolation
    const normalizedIndex = totalOrbits > 1 ? index / (totalOrbits - 1) : 0;

    // Smooth interpolation: startSize -> endSize
    // Using cosine interpolation for smoother curve
    const t = 0.5 * (1 - Math.cos(normalizedIndex * Math.PI));
    const interpolatedSize = config.size.startSize + t * (config.size.endSize - config.size.startSize);

    // Ensure we never go below minimum
    return Math.max(interpolatedSize, config.size.minSize);
  }

  /**
   * Calculate animation duration with smooth variation
   */
  private calculateDuration(index: number, config: IOrbitConfig): number {
    // Base duration with slight variation based on index
    const variation = (index * 0.5) % config.animation.durationRange;
    return config.animation.baseDuration + variation;
  }

  /**
   * Calculate animation direction
   */
  private calculateDirection(index: number, config: IOrbitConfig): 'normal' | 'reverse' {
    switch (config.direction) {
      case 'alternating':
        return index % 2 === 0 ? 'normal' : 'reverse';
      case 'clockwise':
        return 'normal';
      case 'counterclockwise':
        return 'reverse';
      default:
        return 'normal';
    }
  }

  /**
   * Calculate position (always concentric for simplicity)
   */
  private calculatePosition(index: number, size: number): { top: number; left: number } {
    const offset = (100 - size) / 2;
    return { top: offset, left: offset };
  }

  /**
   * Get sensible default configuration
   */
  getDefaultOrbitConfig(): IOrbitConfig {
    return {
      maxOrbits: 6,
      size: {
        startSize: 95,    // Start at 95% (not 100% to leave some margin)
        endSize: 25,      // End at 25% (reasonable minimum visible size)
        minSize: 20       // Absolute minimum
      },
      animation: {
        baseDuration: 15,
        durationRange: 8   // Duration varies by ±4s
      },
      direction: 'alternating'
    };
  }
}
