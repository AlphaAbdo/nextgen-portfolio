import { Injectable } from '@angular/core';
import { Observable, throwError, from } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { DataLoadingService } from '../../../../services/data-loading.service';
import { IAboutContent, IAboutDataResult, ITimelineData } from '../journey-timeline/about.types';

@Injectable({
  providedIn: 'root'
})
export class AboutContentService {
  private isLoadingData = false; // Guard against multiple simultaneous calls

  constructor(private dataLoadingService: DataLoadingService) {}

  /**
   * Load about content from JSON file - NEW CLEAN API
   */
  async loadAboutContent(): Promise<Observable<IAboutContent>> {
    // Prevent multiple simultaneous calls
    if (this.isLoadingData) {
      // Return a promise that resolves to an empty observable if already loading
      return new Promise(resolve => resolve(new Observable()));
    }

    this.isLoadingData = true;

    try {
      // NEW CLEAN API - Just specify the endpoint, service handles everything else
      const content = await this.dataLoadingService.getData<IAboutContent>('assets/data/about-content.json');

      // Return as observable for compatibility
      return new Observable<IAboutContent>(observer => {
        observer.next(content);
        observer.complete();
      });
    } finally {
      this.isLoadingData = false;
    }
  }

  /**
   * Load about content and extract timeline data
   */
  loadAboutData(): Observable<IAboutDataResult> {
    return from(this.loadAboutContent()).pipe(
      switchMap(observable => observable),
      map((content: IAboutContent) => ({
        content,
        timelineData: this.extractTimelineData(content)
      })),
      catchError(error => {
        console.error('Failed to load about data:', error);
        return throwError(() => error);
      })
    );
  }

  /**
   * Extract timeline data from content blocks
   */
  private extractTimelineData(content: IAboutContent): Record<string, ITimelineData> {
    const timelineData: Record<string, ITimelineData> = {};

    if (content?.contentBlocks) {
      content.contentBlocks.forEach(block => {
        if (block?.timeline) {
          timelineData[block.id] = block.timeline;
        }
      });
    }

    return timelineData;
  }
}
