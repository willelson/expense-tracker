import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

import { transaction, action } from '../context/AppReducer';

interface globalContextType {
  transactions: transaction[];
  error: string | null;
  loading: boolean;
  dispatch: React.Dispatch<action>;
}

const initialState = {
  transactions: [],
  error: null,
  loading: true,
  dispatch: () => {}
};

export const GlobalContext = createContext<globalContextType>(initialState);

interface props {
  children: React.ReactNode;
}

export const GlobalProvider = ({ children }: props) => {
  const [{ transactions, error, loading }, dispatch] = useReducer(
    AppReducer,
    initialState
  );

  return (
    <GlobalContext.Provider value={{ transactions, dispatch, error, loading }}>
      {children}
    </GlobalContext.Provider>
  );
};
