'use client';

import { ThemeProvider } from 'styled-components';
import { lightTheme } from '@/styles/themes/light';
import { darkTheme } from '@/styles/themes/dark';
import usePersistedState from '@/hooks/usePersistedState';
import { createContext } from 'react';
import { GlobalStyles } from '@/styles/ThemeConfiig';


export const ThemeContext = createContext({
  themeTitle: lightTheme.title,
  toggleTheme: () => {}
});

interface ThemeProviderWrapperProps {
  children: React.ReactNode;
};

export function ThemeProviderWrapper({ children }: ThemeProviderWrapperProps) {

  const [theme, setTheme] = usePersistedState('theme', darkTheme);

  function toggleTheme() {
    setTheme(theme.title === 'light' ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={theme.colors}>
      <ThemeContext.Provider value={{ themeTitle: theme.title, toggleTheme }}>
        {children}
        <GlobalStyles />
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};