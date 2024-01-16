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

  const {state, updateLocalStorage} = usePersistedState('theme', darkTheme);

  function toggleTheme() {
    updateLocalStorage(state.title === 'light' ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={state.colors}>
      <ThemeContext.Provider value={{ themeTitle: state.title, toggleTheme }}>
        {children}
        <GlobalStyles />
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};