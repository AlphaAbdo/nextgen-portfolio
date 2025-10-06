import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cern-interactive-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './interactive-demo.component.html',
  styleUrls: ['./interactive-demo.component.scss']
})
export class CernInteractiveDemoComponent implements OnInit, OnDestroy {
  
  showBefore = true;

  ngOnInit(): void {
    // Initialize Three.js scenes (before/after)
  }

  ngOnDestroy(): void {
    // Cleanup Three.js resources
  }

  toggleView(): void {
    this.showBefore = !this.showBefore;
  }
}
