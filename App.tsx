import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import SecondaryNav from './components/SecondaryNav';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import { TUTORIAL_DATA } from './data/tutorialData';
import type { TutorialTopic } from './types';

const App: React.FC = () => {
  const [activeTopicId, setActiveTopicId] = useState<string>('html_home');

  const allTopics: TutorialTopic[] = useMemo(() => TUTORIAL_DATA.flatMap(section => section.topics), []);

  const activeTopic = allTopics.find(topic => topic.id === activeTopicId) || allTopics[0];

  const handleTopicSelect = (id: string) => {
    setActiveTopicId(id);
  };

  const getTopicIndex = (id: string): number => allTopics.findIndex(topic => topic.id === id);

  const currentIndex = getTopicIndex(activeTopicId);
  const prevTopic = currentIndex > 0 ? allTopics[currentIndex - 1] : null;
  const nextTopic = currentIndex < allTopics.length - 1 ? allTopics[currentIndex + 1] : null;

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50 dark:bg-gray-900">
      <Header />
      <SecondaryNav />
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
    </div>
  );
};

export default App;