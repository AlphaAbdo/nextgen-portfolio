import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild, ElementRef, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { PersonalInfoService, IPersonalInfo } from '../services/personal-info.service';
import { SkillsService, OrbitService } from '../services/skills.service';
import { SkillsData as ISkillsData, OrbitConfig as IOrbitConfig, OrbitStyles as IOrbitStyles } from '../../../../models/skills-definitions';
import { LoadingComponent } from '../../../shared/loading/loading.component';

@Component({
  selector: 'app-profile-showcase',
  imports: [CommonModule, LoadingComponent],
  templateUrl: './profile-showcase.component.html',
  styleUrls: ['./profile-showcase.component.scss']
})
export class ProfileShowcaseComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('showcaseContainer', { static: false }) showcaseContainer!: ElementRef;
  
  personalInfo: IPersonalInfo | null = null;
  skillsData: ISkillsData | null = null;
  isLoading = true;
  isRetrying = false;
  error: string | null = null;
  topSkills: string[] = [];
  orbitConfig: IOrbitConfig | null = null;
  profileImageSrc = signal<string>('');
  private subscriptions: Subscription = new Subscription();
  private personalInfoLoaded = false;
  private skillsLoaded = false;
  private resizeObserver: ResizeObserver | null = null;
  private resizeTimeout: any;

  constructor(
    private http: HttpClient,
    private personalInfoService: PersonalInfoService,
    private skillsService: SkillsService,
    private orbitService: OrbitService
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.error = null;
    this.loadPersonalInfo();
    this.loadSkills();
  }

  ngAfterViewInit(): void {
    // Setup dynamic margins after view is initialized
    if (!this.isLoading) {
      this.setupDynamicMargins();
    }
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
    if (!this.showcaseContainer || this.isLoading || !this.showcaseContainer.nativeElement) return;

    const showcaseElement = this.showcaseContainer.nativeElement;
    
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

  private async loadPersonalInfo() {
    const subscription = (await this.personalInfoService.getPersonalInfo()).subscribe({
      next: (data: any) => {
        this.personalInfo = data;
        this.personalInfoLoaded = true;
        this.checkLoadingComplete();
      },
      error: (error: any) => {
        console.error('Failed to load personal info:', error);
        this.personalInfo = null;
        this.personalInfoLoaded = true;
        this.error = 'Failed to load personal information';
        this.isLoading = false; // Stop loading on error
      }
    });
    this.subscriptions.add(subscription);
  }

  private async loadSkills() {
    const subscription = (await this.skillsService.getSkillsData()).subscribe({
      next: (data: any) => {
        this.skillsData = data;
        // Extract skills for orbits using the service method
        this.topSkills = this.skillsService.extractTopSkills(data, 3);
        // Load orbit configuration or use defaults
        this.orbitConfig = data.metadata.orbitConfig || this.orbitService.getDefaultOrbitConfig();
        this.skillsLoaded = true;
        this.checkLoadingComplete();
      },
      error: (error: any) => {
        console.error('Failed to load skills data:', error);
        this.skillsData = null;
        this.skillsLoaded = true;
        this.error = 'Failed to load skills data';
        this.isLoading = false; // Stop loading on error
      }
    });
    this.subscriptions.add(subscription);
  }

  private checkLoadingComplete() {
    // Wait for both requests to complete successfully (both data must be loaded)
    if (this.personalInfoLoaded && this.skillsLoaded) {
      // Only stop loading if we have both sets of data
      if (this.personalInfo && this.skillsData) {
        this.isLoading = false;
        this.isRetrying = false; // Reset retry state when loading completes

        // Set profile image source directly
        this.profileImageSrc.set(this.personalInfo.profile.image.src);

        // Setup dynamic margins after content is loaded
        setTimeout(() => {
          this.setupDynamicMargins();
        }, 100); // Small delay to ensure DOM is fully rendered
      }
      // If either is null, keep loading state until error is handled
    }
  }  /**
   * Retry loading data with proper state reset
   */
  retryLoad(): void {
    // Set retry state for visual feedback
    this.isRetrying = true;

    // Reset state
    this.isLoading = true;
    this.error = null;
    this.personalInfoLoaded = false;
    this.skillsLoaded = false;
    this.personalInfo = null;
    this.skillsData = null;
    this.topSkills = [];
    this.orbitConfig = null;

    // Retry loading
    this.loadPersonalInfo();
    this.loadSkills();
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
