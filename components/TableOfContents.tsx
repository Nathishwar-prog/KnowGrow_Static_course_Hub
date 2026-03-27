import React from 'react';
import { useTableOfContents } from '../hooks/useTableOfContents';
import { motion, AnimatePresence } from 'framer-motion';
import { List } from 'lucide-react';

interface TableOfContentsProps {
  topicDependency: any;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ topicDependency }) => {
  const { headings, activeId } = useTableOfContents(topicDependency);

  if (headings.length === 0) {
    return null;
  }

  return (
    <div className="sticky top-24 pt-4 pb-8 h-fit max-h-[calc(100vh-10rem)] overflow-y-auto hide-scrollbar group/toc">
      <div className="flex items-center gap-2 mb-6 px-4">
        <List className="w-4 h-4 text-brand-500" />
        <h4 className="font-display font-black text-[10px] uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
          On This Page
        </h4>
      </div>
      
      <nav className="flex flex-col relative px-4">
        {/* Continuous track line */}
        <div className="absolute left-4 top-0 bottom-0 w-[1px] bg-slate-200 dark:bg-slate-800 rounded-full" />

        {headings.map((heading) => {
          const isActive = activeId === heading.id;
          return (
            <motion.a
              key={heading.id}
              href={`#${heading.id}`}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById(heading.id);
                if (element) {
                  const yOffset = -100; // Offset for header
                  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }
              }}
              className={`relative block py-2 transition-all duration-300 group/item ${
                heading.level === 3 ? 'pl-8' : 'pl-6'
              } ${
                isActive
                  ? 'text-brand-600 dark:text-brand-400 font-bold'
                  : 'text-slate-500 dark:text-slate-500 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              {/* Active Dot indicator on the track */}
              <div className={`absolute left-[-1.5px] top-1/2 -translate-y-1/2 w-[4px] h-[4px] rounded-full transition-all duration-500 ${
                isActive 
                ? 'bg-brand-500 scale-150 ring-4 ring-brand-500/20' 
                : 'bg-transparent group-hover/item:bg-slate-300 dark:group-hover/item:bg-slate-700'
              }`} />

              <span className={`text-[13px] leading-tight block ${isActive ? 'translate-x-1' : 'group-hover/item:translate-x-0.5'} transition-transform`}>
                {heading.text}
              </span>
            </motion.a>
          );
        })}
      </nav>
    </div>
  );
};

export default TableOfContents;
