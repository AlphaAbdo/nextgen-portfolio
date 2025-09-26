import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ScrollObserverService {
  private currentSectionSubject = new BehaviorSubject<string>('section1');
  public currentSection$: Observable<string> = this.currentSectionSubject.asObservable();

  private observer: IntersectionObserver | null = null;
  private isStarted = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  start(): void {
    if (!isPlatformBrowser(this.platformId) || this.isStarted) return;
    this.isStarted = true;

    setTimeout(() => {
      const sections = document.querySelectorAll('section[data-section]') as NodeListOf<HTMLElement>;
      if (sections.length === 0) return;

      this.observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
        const startTime = performance.now();
        const scores = new Map<string, number>();
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          const sectionId = (entry.target as HTMLElement).getAttribute('data-section');
          if (!sectionId) return;

          const rect = entry.boundingClientRect;
          const vh = window.innerHeight;
          let score = entry.intersectionRatio * 100;
          const top = rect.top / vh;
          const bottom = rect.bottom / vh;
          if (top >= 0 && top <= 0.33) score += 30;
          if (top <= 0.5 && bottom >= 0.5) score += 40;
          if (top >= -0.1 && bottom <= 1.1) score += 20;
          if (top > 0.8 || bottom < 0.2) score *= 0.5;
          scores.set(sectionId, score);
        });

        let best = '';
        let bestScore = 0;
        for (const [id, s] of scores.entries()) {
          if (s > bestScore) {
            bestScore = s;
            best = id;
          }
        }
        
        const processingTime = performance.now() - startTime;
        
        if (best && bestScore > 30 && best !== this.currentSectionSubject.value) {
          this.currentSectionSubject.next(best);
        }
      }, {
        // Balanced settings for ScrollObserverService
        threshold: [0, 0.2, 0.4, 0.5, 0.6, 0.8, 1.0], // 7 thresholds for better responsiveness
        rootMargin: '-15% 0px -15% 0px' // Reduced from -20% for more frequent callbacks
      });

      sections.forEach(s => this.observer!.observe(s));

      // add scroll fallback - balanced delays
      let quick: any = null;
      let final: any = null;
      window.addEventListener('scroll', () => {
        clearTimeout(quick);
        quick = setTimeout(() => this.detectCurrentSection(), 50); // Increased from 25ms
        clearTimeout(final);
        final = setTimeout(() => {
          this.detectCurrentSection();
        }, 200); // Reduced from 300ms to 200ms for better responsiveness
      });
    }, 100);
  }

  stop(): void {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
    this.isStarted = false;
  }

  setActiveSection(sectionId: string): void {
    if (!sectionId) return;
    if (sectionId !== this.currentSectionSubject.value) {
      this.currentSectionSubject.next(sectionId);
    }
  }

  /**
   * Public trigger to run an immediate detection pass (useful for programmatic checks)
   */
  detectNow(): void {
    try {
      this.detectCurrentSection();
    } catch (e) {
      // ignore detection errors
    }
  }

  private detectCurrentSection(): void {
    const sections = document.querySelectorAll('section[data-section]') as NodeListOf<HTMLElement>;
    if (!sections || sections.length === 0) return;

    const viewportTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
    const viewportHeight = window.innerHeight;
    const viewportMiddle = viewportTop + (viewportHeight / 2);

    let bestMatch = { sectionId: sections[0].getAttribute('data-section') || 'section1', score: 0 };
    sections.forEach((section, idx) => {
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top + viewportTop;
      const sectionBottom = sectionTop + rect.height;
      const sectionId = section.getAttribute('data-section');
      if (!sectionId) return;

      let score = 0;
      const visibleTop = Math.max(sectionTop, viewportTop);
      const visibleBottom = Math.min(sectionBottom, viewportTop + viewportHeight);
      const visibleHeight = Math.max(0, visibleBottom - visibleTop);
      const visibilityRatio = visibleHeight / viewportHeight;
      score += visibilityRatio * 100;
      if (viewportMiddle >= sectionTop && viewportMiddle < sectionBottom) score += 50;
      if (rect.top < viewportHeight / 2 && rect.bottom > 0) score += 25;
      if (idx === 0 && viewportTop < rect.height * 0.3) score += 15;
      if (idx === sections.length - 1) {
        const documentHeight = document.documentElement.scrollHeight;
        const bottomDistance = documentHeight - (viewportTop + viewportHeight);
        if (bottomDistance < rect.height * 0.3) score += 15;
      }
      if (score > bestMatch.score) bestMatch = { sectionId, score };
    });

    if (bestMatch.score > 10 && bestMatch.sectionId !== this.currentSectionSubject.value) {
      this.currentSectionSubject.next(bestMatch.sectionId);
    }
  }
}
