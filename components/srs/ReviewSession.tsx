import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAllProgress } from '../../context/useAllProgress';
import { ALL_FLASHCARDS } from '../../data/flashcards/flashcardData';
import { isCardDue } from '../../utils/srsUtils';
import Flashcard from './Flashcard';
import { BookOpen, Trophy, ArrowRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const ReviewSession: React.FC = () => {
  const { srsData, updateFlashcard, isLoading } = useAllProgress();
  const [sessionFinished, setSessionFinished] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sessionCards, setSessionCards] = useState<typeof ALL_FLASHCARDS>([]);
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize session cards once on mount or manual reset
  useEffect(() => {
    if (!isInitialized && !isLoading) {
      const due = ALL_FLASHCARDS.filter(card => {
        const stats = srsData[card.id];
        if (!stats) return true;
        return isCardDue(stats.nextReview);
      });
      setSessionCards(due);
      setIsInitialized(true);
    }
  }, [isInitialized, isLoading, srsData]);

  const currentCard = sessionCards[currentIndex];

  const handleRate = (quality: number) => {
    if (!currentCard) return;
    updateFlashcard(currentCard.id, quality);
    
    if (currentIndex < sessionCards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setSessionFinished(true);
    }
  };

  if (!isInitialized || isLoading) {
    return (
      <div className="flex items-center justify-center p-20 min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-500"></div>
      </div>
    );
  }

  if (sessionCards.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-center bg-white dark:bg-gray-800 rounded-3xl border-2 border-dashed border-gray-200 dark:border-gray-700 min-h-[400px]">
        <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 font-bold">
            <BookOpen className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">You're all caught up!</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-xs">No flashcards are due for review right now. Come back tomorrow!</p>
        <Link 
            to="/dashboard"
            className="px-6 py-3 bg-brand-600 text-white rounded-xl font-bold hover:bg-brand-700 transition-colors flex items-center"
        >
            <Home className="w-4 h-4 mr-2" /> Back to Dashboard
        </Link>
      </div>
    );
  }

  if (sessionFinished) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center p-8 sm:p-12 text-center bg-white dark:bg-gray-800 rounded-3xl border-2 border-emerald-500/20 shadow-2xl min-h-[400px]"
      >
        <div className="w-20 h-20 bg-amber-100 dark:bg-amber-900/30 rounded-3xl flex items-center justify-center text-amber-600 mb-8 shadow-lg">
          <Trophy className="w-10 h-10" />
        </div>
        <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-4">Session Complete!</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-sm">
          Great job! Your memory is getting stronger with every review.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
            <Link 
                to="/dashboard"
                className="px-8 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-xl font-bold hover:bg-gray-200 transition-colors"
            >
                Return Home
            </Link>
            <button 
                onClick={() => {
                    setSessionFinished(false);
                    setCurrentIndex(0);
                    setIsInitialized(false); // Trigger re-initialization
                }}
                className="px-8 py-3 bg-brand-600 text-white rounded-xl font-bold hover:bg-brand-700 transition-all flex items-center justify-center"
            >
                Review Again <ArrowRight className="w-4 h-4 ml-2" />
            </button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-8">
      {/* Session Progress */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-3 px-2">
            <span className="text-xs font-black uppercase tracking-widest text-slate-500">
                Session Progress
            </span>
            <span className="text-xs font-black text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-900/30 px-2 py-1 rounded-md">
                {currentIndex + 1} / {sessionCards.length}
            </span>
        </div>
        <div className="h-2 w-full bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
            <motion.div 
                className="h-full bg-brand-500"
                initial={{ width: 0 }}
                animate={{ width: `${((currentIndex + 1) / sessionCards.length) * 100}%` }}
                transition={{ duration: 0.3 }}
            />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
           key={currentCard.id}
           initial={{ opacity: 0, x: 20 }}
           animate={{ opacity: 1, x: 0 }}
           exit={{ opacity: 0, x: -20 }}
           transition={{ duration: 0.3 }}
        >
          <Flashcard 
            front={currentCard.front}
            back={currentCard.back}
            category={currentCard.category}
            onRate={handleRate}
          />
        </motion.div>
      </AnimatePresence>

      <div className="mt-12 text-center">
        <p className="text-xs text-slate-400 font-medium">
          Tip: Be honest with your ratings. SRS works best when you admit what you don't know!
        </p>
      </div>
    </div>
  );
};

export default ReviewSession;
