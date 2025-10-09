import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import SearchResultsDropdown from './SearchResultsDropdown';
import type { RankedSearchResult } from '../App';

const NavLink: React.FC<{ children: React.ReactNode; hasDropdown?: boolean, onClick?: () => void }> = ({ children, hasDropdown = false, onClick }) => {
    const Element = onClick ? 'button' : 'a';
    
    return (
        <Element
            href={!onClick ? "#" : undefined}
            onClick={onClick}
            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-4 rounded-md text-sm font-medium flex items-center"
        >
            {children}
            {hasDropdown && <i className="fa-solid fa-caret-down ml-1"></i>}
        </Element>
    );
};


const IconLink: React.FC<{ iconClass: string; onClick?: () => void, href?: string, [key: string]: any }> = ({ iconClass, onClick, href = "#", ...props }) => {
    const commonClasses = "text-gray-300 hover:bg-gray-700 hover:text-white p-3 rounded-full text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white";
    if (onClick) {
        return (
            <button onClick={onClick} className={commonClasses} {...props}>
                <i className={iconClass}></i>
            </button>
        )
    }
    return (
        <a href={href} className={commonClasses} {...props}>
            <i className={iconClass}></i>
        </a>
    )
};

interface HeaderProps {
  onMenuClick: () => void;
  onTutorialsClick: () => void;
  onReferencesClick: () => void;
  onExercisesClick: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  rankedSearchResults: RankedSearchResult[];
  onTopicSelect: (id: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick, onTutorialsClick, onReferencesClick, onExercisesClick, searchQuery, onSearchChange, rankedSearchResults, onTopicSelect }) => {
  const { theme, toggleTheme } = useTheme();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const showDropdown = isDropdownOpen && searchQuery.length > 0;

  return (
    <header role="banner" className="bg-gray-800 dark:bg-gray-900/70 dark:backdrop-blur-sm text-white flex items-center justify-between sticky top-0 z-40 px-4 h-[60px] border-b border-transparent dark:border-gray-800">
      <div className="flex items-center space-x-4">
        <a href="#" className="text-2xl font-bold text-white py-3">
          Know<span className="text-green-400">Grow</span>
        </a>
        <nav role="navigation" aria-label="Primary navigation" className="hidden md:flex items-center space-x-1">
            <NavLink onClick={onTutorialsClick} hasDropdown>Tutorials</NavLink>
            <NavLink onClick={onReferencesClick} hasDropdown>References</NavLink>
            <NavLink onClick={onExercisesClick} hasDropdown>Exercises</NavLink>
            <a href="https://aitutor.knowgrow.tech" target="_blank" rel="noopener noreferrer" className="relative text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-4 rounded-md text-sm font-medium">
              AI Tutor
              <span 
                className="absolute top-3 right-0 -translate-y-1/2 translate-x-1/2 bg-yellow-400 text-gray-900 text-[9px] font-bold px-1.5 py-0.5 rounded-full ring-2 ring-gray-800 dark:ring-gray-900/70"
                title="Coming Soon!"
              >
                SOON
              </span>
            </a>
        </nav>
      </div>
      <div className="flex items-center space-x-2">
        <div className="hidden lg:flex items-center space-x-2">
            <IconLink
                onClick={toggleTheme}
                iconClass={theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon'}
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            />
            <IconLink 
                href="https://knowgrow.tech"
                target="_blank"
                rel="noopener noreferrer"
                iconClass="fa-solid fa-earth-americas" 
                aria-label="Change language" 
            />
            <div className="relative" ref={searchContainerRef}>
              <input
                type="search"
                placeholder="Search tutorials..."
                value={searchQuery}
                onChange={(e) => {
                    onSearchChange(e.target.value)
                    setIsDropdownOpen(true);
                }}
                onFocus={() => setIsDropdownOpen(true)}
                className="bg-gray-700 text-white rounded-full py-2 pl-10 pr-4 w-48 focus:w-64 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-gray-600"
                aria-label="Search tutorials"
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <i className="fa-solid fa-magnifying-glass"></i>
              </span>
              {showDropdown && (
                  <SearchResultsDropdown
                    results={rankedSearchResults}
                    onSelect={(id) => {
                        onTopicSelect(id);
                        setIsDropdownOpen(false);
                    }}
                    searchQuery={searchQuery}
                  />
              )}
            </div>
            <a href="#" className="bg-gray-700 text-white rounded-full py-2 px-4 text-sm font-bold hover:bg-gray-600">Spaces</a>
            <a href="#" className="bg-indigo-500 text-white rounded-full py-2 px-4 text-sm font-bold hover:bg-indigo-600">Get Certified</a>
        </div>
        
        {/* Hamburger Menu Button */}
        <button
          onClick={onMenuClick}
          className="md:hidden text-gray-300 hover:bg-gray-700 hover:text-white p-3 rounded-full text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          aria-label="Open navigation menu"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;