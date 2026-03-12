import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import type { SidebarSection } from '../types';
import { useParams } from 'react-router-dom';
import { useProgress } from '../context/useProgress';

interface SidebarProps {
  sections: SidebarSection[];
  activeTopicId: string;
  onTopicSelect: (id: string) => void;
  searchQuery: string;
}

const Sidebar: React.FC<SidebarProps> = ({ sections, activeTopicId, onTopicSelect, searchQuery }) => {
  const { courseId = 'html' } = useParams<{ courseId: string }>();
  const { completedTopics } = useProgress(courseId);

  const stats = useMemo(() => {
    const total = sections.reduce((acc, s) => acc + s.topics.length, 0);
    const completed = Array.from(completedTopics).filter(id => 
      sections.some(s => s.topics.some(t => t.id === id))
    ).length;
    return {
      total,
      completed,
      percentage: total > 0 ? Math.round((completed / total) * 100) : 0
    };
  }, [sections, completedTopics]);

  return (
    <aside role="navigation" aria-label="Tutorial topics" className="bg-gray-50/80 dark:bg-gray-900/80 backdrop-blur-sm w-64 h-screen-minus-nav sticky top-[60px] overflow-y-auto hidden md:block border-r border-gray-200 dark:border-gray-800 hide-scrollbar transition-colors duration-300">
      <div className="p-4 pb-20">
        {/* Course Progress Mini-Bar */}
        {!searchQuery && stats.total > 0 && (
          <div className="mb-8 px-3">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Course Progress</span>
              <span className="text-[10px] font-black text-brand-600 bg-brand-50 dark:bg-brand-900/40 px-1.5 py-0.5 rounded">{stats.percentage}%</span>
            </div>
            <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${stats.percentage}%` }}
                className="h-full bg-gradient-to-r from-brand-600 to-indigo-500 rounded-full"
              />
            </div>
          </div>
        )}

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
                      className={`block py-2 px-3 text-sm rounded-lg transition-all duration-200 flex items-center justify-between group ${activeTopicId === topic.id
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium shadow-md transform scale-[1.02]'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-indigo-600 dark:hover:text-indigo-400'
                        }`}
                      aria-current={activeTopicId === topic.id ? 'page' : undefined}
                    >
                      <span className="truncate pr-2">{topic.title}</span>
                      {completedTopics.has(topic.id) && (
                        <i className={`fa-solid fa-check-circle text-xs shrink-0 ${activeTopicId === topic.id ? 'text-indigo-200' : 'text-green-500'}`} title="Completed"></i>
                      )}
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