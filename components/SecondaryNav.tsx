import React from 'react';
import type { Course } from '../App';

interface SecondaryNavProps {
  activeCourse: Course;
  onCourseSelect: (course: Course) => void;
}

const TechLink: React.FC<{ children: React.ReactNode; active?: boolean; onClick?: () => void; isNew?: boolean }> = ({ children, active = false, onClick, isNew = false }) => (
  <a 
    href="#" 
    onClick={(e) => { e.preventDefault(); onClick?.(); }}
    className={`flex items-center py-2 px-4 text-sm font-medium rounded-md transition-colors ${active ? 'bg-indigo-600 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
  >
    {children}
    {isNew && (
      <span className="ml-2 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full animate-pulse">NEW</span>
    )}
  </a>
);

const SecondaryNav: React.FC<SecondaryNavProps> = ({ activeCourse, onCourseSelect }) => {
  return (
    <nav aria-label="Secondary navigation" className="bg-gray-800 dark:bg-gray-900 text-white hidden md:flex items-center overflow-x-auto whitespace-nowrap p-2 space-x-2 shadow-md sticky top-[60px] z-30">
      <TechLink active={activeCourse === 'html'} onClick={() => onCourseSelect('html')}>HTML</TechLink>
      <TechLink active={activeCourse === 'css'} onClick={() => onCourseSelect('css')}>CSS</TechLink>
      <TechLink active={activeCourse === 'js'} onClick={() => onCourseSelect('js')}>JS</TechLink>
      <TechLink active={activeCourse === 'sql'} onClick={() => onCourseSelect('sql')} isNew>SQL</TechLink>
      <TechLink active={activeCourse === 'python'} onClick={() => onCourseSelect('python')} isNew>PYTHON</TechLink>
    </nav>
  );
};

export default SecondaryNav;