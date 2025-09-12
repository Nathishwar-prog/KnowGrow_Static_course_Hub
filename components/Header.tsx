import React from 'react';
import { useTheme } from '../context/ThemeContext';

const NavLink: React.FC<{ children: React.ReactNode; hasDropdown?: boolean }> = ({ children, hasDropdown = false }) => (
  <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-4 rounded-md text-sm font-medium flex items-center">
    {children}
    {hasDropdown && <i className="fa-solid fa-caret-down ml-1"></i>}
  </a>
);

const IconLink: React.FC<{ iconClass: string; onClick?: () => void, href?: string, 'aria-label'?: string }> = ({ iconClass, onClick, href = "#", ...props }) => {
    const commonClasses = "text-gray-300 hover:bg-gray-700 hover:text-white p-3 rounded-full text-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white";
    if (onClick) {
        return (
            <button onClick={onClick} className={commonClasses} aria-label={props['aria-label']}>
                <i className={iconClass}></i>
            </button>
        )
    }
    return (
        <a href={href} className={commonClasses} aria-label={props['aria-label']}>
            <i className={iconClass}></i>
        </a>
    )
};

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header role="banner" className="bg-gray-800 dark:bg-gray-900/70 dark:backdrop-blur-sm text-white flex items-center justify-between sticky top-0 z-40 px-4 h-[60px] border-b border-transparent dark:border-gray-800">
      <div className="flex items-center space-x-4">
        <a href="#" className="text-2xl font-bold text-white py-3">
          Know<span className="text-indigo-400">Grow</span>
        </a>
        <nav role="navigation" aria-label="Primary navigation" className="hidden md:flex items-center space-x-1">
            <NavLink hasDropdown>Tutorials</NavLink>
            <NavLink hasDropdown>References</NavLink>
            <NavLink hasDropdown>Exercises</NavLink>
        </nav>
      </div>
      <div className="flex items-center space-x-2">
        <div className="hidden lg:flex items-center space-x-2">
            <IconLink
                onClick={toggleTheme}
                iconClass={theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon'}
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            />
            <IconLink iconClass="fa-solid fa-earth-americas" aria-label="Change language" />
            <IconLink iconClass="fa-solid fa-magnifying-glass" aria-label="Search" />
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