import { Component, signal, inject, OnInit, OnDestroy, AfterViewInit, OnChanges, ElementRef, ViewChild, Renderer2, Input } from '@angular/core';
import { Subscription, Subject } from 'rxjs';
import { ScrollObserverService } from '../../../services/scroll-observer.service';

import { SideMenuComponent } from './side-menu/side-menu.component';
import { MenuAction } from './header.types';
import { MENU_OPEN_CLASS } from './header.constants';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SideMenuComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy, AfterViewInit, OnChanges {
  // Input to force reduced mode (mobile-like) regardless of screen size
  @Input() alwaysReduced: boolean = false;

  // Reactive screen size detection
  isDesktop = signal(false);
  isReducedMenuOpen = signal(false);
  // Header owns the active section state and passes it to SideMenu
  activeSection = signal('section1'); // Track active section for navigation
  
  private resizeObserver?: ResizeObserver;
  private scrollSubscription?: Subscription;
  private scrollObserver = inject(ScrollObserverService);
  private spacerElement?: HTMLElement;
  private activeSectionUpdateTimeout?: any;
  private performanceMonitor?: {
    frameCount: number;
    lastFrameTime: number;
    droppedFrames: number;
    longTasks: number;
  };
  constructor(private hostRef: ElementRef<HTMLElement>, private renderer: Renderer2) {}
  // Observable to notify children about side-menu interaction (typed)
  menuInteraction$ = new Subject<MenuAction>();
  @ViewChild('burgerBtn', { read: ElementRef }) burgerBtnRef?: ElementRef<HTMLButtonElement>;
  @ViewChild('overlay', { read: ElementRef }) overlayElementRef?: ElementRef<HTMLDivElement>;

  private escListener = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && this.isReducedMenuOpen()) {
      this.closeReducedMenu();
    }
  };
  
  ngOnInit() {
    // Initialize screen size detection
    this.checkScreenSize();
    this.setupResizeObserver();
    
    // Initialize performance monitoring
    this.initPerformanceMonitoring();
    
    // Modern Intersection Observer for scroll detection
    // Start centralized scroll observer service (non-breaking)
    try {
      this.scrollObserver.start();
      this.scrollSubscription = this.scrollObserver.currentSection$.subscribe(sec => {
        if (sec && sec !== this.activeSection()) {
          this.activeSection.set(sec);
        }
      });
    } catch (e) {
      // Fallback to local observers if service fails
      this.setupIntersectionObserver();
      this.initializeActiveSection();
    }
    // Global escape key handling for closing reduced menu
    window.addEventListener('keydown', this.escListener);
  }

  ngOnChanges(changes: any) {
    if (changes['alwaysReduced']) {
      this.ensureSidebarSpacerExists();
    }
  }

  ngAfterViewInit() {
    this.ensureSidebarSpacerExists();
  }

  ngOnDestroy() {
    this.removeSidebarSpacer();
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
    if (this.scrollSubscription) {
      this.scrollSubscription.unsubscribe();
    }
    try { this.scrollObserver.stop(); } catch (e) {}
    window.removeEventListener('keydown', this.escListener);
    // Clear any pending active section update timeout
    if (this.activeSectionUpdateTimeout) {
      clearTimeout(this.activeSectionUpdateTimeout);
    }
  }

  // Create a sibling `.sidebar-spacer` element before the header host so it participates
  // as a flex child of the parent `.app-layout`. This keeps layout ownership inside
  // HeaderComponent while preserving the original structure the CSS expects.
  private ensureSidebarSpacerExists(): void {
    const needsSpacer = !this.alwaysReduced && this.isDesktop();
    try {
      const hostEl = this.hostRef?.nativeElement;
      const parent = hostEl && hostEl.parentElement;
      if (!parent) return;

      const existing = parent.querySelector(':scope > .sidebar-spacer') as HTMLElement | null;
      if (needsSpacer) {
        if (!existing) {
          const spacer = this.renderer.createElement('div');
          this.renderer.addClass(spacer, 'sidebar-spacer');
          this.renderer.setAttribute(spacer, 'aria-hidden', 'true');
          this.renderer.insertBefore(parent, spacer, hostEl);
          this.spacerElement = spacer as HTMLElement;
        }
      } else {
        if (existing) {
          this.renderer.removeChild(parent, existing);
          this.spacerElement = undefined;
        }
      }
    } catch (e) {
      // DOM not available or insertion failed — ignore silently (fallback to reduced mode)
    }
  }

  private removeSidebarSpacer(): void {
    try {
      if (this.spacerElement && this.spacerElement.parentElement) {
        this.renderer.removeChild(this.spacerElement.parentElement, this.spacerElement);
        this.spacerElement = undefined;
      }
    } catch (e) {}
  }

  private initPerformanceMonitoring(): void {
    if (typeof window !== 'undefined' && 'requestAnimationFrame' in window) {
      this.performanceMonitor = {
        frameCount: 0,
        lastFrameTime: performance.now(),
        droppedFrames: 0,
        longTasks: 0
      };

      // Monitor frame rate
      const monitorFrameRate = () => {
        const now = performance.now();
        const delta = now - this.performanceMonitor!.lastFrameTime;
        
        if (delta > 16.67) { // More than one frame at 60fps
          this.performanceMonitor!.droppedFrames++;
        }
        
        this.performanceMonitor!.frameCount++;
        this.performanceMonitor!.lastFrameTime = now;

        // Log metrics every 5 seconds
        if (this.performanceMonitor!.frameCount % 300 === 0) {
          const fps = Math.round(1000 / (delta / 1000));
          // metrics collected but not logged in production
        }

        requestAnimationFrame(monitorFrameRate);
      };

      requestAnimationFrame(monitorFrameRate);

      // Monitor long tasks
      if ('PerformanceObserver' in window) {
        try {
          const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              if (entry.duration > 50) { // Tasks longer than 50ms
                this.performanceMonitor!.longTasks++;
              }
            }
          });
          observer.observe({ entryTypes: ['longtask'] });
        } catch (e) {
          // PerformanceObserver not supported or failed - ignore in production
        }
      }
    }
  }

  private checkScreenSize(): void {
    this.isDesktop.set(window.innerWidth >= 1024);
  }

  private setupResizeObserver(): void {
    this.resizeObserver = new ResizeObserver(() => {
      this.checkScreenSize();
      this.ensureSidebarSpacerExists();
      // Close reduced menu when switching to desktop (unless alwaysReduced)
      if (!this.alwaysReduced && this.isDesktop()) {
        this.isReducedMenuOpen.set(false);
      }
    });
    this.resizeObserver.observe(document.body);
  }

  // Reduced menu controls (reduced mode)
  toggleReducedMenu(): void {
    const next = !this.isReducedMenuOpen();
    this.isReducedMenuOpen.set(next);
    try { if (next) document.body.classList.add(MENU_OPEN_CLASS); else document.body.classList.remove(MENU_OPEN_CLASS); } catch (e) {}
    try { this.menuInteraction$?.next({ kind: next ? 'open' : 'close' }); } catch (e) {}
  setTimeout(() => this.manageFocusOnMenu(), 50);
  }

  closeReducedMenu(): void {
  this.isReducedMenuOpen.set(false);
  try { document.body.classList.remove(MENU_OPEN_CLASS); } catch (e) {}
  try { this.burgerBtnRef?.nativeElement.focus(); } catch (e) {}
    try { this.menuInteraction$?.next({ kind: 'close' }); } catch (e) {}
  }

  // Handle navigation from side menu
  navigateTo(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      // Update active section immediately for programmatic navigation
      this.updateActiveNavItem(sectionId, false);
      // Inform centralized observer about programmatic navigation
      try { this.scrollObserver.setActiveSection(sectionId); } catch (e) {}
      
      // Modern smooth scrolling with native API
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
      
      // Force update after scrolling completes
      setTimeout(() => {
        this.updateActiveNavItem(sectionId, false);
        // Remove any fragment from the URL to keep paths clean
        try {
          const url = new URL(window.location.href);
          if (url.hash) {
            url.hash = '';
            history.replaceState(history.state, '', url.toString());
          }
        } catch (e) {
          // ignore URL parsing errors
        }
      }, 500);
    }
    // Close reduced menu when navigating
    this.closeReducedMenu();
    try { this.menuInteraction$?.next({ kind: 'navigate', payload: sectionId }); } catch (e) {}
  }

  // Handler for side-menu close event
  handleMenuClose(): void {
    this.closeReducedMenu();
  }

  private initializeActiveSection(): void {
    // Request the centralized observer service to run an initial detection pass
    setTimeout(() => {
      try {
        this.scrollObserver.detectNow();
      } catch (e) {
        // Fallback to local detection if the service is unavailable
        this.detectCurrentSection();
      }
    }, 500);
  }

  private setupIntersectionObserver(): void {
    // Setup after a delay to ensure all components are rendered
    setTimeout(() => {
      const sections = document.querySelectorAll('section[data-section]') as NodeListOf<HTMLElement>;
      
      if (sections.length === 0) {
        return;
      }

      // More aggressive intersection observer with fewer thresholds and larger root margin
      const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
        const startTime = performance.now();
        const sectionScores = new Map<string, number>();
        
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const sectionId = (entry.target as HTMLElement).getAttribute('data-section');
            if (sectionId) {
              const rect = entry.boundingClientRect;
              const viewportHeight = window.innerHeight;
              
              // Base score from intersection ratio
              let score = entry.intersectionRatio * 100;
              
              // Dynamic bonuses based on viewport position
              const topPosition = rect.top / viewportHeight;
              const bottomPosition = rect.bottom / viewportHeight;
              
              // Prefer sections that start in the upper third
              if (topPosition >= 0 && topPosition <= 0.33) {
                score += 30;
              }
              
              // Prefer sections that dominate the viewport center
              if (topPosition <= 0.5 && bottomPosition >= 0.5) {
                score += 40;
              }
              
              // Boost sections that are well-positioned (not cut off)
              if (topPosition >= -0.1 && bottomPosition <= 1.1) {
                score += 20;
              }
              
              // Penalty for sections mostly out of view
              if (topPosition > 0.8 || bottomPosition < 0.2) {
                score *= 0.5;
              }
              
              sectionScores.set(sectionId, score);
            }
          }
        });
        
        // Find the highest scoring section
        let winningSection = '';
        let highestScore = 0;
        
        for (const [sectionId, score] of sectionScores.entries()) {
          if (score > highestScore) {
            highestScore = score;
            winningSection = sectionId;
          }
        }
        
        const processingTime = performance.now() - startTime;
        
        // Update only if we have a clear winner with sufficient confidence
        if (winningSection && highestScore > 30 && winningSection !== this.activeSection()) {
          this.updateActiveNavItem(winningSection);
        }
      }, {
        // Balanced settings: enough thresholds for responsiveness, but not excessive
        threshold: [0, 0.2, 0.4, 0.5, 0.6, 0.8, 1.0], // 7 thresholds for better responsiveness
        rootMargin: '-15% 0px -15% 0px' // Reduced from -20% for more frequent but controlled callbacks
      });

      sections.forEach((section: HTMLElement) => observer.observe(section));
      
      // Keep scroll-based detection as intelligent fallback
      this.addScrollBasedDetection();
    }, 100);
  }

  private addScrollBasedDetection(): void {
    let quickScrollTimeout: any;
    let finalScrollTimeout: any;
    let scrollEventCount = 0;
    let lastScrollTime = 0;

    window.addEventListener('scroll', () => {
      const now = performance.now();
      scrollEventCount++;
      
      // Track scroll events for internal telemetry (no console spamming)
      if (now - lastScrollTime > 100) {
        scrollEventCount = 0;
        lastScrollTime = now;
      }

      // Less aggressive scroll detection - balanced delays
      clearTimeout(quickScrollTimeout);
      quickScrollTimeout = setTimeout(() => {
        try { this.scrollObserver.detectNow(); } catch (e) { this.detectCurrentSection(); }
      }, 50); // Increased from 25ms to 50ms

      // Final accurate detection when scrolling stops - reasonable delay
      clearTimeout(finalScrollTimeout);
      finalScrollTimeout = setTimeout(() => {
        try { this.scrollObserver.detectNow(); } catch (e) { this.detectCurrentSection(); }
      }, 200); // Reduced from 300ms to 200ms for better responsiveness
    });
  }

  private detectCurrentSection(): void {
    // Minimal fallback: when ScrollObserverService is unavailable, default to first section.
    // We intentionally avoid querying the DOM here; the centralized service should handle detection.
    if (!this.activeSection()) {
      this.updateActiveNavItem('section1');
    }
  }

  private updateActiveNavItem(sectionId: string | null, debounce: boolean = true): void {
    // Update the active section signal - this will automatically update the UI
    if (sectionId && sectionId !== this.activeSection()) {
      const currentScrollY = window.scrollY;
      const currentScrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const actualScroll = Math.max(currentScrollY, currentScrollTop);
      
        if (debounce) {
        // Balanced debounce - responsive but prevents stuttering
        clearTimeout(this.activeSectionUpdateTimeout);
        this.activeSectionUpdateTimeout = setTimeout(() => {
          this.activeSection.set(sectionId);
        }, 150); // Reduced from 300ms to 150ms for better responsiveness
      } else {
        // Immediate update for programmatic navigation
        clearTimeout(this.activeSectionUpdateTimeout);
        this.activeSection.set(sectionId);
      }
    }
  }

  private manageFocusOnMenu(): void {
    if (this.isReducedMenuOpen()) {
      try {
        const menu = document.getElementById('side-menu-reduced');
        if (menu) {
          const focusable = menu.querySelectorAll<HTMLElement>('a[href], button, [tabindex]:not([tabindex="-1"])');
          if (focusable && focusable.length > 0) {
            focusable[0].focus();
          } else {
            (menu as HTMLElement).focus();
          }
        }
      } catch (e) {
        // ignore focus errors
      }
    }
  }
}
