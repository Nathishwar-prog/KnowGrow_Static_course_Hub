import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { SidebarSection } from '../types';
import { useParams } from 'react-router-dom';
import { useProgress } from '../context/useProgress';
import { ChevronDown } from 'lucide-react';

interface SidebarProps {
  sections: SidebarSection[];
  activeTopicId: string;
  onTopicSelect: (id: string) => void;
  searchQuery: string;
  isOpen?: boolean;
  setIsOpen?: (val: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ sections, activeTopicId, onTopicSelect, searchQuery, isOpen = true, setIsOpen }) => {
  const { courseId = 'html' } = useParams<{ courseId: string }>();
  const { completedTopics } = useProgress(courseId);
  const [collapsedSections, setCollapsedSections] = useState<Set<string>>(new Set());

  const toggleSection = (title: string) => {
    setCollapsedSections(prev => {
      const next = new Set(prev);
      if (next.has(title)) next.delete(title);
      else next.add(title);
      return next;
    });
  };

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
    <>
    <aside role="navigation" aria-label="Tutorial topics" className={`bg-white/60 dark:bg-[#0d1117] backdrop-blur-xl h-screen-minus-nav sticky top-[60px] overflow-y-auto hidden md:block border-r border-slate-200/60 dark:border-slate-800/30 hide-scrollbar transition-all duration-300 relative ${isOpen ? 'w-64' : 'w-0 border-r-0'}`}>
      <div className={`p-4 pb-20 w-64 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        {/* Course Progress Mini-Bar */}
        {!searchQuery && stats.total > 0 && (
          <div className="mb-8 px-3 pt-2">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 dark:text-slate-500">Course Progress</span>
              <span className="text-[10px] font-black text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-900/40 px-1.5 py-0.5 rounded">{stats.percentage}%</span>
            </div>
            <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${stats.percentage}%` }}
                className="h-full bg-gradient-to-r from-brand-600 to-indigo-500 rounded-full"
              />
            </div>
          </div>
        )}

        {searchQuery && sections.length === 0 ? (
          <div className="text-center text-slate-400 dark:text-slate-500 p-4 mt-8">
            <div className="text-4xl mb-4 opacity-50">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <p className="font-bold">No results found.</p>
            <p className="text-sm">Try a different search term.</p>
          </div>
        ) : (
          sections.map((section, index) => {
            const sectionCompleted = section.topics.filter(t => completedTopics.has(t.id)).length;
            const isCollapsed = collapsedSections.has(section.title);
            
            return (
              <div key={section.title} className={index > 0 ? 'mt-6' : 'mt-2'}>
                <button 
                  onClick={() => toggleSection(section.title)}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group"
                >
                  <h3 className="font-black text-[10px] uppercase tracking-[0.15em] text-slate-400 dark:text-slate-500 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors">{section.title}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] font-bold text-slate-300 dark:text-slate-600">{sectionCompleted}/{section.topics.length}</span>
                    <ChevronDown className={`w-3 h-3 text-slate-300 dark:text-slate-600 transition-transform duration-200 ${isCollapsed ? '-rotate-90' : ''}`} />
                  </div>
                </button>
                
                <AnimatePresence initial={false}>
                  {!isCollapsed && (
                    <motion.ul 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-0.5 overflow-hidden mt-1"
                    >
                      {section.topics.map(topic => {
                        const isActive = activeTopicId === topic.id;
                        const isDone = completedTopics.has(topic.id);
                        return (
                          <li key={topic.id}>
                            <a
                              href={`#${topic.id}`}
                              onClick={(e) => {
                                e.preventDefault();
                                onTopicSelect(topic.id);
                              }}
                              className={`block py-2 px-3 text-[13px] rounded-xl transition-all duration-200 flex items-center justify-between group/item relative ${
                                isActive
                                  ? 'bg-brand-50 dark:bg-brand-900/20 text-brand-700 dark:text-brand-300 font-bold'
                                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/40 hover:text-slate-900 dark:hover:text-slate-200'
                              }`}
                              aria-current={isActive ? 'page' : undefined}
                            >
                              {/* Active left accent bar */}
                              {isActive && (
                                <motion.div 
                                  layoutId="sidebar-active-indicator"
                                  className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 bg-brand-500 rounded-r-full"
                                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                />
                              )}
                              <span className="truncate pr-2">{topic.title}</span>
                              {isDone && (
                                <i className={`fa-solid fa-check-circle text-[10px] shrink-0 ${isActive ? 'text-brand-400' : 'text-emerald-400'}`} title="Completed"></i>
                              )}
                            </a>
                          </li>
                        );
                      })}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            );
          })
        )}
      </div>
    </aside>
    {setIsOpen && (
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`hidden md:flex items-center justify-center fixed top-[100px] z-30 w-6 h-10 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-r-md shadow-sm text-slate-400 hover:text-brand-600 transition-all duration-300 ${isOpen ? 'left-64' : 'left-0'}`}
        aria-label="Toggle Sidebar"
      >
        <i className={`fa-solid ${isOpen ? 'fa-chevron-left' : 'fa-chevron-right'} text-xs`}></i>
      </button>
    )}
    </>
  );
};

export default Sidebar;