import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import SearchResultsDropdown from './SearchResultsDropdown';
import type { RankedSearchResult } from '../App';
import { useAuth } from '../context/AuthContext';
import AuthModal from './AuthModal';

export const NavLink: React.FC<{ children: React.ReactNode; hasDropdown?: boolean, onClick?: () => void }> = ({ children, hasDropdown = false, onClick }) => {
  const Element = onClick ? 'button' : 'a';

  return (
    <Element
      href={!onClick ? "#" : undefined}
      onClick={onClick}
      className="text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50 hover:text-brand-600 dark:hover:text-white px-3 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 flex items-center"
    >
      {children}
      {hasDropdown && <i className="fa-solid fa-caret-down ml-1"></i>}
    </Element>
  );
};

const IconLink: React.FC<{ iconClass: string; onClick?: () => void, href?: string, [key: string]: any }> = ({ iconClass, onClick, href = "#", ...props }) => {
  const commonClasses = "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700/50 hover:text-brand-600 dark:hover:text-white p-2.5 rounded-full text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 transition-all duration-200";
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
  const { user, signOut } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const showDropdown = isDropdownOpen && searchQuery.length > 0;

  return (
    <>
      <header role="banner" className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60 text-gray-800 dark:text-gray-100 flex items-center justify-between sticky top-0 z-40 px-6 h-[72px] border-b border-gray-200/50 dark:border-gray-800/50 shadow-sm transition-all duration-300">
        <div className="flex items-center space-x-6">
          <a href="#" className="font-display text-2xl font-extrabold tracking-tight flex items-center gap-2 group hover:opacity-90 transition-opacity">
            <span className="bg-gradient-to-br from-brand-600 to-indigo-500 text-transparent bg-clip-text">Know</span>
            <span className="bg-gradient-to-br from-emerald-500 to-green-400 text-transparent bg-clip-text">Grow</span>
          </a>
          <nav role="navigation" aria-label="Primary navigation" className="hidden md:flex items-center space-x-1">
            <NavLink onClick={onTutorialsClick} hasDropdown>Tutorials</NavLink>
            <NavLink onClick={onReferencesClick} hasDropdown>References</NavLink>
            <NavLink onClick={onExercisesClick} hasDropdown>Exercises</NavLink>
            <a href="https://aitutor.knowgrow.tech" target="_blank" rel="noopener noreferrer" className="relative text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50 hover:text-brand-600 dark:hover:text-white px-3 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200">
              AI Tutor
              <span
                className="absolute top-1.5 right-0 translate-x-1 bg-amber-400 dark:bg-amber-500 text-amber-950 text-[10px] font-bold px-1.5 py-0.5 rounded-full shadow-sm"
                title="Coming Soon!"
              >
                SOON
              </span>
            </a>
          </nav>
        </div>
        <div className="flex items-center space-x-3">
          <div className="hidden lg:flex items-center space-x-3">
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
            <div className="relative group" ref={searchContainerRef}>
              <input
                ref={searchInputRef}
                type="search"
                placeholder="Search tutorials..."
                value={searchQuery}
                onChange={(e) => {
                  onSearchChange(e.target.value)
                  setIsDropdownOpen(true);
                }}
                onFocus={() => setIsDropdownOpen(true)}
                className="bg-gray-100 dark:bg-gray-800/80 text-gray-800 dark:text-white rounded-full py-2 pl-10 pr-12 w-48 focus:w-64 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white dark:focus:bg-gray-800 shadow-inner dark:shadow-none placeholder-gray-500 dark:placeholder-gray-400 text-sm"
                aria-label="Search tutorials"
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand-500 transition-colors">
                <i className="fa-solid fa-magnifying-glass"></i>
              </span>
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 border border-gray-300 dark:border-gray-600 rounded px-1.5 py-0.5 hidden group-focus-within:hidden sm:block pointer-events-none">
                ⌘K
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

            <a href="#" className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-full py-2 px-4 text-sm font-bold hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">Spaces</a>
            <a href="#" className="bg-gradient-to-r from-indigo-600 to-brand-500 text-white rounded-full py-2 px-4 text-sm font-bold hover:shadow-lg hover:scale-105 transition-all duration-200">Get Certified</a>

            {user ? (
              <div className="flex items-center space-x-4 ml-2 border-l border-gray-200/50 dark:border-gray-700/50 pl-4">
                <a
                  href="/dashboard"
                  className="text-gray-600 dark:text-gray-300 hover:text-brand-600 dark:hover:text-white text-sm font-semibold transition-colors"
                >
                  Dashboard
                </a>
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-brand-600 to-indigo-400 text-white shadow-md flex items-center justify-center font-bold text-sm select-none">
                  {user.email?.charAt(0).toUpperCase()}
                </div>
                <button
                  onClick={signOut}
                  className="text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 text-sm font-medium transition-colors"
                  title="Logout"
                >
                  <i className="fa-solid fa-arrow-right-from-bracket"></i>
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-2 ml-4">
                <button
                  onClick={() => setIsAuthModalOpen(true)}
                  className="bg-brand-50 text-brand-700 dark:bg-brand-900/40 dark:text-brand-300 border border-brand-200 dark:border-brand-800 rounded-full py-1.5 px-5 text-sm font-bold hover:bg-brand-100 dark:hover:bg-brand-900/60 transition-colors shadow-sm"
                >
                  Login
                </button>
              </div>
            )}
          </div>

          {/* Hamburger Menu Button */}
          <button
            onClick={onMenuClick}
            className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded-full text-lg focus:outline-none focus:ring-2 focus:ring-brand-500"
            aria-label="Open navigation menu"
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </header>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </>
  );
};

export default Header;