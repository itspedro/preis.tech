'use client';

import { useState, useEffect } from 'react';
import { getCookie, setCookie } from 'cookies-next';

function usePersistedState<T>(key: string, initialState: T) {
  const [state, setState] = useState<T>(initialState);

  useEffect(() => {
    if (typeof window === 'undefined') return
    const storageValue = getCookie(key);

    if (storageValue) {
      setState(JSON.parse(storageValue));
    }
  }, [key]);

  const updateLocalStorage = (state: T) => {
    setCookie(key, JSON.stringify(state));
    setState(state);
  }

  return {
    state,
    updateLocalStorage
  };
}

export default usePersistedState;
