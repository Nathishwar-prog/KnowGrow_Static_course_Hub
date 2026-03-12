import React from 'react';
import type { TutorialTopic } from '../types';
import LoadingSpinner from './LoadingSpinner';
import Highlighter from './Highlighter';
import { useAllProgress } from '../context/useAllProgress';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import Breadcrumbs from './Breadcrumbs';
import { ChevronRight, ArrowRight } from 'lucide-react';

interface MainContentProps {
  activeView: 'tutorial' | 'reference' | 'exercise' | 'review';
  topic?: TutorialTopic;
  referenceContent?: React.ReactNode;
  exerciseContent?: React.ReactNode;
  reviewContent?: React.ReactNode;
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


const MainContent: React.FC<MainContentProps> = ({ activeView, topic, referenceContent, exerciseContent, reviewContent, isLoading, onNavigate, prevTopic, nextTopic, searchQuery, hasSearchResults }) => {
  const { courseId = 'html', topicId = '' } = useParams<{ courseId: string, topicId: string }>();
  const navigate = useNavigate();
  const { allCompletedTopics, markTopicAsCompleted, isLoading: isProgressLoading } = useAllProgress();
  const isCompleted = allCompletedTopics.some(t => t.topic_id === (topic?.id || topicId) && t.course_id === courseId);

  const handleToggleComplete = async () => {
    if (!topic) return;
    if (!isCompleted) {
        await markTopicAsCompleted(courseId, topic.id);
        
        // Celebrate!
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#6366f1', '#10b981', '#f59e0b']
        });
    }
  };

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
        <Breadcrumbs courseId={courseId} topicTitle={topic.title} />
        
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
          <React.Suspense fallback={<LoadingSpinner />}>
            <Highlighter query={searchQuery}>
              {topic.content}
            </Highlighter>
          </React.Suspense>
        </article>

        {/* Progress Tracking Section */}
        <div className="mt-12 flex flex-col items-center space-y-4">
          <AnimatePresence mode="wait">
            <motion.button
              key={isCompleted ? 'completed' : 'incomplete'}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={handleToggleComplete}
              disabled={isProgressLoading || isCompleted}
              className={`flex items-center space-x-3 px-8 py-4 rounded-2xl font-black transition-all duration-500 shadow-lg ${isCompleted
                ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400 cursor-default border-2 border-emerald-500/20'
                : 'bg-gradient-to-r from-brand-600 to-indigo-600 text-white hover:shadow-brand-500/25 hover:-translate-y-1 active:scale-95'
                } ${isProgressLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <div className={`w-7 h-7 rounded-xl flex items-center justify-center transition-all duration-500 ${isCompleted ? 'bg-emerald-500 text-white rotate-0' : 'bg-white/20 text-transparent -rotate-12'}`}>
                <i className="fa-solid fa-check text-sm font-bold"></i>
              </div>
              <span className="tracking-wide">
                {isCompleted ? 'Topic Mastered!' : 'Complete & Earn 10 XP'}
              </span>
            </motion.button>
          </AnimatePresence>
          
          {isCompleted && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-emerald-600 dark:text-emerald-400 font-bold text-sm flex items-center animate-bounce-soft"
            >
              <i className="fa-solid fa-star mr-2"></i>
              You've earned 10 XP for this lesson!
            </motion.div>
          )}

          {isCompleted && nextTopic && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="pt-4"
            >
              <button
                onClick={() => onNavigate(nextTopic.id)}
                className="group flex items-center space-x-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-3 rounded-xl font-bold hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>Continue to {nextTopic.title}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          )}
        </div>

        <hr className="my-10 border-gray-200 dark:border-gray-700" />
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

    if (activeView === 'review') {
      return reviewContent;
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