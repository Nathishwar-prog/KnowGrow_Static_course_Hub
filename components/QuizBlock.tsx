import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, Sparkles } from 'lucide-react';

export interface QuizBlockProps {
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

const QuizBlock: React.FC<QuizBlockProps> = ({ question, options, correctAnswerIndex, explanation }) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerRevealed, setIsAnswerRevealed] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleOptionSelect = (index: number) => {
    if (isAnswerRevealed) return;
    setSelectedOption(index);
    setIsAnswerRevealed(true);

    if (index === correctAnswerIndex) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 2000);
    }
  };

  const isCorrect = isAnswerRevealed && selectedOption === correctAnswerIndex;

  return (
    <div className={`my-8 bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl p-6 md:p-8 rounded-2xl shadow-sm border transition-all duration-500 relative overflow-hidden ${isCorrect ? 'border-green-400 dark:border-green-500 shadow-green-500/20' : 'border-gray-200 dark:border-gray-700'}`}>
      
      {/* Background Confetti Animation Layer (Only shown briefly on correct) */}
      <AnimatePresence>
        {showConfetti && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="absolute -top-10 -right-10 text-green-500/20 pointer-events-none"
          >
            <Sparkles className="w-64 h-64" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center space-x-3 mb-6 relative z-10">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-600 to-indigo-500 flex items-center justify-center text-white shadow-md">
          <i className="fa-solid fa-brain"></i>
        </div>
        <h3 className="text-xl font-extrabold text-gray-900 dark:text-white">Knowledge Check</h3>
      </div>

      <p className="text-lg text-gray-800 dark:text-gray-200 font-medium mb-6 relative z-10">
        {question}
      </p>

      <div className="space-y-3 relative z-10">
        {options.map((option, index) => {
          const isSelected = selectedOption === index;
          const isThisCorrect = index === correctAnswerIndex;
          const showCorrectStyle = isAnswerRevealed && isThisCorrect;
          const showIncorrectStyle = isAnswerRevealed && isSelected && !isThisCorrect;

          let btnClass = "w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex justify-between items-center group font-medium ";
          
          if (!isAnswerRevealed) {
            btnClass += "border-gray-200 dark:border-gray-700 hover:border-brand-500 hover:bg-brand-50/50 dark:hover:bg-brand-900/20 text-gray-700 dark:text-gray-300";
          } else if (showCorrectStyle) {
            btnClass += "border-green-500 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 transform scale-[1.02] shadow-sm";
          } else if (showIncorrectStyle) {
            btnClass += "border-red-500 bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300";
          } else {
            btnClass += "border-gray-200 dark:border-gray-700 opacity-50 text-gray-500";
          }

          return (
            <button
              key={index}
              onClick={() => handleOptionSelect(index)}
              disabled={isAnswerRevealed}
              className={btnClass}
            >
               <span>{option}</span>
               {showCorrectStyle && <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />}
               {showIncorrectStyle && <XCircle className="w-5 h-5 text-red-500 shrink-0" />}
            </button>
          );
        })}
      </div>

      <AnimatePresence>
        {isAnswerRevealed && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: 'auto', marginTop: 24 }}
            className={`rounded-xl p-5 border relative z-10 ${
              selectedOption === correctAnswerIndex
                ? 'bg-green-50/80 dark:bg-green-900/20 border-green-200 dark:border-green-800/50'
                : 'bg-red-50/80 dark:bg-red-900/20 border-red-200 dark:border-red-800/50'
            }`}
          >
            <p className={`font-bold mb-2 ${selectedOption === correctAnswerIndex ? 'text-green-800 dark:text-green-400' : 'text-red-800 dark:text-red-400'}`}>
              {selectedOption === correctAnswerIndex ? 'Awesome job! 🎉' : 'Not quite right. Let\'s review!'}
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
              {explanation}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default QuizBlock;
