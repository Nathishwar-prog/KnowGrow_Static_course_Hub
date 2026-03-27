import React from 'react';
import type { TutorialTopic } from '../types';
import LoadingSpinner from './LoadingSpinner';
import Highlighter from './Highlighter';
import { useAllProgress } from '../context/useAllProgress';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import Breadcrumbs from './Breadcrumbs';
import { ArrowRight, CheckCircle2, Sparkles, Trophy } from 'lucide-react';
import PaginationControls from './PaginationControls';
import TableOfContents from './TableOfContents';

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

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.4, ease: "easeOut" as const }
  },
  exit: { 
    opacity: 0, 
    y: -10, 
    transition: { duration: 0.2 }
  }
};

const MainContent: React.FC<MainContentProps> = ({ activeView, topic, referenceContent, exerciseContent, reviewContent, isLoading, onNavigate, prevTopic, nextTopic, searchQuery, hasSearchResults }) => {
  const { courseId = 'html', topicId = '' } = useParams<{ courseId: string, topicId: string }>();
  const navigate = useNavigate();
  const { allCompletedTopics, markTopicAsCompleted, isLoading: isProgressLoading } = useAllProgress();
  const isCompleted = allCompletedTopics.some(t => t.topic_id === (topic?.id || topicId) && t.course_id === courseId);

  const handleToggleComplete = async () => {
    if (!topic) return;
    if (!isCompleted) {
        await markTopicAsCompleted(courseId, topic.id);
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
          <div className="text-center py-20">
            <div className="text-7xl text-slate-200 dark:text-slate-700 mb-6">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <h1 className="text-3xl font-black mb-4 text-slate-800 dark:text-slate-100">No Results Found</h1>
            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-md mx-auto">
              Your search for "<span className="font-semibold text-brand-500">{searchQuery}</span>" did not match any topics. Try a different term.
            </p>
          </div>
        );
      }
      return <LoadingSpinner />;
    }

    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={topic.id}
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <Breadcrumbs courseId={courseId} topicTitle={topic.title} />

          {/* Topic Title */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-1 w-10 bg-gradient-to-r from-brand-500 to-indigo-500 rounded-full"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-600 dark:text-brand-400">{courseId.toUpperCase()} Tutorial</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6 text-slate-900 dark:text-white tracking-tight font-display leading-tight">
              <Highlighter query={searchQuery}>{topic.title}</Highlighter>
            </h1>
          </div>

          <PaginationControls 
            prevTopic={prevTopic} 
            nextTopic={nextTopic} 
            onNavigate={onNavigate} 
          />

          {/* Article Content */}
          <article className="prose prose-lg dark:prose-invert max-w-none 
            prose-headings:font-display prose-headings:font-black prose-headings:tracking-tight
            prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:text-slate-800 dark:prose-h2:text-slate-100
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-slate-700 dark:prose-h3:text-slate-200
            prose-p:text-slate-600 dark:prose-p:text-slate-300 prose-p:leading-relaxed
            prose-a:text-brand-600 dark:prose-a:text-brand-400 prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
            prose-code:bg-slate-100 dark:prose-code:bg-slate-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:text-brand-700 dark:prose-code:text-brand-300 prose-code:font-medium prose-code:text-[0.9em]
            prose-pre:bg-slate-900 dark:prose-pre:bg-slate-950 prose-pre:rounded-2xl prose-pre:shadow-lg prose-pre:border prose-pre:border-slate-800
            prose-blockquote:border-l-brand-500 prose-blockquote:bg-brand-50/30 dark:prose-blockquote:bg-brand-900/10 prose-blockquote:rounded-r-xl prose-blockquote:py-1 prose-blockquote:px-6
            prose-strong:text-slate-900 dark:prose-strong:text-white
            prose-li:text-slate-600 dark:prose-li:text-slate-300
            prose-img:rounded-2xl prose-img:shadow-lg
          ">
            <React.Suspense fallback={<LoadingSpinner />}>
                {topic.content}
            </React.Suspense>
          </article>

          {/* Progress Tracking Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-16 mb-10"
          >
            <div className={`relative overflow-hidden rounded-3xl p-8 text-center transition-all duration-500 ${
              isCompleted 
                ? 'bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/10 border-2 border-emerald-200/50 dark:border-emerald-800/30'
                : 'bg-gradient-to-br from-slate-50 to-brand-50/30 dark:from-slate-800/40 dark:to-brand-900/10 border border-slate-200/60 dark:border-slate-700/30'
            }`}>
              {/* Decorative background */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-brand-500/5 to-transparent rounded-bl-full pointer-events-none"></div>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={isCompleted ? 'done' : 'pending'}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="relative z-10"
                >
                  {isCompleted ? (
                    <div className="space-y-4">
                      <div className="w-16 h-16 rounded-2xl bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/30">
                        <Trophy className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-black text-emerald-700 dark:text-emerald-400">Topic Mastered!</h3>
                      <p className="text-sm font-bold text-emerald-600/70 dark:text-emerald-400/70 flex items-center justify-center gap-1">
                        <Sparkles className="w-4 h-4" /> You've earned 10 XP for this lesson!
                      </p>
                      {nextTopic && (
                        <button
                          onClick={() => onNavigate(nextTopic.id)}
                          className="mt-4 group inline-flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-2xl font-black text-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                        >
                          Continue to {nextTopic.title}
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                      )}
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-500 to-indigo-600 text-white flex items-center justify-center mx-auto shadow-lg shadow-brand-500/30">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-black text-slate-800 dark:text-slate-100">Finished reading?</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm mx-auto">Mark this topic as complete to earn XP and track your progress.</p>
                      <button
                        onClick={handleToggleComplete}
                        disabled={isProgressLoading}
                        className={`mt-2 inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-black text-white bg-gradient-to-r from-brand-600 to-indigo-600 shadow-xl shadow-brand-500/25 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-500/30 active:scale-95 transition-all duration-300 ${isProgressLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                      >
                        <Sparkles className="w-5 h-5" />
                        Complete & Earn 10 XP
                      </button>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          <PaginationControls 
            prevTopic={prevTopic} 
            nextTopic={nextTopic} 
            onNavigate={onNavigate} 
            className="flex items-stretch gap-4 mt-8"
          />
        </motion.div>
      </AnimatePresence>
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
  const showToc = activeView === 'tutorial' && !isCenteringNeeded && topic;

  return (
    <main className="flex-1 p-4 md:p-8 bg-slate-50/50 dark:bg-[#0b0f1a] overflow-y-auto h-screen-minus-nav scroll-smooth" id="scroll-container">
      <div className={`max-w-4xl lg:max-w-6xl xl:max-w-[90rem] mx-auto bg-white/70 dark:bg-slate-900/40 backdrop-blur-sm p-6 md:p-12 rounded-[32px] shadow-sm border border-slate-100/80 dark:border-slate-800/30 transition-all duration-300 ${isCenteringNeeded ? 'flex items-center justify-center min-h-[60vh]' : ''}`}>
        <div className="flex flex-col xl:flex-row xl:gap-12 relative items-start">
          <div className={`flex-1 min-w-0 ${showToc ? 'xl:max-w-4xl' : 'max-w-4xl lg:max-w-6xl'}`}>
            {mainContent()}
          </div>
          
          {showToc && (
            <aside className="hidden xl:block w-72 flex-shrink-0 sticky top-4">
              <TableOfContents topicDependency={topic?.id} />
            </aside>
          )}
        </div>
      </div>
    </main>
  );
};

export default MainContent;