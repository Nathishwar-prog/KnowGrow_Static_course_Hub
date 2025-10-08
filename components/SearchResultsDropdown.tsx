import React from 'react';
import type { RankedSearchResult } from '../App';
import Highlighter from './Highlighter';

interface SearchResultsDropdownProps {
    results: RankedSearchResult[];
    onSelect: (id: string) => void;
    searchQuery: string;
}

const SearchResultsDropdown: React.FC<SearchResultsDropdownProps> = ({ results, onSelect, searchQuery }) => {
    return (
        <div className="absolute top-full mt-2 w-80 max-h-96 overflow-y-auto bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 z-50">
            {results.length > 0 ? (
                <ul>
                    {results.map(({ topic, snippet }) => (
                        <li key={topic.id}>
                            <button
                                onClick={() => onSelect(topic.id)}
                                className="w-full text-left px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                            >
                                <span className="font-semibold text-gray-800 dark:text-gray-100 block truncate">
                                    <Highlighter query={searchQuery}>{topic.title}</Highlighter>
                                </span>
                                {snippet && (
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 truncate">
                                        <Highlighter query={searchQuery}>{snippet}</Highlighter>
                                    </p>
                                )}
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <div className="p-4 text-center text-gray-500 dark:text-gray-400">
                    <p>No results for "{searchQuery}"</p>
                </div>
            )}
        </div>
    );
};

export default SearchResultsDropdown;