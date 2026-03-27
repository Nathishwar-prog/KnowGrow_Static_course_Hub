import { useMemo, useState } from 'react';
import type { TutorialTopic } from '../types';

declare var Fuse: any;

export interface RankedSearchResult {
  topic: TutorialTopic;
  score: number;
  snippet?: string;
  sectionTitle?: string;
}

export const useGlobalSearch = (allTopics: TutorialTopic[], tutorialData: any[]) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) {
      return tutorialData;
    }
    const lowerCaseQuery = searchQuery.trim().toLowerCase();
    return tutorialData
      .map(section => ({
        ...section,
        topics: section.topics.filter((topic: TutorialTopic) =>
          topic.title.toLowerCase().includes(lowerCaseQuery)
        ).map((topic: TutorialTopic) => ({ ...topic, sectionTitle: section.title })),
      }))
      .filter(section => section.topics.length > 0);
  }, [searchQuery, tutorialData]);

  const fuse = useMemo(() => {
    const searchableTopics = allTopics.map(topic => ({
      ...topic,
      // Provide a fast text content using only the title and description/id, 
      // avoiding deep React DOM tree traversal which crashes or lags on lazy nodes.
      textContent: topic.title + " " + topic.id + " " + (topic as any).sectionTitle
    }));

    const options = {
      keys: [
        { name: 'title', weight: 0.8 },
        { name: 'textContent', weight: 0.2 }
      ],
      includeMatches: true,
      threshold: 0.4,
      minMatchCharLength: 2,
    };
    return new Fuse(searchableTopics, options);
  }, [allTopics]);

  const rankedSearchResults = useMemo<RankedSearchResult[]>(() => {
    if (!searchQuery.trim()) {
      return [];
    }
    const results = fuse.search(searchQuery);

    return results.slice(0, 7).map((result: any) => {
      const { item: topic, score, matches } = result;
      let snippet: string | undefined = undefined;

      const contentMatch = matches?.find((m: any) => m.key === 'textContent');
      if (contentMatch && contentMatch.indices.length > 0) {
        const [start, end] = contentMatch.indices[0];
        const snippetStart = Math.max(0, start - 30);
        const snippetEnd = Math.min(topic.textContent.length, end + 70);
        const rawSnippet = topic.textContent.substring(snippetStart, snippetEnd);
        snippet = `${snippetStart > 0 ? '...' : ''}${rawSnippet}${snippetEnd < topic.textContent.length ? '...' : ''}`;
      }

      return {
        topic: { id: topic.id, title: topic.title, content: topic.content },
        score: 1 - score,
        snippet: snippet,
        sectionTitle: (topic as any).sectionTitle
      };
    });
  }, [searchQuery, fuse]);

  const hasSearchResults = filteredSections.length > 0;

  return {
    searchQuery,
    setSearchQuery,
    filteredSections,
    rankedSearchResults,
    hasSearchResults
  };
};
