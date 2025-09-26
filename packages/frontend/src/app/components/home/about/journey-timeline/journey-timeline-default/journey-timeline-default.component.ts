import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineService } from '../../services/timeline.service';
import { IContentBlock } from '../about.types';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-journey-timeline-default',
  imports: [CommonModule],
  template: `
    <div class="enhanced-timeline desktop-timeline">
      <div class="timeline-item"
           *ngFor="let block of contentBlocks; let i = index"
           [ngClass]="i % 2 === 0 ? 'timeline-left' : 'timeline-right'">

        <!-- Left-aligned timeline item -->
        <ng-container *ngIf="i % 2 === 0">
          <div class="timeline-content">
            <div class="content-card" [attr.data-date]="timelineService.getTimelineDateSync(block.id)">
              <h3>{{ timelineService.getTimelineTitleSync(block.id) }}</h3>
              <p>{{ block.content.text }}</p>
            </div>
          </div>
          <div class="timeline-connector">
            <div class="timeline-marker">
              <i class="fa-solid fa-{{timelineService.getIconForBlockSync(block.id)}}"></i>
            </div>
          </div>
          <div class="timeline-visual">
            <div class="visual-frame">
              <img [src]="block.image.src"
                   [alt]="block.image.alt"
                   loading="lazy" />
              <div class="image-overlay"></div>
            </div>
          </div>
        </ng-container>

        <!-- Right-aligned timeline item -->
        <ng-container *ngIf="i % 2 === 1">
          <div class="timeline-visual">
            <div class="visual-frame">
              <img [src]="block.image.src"
                   [alt]="block.image.alt"
                   loading="lazy" />
              <div class="image-overlay"></div>
            </div>
          </div>
          <div class="timeline-connector">
            <div class="timeline-marker">
              <i class="fa-solid fa-{{timelineService.getIconForBlockSync(block.id)}}"></i>
            </div>
          </div>
          <div class="timeline-content">
            <div class="content-card" [attr.data-date]="timelineService.getTimelineDateSync(block.id)">
              <h3>{{ timelineService.getTimelineTitleSync(block.id) }}</h3>
              <p>{{ block.content.text }}</p>
            </div>
          </div>
        </ng-container>
      </div>
    </div>
  `,
  styleUrls: ['./journey-timeline-default.component.scss']
})
export class JourneyTimelineDefaultComponent implements OnInit, OnDestroy {
  contentBlocks: IContentBlock[] = [];
  private subscription: Subscription = new Subscription();

  constructor(public timelineService: TimelineService) {}

  ngOnInit(): void {
    // Subscribe to content blocks from the service
    this.subscription.add(
      this.timelineService.contentBlocks$.subscribe({
        next: (blocks) => {
          this.contentBlocks = blocks;
        },
        error: (error) => {
          console.error('Error loading content blocks:', error);
          this.contentBlocks = [];
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
