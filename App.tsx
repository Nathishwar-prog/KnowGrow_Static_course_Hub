import React, { useState, useMemo, useEffect, useRef } from 'react';
import Header from './components/Header';
import SecondaryNav from './components/SecondaryNav';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import MobileNav from './components/MobileNav';
import AnimationModal from './components/AnimationModal';
import { ALL_COURSES } from './data/tutorialData';
import { ANIMATION_MAP } from './data/html/animations';
import type { TutorialTopic } from './types';
import { AnimationProvider } from './context/AnimationContext';
import type { AnimationOptions } from './context/AnimationContext';
import { ANIMATION_STYLES } from './data/html/animations/animationStyles';

// Make Fuse available globally for TypeScript
declare var Fuse: any;

export type Course = keyof typeof ALL_COURSES;

export interface RankedSearchResult {
  topic: TutorialTopic;
  score: number;
  snippet?: string;
}

const extractTextFromReactNode = (node: React.ReactNode): string => {
    if (node === null || typeof node === 'boolean' || typeof node === 'undefined') {
        return '';
    }
    if (typeof node === 'string' || typeof node === 'number') {
        return String(node);
    }
    if (Array.isArray(node)) {
        return node.map(extractTextFromReactNode).join(' ');
    }
    if (React.isValidElement(node)) {
        if (typeof node.type === 'function' && ((node.type as any).name === 'CodeBlock' || (node.type as any).displayName === 'CodeBlock')) {
            return '';
        }
        const props = node.props as { children?: React.ReactNode };
        if (props.children) {
            return extractTextFromReactNode(props.children);
        }
    }
    return '';
};


const App: React.FC = () => {
  const [activeCourse, setActiveCourse] = useState<Course>('html');
  const [activeTopicId, setActiveTopicId] = useState<string>(ALL_COURSES[activeCourse].homeTopicId);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [modalConfig, setModalConfig] = useState<{
    isOpen: boolean;
    content: React.ReactNode | null;
    title: string;
  }>({ isOpen: false, content: null, title: '' });

  const loadingTimeoutRef = useRef<number | null>(null);

  const TUTORIAL_DATA = useMemo(() => ALL_COURSES[activeCourse].data, [activeCourse]);
  const allTopics: TutorialTopic[] = useMemo(() => TUTORIAL_DATA.flatMap(section => section.topics), [TUTORIAL_DATA]);
  const activeTopic = allTopics.find(topic => topic.id === activeTopicId) || allTopics[0];
  
  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) {
      return TUTORIAL_DATA;
    }
    const lowerCaseQuery = searchQuery.trim().toLowerCase();
    return TUTORIAL_DATA
      .map(section => ({
        ...section,
        topics: section.topics.filter(topic =>
          topic.title.toLowerCase().includes(lowerCaseQuery)
        ),
      }))
      .filter(section => section.topics.length > 0);
  }, [searchQuery, TUTORIAL_DATA]);

  const fuse = useMemo(() => {
    // Pre-process topics to include searchable text content
    const searchableTopics = allTopics.map(topic => ({
        ...topic,
        textContent: extractTextFromReactNode(topic.content)
    }));
    
    const options = {
        keys: [
            { name: 'title', weight: 0.7 }, // Higher weight for title
            { name: 'textContent', weight: 0.3 } // Lower weight for content
        ],
        includeMatches: true,
        threshold: 0.4, // Adjust for fuzziness (0=perfect, 1=match all)
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

        // Find the first content match to generate a snippet
        const contentMatch = matches?.find((m: any) => m.key === 'textContent');
        if (contentMatch && contentMatch.indices.length > 0) {
            const [start, end] = contentMatch.indices[0];
            const snippetStart = Math.max(0, start - 30);
            const snippetEnd = Math.min(topic.textContent.length, end + 70);
            const rawSnippet = topic.textContent.substring(snippetStart, snippetEnd);
            snippet = `${snippetStart > 0 ? '...' : ''}${rawSnippet}${snippetEnd < topic.textContent.length ? '...' : ''}`;
        }

        return {
            topic: { id: topic.id, title: topic.title, content: topic.content }, // Return original topic shape
            score: 1 - score, // Invert score so higher is better
            snippet: snippet,
        };
    });
}, [searchQuery, fuse]);


  const hasSearchResults = filteredSections.length > 0;

  useEffect(() => {
    const isOverlayOpen = isMobileNavOpen || modalConfig.isOpen;
    if (isOverlayOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileNavOpen, modalConfig.isOpen]);

  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.id = 'knowgrow-animation-styles';
    styleElement.innerHTML = ANIMATION_STYLES;
    document.head.appendChild(styleElement);

    return () => {
      const existingStyleElement = document.getElementById('knowgrow-animation-styles');
      if (existingStyleElement) {
        document.head.removeChild(existingStyleElement);
      }
    };
  }, []);

  useEffect(() => {
    return () => {
      if (loadingTimeoutRef.current) {
        clearTimeout(loadingTimeoutRef.current);
      }
    };
  }, []);
  
  const handleCourseSelect = (course: Course) => {
    if (course !== activeCourse) {
      setIsLoading(true);
      setActiveCourse(course);
      setSearchQuery(''); // Reset search on course change
      
      // Delay setting topic ID to allow loading state to show
      loadingTimeoutRef.current = window.setTimeout(() => {
        setActiveTopicId(ALL_COURSES[course].homeTopicId);
        setIsLoading(false);
      }, 500);
      
      // No need to close mobile nav, content will just update
    }
  };

  const handleTopicSelect = (id: string) => {
    if (id === activeTopicId && !searchQuery) { // Only return if not coming from a search
      setIsMobileNavOpen(false);
      return;
    }
    
    if (loadingTimeoutRef.current) {
        clearTimeout(loadingTimeoutRef.current);
    }
    
    setIsLoading(true);
    setIsMobileNavOpen(false);
    setSearchQuery(''); // Clear search on topic selection

    loadingTimeoutRef.current = window.setTimeout(() => {
      setActiveTopicId(id);
      setIsLoading(false);
    }, 2000);
  };
  
  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  const getTopicIndex = (id: string): number => allTopics.findIndex(topic => topic.id === id);

  const currentIndex = getTopicIndex(activeTopicId);
  const prevTopic = currentIndex > 0 ? allTopics[currentIndex - 1] : null;
  const nextTopic = currentIndex < allTopics.length - 1 ? allTopics[currentIndex + 1] : null;

  const openAnimationPage = (options: AnimationOptions) => {
    const { animationId, title, props = {} } = options;
    const animationInfo = ANIMATION_MAP[animationId];

    if (!animationInfo) {
      console.error(`Animation with id "${animationId}" not found.`);
      return;
    }

    const AnimationComponent = animationInfo.component;
    const modalTitle = title || animationInfo.title || 'Live Animation';

    setModalConfig({
      isOpen: true,
      title: modalTitle,
      content: <AnimationComponent {...props} />
    });
  };

  const closeAnimationModal = () => {
    setModalConfig({ isOpen: false, content: null, title: '' });
  };

  return (
    <AnimationProvider value={{ openAnimationPage }}>
      <div className="min-h-screen flex flex-col font-sans bg-gray-50 dark:bg-gray-900">
        <Header 
          onMenuClick={() => setIsMobileNavOpen(true)} 
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
          rankedSearchResults={rankedSearchResults}
          onTopicSelect={handleTopicSelect}
        />
        <SecondaryNav 
          activeCourse={activeCourse}
          onCourseSelect={handleCourseSelect}
        />
        {isMobileNavOpen && (
          <MobileNav
            sections={filteredSections}
            activeTopicId={activeTopicId}
            onTopicSelect={handleTopicSelect}
            onClose={() => setIsMobileNavOpen(false)}
            activeCourse={activeCourse}
            onCourseSelect={handleCourseSelect}
            searchQuery={searchQuery}
            onSearchChange={handleSearchChange}
            rankedSearchResults={rankedSearchResults}
          />
        )}
        <div className="flex flex-1">
          <Sidebar 
            sections={filteredSections} 
            activeTopicId={activeTopicId} 
            onTopicSelect={handleTopicSelect} 
            searchQuery={searchQuery}
          />
          <MainContent 
            topic={activeTopic}
            isLoading={isLoading}
            onNavigate={(id) => handleTopicSelect(id)}
            prevTopic={prevTopic}
            nextTopic={nextTopic}
            searchQuery={searchQuery}
            hasSearchResults={hasSearchResults}
          />
        </div>
        <Footer />
        <AnimationModal
          isOpen={modalConfig.isOpen}
          onClose={closeAnimationModal}
          title={modalConfig.title}
        >
          {modalConfig.content}
        </AnimationModal>
      </div>
    </AnimationProvider>
  );
};

export default App;