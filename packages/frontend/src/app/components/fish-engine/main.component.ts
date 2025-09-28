import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ThemeSwitcherComponent } from '../shared/theme-switcher/theme-switcher.component';

@Component({
  selector: 'app-fish-engine-main',
  standalone: true,
  imports: [CommonModule, RouterLink, ThemeSwitcherComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class FishEngineMainComponent implements OnInit {
  showScrollTop = false;
  isLoading = true;

  ngOnInit() {
    // Simulate loading time for better UX
    setTimeout(() => {
      this.isLoading = false;
    }, 500);

    // Add intersection observer for scroll animations
    this.initScrollAnimations();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScrollTop = window.pageYOffset > 300;
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  private initScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe all sections that should animate in
    setTimeout(() => {
      const sections = document.querySelectorAll('.introduction, .intro, .feature');
      sections.forEach(section => observer.observe(section));
    }, 100);
  }
}