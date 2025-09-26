// Shared types for about content
export interface ITimelineData {
  title: string;
  date: string;
  icon: string;
}

export interface IContentBlock {
  id: string;
  timeline: ITimelineData;
  image: {
    src: string;
    alt: string;
  };
  content: {
    type: string;
    text: string;
  };
}

export interface IAboutContent {
  sectionHeader: {
    title: string;
    description: string;
  };
  contentBlocks: IContentBlock[];
  metadata: {
    alternationPattern: string;
    mobileLayout: string;
    startPosition: string;
  };
}

export interface IAboutDataResult {
  content: IAboutContent;
  timelineData: Record<string, ITimelineData>;
}
