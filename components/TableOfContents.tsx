import React from 'react';
import { useTableOfContents } from '../hooks/useTableOfContents';
import { motion } from 'framer-motion';

interface TableOfContentsProps {
  topicDependency: any;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ topicDependency }) => {
  const { headings, activeId } = useTableOfContents(topicDependency);

  if (headings.length === 0) {
    return null;
  }

  return (
    <div className="sticky top-24 pt-4 pb-8 max-h-[calc(100vh-8rem)] overflow-y-auto custom-scrollbar">
      <h4 className="font-bold text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4 px-2">
        On This Page
      </h4>
      <nav className="flex flex-col space-y-1 relative">
        {/* Left border line */}
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 rounded-full" />

        {headings.map((heading) => {
          const isActive = activeId === heading.id;
          return (
            <motion.a
              key={heading.id}
              href={`#${heading.id}`}
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById(heading.id);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className={`relative block py-1.5 pr-3 text-sm transition-all duration-200 ${
                heading.level === 3 ? 'pl-6' : 'pl-4'
              } ${
                isActive
                  ? 'text-indigo-600 dark:text-indigo-400 font-semibold'
                  : 'text-gray-600 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-300'
              }`}
            >
              {/* Active Indicator indicator */}
              {isActive && (
                <motion.div
                  layoutId="active-toc-indicator"
                  className="absolute left-[-1px] top-0 bottom-0 w-1 bg-indigo-600 dark:bg-indigo-400 rounded-r-md"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              {heading.text}
            </motion.a>
          );
        })}
      </nav>
    </div>
  );
};

export default TableOfContents;
