import React, { useEffect, useState } from 'react';
import type { Course } from '../App';

interface ReferencesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onReferenceSelect: (course: Course) => void;
}

const ReferenceItem: React.FC<{ icon: string; title: string; description: string; onClick: () => void; isNew?: boolean }> = ({ icon, title, description, onClick, isNew }) => (
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


const ReferencesModal: React.FC<ReferencesModalProps> = ({ isOpen, onClose, onReferenceSelect }) => {
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
    <div role="dialog" aria-modal="true" aria-labelledby="references-modal-title" className="fixed inset-0 z-50">
      <div
        className={`modal-backdrop ${show ? 'modal-backdrop-open' : ''}`}
        onClick={onClose}
      ></div>
      <div className={`modal-content ${show ? 'modal-content-open' : ''} !max-w-4xl`}>
        <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 id="references-modal-title" className="text-2xl font-bold text-gray-800 dark:text-white flex items-center">
            <i className="fa-solid fa-book-bookmark mr-3 text-indigo-400"></i>
            References
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
                <ReferenceItem
                    icon="fa-brands fa-html5"
                    title="HTML Reference"
                    description="Comprehensive guide to all HTML elements, attributes, and events."
                    onClick={() => onReferenceSelect('html')}
                />
                <ReferenceItem
                    icon="fa-brands fa-css3-alt"
                    title="CSS Reference"
                    description="Complete reference for CSS properties, selectors, and concepts."
                    onClick={() => onReferenceSelect('css')}
                />
                <ReferenceItem
                    icon="fa-brands fa-js-square"
                    title="JavaScript Reference"
                    description="In-depth documentation for JavaScript objects, methods, and web APIs."
                    onClick={() => onReferenceSelect('js')}
                />
                <ReferenceItem
                    icon="fa-solid fa-database"
                    title="SQL Reference"
                    description="Quick reference for SQL commands, functions, and keywords."
                    onClick={() => onReferenceSelect('sql')}
                    isNew
                />
                <ReferenceItem
                    icon="fa-brands fa-python"
                    title="Python Reference"
                    description="Essential guide to Python syntax, standard library, and more."
                    onClick={() => onReferenceSelect('python')}
                    isNew
                />
            </div>
        </div>
      </div>
    </div>
  );
};

export default ReferencesModal;