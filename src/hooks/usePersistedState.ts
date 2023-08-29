import { useState, useEffect } from 'react';

function usePersistedState(key: string, initialState: any) {

  const isClient = typeof window !== 'undefined';

  const [state, setState] = useState(() => {
    const storageValue = isClient && localStorage.getItem(key);

    if (storageValue) {
      const storageObj = JSON.parse(storageValue);
      const storageKeys = Object.keys(storageObj.colors).sort();
      const initialKeys = Object.keys(initialState.colors).sort();
      if(JSON.stringify(storageKeys) !== JSON.stringify(initialKeys)){
        return localStorage.removeItem(key);
      };
      return JSON.parse(storageValue);
    };
    return initialState;
  });
  
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state]);

  return [state, setState];

};

export default usePersistedState;