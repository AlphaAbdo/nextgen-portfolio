export interface PortfolioCardContent {
  type: 'image' | 'video' | 'iframe' | 'html' | 'canvas' | 'component';
  content: string; // URL, HTML string, embed code, or component selector
  attributes?: { [key: string]: any }; // Additional attributes for dynamic content
}

export interface PortfolioCardData {
  id: string;
  title: string;
  description: string;
  background: PortfolioCardContent;
  link?: string;
  target?: string;
  category: string;
  interactive?: boolean; // For git repos, live demos
  metadata: {
    tech?: string[]; // Technologies used
    year?: string;
    status?: 'completed' | 'in-progress' | 'archived';
    featured?: boolean;
  };
}

export interface PortfolioCardConfig {
  enableFlip?: boolean;
  enableParticles?: boolean;
  height?: string;
  theme?: 'glass' | 'solid' | 'minimal';
}
