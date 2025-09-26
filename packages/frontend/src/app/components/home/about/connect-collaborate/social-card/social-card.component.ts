import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-social-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <a [href]="href" [target]="external ? '_blank' : null" class="social-card" [class]="platform">
      <div class="social-icon">
        <i [class]="icon"></i>
      </div>
      <div class="social-info">
        <h4>{{ title }}</h4>
        <p>{{ description }}</p>
      </div>
      <div class="social-arrow">
        <i [class]="external ? 'fas fa-external-link-alt' : 'fas fa-arrow-right'"></i>
      </div>
    </a>
  `,
  styleUrls: ['./social-card.component.scss']
})
export class SocialCardComponent {
  @Input({ required: true }) platform!: string;
  @Input({ required: true }) title!: string;
  @Input({ required: true }) description!: string;
  @Input({ required: true }) href!: string;
  @Input({ required: true }) icon!: string;
  @Input({ required: true }) external!: boolean;
}