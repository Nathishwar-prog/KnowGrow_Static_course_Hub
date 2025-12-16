import React from 'react';
import type { TutorialTopic } from '../types';
import LoadingSpinner from './LoadingSpinner';
import Highlighter from './Highlighter';

interface MainContentProps {
  activeView: 'tutorial' | 'reference' | 'exercise';
  topic?: TutorialTopic;
  referenceContent?: React.ReactNode;
  exerciseContent?: React.ReactNode;
  isLoading: boolean;
  onNavigate: (id: string) => void;
  prevTopic: TutorialTopic | null;
  nextTopic: TutorialTopic | null;
  searchQuery: string;
  hasSearchResults: boolean;
}

const NavButton: React.FC<{
  children: React.ReactNode,
  onClick?: () => void,
  disabled?: boolean
}> = ({ children, onClick, disabled = false }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-2.5 px-6 rounded-lg hover:shadow-lg hover:from-indigo-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-400 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center transform hover:-translate-y-0.5 active:translate-y-0"
  >
    {children}
  </button>
)


const MainContent: React.FC<MainContentProps> = ({ activeView, topic, referenceContent, exerciseContent, isLoading, onNavigate, prevTopic, nextTopic, searchQuery, hasSearchResults }) => {
  const renderTutorialContent = () => {
    if (!topic) {
      if (searchQuery && !hasSearchResults) {
        return (
          <div className="text-center py-16">
            <div className="text-6xl text-gray-300 dark:text-gray-600 mb-4 animate-pulse">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">No Results Found</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Your search for "<span className="font-semibold text-indigo-500">{searchQuery}</span>" did not match any topics.
            </p>
            <p className="mt-2 text-gray-500">Try searching for something else or clearing the search.</p>
          </div>
        );
      }
      return <LoadingSpinner />;
    }

    return (
      <>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 tracking-tight">
          <Highlighter query={searchQuery}>{topic.title}</Highlighter>
        </h1>
        <div className="flex justify-between items-center mb-10">
          <NavButton
            onClick={() => prevTopic && onNavigate(prevTopic.id)}
            disabled={!prevTopic}
          >
            <i className="fa-solid fa-chevron-left mr-2"></i> Prev
          </NavButton>
          <NavButton
            onClick={() => nextTopic && onNavigate(nextTopic.id)}
            disabled={!nextTopic}
          >
            Next <i className="fa-solid fa-chevron-right ml-2"></i>
          </NavButton>
        </div>
        <hr className="my-8 border-gray-200 dark:border-gray-700" />
        <article className="prose prose-lg dark:prose-invert max-w-none prose-indigo prose-headings:font-bold prose-a:text-indigo-600 dark:prose-a:text-indigo-400 hover:prose-a:text-indigo-500 transition-colors">
          <Highlighter query={searchQuery}>
            {topic.content}
          </Highlighter>
        </article>
        <hr className="my-10 border-gray-200 dark:border-gray-700" />
        <div className="flex justify-between items-center mt-8">
          <NavButton
            onClick={() => prevTopic && onNavigate(prevTopic.id)}
            disabled={!prevTopic}
          >
            <i className="fa-solid fa-chevron-left mr-2"></i> Prev
          </NavButton>
          <NavButton
            onClick={() => nextTopic && onNavigate(nextTopic.id)}
            disabled={!nextTopic}
          >
            Next <i className="fa-solid fa-chevron-right ml-2"></i>
          </NavButton>
        </div>
      </>
    );
  };

  const mainContent = () => {
    if (isLoading) {
      return <LoadingSpinner />;
    }

    if (activeView === 'reference') {
      return referenceContent;
    }

    if (activeView === 'exercise') {
      return exerciseContent;
    }

    return renderTutorialContent();
  };

  const isCenteringNeeded = isLoading || (activeView === 'tutorial' && searchQuery && !hasSearchResults);

  return (
    <main className="flex-1 p-4 md:p-8 bg-gray-50 dark:bg-gray-900 overflow-y-auto h-screen-minus-nav scroll-smooth">
      <div className={`max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 md:p-12 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 transition-all duration-300 ${isCenteringNeeded ? 'flex items-center justify-center min-h-[60vh]' : ''}`}>
        {mainContent()}
      </div>
    </main>
  );
};

export default MainContent;