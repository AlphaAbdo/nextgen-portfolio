import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CernDataService } from '../../services/cern-data.service';
import { ScrollAnimationService } from '../../services/scroll-animation.service';
import { Contribution } from '../../models/cern-types';

@Component({
  selector: 'app-cern-challenge-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './challenge-card.component.html',
  styleUrls: ['./challenge-card.component.scss']
})
export class CernChallengeCardComponent implements OnInit {
  contributions: Contribution[] = [];

  constructor(
    private dataService: CernDataService,
    private scrollAnimation: ScrollAnimationService
  ) {}

  ngOnInit(): void {
    this.contributions = this.dataService.getContributions();
    // Scroll animations handled by CSS
  }
}
