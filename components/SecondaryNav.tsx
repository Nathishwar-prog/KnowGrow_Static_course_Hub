import React from 'react';
import type { Course } from '../App';

interface SecondaryNavProps {
  activeCourse: Course;
  onCourseSelect: (course: Course) => void;
}

interface TechLinkProps {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  isNew?: boolean;
  isSoon?: boolean;
}

const TechLink: React.FC<TechLinkProps> = ({
  children,
  active = false,
  onClick,
  isNew = false,
  isSoon = false
}) => (
  <a
    href="#"
    onClick={(e) => { e.preventDefault(); onClick?.(); }}
    className={`flex items-center py-2 px-5 text-sm font-bold rounded-full transition-all duration-300 ${active
        ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-lg shadow-slate-900/10 dark:shadow-white/5 scale-105'
        : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
      }`}
  >
    {children}
    {isNew && (
      <span className="ml-2 bg-emerald-500 text-white text-[9px] font-black px-2 py-0.5 rounded-full shadow-sm">
        NEW
      </span>
    )}
    {isSoon && (
      <span className="ml-2 bg-amber-400 text-amber-900 text-[9px] font-black px-2 py-0.5 rounded-full shadow-sm">
        SOON
      </span>
    )}
  </a>
);

const SecondaryNav: React.FC<SecondaryNavProps> = ({ activeCourse, onCourseSelect }) => {
  return (
    <nav
      aria-label="Secondary navigation"
      className="bg-white/70 dark:bg-[#0d1117]/80 backdrop-blur-xl hidden md:flex items-center overflow-x-auto whitespace-nowrap p-2 space-x-1 shadow-sm sticky top-[72px] z-30 border-b border-slate-200/50 dark:border-slate-800/30 hide-scrollbar"
    >
      <div className="flex items-center space-x-1 mx-auto max-w-7xl w-full px-4">
        <TechLink active={activeCourse === 'html'} onClick={() => onCourseSelect('html')}>HTML</TechLink>
        <TechLink active={activeCourse === 'css'} onClick={() => onCourseSelect('css')}>CSS</TechLink>
        <TechLink active={activeCourse === 'js'} onClick={() => onCourseSelect('js')}>JS</TechLink>
        <TechLink active={activeCourse === 'sql'} onClick={() => onCourseSelect('sql')} isNew>SQL</TechLink>
        <TechLink active={activeCourse === 'python'} onClick={() => onCourseSelect('python')} isNew>Python</TechLink>
        <TechLink active={activeCourse === 'numpy'} onClick={() => onCourseSelect('numpy')} isSoon>Numpy</TechLink>
        <TechLink active={activeCourse === 'pandas'} onClick={() => onCourseSelect('pandas')} isSoon>Pandas</TechLink>
        <TechLink active={activeCourse === 'matplotlib'} onClick={() => onCourseSelect('matplotlib')} isSoon>MatplotLib</TechLink>
        <TechLink active={activeCourse === 'seaborn'} onClick={() => onCourseSelect('seaborn')} isSoon>Seaborn</TechLink>
      </div>
    </nav>
  );
};

export default SecondaryNav;
