import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ImpactMetric {
  value: string;
  label: string;
  icon: string;
  description: string;
}

@Component({
  selector: 'app-cern-impact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './impact.component.html',
  styleUrls: ['./impact.component.scss']
})
export class CernImpactComponent implements OnInit {
  metrics: ImpactMetric[] = [
    {
      value: '10,000+',
      label: 'Files Processed',
      icon: '📦',
      description: 'Event files cleaned and optimized'
    },
    {
      value: '95%',
      label: 'Performance Gain',
      icon: '⚡',
      description: 'Load time reduction achieved'
    },
    {
      value: '60+',
      label: 'Physicists',
      icon: '👥',
      description: 'Users impacted worldwide'
    },
    {
      value: '4',
      label: 'Major Features',
      icon: '🚀',
      description: 'Production contributions shipped'
    },
    {
      value: '24hrs',
      label: 'Longest Run',
      icon: '⏱️',
      description: 'Continuous processing uptime'
    },
    {
      value: '21',
      label: 'Weeks',
      icon: '📅',
      description: 'Of intense learning & shipping'
    }
  ];

  ngOnInit(): void {
    this.observeMetrics();
  }

  private observeMetrics(): void {
    if (typeof window === 'undefined') return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.2 });

    setTimeout(() => {
      const metricCards = document.querySelectorAll('.metric-card');
      metricCards.forEach(card => observer.observe(card));
    }, 100);
  }
}
