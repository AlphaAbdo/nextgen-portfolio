import { Component, Input, OnInit, OnChanges, AfterViewInit, OnDestroy, ElementRef, ViewChildren, QueryList, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IContentBlock } from '../about.types';
import { TimelineService } from '../../services/timeline.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-journey-timeline-reduced',
  imports: [CommonModule],
  template: `
    <div class="enhanced-timeline mobile-timeline">
      <!-- Vertical timeline line on the left -->
      <div class="timeline-line-container" #lineContainer>
        <div class="timeline-line" #timelineLine></div>
      </div>

      <!-- Timeline items with icons on the line -->
      <div class="timeline-items-wrapper">
        <div class="timeline-item mobile-item"
             *ngFor="let block of contentBlocks; let i = index"
             #timelineItem>

          <div class="timeline-connector">
            <div class="timeline-marker" #timelineMarker>
              <i class="fa-solid fa-{{timelineService.getIconForBlockSync(block.id)}}"></i>
            </div>
          </div>

          <div class="timeline-content" [class.expanded]="expandedItems[i]">
            <div class="content-card"
                 [attr.data-date]="timelineService.getTimelineDateSync(block.id)"
                 (click)="toggleExpansion(i)">
              <div class="card-header">
                <h3>{{ timelineService.getTimelineTitleSync(block.id) }}</h3>
                <span class="timeline-date">{{ timelineService.getTimelineDateSync(block.id) }}</span>
                <button class="expand-btn"
                        [attr.aria-label]="expandedItems[i] ? 'Collapse' : 'Expand'">
                  <i class="fas" [ngClass]="expandedItems[i] ? 'fa-chevron-up' : 'fa-chevron-down'"></i>
                </button>
              </div>
              <div class="content-text" [class.collapsed]="!expandedItems[i]">
                <p>{{ block.content.text }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./journey-timeline-reduced.component.scss']
})
export class JourneyTimelineReducedComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  contentBlocks: IContentBlock[] = [];
  expandedItems: boolean[] = [];

  @ViewChildren('timelineMarker') timelineMarkers!: QueryList<ElementRef>;
  @ViewChildren('timelineItem') timelineItems!: QueryList<ElementRef>;

  private resizeObserver?: ResizeObserver;
  private mutationObserver?: MutationObserver;
  private updateTimeout?: number;
  private isUpdating = false;
  private subscription: Subscription = new Subscription();

  constructor(
    public timelineService: TimelineService,
    private elementRef: ElementRef
  ) {}

  ngOnInit() {
    this.initializeExpansionState();

    // Subscribe to content blocks from the service
    this.subscription.add(
      this.timelineService.contentBlocks$.subscribe({
        next: (blocks) => {
          this.contentBlocks = blocks;
          this.initializeExpansionState();
          // Update timeline when content changes
          this.debouncedUpdate();
        },
        error: (error) => {
          console.error('Error loading content blocks:', error);
          this.contentBlocks = [];
        }
      })
    );
  }

  ngOnChanges() {
    // No longer needed since we subscribe to contentBlocks from the service
  }

  ngAfterViewInit() {
    // Wait for the view to be fully rendered
    setTimeout(() => {
      this.updateTimelineLine();
      this.setupObservers();
    }, 100);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.cleanup();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.debouncedUpdate();
  }

  private initializeExpansionState() {
    this.expandedItems = new Array(this.contentBlocks.length).fill(false);
  }

  toggleExpansion(index: number): void {
    this.expandedItems[index] = !this.expandedItems[index];
    // Update timeline line after expansion state changes
    this.debouncedUpdate();
  }

  private setupObservers() {
    this.setupResizeObserver();
    this.setupMutationObserver();
  }

  private setupResizeObserver() {
    const container = this.elementRef.nativeElement.querySelector('.timeline-items-wrapper');
    if (container && window.ResizeObserver) {
      this.resizeObserver = new ResizeObserver(() => {
        this.debouncedUpdate();
      });
      this.resizeObserver.observe(container);
    }
  }

  private setupMutationObserver() {
    const container = this.elementRef.nativeElement;
    if (container && window.MutationObserver) {
      this.mutationObserver = new MutationObserver((mutations) => {
        // Check if mutations affect layout
        const hasLayoutChanges = mutations.some(mutation =>
          mutation.type === 'childList' ||
          mutation.type === 'attributes' && (
            mutation.attributeName === 'style' ||
            mutation.attributeName === 'class'
          )
        );

        if (hasLayoutChanges) {
          this.debouncedUpdate();
        }
      });

      this.mutationObserver.observe(container, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['style', 'class']
      });
    }
  }

  private debouncedUpdate() {
    if (this.updateTimeout) {
      clearTimeout(this.updateTimeout);
    }

    this.updateTimeout = window.setTimeout(() => {
      this.updateTimelineLine();
    }, 50); // Debounce updates to prevent excessive recalculations
  }

  private cleanup() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
    if (this.mutationObserver) {
      this.mutationObserver.disconnect();
    }
    if (this.updateTimeout) {
      clearTimeout(this.updateTimeout);
    }
  }

  private updateTimelineLine() {
    // Prevent concurrent updates
    if (this.isUpdating) {
      return;
    }

    this.isUpdating = true;

    const markers = this.timelineMarkers?.toArray();
    const items = this.timelineItems?.toArray();
    const lineElement = this.elementRef.nativeElement.querySelector('.timeline-line') as HTMLElement;
    const containerElement = this.elementRef.nativeElement.querySelector('.timeline-line-container') as HTMLElement;

    if (!markers || markers.length === 0 || !lineElement || !containerElement) {
      console.log('Timeline line update skipped: missing elements');
      this.isUpdating = false;
      return;
    }

    try {
      const firstMarker = markers[0].nativeElement;
      const lastMarker = markers[markers.length - 1].nativeElement;

      // Ensure elements are rendered and have dimensions
      if (!firstMarker.offsetHeight || !lastMarker.offsetHeight) {
        console.log('Timeline markers not fully rendered yet');
        // Retry after a short delay
        setTimeout(() => {
          this.isUpdating = false;
          this.updateTimelineLine();
        }, 50);
        return;
      }

      const containerRect = containerElement.getBoundingClientRect();
      const firstMarkerRect = firstMarker.getBoundingClientRect();
      const lastMarkerRect = lastMarker.getBoundingClientRect();

      // Calculate the line position relative to the container
      // Use the vertical center of each marker relative to the container
      const firstMarkerCenterY = firstMarkerRect.top + (firstMarkerRect.height / 2);
      const lastMarkerCenterY = lastMarkerRect.top + (lastMarkerRect.height / 2);
      const containerTop = containerRect.top;

      const lineTop = firstMarkerCenterY - containerTop;
      const lineBottom = lastMarkerCenterY - containerTop;
      const lineHeight = lineBottom - lineTop;

      // Check if markers are actually positioned where we expect
      const expectedMarkerCenterX = containerRect.left + (containerRect.width / 2);
      const actualMarkerCenterX = firstMarkerRect.left + (firstMarkerRect.width / 2);
      const offsetX = actualMarkerCenterX - expectedMarkerCenterX;

      // Smart positioning: if offset is significant, adjust line position
      // Otherwise, keep it centered in its container
      let lineLeft = '0px';
      if (Math.abs(offsetX) > 2) {
        // Adjust line to match marker position
        lineLeft = `${offsetX}px`;
        console.log(`Auto-adjusting line position by ${offsetX}px to match markers`);
      }

      // Apply the calculated dimensions with smooth transitions
      lineElement.style.transition = 'all 0.2s ease';
      lineElement.style.top = `${Math.max(0, lineTop)}px`;
      lineElement.style.height = `${Math.max(0, lineHeight)}px`;
      lineElement.style.left = lineLeft;
      lineElement.style.display = lineHeight > 0 ? 'block' : 'none';

      // Reset any debugging styles
      lineElement.style.background = '';
      firstMarker.style.background = '';
      lastMarker.style.background = '';

    } catch (error) {
      console.warn('Error updating timeline line:', error);
      // Fallback: show the line with default positioning
      if (lineElement) {
        lineElement.style.top = '0';
        lineElement.style.bottom = '0';
        lineElement.style.height = 'auto';
        lineElement.style.left = '0px';
        lineElement.style.display = 'block';
      }
    } finally {
      this.isUpdating = false;
    }
  }
}
