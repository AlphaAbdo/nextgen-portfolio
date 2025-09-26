// Shared interfaces for journey timeline components
export interface IContentBlock {
  id: string;
  image: {
    src: string;
    alt: string;
  };
  content: {
    type: string;
    text: string;
  };
}

export interface ITimelineItem {
  title: string;
  date: string;
  icon: string;
}
