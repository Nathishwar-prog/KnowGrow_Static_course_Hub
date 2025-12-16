import React from 'react';
import type { SidebarSection } from '../types';

interface SidebarProps {
  sections: SidebarSection[];
  activeTopicId: string;
  onTopicSelect: (id: string) => void;
  searchQuery: string;
}

const Sidebar: React.FC<SidebarProps> = ({ sections, activeTopicId, onTopicSelect, searchQuery }) => {
  return (
    <aside role="navigation" aria-label="Tutorial topics" className="bg-gray-50/80 dark:bg-gray-900/80 backdrop-blur-sm w-64 h-screen-minus-nav sticky top-[60px] overflow-y-auto hidden md:block border-r border-gray-200 dark:border-gray-800 hide-scrollbar transition-colors duration-300">
      <div className="p-4 pb-20">
        {searchQuery && sections.length === 0 ? (
          <div className="text-center text-gray-500 dark:text-gray-400 p-4 mt-8">
            <div className="text-4xl mb-4 opacity-50">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <p className="font-bold">No results found.</p>
            <p className="text-sm">Try a different search term.</p>
          </div>
        ) : (
          sections.map((section, index) => (
            <div key={section.title} className={index > 0 ? 'mt-8' : 'mt-2'}>
              <h3 className="font-bold text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3 px-3">{section.title}</h3>
              <ul className="space-y-0.5">
                {section.topics.map(topic => (
                  <li key={topic.id}>
                    <a
                      href={`#${topic.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        onTopicSelect(topic.id);
                      }}
                      className={`block py-2 px-3 text-sm rounded-lg transition-all duration-200 ${activeTopicId === topic.id
                          ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium shadow-md transform scale-[1.02]'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-indigo-600 dark:hover:text-indigo-400'
                        }`}
                      aria-current={activeTopicId === topic.id ? 'page' : undefined}
                    >
                      {topic.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))
        )}
      </div>
    </aside>
  );
};

export default Sidebar;