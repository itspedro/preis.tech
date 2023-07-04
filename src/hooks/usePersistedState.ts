import { useState, useEffect } from 'react';

function usePersistedState(key: string, initialState: any) {

  const isClient = typeof window !== 'undefined';

  const [state, setState] = useState(() => {
    
    const storageValue = isClient && localStorage.getItem(key);

    if (storageValue) {
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