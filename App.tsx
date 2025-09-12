import React, { useState, useMemo, useEffect } from 'react';
import Header from './components/Header';
import SecondaryNav from './components/SecondaryNav';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import MobileNav from './components/MobileNav';
import AnimationModal from './components/AnimationModal';
import { TUTORIAL_DATA } from './data/tutorialData';
import { ANIMATION_MAP } from './data/html/animations';
import type { TutorialTopic } from './types';
import { AnimationProvider } from './context/AnimationContext';
import type { AnimationOptions } from './context/AnimationContext';

const App: React.FC = () => {
  const [activeTopicId, setActiveTopicId] = useState<string>('html_home');
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [modalConfig, setModalConfig] = useState<{
    isOpen: boolean;
    content: React.ReactNode | null;
    title: string;
  }>({ isOpen: false, content: null, title: '' });

  const allTopics: TutorialTopic[] = useMemo(() => TUTORIAL_DATA.flatMap(section => section.topics), []);

  const activeTopic = allTopics.find(topic => topic.id === activeTopicId) || allTopics[0];

  useEffect(() => {
    const isOverlayOpen = isMobileNavOpen || modalConfig.isOpen;
    if (isOverlayOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Cleanup when App component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobileNavOpen, modalConfig.isOpen]);

  const handleTopicSelect = (id: string) => {
    setActiveTopicId(id);
    setIsMobileNavOpen(false); // Close mobile nav on selection
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
        <Header onMenuClick={() => setIsMobileNavOpen(true)} />
        <SecondaryNav />
        {isMobileNavOpen && (
          <MobileNav
            sections={TUTORIAL_DATA}
            activeTopicId={activeTopicId}
            onTopicSelect={handleTopicSelect}
            onClose={() => setIsMobileNavOpen(false)}
          />
        )}
        <div className="flex flex-1">
          <Sidebar 
            sections={TUTORIAL_DATA} 
            activeTopicId={activeTopicId} 
            onTopicSelect={handleTopicSelect} 
          />
          <MainContent 
            topic={activeTopic}
            onNavigate={(id) => handleTopicSelect(id)}
            prevTopic={prevTopic}
            nextTopic={nextTopic}
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