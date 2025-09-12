import React from 'react';

const LoadingSpinner: React.FC = () => {
  const know = "Know".split('');
  const grow = "Grow".split('');

  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-center">
        <div className="text-5xl font-bold text-gray-800 dark:text-white" aria-label="Loading KnowGrow">
          {know.map((letter, i) => (
            <span
              key={`know-${i}`}
              className="inline-block animate-fade-in-up-letter"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {letter}
            </span>
          ))}
          <span className="text-indigo-400">
            {grow.map((letter, i) => (
              <span
                key={`grow-${i}`}
                className="inline-block animate-fade-in-up-letter"
                style={{ animationDelay: `${(i + know.length) * 0.1}s` }}
              >
                {letter}
              </span>
            ))}
          </span>
        </div>
        <div className="loading-dots text-gray-500 dark:text-gray-400 mt-4 text-2xl" aria-label="Loading">
          <span style={{ animationDelay: '0s' }}>.</span>
          <span style={{ animationDelay: '0.1s' }}>.</span>
          <span style={{ animationDelay: '0.2s' }}>.</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;