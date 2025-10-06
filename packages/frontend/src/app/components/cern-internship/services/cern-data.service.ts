import { Injectable } from '@angular/core';

export interface Contribution {
  id: number;
  icon: string;
  title: string;
  subtitle: string;
  problem: string;
  solution: string;
  impact: string;
  technologies: string[];
  metrics?: {
    label: string;
    before: string;
    after: string;
  }[];
  codeSnippets?: {
    language: string;
    code: string;
    description: string;
  }[];
}

export interface TimelineEvent {
  date: string;
  phase: string;
  icon: string;
  description: string;
  milestone?: boolean;
}

export interface ImpactMetric {
  value: string;
  label: string;
  description?: string;
}

export interface Photo {
  src: string;
  alt: string;
  caption: string;
  location?: string;
  date?: string;
}

@Injectable({
  providedIn: 'root'
})
export class CernDataService {

  constructor() { }

  getOverview() {
    return {
      title: 'CERN Internship 2025',
      duration: 'April 1 - August 28, 2025',
      weeks: 21,
      location: 'CERN, Geneva, Switzerland',
      role: '2nd Year Engineering Student - ISIMA',
      organization: 'LHCb Collaboration',
      supervisor: 'Edward Moyse',
      tagline: 'Where I shipped code that particle physicists use daily'
    };
  }

  getContributions(): Contribution[] {
    return [
      {
        id: 1,
        icon: '🔥',
        title: 'Pipeline Hell',
        subtitle: 'Legacy Dataset Cleanup',
        problem: 'Discovered 10,000+ corrupted event files. Each 50+ MB. JSON so bloated, browsers couldn\'t handle them. Tracks duplicated N² times. Physics data locked away.',
        solution: 'Built an introspective script. When it detects Kerberos timeout, it kicks itself and resumes. Processed for 24 hours straight. All 10k+ files cleaned.',
        impact: '10,000+ event files cleaned and compressed. 60-70% file size reduction. Events from 2022-2025 now accessible.',
        technologies: ['Python', 'EOS', 'Kerberos', 'JSON', 'Batch Processing'],
        metrics: [
          { label: 'Files Processed', before: 'Corrupted', after: '10,000+' },
          { label: 'File Size', before: '50+ MB', after: '60-70% smaller' },
          { label: 'Processing Time', before: 'Impossible', after: '24 hours' }
        ]
      },
      {
        id: 2,
        icon: '📷',
        title: 'Camera Chaos',
        subtitle: 'Camera & Controls Refactoring',
        problem: 'Issue #714: Cameras desync between main view and overlay. Physicists zoom in, overlay stays zoomed out. Frustration everywhere. 21 files need refactoring.',
        solution: 'Designed focal point synchronization. Double-click to change orbit target. Seamless resize between main canvas and overlay. PR #720 approved by Edward Moyse.',
        impact: 'Camera system that "just works". +818/-212 lines in Phoenix. Smooth synchronization across viewports.',
        technologies: ['TypeScript', 'Three.js', 'Camera Mathematics', 'Phoenix Framework'],
        metrics: [
          { label: 'Files Modified', before: '21', after: '21' },
          { label: 'Code Changes', before: 'Broken', after: '+818/-212 lines' },
          { label: 'PR Status', before: 'Open', after: 'Merged #720' }
        ]
      },
      {
        id: 3,
        icon: '✨',
        title: 'Selection System Redesign',
        subtitle: 'Multi-Select & Performance',
        problem: 'Legacy OutlinePass system. 60% more memory than needed. Only one object selectable. Physicists want multi-select to compare tracks.',
        solution: 'Replaced entire selection pipeline. EdgesGeometry + custom GLSL shaders. 60% memory reduction. Multi-select unlocked. < 5ms latency.',
        impact: 'Multi-object selection enabled. 60% memory savings. Real-time interaction with complex events.',
        technologies: ['WebGL', 'GLSL Shaders', 'Three.js', 'EdgesGeometry'],
        metrics: [
          { label: 'Memory Usage', before: '100%', after: '40%' },
          { label: 'Objects Selectable', before: '1', after: 'Unlimited' },
          { label: 'Selection Latency', before: 'Slow', after: '< 5ms' }
        ]
      },
      {
        id: 4,
        icon: '⚡',
        title: 'Tracks Subsystem',
        subtitle: 'Performance & Rendering',
        problem: 'Thousands of tracks per event. Each with its own material. GPU crying. Browser freezing. Unusable on complex collisions.',
        solution: 'Unified material system. Batch rendering. Linear extrapolation for ECAL/HCAL. Events with thousands of tracks now render smoothly.',
        impact: 'Smooth rendering of complex events. Calorimeter extrapolation working. Material pooling implemented.',
        technologies: ['WebGL', 'GLSL', 'Material Pooling', 'Batch Rendering'],
        metrics: [
          { label: 'Tracks Handled', before: 'Dozens', after: 'Thousands' },
          { label: 'Materials', before: 'N materials', after: 'Pooled' },
          { label: 'Rendering', before: 'Frozen', after: 'Smooth' }
        ]
      }
    ];
  }

  getTimeline(): TimelineEvent[] {
    return [
      { date: 'April 2025', phase: 'Arrival', icon: '🚪', description: 'Accepted to CERN. Onboarding at LHCb.' },
      { date: 'April-May', phase: 'Pipeline Discovery', icon: '🐛', description: 'Found 10k+ corrupted event files.', milestone: true },
      { date: 'May-June', phase: 'Camera Refactoring', icon: '📷', description: 'Issue #714: Fixed camera desync.', milestone: true },
      { date: 'June-July', phase: 'Selection Redesign', icon: '✨', description: 'Rebuilt selection system with 60% memory savings.', milestone: true },
      { date: 'July-August', phase: 'Tracks & Polish', icon: '⚡', description: 'Material pooling, calorimeter extrapolation.' },
      { date: 'August 28', phase: 'Completion', icon: '🎯', description: 'Shipped to production. Used by LHCb physicists.', milestone: true }
    ];
  }

  getImpactMetrics(): ImpactMetric[] {
    return [
      {
        value: '10,000+',
        label: 'Events Cleaned',
        description: 'Legacy dataset from 2022-2025 restored and compressed'
      },
      {
        value: '60%',
        label: 'Memory Saved',
        description: 'Selection system memory reduction'
      },
      {
        value: '~2,500+',
        label: 'Lines of Code',
        description: 'Total contribution across pipeline, Phoenix, and tooling'
      },
      {
        value: 'Production',
        label: 'Live on LHCb',
        description: 'Code merged and used by 60+ physicists worldwide'
      }
    ];
  }

  getPhotos(): Photo[] {
    return [
      {
        src: 'assets/LHC-tunnel.jpg',
        alt: 'LHC Tunnel',
        caption: '16.7 miles of pure physics',
        location: 'Large Hadron Collider'
      },
      {
        src: 'assets/LHCb-detector.jpg',
        alt: 'LHCb Detector',
        caption: 'LHCb detector schematic',
        location: 'Point 8, LHC'
      },
      {
        src: 'assets/IMG_20250403_103244.jpg',
        alt: 'LHCb Village Visit',
        caption: 'Site visit to LHCb Village',
        location: 'CERN',
        date: 'April 3, 2025'
      },
      {
        src: 'assets/IMG_20250409_121317.jpg',
        alt: 'Antiproton Decelerator',
        caption: 'Visit to Antiproton Decelerator',
        location: 'CERN',
        date: 'April 9, 2025'
      },
      {
        src: 'assets/IMG_20250618_145556.jpg',
        alt: 'Data Centre',
        caption: 'CERN Data Centre tour',
        location: 'CERN',
        date: 'June 18, 2025'
      }
    ];
  }

  getAssetPaths() {
    return {
      figures: {
        figure19: 'assets/compressed-json-sizes.png',
        figure20: 'assets/uncompressed-json-sizes.png',
        figure21: 'assets/camera-desync.png',
        figure22: 'assets/multi-viewport-design.png',
        figure23: 'assets/overlay-final.png',
        figure24: 'assets/selection-comparison.png'
      },
      photos: {
        lhcbVisit: 'assets/IMG_20250403_103244.jpg',
        antiproton: 'assets/IMG_20250409_121317.jpg',
        dataCentre: 'assets/IMG_20250618_145556.jpg'
      },
      diagrams: {
        gantt: 'assets/gantt-timeline.png',
        lhcCrossSection: 'assets/lhc-cross-section.png',
        lhcbSchematic: 'assets/lhcb-schematic.png'
      }
    };
  }
}
