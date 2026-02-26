import React from 'react';
import type { TutorialTopic } from '../types';
import LoadingSpinner from './LoadingSpinner';
import Highlighter from './Highlighter';
import { useProgress } from '../context/useProgress';
import { useParams } from 'react-router-dom';

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
    className="bg-indigo-600 text-white font-bold py-2 px-6 rounded-md hover:bg-indigo-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center"
  >
    {children}
  </button>
)


const MainContent: React.FC<MainContentProps> = ({ activeView, topic, referenceContent, exerciseContent, isLoading, onNavigate, prevTopic, nextTopic, searchQuery, hasSearchResults }) => {
  const { courseId = 'html', topicId = '' } = useParams<{ courseId: string, topicId: string }>();
  const { completedTopics, markAsComplete, markAsIncomplete, isLoading: isProgressLoading } = useProgress(courseId);
  const isCompleted = completedTopics.has(topic?.id || topicId);

  const handleToggleComplete = async () => {
    if (!topic) return;
    if (isCompleted) {
      await markAsIncomplete(topic.id);
    } else {
      await markAsComplete(topic.id);
    }
  };

  const renderTutorialContent = () => {
    if (!topic) {
      if (searchQuery && !hasSearchResults) {
        return (
          <div className="text-center py-16">
            <div className="text-6xl text-gray-300 dark:text-gray-600 mb-4">
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
        <h1 className="text-5xl font-bold mb-6 text-gray-800 dark:text-gray-100">
          <Highlighter query={searchQuery}>{topic.title}</Highlighter>
        </h1>
        <div className="flex justify-between items-center mb-8">
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
        <hr className="my-8 border-gray-200 dark:border-gray-600" />
        <article className="prose dark:prose-invert max-w-none prose-indigo">
          <React.Suspense fallback={<LoadingSpinner />}>
            <Highlighter query={searchQuery}>
              {topic.content}
            </Highlighter>
          </React.Suspense>
        </article>

        {/* Progress Tracking Section */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={handleToggleComplete}
            disabled={isProgressLoading}
            className={`flex items-center space-x-2 px-6 py-3 rounded-full font-bold transition-all duration-300 ${isCompleted
                ? 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400 hover:bg-green-200 dark:hover:bg-green-900/60 ring-2 ring-green-500/50'
                : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              } ${isProgressLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <div className={`w-6 h-6 rounded-full flex items-center justify-center ${isCompleted ? 'bg-green-500 text-white' : 'bg-gray-300 dark:bg-gray-600 text-transparent'}`}>
              <i className="fa-solid fa-check text-xs"></i>
            </div>
            <span>{isCompleted ? 'Completed' : 'Mark as Complete'}</span>
          </button>
        </div>

        <hr className="my-8 border-gray-200 dark:border-gray-600" />
        <div className="flex justify-between items-center mt-8 cursor-pointer">
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
    <main className="flex-1 p-4 md:p-8 bg-gray-50 dark:bg-gray-900">
      <div className={`max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto bg-white dark:bg-gray-800 p-6 md:p-10 rounded-xl shadow-sm transition-all duration-300 ${isCenteringNeeded ? 'flex items-center justify-center min-h-[60vh]' : ''}`}>
        {mainContent()}
      </div>
    </main>
  );
};

export default MainContent;