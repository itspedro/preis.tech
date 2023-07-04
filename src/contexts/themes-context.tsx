'use client';

import { ThemeProvider } from 'styled-components';
import { lightTheme } from '@/styles/themes/light';
import { darkTheme } from '@/styles/themes/dark';

import usePersistedState from '@/hooks/usePersistedState';
import { createContext } from 'react';


export const ThemeContext = createContext({
  theme: lightTheme.title,
  toggleTheme: () => {}
});

interface ThemeProviderWrapperProps {
  children: React.ReactNode;
};

export function ThemeProviderWrapper({ children }: ThemeProviderWrapperProps) {

  const [theme, setTheme] = usePersistedState('theme', lightTheme);

  function toggleTheme() {
    setTheme(theme.title === 'light' ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={theme.colors}>
      <ThemeContext.Provider value={{ theme: theme.title, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};