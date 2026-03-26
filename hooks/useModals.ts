import { useState } from 'react';
import type { ReactNode } from 'react';

export const useModals = () => {
  const [animationModalConfig, setAnimationModalConfig] = useState<{
    isOpen: boolean;
    content: ReactNode | null;
    title: string;
  }>({ isOpen: false, content: null, title: '' });

  const [isTutorialsModalOpen, setIsTutorialsModalOpen] = useState(false);
  const [isReferencesModalOpen, setIsReferencesModalOpen] = useState(false);
  const [isExercisesModalOpen, setIsExercisesModalOpen] = useState(false);

  const openTutorialsModal = () => setIsTutorialsModalOpen(true);
  const closeTutorialsModal = () => setIsTutorialsModalOpen(false);

  const openReferencesModal = () => setIsReferencesModalOpen(true);
  const closeReferencesModal = () => setIsReferencesModalOpen(false);

  const openExercisesModal = () => setIsExercisesModalOpen(true);
  const closeExercisesModal = () => setIsExercisesModalOpen(false);

  const closeAnimationModal = () => {
    setAnimationModalConfig({ isOpen: false, content: null, title: '' });
  };

  return {
    animationModalConfig,
    setAnimationModalConfig,
    isTutorialsModalOpen,
    openTutorialsModal,
    closeTutorialsModal,
    isReferencesModalOpen,
    openReferencesModal,
    closeReferencesModal,
    isExercisesModalOpen,
    openExercisesModal,
    closeExercisesModal,
    closeAnimationModal
  };
};
