import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { ANIMATION_MAP } from './data/html/animations';

const AnimationPage: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    const searchParams = new URLSearchParams(window.location.search);
    const animationId = searchParams.get('id');

    const activeAnimation = animationId ? ANIMATION_MAP[animationId] : null;
    const AnimationComponent = activeAnimation ? activeAnimation.component : null;
    
    const getTitle = () => {
        if (animationId === 'generic-code-animation') {
            return sessionStorage.getItem('animationTitle') || 'Live Example';
        }
        return activeAnimation?.title || 'Animation not found';
    };
    const title = getTitle();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 font-sans">
            <div className="w-full max-w-4xl bg-white dark:bg-gray-800 p-6 md:p-10 rounded-xl shadow-lg">
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
                    <h1 className="text-3xl font-bold text-indigo-500">{title}</h1>
                    <button
                        onClick={toggleTheme}
                        className="text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 p-3 rounded-full text-lg"
                        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                    >
                        <i className={theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon'}></i>
                    </button>
                </div>
                {AnimationComponent ? <AnimationComponent /> : <p>The requested animation could not be found.</p>}
            </div>
             <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
                You can close this tab to return to the tutorial.
             </p>
        </div>
    );
};


const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <AnimationPage />
    </ThemeProvider>
  </React.StrictMode>
);