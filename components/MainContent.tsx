import React from 'react';
import type { TutorialTopic } from '../types';
import LoadingSpinner from './LoadingSpinner';

interface MainContentProps {
  topic: TutorialTopic;
  isLoading: boolean;
  onNavigate: (id: string) => void;
  prevTopic: TutorialTopic | null;
  nextTopic: TutorialTopic | null;
}

const NavButton: React.FC<{ 
    children: React.ReactNode, 
    onClick?: () => void,
    disabled?: boolean
}> = ({ children, onClick, disabled=false }) => (
    <button
        onClick={onClick}
        disabled={disabled}
        className="bg-indigo-600 text-white font-bold py-2 px-6 rounded-md hover:bg-indigo-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center"
    >
        {children}
    </button>
)


const MainContent: React.FC<MainContentProps> = ({ topic, isLoading, onNavigate, prevTopic, nextTopic }) => {
  return (
    <main className="flex-1 p-4 md:p-8 bg-gray-50 dark:bg-gray-900">
      <div className={`max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto bg-white dark:bg-gray-800 p-6 md:p-10 rounded-xl shadow-sm transition-all duration-300 ${isLoading ? 'flex items-center justify-center min-h-[60vh]' : ''}`}>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <>
            <h1 className="text-5xl font-bold mb-6 text-gray-800 dark:text-gray-100">{topic.title}</h1>
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
              {topic.content}
            </article>
            <hr className="my-8 border-gray-200 dark:border-gray-600" />
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
        )}
      </div>
    </main>
  );
};

export default MainContent;