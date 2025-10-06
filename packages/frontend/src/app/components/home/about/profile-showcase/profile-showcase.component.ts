import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild, ElementRef, HostListener, signal, isDevMode } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Subscription, forkJoin, of } from 'rxjs';
import { catchError, filter, take } from 'rxjs/operators';
import { PersonalInfoService, IPersonalInfo } from '../services/personal-info.service';
import { SkillsService, OrbitService } from '../services/skills.service';
import { SkillsData as ISkillsData, OrbitConfig as IOrbitConfig, OrbitStyles as IOrbitStyles } from '../../../../models/skills-definitions';
import { LoadingComponent } from '../../../shared/loading/loading.component';
import { SmartSashComponent } from './open-to-work-sash/open-to-work-sash.component';
import { UnderworkComponent } from '../../../shared';

@Component({
  selector: 'app-profile-showcase',
  imports: [CommonModule, LoadingComponent, SmartSashComponent, UnderworkComponent],
  templateUrl: './profile-showcase.component.html',
  styleUrls: ['./profile-showcase.component.scss']
})
export class ProfileShowcaseComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('showcaseContainer', { static: false }) showcaseContainer!: ElementRef;
  @ViewChild('profileImage', { static: false }) profileImage!: ElementRef<HTMLImageElement>;
  
  personalInfo: IPersonalInfo | null = null;
  skillsData: ISkillsData | null = null;
  isLoading = signal<boolean>(true);
  isRetrying = signal<boolean>(false);
  error = signal<string | null>(null);
  topSkills: string[] = [];
  orbitConfig: IOrbitConfig | null = null;
  profileImageSrc = signal<string>('');
  sashVisible = signal<boolean>(false);
  sashRadius = signal<number>(160); // Dynamic radius based on actual image size
  sashThickness = signal<number>(25); // Dynamic thickness based on image size
  sashArcAngle = signal<number>(115); // Dynamic arc angle based on text length
  private subscriptions: Subscription = new Subscription();
  private resizeObserver: ResizeObserver | null = null;
  private resizeTimeout: any;

  constructor(
    private http: HttpClient,
    private personalInfoService: PersonalInfoService,
    private skillsService: SkillsService,
    private orbitService: OrbitService
  ) {}

  ngOnInit() {
    // Set loading state first, then start async operations
    // This allows template to render immediately with loading spinner
    this.isLoading.set(true);
    this.error.set(null);
    
    // Load data using proper RxJS coordination
    // Wrap in setTimeout to ensure async execution doesn't block initialization
    setTimeout(() => {
      this.loadProfileData().catch(error => {
        console.error('Error in loadProfileData:', error);
        this.isLoading.set(false);
        this.error.set('Failed to initialize data loading');
      });
    }, 0);
  }

  ngAfterViewInit(): void {
    // Setup dynamic margins after view is initialized
    if (!this.isLoading()) {
      this.setupDynamicMargins();
      this.calculateSashRadius();
    }
  }

  /**
   * Calculate sash radius based on actual profile image size
   */
  private calculateSashRadius(): void {
    if (!this.profileImage?.nativeElement) return;

    const imageElement = this.profileImage.nativeElement;
    
    // Wait for image to load if not already loaded
    if (!imageElement.complete) {
      imageElement.addEventListener('load', () => {
        this.updateSashRadius(imageElement);
      }, { once: true });
    } else {
      this.updateSashRadius(imageElement);
    }
  }

  private updateSashRadius(imageElement: HTMLImageElement): void {
    // Get the actual rendered size of the image
    const rect = imageElement.getBoundingClientRect();
    const imageWidth = rect.width;
    
    // Calculate base radius as half the width (assuming circular image)
    const baseRadius = imageWidth / 2;
    
    // Calculate thickness as a percentage of the image size (responsive)
    // Use 12% of image width for proportional sizing across all screen sizes
    const thickness = Math.max(20, Math.min(35, imageWidth * 0.12));
    
    // Add thickness/2 to radius so the sash center line aligns with image edge
    const radius = baseRadius + (thickness / 2);
    
    // Calculate arc angle based on text length
    const text = this.personalInfo?.status?.text || 'OPEN TO WORK';
    const arcAngle = this.calculateArcAngle(text, radius);
    
    this.sashRadius.set(radius);
    this.sashThickness.set(thickness);
    this.sashArcAngle.set(arcAngle);
  }

  /**
   * Calculate optimal arc angle based on text length and radius
   * Ensures proper spacing with margins on both sides, accounting for decorative caps
   */
  private calculateArcAngle(text: string, radius: number): number {
    // Average character width in the sash font (relative to font size)
    // The font is bold and uppercase with letter-spacing, so characters are wider
    const avgCharWidthRatio = 0.7; // 70% of font size per character
    
    // Font size is calculated in the sash component as radius * 0.05
    const fontSize = radius * 0.05;
    
    // Calculate approximate text width in pixels
    const textLength = text.length;
    const letterSpacing = 1.5; // From the sash component styles
    const estimatedTextWidth = (textLength * fontSize * avgCharWidthRatio) + ((textLength - 1) * letterSpacing);
    
    // Calculate thickness to determine cap sizes
    const thickness = this.sashThickness();
    
    // Account for decorative elements at both ends:
    // - Main cap: thickness * 0.35
    // - Decorative dot extends: thickness * 0.15 beyond cap
    // Total per side: thickness * 0.5
    const capSizePerSide = thickness * 0.5;
    
    // Convert cap size (linear) to arc angle
    // Arc length formula: arcLength = radius * angle(radians)
    const capAngleRadians = capSizePerSide / radius;
    const capAngleDegrees = capAngleRadians * (180 / Math.PI);
    
    // Add text margins: 15% of text width on each side (30% total)
    // Plus the cap space on each side
    const textMarginFactor = 1.3;
    const totalTextWidth = estimatedTextWidth * textMarginFactor;
    
    // Calculate arc angle for text
    const textArcRadians = totalTextWidth / radius;
    const textArcDegrees = textArcRadians * (180 / Math.PI);
    
    // Total arc angle = text + caps on both sides
    const totalArcAngle = textArcDegrees + (capAngleDegrees * 2);
    
    // Clamp between reasonable values
    // Minimum: 70 degrees (for very short text)
    // Maximum: 180 degrees (for very long text, half circle)
    return Math.max(70, Math.min(180, totalArcAngle));
  }

  private setupDynamicMargins(): void {
    if (!this.showcaseContainer) return;

    // Initial calculation
    this.calculateAndApplyMargins();

    // Set up ResizeObserver with debouncing to avoid excessive calculations
    let resizeTimeout: any;
    this.resizeObserver = new ResizeObserver(() => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        this.calculateAndApplyMargins();
      }, 100); // Debounce resize events
    });

    // Observe the showcase container
    this.resizeObserver.observe(this.showcaseContainer.nativeElement);

    // Add window resize listener with debouncing
    window.addEventListener('resize', this.onWindowResize.bind(this));
  }

  private onWindowResize(): void {
    // Debounce the resize event to avoid excessive calculations
    clearTimeout(this.resizeTimeout);
    this.resizeTimeout = setTimeout(() => {
      this.calculateAndApplyMargins();
    }, 100);
  }

  private calculateAndApplyMargins(): void {
    if (!this.showcaseContainer || this.isLoading() || !this.showcaseContainer.nativeElement) return;

    const showcaseElement = this.showcaseContainer.nativeElement;
    
    // Recalculate sash radius on resize
    this.calculateSashRadius();
    
    // Get measurements without forcing layout thrashing
    const computedStyle = getComputedStyle(showcaseElement);
    const currentMarginTop = parseFloat(computedStyle.marginTop) || 0;
    const currentMarginBottom = parseFloat(computedStyle.marginBottom) || 0;
    
    // Use getBoundingClientRect for more efficient measurement (doesn't force layout)
    const rect = showcaseElement.getBoundingClientRect();
    const trueShowcaseHeight = rect.height;
    const viewportHeight = window.innerHeight;

    // Calculate available space
    const availableHeight = viewportHeight;

    if (trueShowcaseHeight < availableHeight) {
      // Content fits - center it with proper margins
      const heightDifference = availableHeight - trueShowcaseHeight;
      const marginValue = Math.max(0, heightDifference / 2);

      // Only update if margins actually changed to avoid unnecessary style recalculations
      if (Math.abs(currentMarginTop - marginValue) > 1 || Math.abs(currentMarginBottom - marginValue) > 1) {
        showcaseElement.style.transition = 'margin 0.3s ease';
        showcaseElement.style.marginTop = `${marginValue}px`;
        showcaseElement.style.marginBottom = `${marginValue}px`;
      }
    } else {
      // Content is too tall - minimal margins
      const minimalMargin = Math.max(0, (availableHeight - trueShowcaseHeight) / 2);
      const finalMargin = Math.max(10, minimalMargin);
      
      // Only update if margins actually changed
      if (Math.abs(currentMarginTop - finalMargin) > 1 || Math.abs(currentMarginBottom - finalMargin) > 1) {
        showcaseElement.style.marginTop = `${finalMargin}px`;
        showcaseElement.style.marginBottom = `${finalMargin}px`;
      }
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.calculateAndApplyMargins();
  }

  /**
   * Load profile data using RxJS forkJoin for proper coordination
   * This eliminates race conditions from manual boolean flag tracking
   */
  private async loadProfileData() {
    try {
      if (isDevMode()) {
        console.log('[ProfileShowcase] Starting data load...');
      }
      
      // PersonalInfo returns Observable directly, Skills returns Promise<Observable>
      // CRITICAL: Use filter + take(1) to skip null and complete after first real value
      // BehaviorSubjects emit null initially, we need to wait for actual data
      const personalInfo$ = this.personalInfoService.getPersonalInfo().pipe(
        filter((data): data is IPersonalInfo => data !== null), // Skip null, type guard
        take(1), // Complete after first non-null emission
        catchError(error => {
          console.error('[ProfileShowcase] Personal info error:', error);
          return of(null); // Return null on error, don't fail the entire forkJoin
        })
      );

      if (isDevMode()) {
        console.log('[ProfileShowcase] Getting skills observable...');
      }
      const skillsData$ = (await this.skillsService.getSkillsData()).pipe(
        filter((data): data is ISkillsData => data !== null), // Skip null, type guard
        take(1), // Complete after first non-null emission
        catchError(error => {
          console.error('[ProfileShowcase] Skills data error:', error);
          return of(null); // Return null on error, don't fail the entire forkJoin
        })
      );

      if (isDevMode()) {
        console.log('[ProfileShowcase] Starting forkJoin...');
      }
      // Use forkJoin to wait for BOTH to complete atomically
      const subscription = forkJoin({
        personalInfo: personalInfo$,
        skillsData: skillsData$
      }).subscribe({
        next: (result) => {
          if (isDevMode()) {
            console.log('[ProfileShowcase] ForkJoin completed:', result);
          }
          
          // Atomic update: both results arrive together, no race condition
          this.personalInfo = result.personalInfo;
          this.skillsData = result.skillsData;

          // Turn off loading immediately
          this.isLoading.set(false);

          // Check success vs failure
          if (this.personalInfo && this.skillsData) {
            if (isDevMode()) {
              console.log('[ProfileShowcase] SUCCESS: Both loaded');
            }
            // SUCCESS: Both loaded
            this.isRetrying.set(false);
            this.error.set(null);

            // Extract skills for orbits
            this.topSkills = this.skillsService.extractTopSkills(this.skillsData, 3);
            this.orbitConfig = this.skillsData.metadata.orbitConfig || this.orbitService.getDefaultOrbitConfig();

            // Set profile image source
            this.profileImageSrc.set(this.personalInfo.profile.image.src);

            // Set sash visibility
            this.sashVisible.set(this.personalInfo.status?.isVisible ?? false);

            // Setup UI after content is loaded
            setTimeout(() => {
              this.setupDynamicMargins();
              this.calculateSashRadius();
            }, 100);
          } else {
            if (isDevMode()) {
              console.log('[ProfileShowcase] FAILURE: One or both failed');
            }
            // FAILURE: One or both failed - only show error if not retrying
            if (!this.isRetrying()) {
              if (!this.personalInfo && !this.skillsData) {
                this.error.set('Failed to load profile and skills data');
              } else if (!this.personalInfo) {
                this.error.set('Failed to load personal information');
              } else {
                this.error.set('Failed to load skills data');
              }
            } else {
              // Reset retry state if still failed after retry
              this.isRetrying.set(false);
            }
          }
        },
        error: (error) => {
          // This should rarely happen since we catch errors in the pipes
          console.error('[ProfileShowcase] Unexpected error in forkJoin:', error);
          this.isLoading.set(false);
          if (!this.isRetrying()) {
            this.error.set('An unexpected error occurred');
          }
        },
        complete: () => {
          if (isDevMode()) {
            console.log('[ProfileShowcase] ForkJoin stream completed');
          }
        }
      });

      this.subscriptions.add(subscription);
    } catch (error) {
      console.error('[ProfileShowcase] Error in loadProfileData:', error);
      this.isLoading.set(false);
      this.error.set('Failed to load profile data');
    }
  }

  /**
   * Retry loading data with proper state reset
   */
  retryLoad(): void {
    // Set retry state for visual feedback
    this.isRetrying.set(true);

    // Reset state
    this.isLoading.set(true);
    this.error.set(null);
    this.personalInfo = null;
    this.skillsData = null;
    this.topSkills = [];
    this.orbitConfig = null;

    // Reload with same method - clean and simple
    this.loadProfileData();
  }

  /**
   * Calculate dynamic styles for orbit animations using OrbitService
   */
  getOrbitStyles(index: number): IOrbitStyles {
    if (!this.orbitConfig) {
      // Fallback to default config if not loaded yet
      this.orbitConfig = this.orbitService.getDefaultOrbitConfig();
    }
    return this.orbitService.calculateOrbitStyles(index, this.orbitConfig, this.topSkills.length);
  }

  /**
   * Calculate dynamic styles for skill dot animations
   */
  getSkillDotStyles(index: number): { [key: string]: string } {
    if (!this.orbitConfig) {
      // Fallback to default config if not loaded yet
      this.orbitConfig = this.orbitService.getDefaultOrbitConfig();
    }

    const orbitStyles = this.orbitService.calculateOrbitStyles(index, this.orbitConfig, this.topSkills.length);

    // Return only the animation-related styles for skill dots
    return {
      'z-index': '1001',
      'animation-duration': orbitStyles['animation-duration'],
      'animation-direction': orbitStyles['animation-direction'],
      'animation-delay': orbitStyles['animation-delay'],
    };
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();

    // Clean up ResizeObserver
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver = null;
    }

    // Clean up resize timeout
    if (this.resizeTimeout) {
      clearTimeout(this.resizeTimeout);
    }

    // Remove window resize listener
    window.removeEventListener('resize', this.onWindowResize.bind(this));
  }
}
