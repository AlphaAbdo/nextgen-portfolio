import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface GalleryItem {
  title: string;
  caption: string;
  category: 'facility' | 'detector' | 'team' | 'work';
  image: string;
}

@Component({
  selector: 'app-cern-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class CernGalleryComponent implements OnInit {
  galleryItems: GalleryItem[] = [
    {
      title: 'LHC Tunnel',
      caption: '27 km underground ring where particles collide at near-light speed',
      category: 'facility',
      image: 'assets/cern/lhc_tunnel.jpg'
    },
    {
      title: 'LHCb Detector',
      caption: 'Tracking beauty quarks to understand matter-antimatter asymmetry',
      category: 'detector',
      image: 'assets/cern/lhcb_detector.png'
    },
    {
      title: 'CERN Campus',
      caption: 'Home to the world\'s largest particle physics laboratory',
      category: 'facility',
      image: 'assets/cern/IMG_20250403_103244.jpg'
    },
    {
      title: 'Phoenix Event Display',
      caption: 'The visualization tool I helped optimize for LHCb physicists',
      category: 'work',
      image: 'assets/cern/lhcb_event_display.jpg'
    },
    {
      title: 'Data Center',
      caption: 'CERN Tier-0 computing facility processing petabytes of collision data',
      category: 'facility',
      image: 'assets/cern/cern_tier0.jpg'
    },
    {
      title: 'LHC Overview',
      caption: 'The complete Large Hadron Collider with all four main experiments',
      category: 'detector',
      image: 'assets/cern/Overall-view-of-the-Large-Hadron-Collider-including-the-ATLAS-CMS-ALICE-and-LHCb.png'
    }
  ];

  ngOnInit(): void {
    this.observeGalleryItems();
  }

  private observeGalleryItems(): void {
    if (typeof window === 'undefined') return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    setTimeout(() => {
      const items = document.querySelectorAll('.gallery-item');
      items.forEach(item => observer.observe(item));
    }, 100);
  }
}
