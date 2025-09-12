import React from 'react';
import type { SidebarSection } from '../types';

interface SidebarProps {
  sections: SidebarSection[];
  activeTopicId: string;
  onTopicSelect: (id: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ sections, activeTopicId, onTopicSelect }) => {
  return (
    <aside role="navigation" aria-label="Tutorial topics" className="bg-white dark:bg-gray-800 w-64 h-screen-minus-nav sticky top-[112px] overflow-y-auto hidden md:block border-r border-gray-200 dark:border-gray-700">
      <div className="p-4">
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
                      onTopicSelect(topic.id);
                    }}
                    className={`block py-2 px-3 text-sm rounded-md transition-colors duration-150 ${
                      activeTopicId === topic.id
                        ? 'bg-indigo-600 text-white font-bold'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-700 hover:text-indigo-700 dark:hover:text-white'
                    }`}
                    aria-current={activeTopicId === topic.id ? 'page' : undefined}
                  >
                    {topic.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;