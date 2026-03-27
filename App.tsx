import React, { useState, useMemo, useEffect, useRef, lazy, Suspense } from 'react';
import { Routes, Route, Navigate, useParams, useNavigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import SecondaryNav from './components/SecondaryNav';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import MobileNav from './components/MobileNav';
import BottomNav from './components/BottomNav';

// Lazy loaded components for better performance
const MainContent = lazy(() => import('./components/MainContent'));
const Dashboard = lazy(() => import('./components/Dashboard'));
const AnimationModal = lazy(() => import('./components/AnimationModal'));
const TutorialsModal = lazy(() => import('./components/TutorialsModal'));
const ReferencesModal = lazy(() => import('./components/ReferencesModal'));
const ExercisesModal = lazy(() => import('./components/ExercisesModal'));
const IntroAnimation = lazy(() => import('./components/IntroAnimation'));
const ReviewSession = lazy(() => import('./components/srs/ReviewSession'));
const AITutor = lazy(() => import('./components/AITutor'));
import { ALL_COURSES } from './data/tutorialData';
import { ALL_REFERENCES } from './data/references/referenceData';
import { ALL_EXERCISES } from './data/exercises/exerciseData';
import { ANIMATION_MAP } from './data/html/animations';
import type { TutorialTopic } from './types';
import { AnimationProvider } from './context/AnimationContext';
import type { AnimationOptions } from './context/AnimationContext';
import { ANIMATION_STYLES } from './data/html/animations/animationStyles';

import { useGlobalSearch } from './hooks/useGlobalSearch';
import { useModals } from './hooks/useModals';
import { useKeyboardShortcuts } from './hooks/useKeyboardShortcuts';
import SEO from './components/SEO';
import { generateSEOData, getDefaultSEO } from './utils/seoUtils';

export type Course = keyof typeof ALL_COURSES;

const AppContent: React.FC = () => {
  const { view, courseId, topicId } = useParams<{ view?: string, courseId?: string, topicId?: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  const isDashboard = location.pathname === '/dashboard';
  const isReview = location.pathname === '/review';
  const activeView = isDashboard ? 'dashboard' : isReview ? 'review' : (view as 'tutorial' | 'reference' | 'exercise' || 'tutorial');
  const isValidCourse = courseId ? (ALL_COURSES[courseId as Course] !== undefined) : false;
  const activeCourse = (isValidCourse ? courseId : 'html') as Course;

  const defaultTopicId = ALL_COURSES[activeCourse].homeTopicId;
  const activeTopicId = activeView === 'tutorial' ? (topicId || defaultTopicId) : '';

  const activeReferenceCourse = activeView === 'reference' ? activeCourse : null;
  const activeExerciseCourse = activeView === 'exercise' ? activeCourse : null;

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isDesktopSidebarOpen, setIsDesktopSidebarOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const {
    animationModalConfig,
    setAnimationModalConfig,
    isTutorialsModalOpen,
    openTutorialsModal,
    closeTutorialsModal,
    isReferencesModalOpen,
    openReferencesModal,
    closeReferencesModal,
    isExercisesModalOpen,
    openExercisesModal,
    closeExercisesModal,
    closeAnimationModal
  } = useModals();

  const loadingTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (isDashboard || isReview) return;

    if (activeView === 'tutorial') {
      if (!courseId || !ALL_COURSES[courseId as Course]) {
        navigate(`/tutorial/html/${ALL_COURSES['html'].homeTopicId}`, { replace: true });
      } else if (!topicId) {
        navigate(`/tutorial/${courseId}/${ALL_COURSES[courseId as Course].homeTopicId}`, { replace: true });
      }
    }
  }, [courseId, topicId, navigate, isDashboard, activeView]);

  const TUTORIAL_DATA = useMemo(() => ALL_COURSES[activeCourse].data, [activeCourse]);
  const allTopics: TutorialTopic[] = useMemo(() => TUTORIAL_DATA.flatMap(section => section.topics), [TUTORIAL_DATA]);

  const activeTopic = useMemo(() => {
    if (activeView !== 'tutorial') return undefined;
    return allTopics.find(topic => topic.id === activeTopicId) || allTopics[0];
  }, [activeTopicId, allTopics, activeView]);

  const {
    searchQuery,
    setSearchQuery,
    filteredSections,
    rankedSearchResults,
    hasSearchResults
  } = useGlobalSearch(allTopics, TUTORIAL_DATA);

  const seoData = useMemo(() => {
    if (activeView === 'tutorial' && activeTopic) {
      const section = TUTORIAL_DATA.find(s => s.topics.some(t => t.id === activeTopic.id));
      return generateSEOData(activeTopic.title, activeCourse, section?.title);
    }
    if (activeView === 'dashboard') {
      return {
        title: 'My Learning Dashboard | KnowGrow',
        description: 'Track your progress, review your flashcards, and continue your programming journey on KnowGrow.',
        keywords: 'learning dashboard, coding progress, srs flashcards, knowgrow'
      };
    }
    if (activeView === 'review') {
      return {
        title: 'Review Session | KnowGrow',
        description: 'Practice and master your programming concepts with our spaced repetition system.',
        keywords: 'srs review, active recall, programming flashcards, learn coding'
      };
    }
    return getDefaultSEO();
  }, [activeView, activeTopic, activeCourse, TUTORIAL_DATA]);

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

  const handleCourseSelect = (course: Course) => {
    if (course !== activeCourse || activeView !== 'tutorial') {
      setIsLoading(true);
      setSearchQuery('');
      navigate(`/tutorial/${course}/${ALL_COURSES[course].homeTopicId}`);

      loadingTimeoutRef.current = window.setTimeout(() => {
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
    navigate(`/tutorial/${activeCourse}/${id}`);

    loadingTimeoutRef.current = window.setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  const getTopicIndex = (id: string): number => allTopics.findIndex(topic => topic.id === id);
  const currentIndex = getTopicIndex(activeTopicId);
  const prevTopic = currentIndex > 0 ? allTopics[currentIndex - 1] : null;
  const nextTopic = currentIndex < allTopics.length - 1 ? allTopics[currentIndex + 1] : null;

  useKeyboardShortcuts({
    prevTopic,
    nextTopic,
    activeView,
    handleTopicSelect
  });

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

  const handleModalCourseSelect = (course: Course) => {
    handleCourseSelect(course);
    closeTutorialsModal();
  }

  const handleModalTopicSelect = (course: Course, topicId: string) => {
    if (course !== activeCourse) {
      setIsLoading(true);
      navigate(`/tutorial/${course}/${topicId}`);
      loadingTimeoutRef.current = window.setTimeout(() => setIsLoading(false), 500);
    } else {
      handleTopicSelect(topicId);
    }
    closeTutorialsModal();
  }

  const handleModalReferenceSelect = (course: Course) => {
    setIsLoading(true);
    closeReferencesModal();
    navigate(`/reference/${course}`);
    loadingTimeoutRef.current = window.setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }

  const handleModalExerciseSelect = (course: Course) => {
    setIsLoading(true);
    closeExercisesModal();
    navigate(`/exercise/${course}`);
    loadingTimeoutRef.current = window.setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }

  const ReferenceComponent = activeReferenceCourse && ALL_REFERENCES[activeReferenceCourse] ? ALL_REFERENCES[activeReferenceCourse].component : null;
  const ExerciseComponent = activeExerciseCourse && ALL_EXERCISES[activeExerciseCourse] ? ALL_EXERCISES[activeExerciseCourse].component : null;

  return (
    <AnimationProvider value={{ openAnimationPage }}>
      <div className="min-h-screen flex flex-col font-sans bg-gray-50 dark:bg-gray-900">
        <SEO {...seoData} />
        <Header
          onMenuClick={() => setIsMobileNavOpen(true)}
          onTutorialsClick={openTutorialsModal}
          onReferencesClick={openReferencesModal}
          onExercisesClick={openExercisesModal}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          rankedSearchResults={rankedSearchResults}
          onTopicSelect={handleTopicSelect}
        />
        {isDashboard ? (
          <Suspense fallback={<div className="flex-1 flex items-center justify-center min-h-[400px]">
            <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
          </div>}>
            <Dashboard />
          </Suspense>
        ) : (
          <>
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
                onSearchChange={setSearchQuery}
                rankedSearchResults={rankedSearchResults}
              />
            )}
            <div className="flex flex-1">
              <Sidebar
                sections={filteredSections}
                activeTopicId={activeTopicId}
                onTopicSelect={handleTopicSelect}
                searchQuery={searchQuery}
                isOpen={isDesktopSidebarOpen}
                setIsOpen={setIsDesktopSidebarOpen}
              />
              <Suspense fallback={<div className="flex-1 flex items-center justify-center min-h-[400px]">
                <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
              </div>}>
                <MainContent
                  activeView={activeView as any}
                  topic={activeTopic}
                  referenceContent={ReferenceComponent ? <ReferenceComponent onSwitchToTutorial={handleCourseSelect} /> : null}
                  exerciseContent={ExerciseComponent ? <ExerciseComponent /> : null}
                  reviewContent={<ReviewSession />}
                  isLoading={isLoading}
                  onNavigate={(id) => handleTopicSelect(id)}
                  prevTopic={prevTopic}
                  nextTopic={nextTopic}
                  searchQuery={searchQuery}
                  hasSearchResults={hasSearchResults}
                />
              </Suspense>
            </div>
          </>
        )}
        <Footer />
        <Suspense fallback={null}>
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
          <AITutor courseId={activeCourse} topicId={activeTopicId} />
        </Suspense>
        <BottomNav />
      </div>
    </AnimationProvider>
  );
};

const App: React.FC = () => {
  const [isIntroAnimationComplete, setIsIntroAnimationComplete] = useState(false);

  if (!isIntroAnimationComplete) {
    return (
      <Suspense fallback={<div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
      </div>}>
        <IntroAnimation onAnimationComplete={() => setIsIntroAnimationComplete(true)} />
      </Suspense>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Navigate to={`/tutorial/html/${ALL_COURSES['html'].homeTopicId}`} replace />} />
      <Route path="/dashboard" element={<AppContent />} />
      <Route path="/review" element={<AppContent />} />
      <Route path="/:view/:courseId" element={<AppContent />} />
      <Route path="/:view/:courseId/:topicId" element={<AppContent />} />
    </Routes>
  );
};

export default App;