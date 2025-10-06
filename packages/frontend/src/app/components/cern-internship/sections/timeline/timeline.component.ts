import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CernDataService } from '../../services/cern-data.service';

interface TimelineEvent {
  date: string;
  phase: string;
  icon: string;
  description: string;
  milestone?: boolean;
}

@Component({
  selector: 'app-cern-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class CernTimelineComponent implements OnInit, AfterViewInit {
  @ViewChild('timelineTrack', { static: false }) timelineTrack!: ElementRef<HTMLElement>;
  
  events: TimelineEvent[] = [];
  timelineLines: { x: number; y: number; height: number }[] = [];
  isMobile = false;

  constructor(private cernData: CernDataService) {}

  ngOnInit(): void {
    this.events = this.cernData.getTimeline();
    this.checkScreenSize();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.calculateTimelineLines();
    }, 100);
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.checkScreenSize();
    setTimeout(() => {
      this.calculateTimelineLines();
    }, 100);
  }

  private checkScreenSize(): void {
    this.isMobile = window.innerWidth <= 768;
  }

  private calculateTimelineLines(): void {
    if (!this.timelineTrack) return;

    const markers = this.timelineTrack.nativeElement.querySelectorAll('.event-marker');
    this.timelineLines = [];

    if (markers.length === 0) return;

    const trackRect = this.timelineTrack.nativeElement.getBoundingClientRect();
    const markerPositions: { x: number; y: number; index: number }[] = [];

    // Get all marker positions
    markers.forEach((marker, index) => {
      const markerElement = marker as HTMLElement;
      const markerRect = markerElement.getBoundingClientRect();
      
      markerPositions.push({
        x: markerRect.left - trackRect.left + markerRect.width / 2,
        y: markerRect.top - trackRect.top + markerRect.height / 2,
        index
      });
    });

    // Check if all markers are roughly in the same vertical line (mobile layout)
    const firstX = markerPositions[0].x;
    const isSingleColumn = markerPositions.every(pos => Math.abs(pos.x - firstX) < 50);

    if (isSingleColumn) {
      // Single vertical line from first to last marker
      const firstMarker = markerPositions[0];
      const lastMarker = markerPositions[markerPositions.length - 1];
      
      this.timelineLines.push({
        x: firstMarker.x - 2, // Center the line on the markers
        y: firstMarker.y,
        height: lastMarker.y - firstMarker.y
      });
    } else {
      // Alternating layout - separate odd and even positions
      const oddPositions = markerPositions.filter(pos => pos.index % 2 === 0).sort((a, b) => a.y - b.y); // 0-indexed, so 0,2,4... are "odd" events
      const evenPositions = markerPositions.filter(pos => pos.index % 2 === 1).sort((a, b) => a.y - b.y); // 1,3,5... are "even" events

      // Create timeline for odd positions (left side) - only if we have multiple odd checkpoints
      if (oddPositions.length > 1) {
        const firstOdd = oddPositions[0];
        const lastOdd = oddPositions[oddPositions.length - 1];
        
        this.timelineLines.push({
          x: firstOdd.x - 2,
          y: firstOdd.y,
          height: lastOdd.y - firstOdd.y
        });
      }

      // Create timeline for even positions (right side) - only if we have multiple even checkpoints
      if (evenPositions.length > 1) {
        const firstEven = evenPositions[0];
        const lastEven = evenPositions[evenPositions.length - 1];
        
        this.timelineLines.push({
          x: firstEven.x - 2,
          y: firstEven.y,
          height: lastEven.y - firstEven.y
        });
      }
    }
  }

  getTimelineLineStyle(line: { x: number; y: number; height: number }): any {
    const isHorizontal = line.height < 20 && line.height > 0;
    
    return {
      position: 'absolute',
      left: `${line.x}px`,
      top: `${line.y}px`,
      width: isHorizontal ? `${line.height}px` : '4px',
      height: isHorizontal ? '2px' : `${Math.max(line.height, 4)}px`,
      background: 'linear-gradient(' + 
        (isHorizontal ? '90deg' : '180deg') + 
        ', transparent 0%, rgba(0, 168, 225, 0.3) 10%, rgba(0, 168, 225, 0.8) 50%, rgba(0, 168, 225, 0.3) 90%, transparent 100%)',
      'z-index': '1',
      'box-shadow': '0 0 20px rgba(0, 168, 225, 0.5)'
    };
  }
}
