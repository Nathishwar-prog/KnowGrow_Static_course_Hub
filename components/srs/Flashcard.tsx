import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, RotateCcw, Zap, Brain } from 'lucide-react';

interface FlashcardProps {
  front: string;
  back: string;
  category: string;
  onRate: (quality: number) => void;
}

const Flashcard: React.FC<FlashcardProps> = ({ front, back, category, onRate }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => setIsFlipped(!isFlipped);

  const ratings = [
    { label: 'Again', quality: 0, icon: RotateCcw, color: '#ef4444', bgColor: 'bg-red-500/10', borderColor: 'border-red-500/20' },
    { label: 'Hard', quality: 1, icon: Brain, color: '#f97316', bgColor: 'bg-orange-500/10', borderColor: 'border-orange-500/20' },
    { label: 'Good', quality: 2, icon: Check, color: '#10b981', bgColor: 'bg-emerald-500/10', borderColor: 'border-emerald-500/20' },
    { label: 'Easy', quality: 3, icon: Zap, color: '#3b82f6', bgColor: 'bg-blue-500/10', borderColor: 'border-blue-500/20' },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto min-h-[450px] flex flex-col perspective-1000">
      <div className="relative flex-1 group">
        {/* Decorative background glow */}
        <div className="absolute -inset-4 bg-gradient-to-tr from-brand-500/10 to-indigo-500/10 rounded-[40px] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
        
        <motion.div
          className="w-full h-full cursor-pointer preserve-3d relative min-h-[400px]"
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.7, type: 'spring', stiffness: 200, damping: 25 }}
          onClick={handleFlip}
        >
          {/* Front Side */}
          <div className="absolute inset-0 backface-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-[32px] p-8 sm:p-12 shadow-2xl border border-white/20 dark:border-gray-700/30 flex flex-col items-center justify-center text-center overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
            
            <span className="absolute top-8 left-8 px-4 py-1.5 bg-brand-500/10 text-brand-600 dark:text-brand-400 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border border-brand-500/10">
              {category}
            </span>
            
            <motion.h3 
              layout
              className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight transition-all duration-300"
            >
              {front}
            </motion.h3>
            
            <div className="mt-12 flex items-center space-x-2 text-slate-400 font-bold text-[10px] uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">
              <span>Click to flip</span>
              <RotateCcw className="w-3 h-3 animate-spin-slow" />
            </div>
          </div>

          {/* Back Side */}
          <div 
            className="absolute inset-0 backface-hidden bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-[32px] p-8 sm:p-12 shadow-2xl border border-brand-500/20 flex flex-col items-center justify-center text-center"
            style={{ transform: 'rotateY(180deg)' }}
          >
            <span className="absolute top-8 left-8 px-4 py-1.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border border-emerald-500/10">
              Explanation
            </span>
            
            <div className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-100 leading-relaxed max-w-prose">
              {back}
            </div>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {isFlipped && (
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: 15, filter: 'blur(5px)' }}
            className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {ratings.map((rating) => (
              <button
                key={rating.quality}
                onClick={(e) => {
                  e.stopPropagation();
                  onRate(rating.quality);
                  setIsFlipped(false);
                }}
                className={`group relative flex flex-col items-center p-4 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-md border border-gray-200 dark:border-gray-700 hover:border-transparent transition-all duration-500 hover:shadow-xl hover:shadow-current/5`}
                style={{ color: rating.color }}
              >
                <div className={`w-12 h-12 rounded-2xl ${rating.bgColor} flex items-center justify-center mb-3 transition-all duration-500 group-hover:scale-110 group-hover:bg-opacity-100 shadow-sm border ${rating.borderColor}`}>
                  <rating.icon className="w-6 h-6" style={{ color: rating.color }} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 dark:text-gray-500 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                  {rating.label}
                </span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


export default Flashcard;
