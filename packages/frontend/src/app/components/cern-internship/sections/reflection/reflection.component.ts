import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface LearningItem {
  text: string;
  icon: string;
}

interface LearningCategory {
  title: string;
  color: string;
  items: LearningItem[];
}

@Component({
  selector: 'app-cern-reflection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reflection.component.html',
  styleUrls: ['./reflection.component.scss']
})
export class CernReflectionComponent implements OnInit {
  learningCategories: LearningCategory[] = [
    {
      title: 'Technical Skills',
      color: '#00a8e1',
      items: [
        { text: 'WebGL/Three.js at production scale', icon: '🎨' },
        { text: 'Distributed systems debugging (EOS, Kerberos)', icon: '🔧' },
        { text: 'GPU programming with GLSL shaders', icon: '⚡' },
        { text: 'Open-source code review (Phoenix on GitHub)', icon: '👁️' },
        { text: 'Performance optimization under constraints', icon: '🚀' }
      ]
    },
    {
      title: 'Personal Growth',
      color: '#00c48c',
      items: [
        { text: 'How to tackle "impossible" problems', icon: '💪' },
        { text: 'The value of persistence (24-hour runs)', icon: '⏱️' },
        { text: 'Communication with physicists & supervisors', icon: '💬' },
        { text: 'Balancing "ship it" vs "perfect it"', icon: '⚖️' },
        { text: 'Working in world-class research environment', icon: '🌍' }
      ]
    }
  ];

  ngOnInit(): void {
    this.observeLearningItems();
  }

  private observeLearningItems(): void {
    if (typeof window === 'undefined') return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.2 });

    setTimeout(() => {
      const items = document.querySelectorAll('.learning-item, .reflection-quote');
      items.forEach(item => observer.observe(item));
    }, 100);
  }
}
