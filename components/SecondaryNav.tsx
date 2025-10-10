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
  isSoon?: boolean; // ✅ Added this line
}

const TechLink: React.FC<TechLinkProps> = ({ 
  children, 
  active = false, 
  onClick, 
  isNew = false, 
  isSoon = false // ✅ Added default value
}) => (
  <a 
    href="#" 
    onClick={(e) => { e.preventDefault(); onClick?.(); }}
    className={`flex items-center py-2 px-4 text-sm font-medium rounded-md transition-colors ${
      active ? 'bg-indigo-600 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
    }`} 
  >
    {children}
    {isNew && (
      <span className="ml-2 bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full animate-pulse">
        NEW
      </span>
    )}
    {isSoon && (
      <span className="ml-2 bg-yellow-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full animate-pulse">
        Coming Soon
      </span>
    )}
  </a>
);

const SecondaryNav: React.FC<SecondaryNavProps> = ({ activeCourse, onCourseSelect }) => {
  return (
    <nav 
      aria-label="Secondary navigation" 
      className="bg-gray-800 dark:bg-gray-900 text-white hidden md:flex items-center overflow-x-auto whitespace-nowrap p-2 space-x-2 shadow-md sticky top-[60px] z-30"
    >
      <TechLink active={activeCourse === 'html'} onClick={() => onCourseSelect('html')}>HTML</TechLink>
      <TechLink active={activeCourse === 'css'} onClick={() => onCourseSelect('css')}>CSS</TechLink>
      <TechLink active={activeCourse === 'js'} onClick={() => onCourseSelect('js')}>JS</TechLink>
      <TechLink active={activeCourse === 'sql'} onClick={() => onCourseSelect('sql')} isNew>SQL</TechLink>
      <TechLink active={activeCourse === 'python'} onClick={() => onCourseSelect('python')} isNew>Python</TechLink>
      <TechLink active={activeCourse === 'numpy'} onClick={() => onCourseSelect('numpy')} isSoon>Numpy</TechLink>
      <TechLink active={activeCourse === 'pandas'} onClick={() => onCourseSelect('pandas')} isSoon>Pandas</TechLink>
      <TechLink active={activeCourse === 'matplotlib'} onClick={() => onCourseSelect('matplotlib')} isSoon>MatplotLib</TechLink>
      <TechLink active={activeCourse === 'seaborn'} onClick={() => onCourseSelect('seaborn')} isSoon>Seaborn</TechLink>
      
    </nav>
  );
};

export default SecondaryNav;
