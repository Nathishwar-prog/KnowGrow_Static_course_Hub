import React, { useState, useEffect } from 'react';
import type { SidebarSection } from '../types';
import type { Course, RankedSearchResult } from '../App';
import Highlighter from './Highlighter';
import { useParams } from 'react-router-dom';
import { useProgress } from '../context/useProgress';

const MainNavLink: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <a href="#" className="block py-3 px-4 text-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">{children}</a>
);

const TechLink: React.FC<{ children: React.ReactNode; active?: boolean; onClick?: () => void; isNew?: boolean; }> = ({ children, active = false, onClick, isNew = false }) => (
  <a href="#" onClick={(e) => { e.preventDefault(); onClick?.(); }} className={`inline-flex items-center py-2 px-3 text-sm font-medium rounded-full ${active ? 'bg-indigo-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'}`}>
    {children}
    {isNew && (
      <span className="ml-2 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full animate-pulse">NEW</span>
    )}
  </a>
);


interface MobileNavProps {
  sections: SidebarSection[];
  activeTopicId: string;
  onTopicSelect: (id: string) => void;
  onClose: () => void;
  activeCourse: Course;
  onCourseSelect: (course: Course) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  rankedSearchResults: RankedSearchResult[];
}

const MobileNav: React.FC<MobileNavProps> = ({ sections, activeTopicId, onTopicSelect, onClose, activeCourse, onCourseSelect, searchQuery, onSearchChange, rankedSearchResults }) => {
  const [isPanelOpen, setPanelOpen] = useState(false);
  const { courseId = 'html' } = useParams<{ courseId: string }>();
  const { completedTopics } = useProgress(courseId);

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
    onTopicSelect(id);
    // The onTopicSelect now handles closing and state clearing.
    // We don't need to manually close the panel here anymore.
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

          <div className="p-4 border-b dark:border-gray-700">
            <div className="relative">
              <input
                type="search"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                aria-label="Search tutorials"
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <i className="fa-solid fa-magnifying-glass"></i>
              </span>
            </div>
          </div>

          <nav className="p-4">
            {/* Tutorial Sidebar Content or Search Results */}
            {searchQuery ? (
              <div>
                <h3 className="font-bold text-lg mb-3 text-gray-500 dark:text-gray-400 px-4">Search Results</h3>
                {rankedSearchResults.length > 0 ? (
                  <ul>
                    {rankedSearchResults.map(({ topic }) => (
                      <li key={topic.id}>
                        <a
                          href="#"
                          onClick={(e) => { e.preventDefault(); handleTopicSelection(topic.id); }}
                          className={`block py-2 px-3 text-sm rounded-md transition-colors duration-150 flex items-center justify-between group ${activeTopicId === topic.id
                              ? 'bg-indigo-600 text-white font-bold'
                              : 'text-gray-600 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-700 hover:text-indigo-700 dark:hover:text-white'
                            }`}
                        >
                          <span className="truncate pr-2">
                            <Highlighter query={searchQuery}>{topic.title}</Highlighter>
                          </span>
                          {completedTopics.has(topic.id) && (
                            <i className={`fa-solid fa-check-circle text-xs shrink-0 ${activeTopicId === topic.id ? 'text-indigo-200' : 'text-green-500'}`} title="Completed"></i>
                          )}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="text-center text-gray-500 dark:text-gray-400 p-4">
                    <p>No results found for "{searchQuery}"</p>
                  </div>
                )}
              </div>
            ) : (
              <>
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
                    <TechLink active={activeCourse === 'sql'} onClick={() => handleCourseSelection('sql')} isNew>SQL</TechLink>
                    <TechLink active={activeCourse === 'python'} onClick={() => handleCourseSelection('python')} isNew>PYTHON</TechLink>
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
                            className={`block py-2 px-3 text-sm rounded-md transition-colors duration-150 flex items-center justify-between group ${activeTopicId === topic.id
                                ? 'bg-indigo-600 text-white font-bold'
                                : 'text-gray-600 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-700 hover:text-indigo-700 dark:hover:text-white'
                              }`}
                          >
                            <span className="truncate pr-2">{topic.title}</span>
                            {completedTopics.has(topic.id) && (
                              <i className={`fa-solid fa-check-circle text-xs shrink-0 ${activeTopicId === topic.id ? 'text-indigo-200' : 'text-green-500'}`} title="Completed"></i>
                            )}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))
                }
              </>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;