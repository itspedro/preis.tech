'use client';

import { useState, useEffect } from 'react';

function usePersistedState<T>(key: string, initialState: T) {
  const [state, setState] = useState<T>(initialState);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    let storageValue = localStorage.getItem(key);
    if (storageValue) setState(JSON.parse(storageValue));
  }, [key]);

  const updateLocalStorage = (state: T) => {
    setState(state);
    localStorage.setItem(key,JSON.stringify(state));
  }

  return {
    state,
    updateLocalStorage
  };
}

export default usePersistedState;
