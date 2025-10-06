import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../home/header/header.component';
import { CernHeroComponent } from './sections/hero/hero.component';
import { CernTimelineComponent } from './sections/timeline/timeline.component';
import { CernChallengeCardComponent } from './sections/challenge-card/challenge-card.component';
import { CernImpactComponent } from './sections/impact/impact.component';
import { CernGalleryComponent } from './sections/gallery/gallery.component';
import { CernReflectionComponent } from './sections/reflection/reflection.component';

@Component({
  selector: 'app-cern-internship',
  standalone: true,
  imports: [
    CommonModule, 
    HeaderComponent,
    CernHeroComponent, 
    CernTimelineComponent, 
    CernChallengeCardComponent, 
    CernImpactComponent, 
    CernGalleryComponent, 
    CernReflectionComponent
  ],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class CernInternshipComponent implements OnInit, OnDestroy {
  
  // Custom navigation sections for CERN page
  cernSections = [
    { section: 'hero', label: 'Hero', icon: '🎪', description: 'Introduction' },
    { section: 'timeline', label: 'Timeline', icon: '📅', description: 'Journey' },
    { section: 'challenges', label: 'Challenges', icon: '💪', description: 'Key work' },
    { section: 'impact', label: 'Impact', icon: '⚡', description: 'Results' },
    { section: 'gallery', label: 'Gallery', icon: '📸', description: 'Photos' },
    { section: 'reflection', label: 'Reflection', icon: '💭', description: 'Learnings' }
  ];
  
  constructor() {}

  ngOnInit(): void {
    // Component initialized
  }

  ngOnDestroy(): void {
    // Cleanup Three.js resources, animations, etc.
  }
}
