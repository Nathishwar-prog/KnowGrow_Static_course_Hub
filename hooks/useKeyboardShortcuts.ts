import { useEffect } from 'react';
import type { TutorialTopic } from '../types';

interface ScThemeShortcutsProps {
  prevTopic: TutorialTopic | null;
  nextTopic: TutorialTopic | null;
  activeView: string;
  handleTopicSelect: (id: string) => void;
}

export const useKeyboardShortcuts = ({
  prevTopic,
  nextTopic,
  activeView,
  handleTopicSelect
}: ScThemeShortcutsProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
        if (e.key === 'Escape') {
          (e.target as HTMLElement).blur();
        }
        return;
      }

      if (e.key === 'ArrowLeft' && prevTopic && activeView === 'tutorial') {
        handleTopicSelect(prevTopic.id);
      } else if (e.key === 'ArrowRight' && nextTopic && activeView === 'tutorial') {
        handleTopicSelect(nextTopic.id);
      } else if (e.key === '/') {
        e.preventDefault();
        const searchInput = document.querySelector('input[type="search"]') as HTMLInputElement;
        searchInput?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prevTopic, nextTopic, activeView, handleTopicSelect]);
};
