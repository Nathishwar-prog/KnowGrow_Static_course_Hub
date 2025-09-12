import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme] = useState<Theme>('dark'); // Always dark

  useEffect(() => {
    // This effect ensures the class is set and updates localStorage.
    const root = window.document.documentElement;
    if (!root.classList.contains('dark')) {
      root.classList.add('dark');
    }
    localStorage.setItem('theme', 'dark');
  }, []);

  const toggleTheme = () => {
    // Do nothing, as the theme is permanently dark.
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};