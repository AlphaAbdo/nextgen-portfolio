import { Component, OnInit, HostListener, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JourneyTimelineDefaultComponent } from './journey-timeline-default/journey-timeline-default.component';
import { JourneyTimelineReducedComponent } from './journey-timeline-reduced/journey-timeline-reduced.component';
import { LoadingComponent } from '../../../shared/loading/loading.component';
import { TimelineService } from '../services/timeline.service';
import { ErrorHandlerService } from '../../../../services/error-handler.service';
import { Subscription } from 'rxjs';
import { IAboutContent } from './about.types';

@Component({
  selector: 'app-journey-timeline',
  imports: [
    CommonModule,
    JourneyTimelineDefaultComponent,
    JourneyTimelineReducedComponent,
  LoadingComponent
  ],
  templateUrl: './journey-timeline.component.html',
  styleUrls: ['./journey-timeline.component.scss']
})
export class JourneyTimelineComponent implements OnInit, OnDestroy {
  aboutContent: IAboutContent | null = null;
  isMobile: boolean = false;
  isLoading = signal<boolean>(true);
  error = signal<string | null>(null);
  isRetrying = signal<boolean>(false);

  private subscription: Subscription = new Subscription();

  constructor(
    private timelineService: TimelineService,
    private errorHandler: ErrorHandlerService
  ) {
    this.checkScreenSize();
  }

  ngOnInit(): void {
    // Subscribe to about content - this is our single source of truth
    this.subscription.add(
      this.timelineService.aboutContent$.subscribe({
        next: (content) => {
          this.aboutContent = content;
        },
        error: (error) => {
          console.error('Error loading about content:', error);
          const sanitizedError = this.errorHandler.sanitizeError(error, 'timeline content');
          this.error.set(sanitizedError);
        }
      })
    );

    // Subscribe to loading state
    this.subscription.add(
      this.timelineService.loading$.subscribe({
        next: (loading) => {
          this.isLoading.set(loading);
        }
      })
    );

    // Subscribe to error state
    this.subscription.add(
      this.timelineService.error$.subscribe({
        next: (error) => {
          this.error.set(error);
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.checkScreenSize();
  }

  private checkScreenSize(): void {
    this.isMobile = window.innerWidth <= 768;
  }

  /**
   * Retry loading data
   */
  onRetry(): void {
    this.isRetrying.set(true);
    this.timelineService.retry();
  }
}
