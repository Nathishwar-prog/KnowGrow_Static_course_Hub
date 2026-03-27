import React from 'react';
import type { TutorialTopic } from '../types';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationControlsProps {
  prevTopic: TutorialTopic | null;
  nextTopic: TutorialTopic | null;
  onNavigate: (id: string) => void;
  className?: string;
}

const PaginationControls: React.FC<PaginationControlsProps> = ({ prevTopic, nextTopic, onNavigate, className = "flex items-stretch gap-4 mb-10" }) => {
  return (
    <div className={className}>
      {/* Previous Topic Card */}
      <button
        onClick={() => prevTopic && onNavigate(prevTopic.id)}
        disabled={!prevTopic}
        className={`flex-1 group text-left p-4 rounded-2xl border transition-all duration-300 ${
          prevTopic
            ? 'bg-white/60 dark:bg-slate-800/40 backdrop-blur-sm border-slate-200/60 dark:border-slate-700/40 hover:border-brand-300 dark:hover:border-brand-700 hover:shadow-lg hover:shadow-brand-500/5 hover:-translate-y-0.5 cursor-pointer'
            : 'bg-slate-50/50 dark:bg-slate-900/30 border-slate-100 dark:border-slate-800/30 opacity-40 cursor-not-allowed'
        }`}
      >
        <div className="flex items-center gap-3">
          <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
            prevTopic ? 'bg-slate-100 dark:bg-slate-800 group-hover:bg-brand-50 dark:group-hover:bg-brand-900/30 text-slate-400 group-hover:text-brand-600 dark:group-hover:text-brand-400' : 'bg-slate-100 dark:bg-slate-800 text-slate-300'
          }`}>
            <ChevronLeft className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-0.5">Previous</div>
            <div className="text-sm font-bold text-slate-700 dark:text-slate-300 truncate group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
              {prevTopic ? prevTopic.title : 'No previous'}
            </div>
          </div>
        </div>
      </button>

      {/* Next Topic Card */}
      <button
        onClick={() => nextTopic && onNavigate(nextTopic.id)}
        disabled={!nextTopic}
        className={`flex-1 group text-right p-4 rounded-2xl border transition-all duration-300 ${
          nextTopic
            ? 'bg-white/60 dark:bg-slate-800/40 backdrop-blur-sm border-slate-200/60 dark:border-slate-700/40 hover:border-brand-300 dark:hover:border-brand-700 hover:shadow-lg hover:shadow-brand-500/5 hover:-translate-y-0.5 cursor-pointer'
            : 'bg-slate-50/50 dark:bg-slate-900/30 border-slate-100 dark:border-slate-800/30 opacity-40 cursor-not-allowed'
        }`}
      >
        <div className="flex items-center justify-end gap-3">
          <div className="min-w-0">
            <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-0.5">Next</div>
            <div className="text-sm font-bold text-slate-700 dark:text-slate-300 truncate group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
              {nextTopic ? nextTopic.title : 'No next'}
            </div>
          </div>
          <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
            nextTopic ? 'bg-slate-100 dark:bg-slate-800 group-hover:bg-brand-50 dark:group-hover:bg-brand-900/30 text-slate-400 group-hover:text-brand-600 dark:group-hover:text-brand-400' : 'bg-slate-100 dark:bg-slate-800 text-slate-300'
          }`}>
            <ChevronRight className="w-4 h-4" />
          </div>
        </div>
      </button>
    </div>
  );
};

export default PaginationControls;
