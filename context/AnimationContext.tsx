import React, { createContext, useContext } from 'react';

export interface AnimationOptions {
  animationId: string;
  title?: string;
  props?: Record<string, any>;
}

interface AnimationContextType {
  openAnimationPage: (options: AnimationOptions) => void;
}

const AnimationContext = createContext<AnimationContextType | undefined>(undefined);

export const AnimationProvider = AnimationContext.Provider;

export const useAnimation = (): AnimationContextType => {
  const context = useContext(AnimationContext);
  if (!context) {
    throw new Error('useAnimation must be used within an AnimationProvider');
  }
  return context;
};