import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, BookOpen, Search, Sparkles } from 'lucide-react';

const BottomNav: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-t border-gray-200 dark:border-gray-800 px-6 py-3 z-50 flex justify-between items-center shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
      <Link 
        to="/dashboard" 
        className={`flex flex-col items-center space-y-1 transition-colors ${isActive('/dashboard') ? 'text-brand-600 dark:text-brand-400' : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-200'}`}
      >
        <Home className={`w-6 h-6 ${isActive('/dashboard') ? 'fill-current' : ''}`} />
        <span className="text-[10px] font-bold uppercase tracking-tighter">Home</span>
      </Link>

      <Link 
        to="/" 
        className={`flex flex-col items-center space-y-1 transition-colors ${isActive('/') ? 'text-brand-600 dark:text-brand-400' : 'text-gray-400 hover:text-gray-600 dark:hover:text-gray-200'}`}
      >
        <BookOpen className={`w-6 h-6 ${isActive('/') ? 'fill-current' : ''}`} />
        <span className="text-[10px] font-bold uppercase tracking-tighter">Courses</span>
      </Link>

      <button 
        className="flex flex-col items-center space-y-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
        onClick={() => {
            // Focus search logic or open search modal
            const searchInput = document.querySelector('input[type="search"]') as HTMLInputElement;
            if (searchInput) {
                searchInput.focus();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }}
      >
        <Search className="w-6 h-6" />
        <span className="text-[10px] font-bold uppercase tracking-tighter">Search</span>
      </button>

      <a 
        href="https://aitutor.knowgrow.tech" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex flex-col items-center space-y-1 text-gray-400 hover:text-amber-500 transition-colors"
      >
        <Sparkles className="w-6 h-6" />
        <span className="text-[10px] font-bold uppercase tracking-tighter">AI Tutor</span>
      </a>
    </nav>
  );
};

export default BottomNav;
