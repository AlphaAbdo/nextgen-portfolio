import { Injectable, ElementRef } from '@angular/core';

export interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ScrollAnimationService {
  private observers: Map<Element, IntersectionObserver> = new Map();

  constructor() { }

  /**
   * Observe an element and trigger callback when it enters viewport
   */
  observeElement(
    element: ElementRef | HTMLElement,
    callback: (isIntersecting: boolean, entry: IntersectionObserverEntry) => void,
    options: ScrollAnimationOptions = {}
  ): () => void {
    const el = element instanceof ElementRef ? element.nativeElement : element;
    
    const defaultOptions: IntersectionObserverInit = {
      threshold: options.threshold ?? 0.2,
      rootMargin: options.rootMargin ?? '0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        callback(entry.isIntersecting, entry);
        
        // If once option is true, disconnect after first intersection
        if (options.once && entry.isIntersecting) {
          observer.disconnect();
          this.observers.delete(el);
        }
      });
    }, defaultOptions);

    observer.observe(el);
    this.observers.set(el, observer);

    // Return cleanup function
    return () => {
      observer.disconnect();
      this.observers.delete(el);
    };
  }

  /**
   * Trigger animations when element enters viewport with specific threshold
   */
  triggerOnScroll(
    elements: (ElementRef | HTMLElement)[],
    animationClass: string,
    options: ScrollAnimationOptions = {}
  ): void {
    elements.forEach((element, index) => {
      this.observeElement(
        element,
        (isIntersecting) => {
          const el = element instanceof ElementRef ? element.nativeElement : element;
          if (isIntersecting) {
            // Add stagger delay
            setTimeout(() => {
              el.classList.add(animationClass);
            }, index * 100);
          } else if (!options.once) {
            el.classList.remove(animationClass);
          }
        },
        options
      );
    });
  }

  /**
   * Cleanup all observers
   */
  cleanup(): void {
    this.observers.forEach((observer) => observer.disconnect());
    this.observers.clear();
  }

  /**
   * Get scroll progress (0 to 1) of an element
   */
  getScrollProgress(element: ElementRef | HTMLElement): number {
    const el = element instanceof ElementRef ? element.nativeElement : element;
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    // Calculate how much of the element has scrolled past the viewport
    const scrolled = windowHeight - rect.top;
    const total = windowHeight + rect.height;
    
    return Math.max(0, Math.min(1, scrolled / total));
  }

  /**
   * Animate value from start to end over duration
   */
  animateValue(
    start: number,
    end: number,
    duration: number,
    callback: (value: number) => void,
    easing: (t: number) => number = (t) => t
  ): void {
    const startTime = performance.now();
    
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easing(progress);
      const value = start + (end - start) * easedProgress;
      
      callback(value);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }

  /**
   * Count up animation for numbers
   */
  countUp(
    endValue: number,
    duration: number,
    callback: (value: string) => void,
    decimals: number = 0
  ): void {
    this.animateValue(
      0,
      endValue,
      duration,
      (value) => {
        callback(value.toFixed(decimals));
      },
      // Ease out cubic
      (t) => 1 - Math.pow(1 - t, 3)
    );
  }
}
