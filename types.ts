import React from 'react';

export interface TutorialTopic {
  id: string;
  title: string;
  content: React.ReactNode;
}

export interface SidebarSection {
  title: string;
  topics: TutorialTopic[];
}
