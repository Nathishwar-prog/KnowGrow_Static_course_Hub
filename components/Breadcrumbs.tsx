import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbsProps {
  courseId: string;
  topicTitle: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ courseId, topicTitle }) => {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-400 mb-6 overflow-x-auto whitespace-nowrap hide-scrollbar py-1">
      <Link 
        to="/dashboard" 
        className="flex items-center hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
      >
        <Home className="w-4 h-4 mr-1" />
        <span className="font-medium">Home</span>
      </Link>
      
      <ChevronRight className="w-4 h-4 shrink-0 opacity-30" />
      
      <Link 
        to={`/tutorial/${courseId}`} 
        className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors capitalize font-medium"
      >
        {courseId}
      </Link>
      
      <ChevronRight className="w-4 h-4 shrink-0 opacity-30" />
      
      <span className="text-slate-900 dark:text-slate-200 font-bold truncate">
        {topicTitle}
      </span>
    </nav>
  );
};

export default Breadcrumbs;
