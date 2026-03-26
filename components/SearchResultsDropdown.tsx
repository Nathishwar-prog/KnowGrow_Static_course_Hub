import React from 'react';
import type { RankedSearchResult } from '../hooks/useGlobalSearch';
import Highlighter from './Highlighter';
import { motion, AnimatePresence } from 'framer-motion';

interface SearchResultsDropdownProps {
  results: RankedSearchResult[];
  onSelect: (id: string) => void;
  searchQuery: string;
}

const SearchResultsDropdown: React.FC<SearchResultsDropdownProps> = ({ results, onSelect, searchQuery }) => {
  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0, y: -10, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -10, scale: 0.98 }}
        transition={{ duration: 0.15, ease: "easeOut" }}
        className="absolute top-full mt-3 w-96 max-h-[500px] overflow-y-auto bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 z-50 p-2 custom-scrollbar"
      >
        {results.length > 0 ? (
          <ul className="space-y-1">
            {results.map(({ topic, snippet }, index) => (
              <motion.li 
                key={topic.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.15, delay: index * 0.03 }}
              >
                <button
                  onClick={() => onSelect(topic.id)}
                  className="w-full text-left px-4 py-3 rounded-xl hover:bg-indigo-50 dark:hover:bg-indigo-900/30 group transition-all duration-200 border border-transparent hover:border-indigo-100 dark:hover:border-indigo-800/50 flex flex-col items-start gap-1"
                >
                  <div className="flex items-center space-x-2 text-indigo-600 dark:text-indigo-400 group-hover:text-indigo-700 dark:group-hover:text-indigo-300 transition-colors">
                    <i className="fa-solid fa-book-open text-xs opacity-70"></i>
                    <span className="font-bold text-gray-900 dark:text-gray-100 block truncate group-hover:text-indigo-700 dark:group-hover:text-indigo-300">
                      <Highlighter query={searchQuery}>{topic.title}</Highlighter>
                    </span>
                  </div>
                  {snippet && (
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-2 leading-relaxed opacity-90 group-hover:opacity-100">
                      <Highlighter query={searchQuery}>{snippet}</Highlighter>
                    </p>
                  )}
                </button>
              </motion.li>
            ))}
          </ul>
        ) : (
          <div className="p-10 flex flex-col items-center justify-center text-gray-500 dark:text-gray-400 space-y-3">
            <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-2">
               <i className="fa-solid fa-magnifying-glass text-gray-400 text-xl"></i>
            </div>
            <p className="text-gray-900 dark:text-gray-100 font-semibold">No matches found</p>
            <p className="text-sm text-center">We couldn't find anything matching "<span className="text-indigo-500 font-medium">{searchQuery}</span>". Try another term.</p>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default SearchResultsDropdown;