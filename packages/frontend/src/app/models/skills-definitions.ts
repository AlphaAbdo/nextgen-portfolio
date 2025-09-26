export interface SkillContext {
  label: string;
  skills: string;
}

export interface SectionHeader {
  title: string;
  description: string;
  casualPitch: string;
  toolkitNote: string;
}

export interface CvMetadata {
  url: string;
  enabled: boolean;
}

export interface OrbitConfig {
  maxOrbits: number;
  size: {
    startSize: number;
    endSize: number;
    minSize: number;
  };
  animation: {
    baseDuration: number;
    durationRange: number;
  };
  direction: 'alternating' | 'clockwise' | 'counterclockwise';
}

export interface OrbitStyles {
  'z-index'?: string;
  width: string;
  height: string;
  top: string;
  left: string;
  'animation-duration': string;
  'animation-direction': string;
  'animation-delay': string;
}

export interface SkillsMetadata {
  displayMode: string;
  itemsPerRow: {
    desktop: number;
    mobile: number;
  };
  orbits: string[];
  orbitConfig: OrbitConfig;
  cv: CvMetadata;
}

export interface SkillsData {
  sectionHeader: SectionHeader;
  skills: SkillContext[];
  metadata: SkillsMetadata;
}