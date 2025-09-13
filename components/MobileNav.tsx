import React, { useState, useEffect } from 'react';
import type { SidebarSection } from '../types';
import type { Course } from '../App';

const MainNavLink: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <a href="#" className="block py-3 px-4 text-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">{children}</a>
);

const TechLink: React.FC<{ children: React.ReactNode; active?: boolean; onClick?: () => void; }> = ({ children, active = false, onClick }) => (
  <a href="#" onClick={(e) => { e.preventDefault(); onClick?.(); }} className={`inline-block py-2 px-3 text-sm font-medium rounded-full ${active ? 'bg-indigo-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'}`}>
    {children}
  </a>
);


interface MobileNavProps {
  sections: SidebarSection[];
  activeTopicId: string;
  onTopicSelect: (id: string) => void;
  onClose: () => void;
  activeCourse: Course;
  onCourseSelect: (course: Course) => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ sections, activeTopicId, onTopicSelect, onClose, activeCourse, onCourseSelect }) => {
  const [isPanelOpen, setPanelOpen] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => {
        setPanelOpen(true);
    });
  }, []);

  const handleClose = () => {
    setPanelOpen(false);
    setTimeout(onClose, 300); // Wait for animation to finish
  };
  
  const handleTopicSelection = (id: string) => {
      setPanelOpen(false);
      setTimeout(() => {
        onTopicSelect(id);
      }, 300);
  };
  
  const handleCourseSelection = (course: Course) => {
    // Only switch if it's a different course
    if (course !== activeCourse) {
        onCourseSelect(course);
    }
  };

  return (
    <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ${isPanelOpen ? 'opacity-100' : 'opacity-0'}`}
        aria-hidden="true"
        onClick={handleClose}
      ></div>
      
      {/* Mobile nav panel */}
      <div className={`fixed top-0 left-0 bottom-0 flex w-full max-w-xs transition-transform duration-300 ease-in-out transform ${isPanelOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="w-full bg-white dark:bg-gray-800 overflow-y-auto">
          <div className="p-4 flex justify-between items-center border-b dark:border-gray-700 sticky top-0 bg-white dark:bg-gray-800 z-10">
             <a href="#" className="text-2xl font-bold text-gray-800 dark:text-white">
                Know<span className="text-indigo-500">Grow</span>
             </a>
            <button onClick={handleClose} className="text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white" aria-label="Close menu">
              <i className="fa-solid fa-times text-2xl"></i>
            </button>
          </div>
          
          <nav className="p-4">
            {/* Main Nav Links */}
            <div className="mb-6">
                 <MainNavLink>Tutorials</MainNavLink>
                 <MainNavLink>References</MainNavLink>
                 <MainNavLink>Exercises</MainNavLink>
            </div>
            
            <hr className="my-4 border-gray-200 dark:border-gray-700" />

            {/* Secondary Tech Links */}
            <div className="mb-6">
                <h3 className="font-bold text-lg mb-3 text-gray-500 dark:text-gray-400 px-4">Technologies</h3>
                 <div className="flex flex-wrap gap-2 px-4">
                      <TechLink active={activeCourse === 'html'} onClick={() => handleCourseSelection('html')}>HTML</TechLink>
                      <TechLink active={activeCourse === 'css'} onClick={() => handleCourseSelection('css')}>CSS</TechLink>
                      <TechLink active={activeCourse === 'js'} onClick={() => handleCourseSelection('js')}>JS</TechLink>
                      <TechLink>SQL</TechLink>
                      <TechLink>PYTHON</TechLink>
                 </div>
            </div>

            <hr className="my-4 border-gray-200 dark:border-gray-700" />
            
            {/* Tutorial Sidebar Content */}
            {sections.map((section, index) => (
              <div key={section.title} className={index > 0 ? 'mt-6' : ''}>
                <h3 className="font-bold text-xl mb-3 text-gray-800 dark:text-gray-100">{section.title}</h3>
                <ul className="space-y-1">
                  {section.topics.map(topic => (
                    <li key={topic.id}>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handleTopicSelection(topic.id);
                        }}
                        className={`block py-2 px-3 text-sm rounded-md transition-colors duration-150 ${
                          activeTopicId === topic.id
                            ? 'bg-indigo-600 text-white font-bold'
                            : 'text-gray-600 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-700'
                        }`}
                      >
                        {topic.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;