// Legacy format (keep for backwards compatibility)
export interface SkillContext {
  label: string;
  skills: string;
}

export interface SectionHeader {
  title: string;
  description: string;
  casualPitch?: string;
  toolkitNote?: string;
  subtitle?: string;
  rootLabel?: string;
}

// New Tree format
export interface Skill {
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  years?: number;
  icon?: string;
}

export interface TreeTrunk {
  label: string;
  description: string;
  skills: Skill[];
}

export interface TreeBranch {
  id: string;
  label: string;
  color: string;
  side: 'left' | 'right';
  position: number;
  skills: Skill[];
}

export interface SkillTree {
  trunk: TreeTrunk;
  branches: TreeBranch[];
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
  displayMode: 'grid' | 'tree' | 'list';
  version?: string;
  mobileStrategy?: 'vertical-cards' | 'accordion' | 'tabs';
  animations?: {
    branchGrowth?: boolean;
    particleFlow?: boolean;
    hoverGlow?: boolean;
  };
  itemsPerRow?: {
    desktop: number;
    mobile: number;
  };
  orbits?: string[];
  orbitConfig?: OrbitConfig;
  cv: CvMetadata;
}

export interface SkillsData {
  sectionHeader: SectionHeader;
  skills?: SkillContext[]; // Legacy format
  tree?: SkillTree; // New tree format
  metadata: SkillsMetadata;
}