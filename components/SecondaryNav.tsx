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
    className={`flex items-center py-2 px-4 text-sm font-medium rounded-full transition-all duration-200 ${active
        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md transform scale-105'
        : 'text-gray-300 hover:bg-gray-700/50 hover:text-white hover:scale-105'
      }`}
  >
    {children}
    {isNew && (
      <span className="ml-2 bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full animate-pulse shadow-sm">
        NEW
      </span>
    )}
    {isSoon && (
      <span className="ml-2 bg-yellow-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full animate-pulse shadow-sm">
        Coming Soon
      </span>
    )}
  </a>
);

const SecondaryNav: React.FC<SecondaryNavProps> = ({ activeCourse, onCourseSelect }) => {
  return (
    <nav
      aria-label="Secondary navigation"
      className="bg-gray-900/95 backdrop-blur-md text-white hidden md:flex items-center overflow-x-auto whitespace-nowrap p-2 space-x-2 shadow-lg sticky top-[60px] z-30 border-b border-gray-800 hide-scrollbar"
    >
      <div className="flex items-center space-x-2 mx-auto max-w-7xl w-full px-4">
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
