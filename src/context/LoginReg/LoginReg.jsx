import React, { createContext, useState } from 'react';

export const LoginRegContext = createContext('login');

export const LoginRegProvider = ({ children }) => {
  // check if value login or register
  const [value, setValue] = useState('login');

  return (
    <LoginRegContext.Provider value={{ value, setValue }}>
      {children}
    </LoginRegContext.Provider>
  );
};
