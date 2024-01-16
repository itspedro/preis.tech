'use client'

import { useState, useEffect } from 'react';

function usePersistedState(key: string, initialState: any) {
  if (typeof window === 'undefined') {
    throw new Error('usePersistedState must be used on the client side.');
  }
  const isClient = typeof window !== 'undefined';

  const [state, setState] = useState(() => {
    if (isClient) {
      const storageValue = localStorage.getItem(key);
      if (storageValue) {
        const storageObj = JSON.parse(storageValue);
        const storageKeys = Object.keys(storageObj.colors).sort();
        const initialKeys = Object.keys(initialState.colors).sort();
        if (JSON.stringify(storageKeys) !== JSON.stringify(initialKeys)) {
          localStorage.removeItem(key);
          return initialState;
        }
        return JSON.parse(storageValue);
      }
    }
    return initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default usePersistedState;
