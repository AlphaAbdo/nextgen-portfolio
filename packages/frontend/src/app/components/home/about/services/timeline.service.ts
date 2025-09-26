import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ITimelineData, IAboutContent, IContentBlock } from '../journey-timeline/about.types';
import { AboutContentService } from './about-content.service';

@Injectable({
  providedIn: 'root'
})
export class TimelineService {
  private timelineDataSubject = new BehaviorSubject<Record<string, ITimelineData>>({});
  private contentBlocksSubject = new BehaviorSubject<IContentBlock[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(true);
  private errorSubject = new BehaviorSubject<string | null>(null);
  private aboutContentSubject = new BehaviorSubject<IAboutContent | null>(null);

  // Public observables
  public timelineData$ = this.timelineDataSubject.asObservable();
  public contentBlocks$ = this.contentBlocksSubject.asObservable();
  public loading$ = this.loadingSubject.asObservable();
  public error$ = this.errorSubject.asObservable();

  // Combined observable for full about content
  public aboutContent$ = this.aboutContentSubject.asObservable();

  private initialized = false; // Guard against multiple initializations

  constructor(private aboutContentService: AboutContentService) {
    this.initializeData();
  }

  /**
   * Initialize data loading
   */
  private initializeData(): void {
    // Prevent multiple initializations
    if (this.initialized) {
      return;
    }

    this.initialized = true;
    this.loadingSubject.next(true);
    this.errorSubject.next(null);

    this.aboutContentService.loadAboutData().subscribe({
      next: (result) => {
        // Store full about content
        this.aboutContentSubject.next(result.content);

        this.timelineDataSubject.next(result.timelineData);
        this.contentBlocksSubject.next(result.content.contentBlocks);
        this.loadingSubject.next(false);
      },
      error: (error) => {
        this.errorSubject.next(error.message || 'Failed to load timeline data');
        this.loadingSubject.next(false);
      }
    });
  }

  /**
   * Get timeline title for a specific block
   */
  getTimelineTitle(blockId: string): Observable<string> {
    return this.timelineData$.pipe(
      map(data => data[blockId]?.title || 'Unknown')
    );
  }

  /**
   * Get timeline date for a specific block
   */
  getTimelineDate(blockId: string): Observable<string> {
    return this.timelineData$.pipe(
      map(data => data[blockId]?.date || 'Unknown')
    );
  }

  /**
   * Get icon for a specific block
   */
  getIconForBlock(blockId: string): Observable<string> {
    return this.timelineData$.pipe(
      map(data => data[blockId]?.icon || 'circle')
    );
  }

  /**
   * Get all timeline data synchronously (for template usage)
   */
  getCurrentTimelineData(): Record<string, ITimelineData> {
    return this.timelineDataSubject.value;
  }

  /**
   * Get timeline title synchronously (for template usage)
   */
  getTimelineTitleSync(blockId: string): string {
    const data = this.timelineDataSubject.value;
    const title = data[blockId]?.title;
    return title || 'Unknown';
  }

  /**
   * Get timeline date synchronously (for template usage)
   */
  getTimelineDateSync(blockId: string): string {
    const data = this.timelineDataSubject.value;
    return data[blockId]?.date || 'Unknown';
  }

  /**
   * Get icon synchronously (for template usage)
   */
  getIconForBlockSync(blockId: string): string {
    const data = this.timelineDataSubject.value;
    return data[blockId]?.icon || 'circle';
  }

  /**
   * Retry data loading
   */
  retry(): void {
    this.initializeData();
  }
}