// TypeScript interfaces for CERN Internship Data
// Based on CERN_INTERNSHIP_DATA.md

export interface Contribution {
  id: number;
  title: string;
  subtitle: string;
  icon: string;
  problem: string;
  solution: string;
  impact: string;
  technologies: string[];
  timeline?: string;
  github?: {
    issue?: number;
    pr?: number;
    url?: string;
  };
  metrics?: Metric[];
  codeSnippets?: CodeSnippet[];
}

export interface Metric {
  label: string;
  before: string | number;
  after: string | number;
  improvement?: string;
  description?: string;
}

export interface TimelineEvent {
  date: string;
  phase: string;
  icon: string;
  description: string;
  milestone?: boolean;
  details?: string;
}

export interface Visit {
  date: string;
  location: string;
  description: string;
  photo?: string;
  highlights?: string[];
}

export interface TechStack {
  category: string;
  technologies: {
    name: string;
    description: string;
    logo?: string;
  }[];
}

export interface OverallMetric {
  value: string | number;
  label: string;
  description?: string;
  icon?: string;
}

export interface Supervisor {
  name: string;
  role: string;
  affiliation: string;
}

export interface CodeSnippet {
  language: string;
  code: string;
  description: string;
  filename?: string;
}

export interface Photo {
  src: string;
  alt: string;
  caption: string;
  location?: string;
  date?: string;
  tags?: string[];
}

export interface CernOverview {
  title: string;
  duration: string;
  startDate: string;
  endDate: string;
  weeks: number;
  location: string;
  role: string;
  organization: string;
  supervisor: Supervisor;
  tagline: string;
  context?: {
    lhcb: string;
    phoenix: string;
    challenge: string;
  };
}

export interface LearningOutcome {
  category: 'technical' | 'personal' | 'professional';
  items: string[];
}

export interface Reflection {
  whatILearned: LearningOutcome[];
  challenges: string[];
  achievements: string[];
  bigPicture: string;
  futureWork?: string[];
}
