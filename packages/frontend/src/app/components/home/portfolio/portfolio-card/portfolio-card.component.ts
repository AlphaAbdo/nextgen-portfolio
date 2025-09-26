import { Component, Input, OnInit, OnDestroy, inject, signal, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { AnimatedCardDemoComponent } from '../../animated-card-demo/animated-card-demo.component';
import { LoadingComponent } from '../../../shared/loading/loading.component';
import { PortfolioCardData, PortfolioCardConfig } from './portfolio-card.interface';

@Component({
  selector: 'app-portfolio-card',
  standalone: true,
  imports: [CommonModule, AnimatedCardDemoComponent, LoadingComponent],
  templateUrl: './portfolio-card.component.html',
  styleUrls: ['./portfolio-card.component.scss']
})
export class PortfolioCardComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input({ required: true }) data!: PortfolioCardData;
  @Input() config: PortfolioCardConfig = {
    enableFlip: true,
    enableParticles: true,
    height: '300px',
    theme: 'glass'
  };

  private sanitizer = inject(DomSanitizer);

  // Signals for reactive content
  sanitizedContent = signal<SafeHtml | null>(null);
  hasError = signal<boolean>(false);
  isLoading = signal<boolean>(true);
  imageSrc = signal<string>('');

  ngOnInit() {
    this.processContent();
  }

  ngAfterViewInit() {
    // No lazy loading needed - images load directly
  }

  ngOnDestroy() {
    // No cleanup needed
  }

  private processContent(): void {
    if (!this.data?.background) {
      this.hasError.set(true);
      this.isLoading.set(false);
      return;
    }

    const { type, content } = this.data.background;

    try {
      switch (type) {
        case 'html':
          this.sanitizedContent.set(this.sanitizer.bypassSecurityTrustHtml(content));
          break;
        case 'component':
        case 'video':
        case 'image':
          // Set image source directly for immediate loading
          if (type === 'image') {
            this.imageSrc.set(content);
          }
          break;
        default:
        // unsupported content type
          this.hasError.set(true);
      }
    } catch (error) {
      // handle error silently
      this.hasError.set(true);
    } finally {
      this.isLoading.set(false);
    }
  }

  onImageError(event: Event): void {
    // Mark as error when image fails to load
    this.hasError.set(true);
  }

  onContentLoad(): void {
    this.isLoading.set(false);
  }

  onCardClick(): void {
    if (this.data.link) {
      if (this.data.target === '_blank') {
        window.open(this.data.link, '_blank');
      } else {
        window.location.href = this.data.link;
      }
    }
  }
}
