import React, { createContext, useContext } from 'react';

const ResetStateContext = createContext();

const ResetStateProvider = ({ resetters, children }) => {
  return (
    <ResetStateContext.Provider value={resetters}>
      {children}
    </ResetStateContext.Provider>
  );
};

export const useResetters = () => {
  const context = useContext(ResetStateContext);
  if (context === undefined)
    throw new Error('useResetters must be called within the coresponding provider component');
    
  return context;
};

export default ResetStateProvider;
