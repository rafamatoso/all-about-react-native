import React, { createContext, useState } from 'react';

export const initialState: any = {
  loading: {
    show: true,
  },
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }: any) => {
  const [loading, setLoading] = useState(initialState.loading);

  const setLoadingScreen = (show: boolean) => setLoading({ show });

  return (
    <GlobalContext.Provider
      value={{
        loading,
        setLoadingScreen,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
