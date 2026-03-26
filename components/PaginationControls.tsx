import React from 'react';
import type { TutorialTopic } from '../types';

interface NavButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export const NavButton: React.FC<NavButtonProps> = ({ children, onClick, disabled = false }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-2.5 px-6 rounded-lg hover:shadow-lg hover:from-indigo-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-400 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center transform hover:-translate-y-0.5 active:translate-y-0"
  >
    {children}
  </button>
);

interface PaginationControlsProps {
  prevTopic: TutorialTopic | null;
  nextTopic: TutorialTopic | null;
  onNavigate: (id: string) => void;
  className?: string;
}

const PaginationControls: React.FC<PaginationControlsProps> = ({ prevTopic, nextTopic, onNavigate, className = "flex justify-between items-center mb-10" }) => {
  return (
    <div className={className}>
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
  );
};

export default PaginationControls;
