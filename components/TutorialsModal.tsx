import React, { useEffect, useState } from 'react';
import type { Course } from '../App';

interface TutorialsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCourseSelect: (course: Course) => void;
  onTopicSelect: (course: Course, topicId: string) => void;
}

const Section: React.FC<{ icon: string; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="flex-1 min-w-[200px]">
        <h3 className="text-lg font-bold text-gray-500 dark:text-gray-400 border-b-2 border-gray-200 dark:border-gray-700 pb-2 mb-4 flex items-center">
            <i className={`fa-solid ${icon} mr-3 text-indigo-400`}></i>
            {title}
        </h3>
        <div className="space-y-2">{children}</div>
    </div>
);

const ItemLink: React.FC<{ onClick: () => void; isNew?: boolean; children: React.ReactNode }> = ({ onClick, isNew, children }) => (
    <button onClick={onClick} className="w-full text-left flex items-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-700 transition-colors">
        {children}
        {isNew && <span className="ml-auto bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full animate-pulse">NEW</span>}
    </button>
);

const TutorialsModal: React.FC<TutorialsModalProps> = ({ isOpen, onClose, onCourseSelect, onTopicSelect }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => setShow(true));
    } else {
      setShow(false);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
        document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
        document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen && !show) return null;

  return (
    <div role="dialog" aria-modal="true" aria-labelledby="tutorials-modal-title" className="fixed inset-0 z-50">
      <div
        className={`modal-backdrop ${show ? 'modal-backdrop-open' : ''}`}
        onClick={onClose}
      ></div>
      <div className={`modal-content ${show ? 'modal-content-open' : ''}`}>
        <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 id="tutorials-modal-title" className="text-2xl font-bold text-gray-800 dark:text-white">Tutorials, Tools, and References</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <i className="fa-solid fa-times text-2xl"></i>
          </button>
        </div>
        <div className="p-6 overflow-y-auto flex-1">
            <div className="flex flex-col md:flex-row gap-8">
                <Section icon="fa-book" title="Tutorials">
                    <ItemLink onClick={() => onCourseSelect('html')}>HTML</ItemLink>
                    <ItemLink onClick={() => onCourseSelect('css')}>CSS</ItemLink>
                    <ItemLink onClick={() => onCourseSelect('js')}>JavaScript</ItemLink>
                    <ItemLink onClick={() => onCourseSelect('sql')} isNew>SQL</ItemLink>
                    <ItemLink onClick={() => onCourseSelect('python')} isNew>Python</ItemLink>
                </Section>
                <Section icon="fa-wrench" title="Tools & Utilities">
                    <ItemLink onClick={() => onTopicSelect('html', 'px_to_em_converter')}>PX to EM Converter</ItemLink>
                    <ItemLink onClick={() => onTopicSelect('html', 'keyboard_shortcuts')}>Keyboard Shortcuts</ItemLink>
                </Section>
                <Section icon="fa-clipboard-list" title="Cheatsheets">
                    <ItemLink onClick={() => onTopicSelect('html', 'html_tag_list')}>HTML Tag List</ItemLink>
                    <ItemLink onClick={() => onTopicSelect('css', 'css_selectors')}>CSS Selectors</ItemLink>
                    <ItemLink onClick={() => onTopicSelect('sql', 'sql_keywords')}>SQL Keywords</ItemLink>
                    <ItemLink onClick={() => onTopicSelect('html', 'html_events')}>HTML Events</ItemLink>
                </Section>
            </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialsModal;