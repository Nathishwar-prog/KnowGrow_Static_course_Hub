import React, { useEffect, useState } from 'react';

interface AnimationModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const AnimationModal: React.FC<AnimationModalProps> = ({ isOpen, onClose, title, children }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // request a frame to ensure the component is mounted before adding the open class
      requestAnimationFrame(() => {
        setShow(true);
      });
    } else {
      setShow(false);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            onClose();
        }
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
    <div role="dialog" aria-modal="true" aria-labelledby="animation-modal-title" className="fixed inset-0 z-50">
      <div
        className={`modal-backdrop ${show ? 'modal-backdrop-open' : ''}`}
        onClick={onClose}
      ></div>
      <div className={`modal-content ${show ? 'modal-content-open' : ''}`}>
        <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 id="animation-modal-title" className="text-2xl font-bold text-indigo-500">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors"
            aria-label="Close animation modal"
          >
            <i className="fa-solid fa-times text-2xl"></i>
          </button>
        </div>
        <div className="p-6 overflow-y-auto flex-1">{children}</div>
      </div>
    </div>
  );
};

export default AnimationModal;