import { useState, useEffect } from 'react';


function usePersistedState(key: string, initialState: any) {

  const isBrowser = typeof window !== 'undefined';

  const [state, setState] = useState(() => {
    if (!isBrowser) return initialState;

    const storageValue = localStorage.getItem(key);
    if (storageValue) {
      return JSON.parse(storageValue);
    } else {
      return initialState;
    }
  });
  
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state]);

  return [state, setState];

};

export default usePersistedState;