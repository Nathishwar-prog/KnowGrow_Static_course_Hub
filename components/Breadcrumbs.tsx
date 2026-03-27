import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

interface BreadcrumbsProps {
  courseId: string;
  topicTitle: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ courseId, topicTitle }) => {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm mb-8 overflow-x-auto whitespace-nowrap hide-scrollbar py-1">
      <Link 
        to="/dashboard" 
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-brand-50 dark:hover:bg-brand-900/20 transition-all font-medium"
      >
        <Home className="w-3.5 h-3.5" />
        <span>Home</span>
      </Link>
      
      <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700 shrink-0"></span>
      
      <Link 
        to={`/tutorial/${courseId}`} 
        className="px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-brand-50 dark:hover:bg-brand-900/20 transition-all capitalize font-medium"
      >
        {courseId}
      </Link>
      
      <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700 shrink-0"></span>
      
      <span className="px-3 py-1.5 rounded-lg bg-brand-50 dark:bg-brand-900/20 text-brand-700 dark:text-brand-300 font-bold truncate">
        {topicTitle}
      </span>
    </nav>
  );
};

export default Breadcrumbs;
