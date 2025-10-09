import React, { useEffect, useState } from 'react';
import type { Course } from '../App';

interface ExercisesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onExerciseSelect: (course: Course) => void;
}

const ExerciseItem: React.FC<{ icon: string; title: string; description: string; onClick: () => void; isNew?: boolean }> = ({ icon, title, description, onClick, isNew }) => (
    <button
        onClick={onClick}
        className="w-full text-left p-4 rounded-lg bg-gray-50 dark:bg-gray-700/50 hover:bg-indigo-50 dark:hover:bg-gray-700 hover:ring-2 hover:ring-indigo-400 transition-all duration-200 relative"
    >
        <div className="flex items-start">
            <i className={`${icon} text-3xl text-indigo-400 w-8 mr-4 mt-1 text-center`}></i>
            <div>
                <h4 className="font-bold text-lg text-gray-800 dark:text-gray-100">{title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{description}</p>
            </div>
        </div>
        {isNew && (
            <span className="absolute top-2 right-2 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full animate-pulse">NEW</span>
        )}
    </button>
);

const ExercisesModal: React.FC<ExercisesModalProps> = ({ isOpen, onClose, onExerciseSelect }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => setShow(true));
    } else {
      setShow(false);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
        document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
        document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen && !show) return null;

  return (
    <div role="dialog" aria-modal="true" aria-labelledby="exercises-modal-title" className="fixed inset-0 z-50">
      <div
        className={`modal-backdrop ${show ? 'modal-backdrop-open' : ''}`}
        onClick={onClose}
      ></div>
      <div className={`modal-content ${show ? 'modal-content-open' : ''} !max-w-4xl`}>
        <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 id="exercises-modal-title" className="text-2xl font-bold text-gray-800 dark:text-white flex items-center">
            <i className="fa-solid fa-dumbbell mr-3 text-indigo-400"></i>
            Exercises & Quizzes
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <i className="fa-solid fa-times text-2xl"></i>
          </button>
        </div>
        <div className="p-6 overflow-y-auto flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ExerciseItem
                    icon="fa-brands fa-html5"
                    title="HTML Exercises & Quiz"
                    description="Test your knowledge with interactive coding exercises and multiple-choice questions."
                    onClick={() => onExerciseSelect('html')}
                />
                <ExerciseItem
                    icon="fa-brands fa-css3-alt"
                    title="CSS Exercises & Quiz"
                    description="Challenge yourself with styling tasks and questions on CSS concepts."
                    onClick={() => onExerciseSelect('css')}
                />
                <ExerciseItem
                    icon="fa-brands fa-js-square"
                    title="JavaScript Exercises & Quiz"
                    description="Solve coding problems and test your understanding of JavaScript fundamentals."
                    onClick={() => onExerciseSelect('js')}
                />
                <ExerciseItem
                    icon="fa-solid fa-database"
                    title="SQL Exercises & Quiz"
                    description="Practice your query skills with hands-on database challenges."
                    onClick={() => onExerciseSelect('sql')}
                    isNew
                />
                <ExerciseItem
                    icon="fa-brands fa-python"
                    title="Python Exercises & Quiz"
                    description="Sharpen your Python programming skills with a variety of coding exercises."
                    onClick={() => onExerciseSelect('python')}
                    isNew
                />
            </div>
        </div>
      </div>
    </div>
  );
};

export default ExercisesModal;