import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Routes, Route, Navigate, useNavigate, useParams, useLocation } from 'react-router-dom';
import Header from './components/Header';
import SecondaryNav from './components/SecondaryNav';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import MobileNav from './components/MobileNav';
import AnimationModal from './components/AnimationModal';
import TutorialsModal from './components/TutorialsModal';
import ReferencesModal from './components/ReferencesModal';
import ExercisesModal from './components/ExercisesModal';
import IntroAnimation from './components/IntroAnimation';
import { ALL_COURSES } from './data/tutorialData';
import { ALL_REFERENCES } from './data/references/referenceData';
import { ALL_EXERCISES } from './data/exercises/exerciseData';
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

const MainLayout: React.FC = () => {
  const { courseId, topicId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [isIntroAnimationComplete, setIsIntroAnimationComplete] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [animationModalConfig, setAnimationModalConfig] = useState<{
    isOpen: boolean;
    content: React.ReactNode | null;
    title: string;
  }>({ isOpen: false, content: null, title: '' });

  const [isTutorialsModalOpen, setIsTutorialsModalOpen] = useState(false);
  const [isReferencesModalOpen, setIsReferencesModalOpen] = useState(false);
  const [isExercisesModalOpen, setIsExercisesModalOpen] = useState(false);

  const [activeView, setActiveView] = useState<'tutorial' | 'reference' | 'exercise'>('tutorial');
  const [activeReferenceCourse, setActiveReferenceCourse] = useState<Course | null>(null);
  const [activeExerciseCourse, setActiveExerciseCourse] = useState<Course | null>(null);

  const loadingTimeoutRef = useRef<number | null>(null);

  // Derived State from URL
  const activeCourse: Course = (courseId && ALL_COURSES[courseId as Course]) ? (courseId as Course) : 'html';
  const activeTopicId = topicId || ALL_COURSES[activeCourse].homeTopicId;

  // Redirect if URL is incomplete or invalid
  useEffect(() => {
    if (!courseId || !ALL_COURSES[courseId as Course]) {
      navigate('/html', { replace: true });
    } else if (!topicId) {
      navigate(`/${courseId}/${ALL_COURSES[courseId as Course].homeTopicId}`, { replace: true });
    }
  }, [courseId, topicId, navigate]);

  const TUTORIAL_DATA = useMemo(() => ALL_COURSES[activeCourse].data, [activeCourse]);
  const allTopics: TutorialTopic[] = useMemo(() => TUTORIAL_DATA.flatMap(section => section.topics), [TUTORIAL_DATA]);

  const activeTopic = useMemo(() => {
    if (activeView !== 'tutorial') return undefined;
    return allTopics.find(topic => topic.id === activeTopicId) || allTopics[0];
  }, [activeTopicId, allTopics, activeView]);

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
    const searchableTopics = allTopics.map(topic => ({
      ...topic,
      textContent: extractTextFromReactNode(topic.content)
    }));

    const options = {
      keys: [
        { name: 'title', weight: 0.7 },
        { name: 'textContent', weight: 0.3 }
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
      };
    });
  }, [searchQuery, fuse]);

  const hasSearchResults = filteredSections.length > 0;

  useEffect(() => {
    const isOverlayOpen = isMobileNavOpen || animationModalConfig.isOpen || isTutorialsModalOpen || isReferencesModalOpen || isExercisesModalOpen;
    if (isOverlayOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileNavOpen, animationModalConfig.isOpen, isTutorialsModalOpen, isReferencesModalOpen, isExercisesModalOpen]);

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
    if (course !== activeCourse || activeView !== 'tutorial') {
      setIsLoading(true);
      setActiveView('tutorial');
      setActiveReferenceCourse(null);
      setActiveExerciseCourse(null);
      setSearchQuery('');

      loadingTimeoutRef.current = window.setTimeout(() => {
        navigate(`/${course}`);
        setIsLoading(false);
      }, 500);
    }
  };

  const handleTopicSelect = (id: string) => {
    if (id === activeTopicId && !searchQuery && activeView === 'tutorial') {
      setIsMobileNavOpen(false);
      return;
    }

    if (loadingTimeoutRef.current) {
      clearTimeout(loadingTimeoutRef.current);
    }

    setIsLoading(true);
    setIsMobileNavOpen(false);
    setSearchQuery('');
    setActiveView('tutorial');
    setActiveReferenceCourse(null);
    setActiveExerciseCourse(null);

    loadingTimeoutRef.current = window.setTimeout(() => {
      navigate(`/${activeCourse}/${id}`);
      setIsLoading(false);
    }, 300); // Reduced timeout for snappier feel
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

    setAnimationModalConfig({
      isOpen: true,
      title: modalTitle,
      content: <AnimationComponent {...props} />
    });
  };

  const closeAnimationModal = () => {
    setAnimationModalConfig({ isOpen: false, content: null, title: '' });
  };

  const openTutorialsModal = () => setIsTutorialsModalOpen(true);
  const closeTutorialsModal = () => setIsTutorialsModalOpen(false);

  const openReferencesModal = () => setIsReferencesModalOpen(true);
  const closeReferencesModal = () => setIsReferencesModalOpen(false);

  const openExercisesModal = () => setIsExercisesModalOpen(true);
  const closeExercisesModal = () => setIsExercisesModalOpen(false);

  const handleModalCourseSelect = (course: Course) => {
    handleCourseSelect(course);
    closeTutorialsModal();
  }

  const handleModalTopicSelect = (course: Course, topicId: string) => {
    if (course !== activeCourse) {
      navigate(`/${course}/${topicId}`);
    } else {
      handleTopicSelect(topicId);
    }
    closeTutorialsModal();
  }

  const handleModalReferenceSelect = (course: Course) => {
    setIsLoading(true);
    setActiveView('reference');
    setActiveReferenceCourse(course);
    setActiveExerciseCourse(null);
    // setActiveTopicId(''); // No longer state, handled by view
    closeReferencesModal();
    loadingTimeoutRef.current = window.setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }

  const handleModalExerciseSelect = (course: Course) => {
    setIsLoading(true);
    setActiveView('exercise');
    setActiveExerciseCourse(course);
    setActiveReferenceCourse(null);
    // setActiveTopicId(''); 
    closeExercisesModal();
    loadingTimeoutRef.current = window.setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }


  const ReferenceComponent = activeReferenceCourse ? ALL_REFERENCES[activeReferenceCourse].component : null;
  const ExerciseComponent = activeExerciseCourse ? ALL_EXERCISES[activeExerciseCourse].component : null;

  if (!isIntroAnimationComplete) {
    return <IntroAnimation onAnimationComplete={() => setIsIntroAnimationComplete(true)} />;
  }

  return (
    <AnimationProvider value={{ openAnimationPage }}>
      <div className="min-h-screen flex flex-col font-sans bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Header
          onMenuClick={() => setIsMobileNavOpen(true)}
          onTutorialsClick={openTutorialsModal}
          onReferencesClick={openReferencesModal}
          onExercisesClick={openExercisesModal}
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
        <div className="flex flex-1 overflow-hidden">
          <Sidebar
            sections={filteredSections}
            activeTopicId={activeTopicId}
            onTopicSelect={handleTopicSelect}
            searchQuery={searchQuery}
          />
          <MainContent
            activeView={activeView}
            topic={activeTopic}
            referenceContent={ReferenceComponent ? <ReferenceComponent onSwitchToTutorial={handleCourseSelect} /> : null}
            exerciseContent={ExerciseComponent ? <ExerciseComponent /> : null}
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
          isOpen={animationModalConfig.isOpen}
          onClose={closeAnimationModal}
          title={animationModalConfig.title}
        >
          {animationModalConfig.content}
        </AnimationModal>
        <TutorialsModal
          isOpen={isTutorialsModalOpen}
          onClose={closeTutorialsModal}
          onCourseSelect={handleModalCourseSelect}
          onTopicSelect={handleModalTopicSelect}
        />
        <ReferencesModal
          isOpen={isReferencesModalOpen}
          onClose={closeReferencesModal}
          onReferenceSelect={handleModalReferenceSelect}
        />
        <ExercisesModal
          isOpen={isExercisesModalOpen}
          onClose={closeExercisesModal}
          onExerciseSelect={handleModalExerciseSelect}
        />
      </div>
    </AnimationProvider>
  );
};

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/html" replace />} />
      <Route path="/:courseId" element={<MainLayout />} />
      <Route path="/:courseId/:topicId" element={<MainLayout />} />
    </Routes>
  );
};

export default App;