import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

import { transaction, action } from '../context/AppReducer';

interface globalContextType {
  transactions: transaction[];
  dispatch: React.Dispatch<action>;
}

const initialState = {
  transactions: [
    { id: 1, text: 'Flower', amount: -20 },
    { id: 2, text: 'Salary', amount: 300 },
    { id: 3, text: 'Book', amount: -10 },
    { id: 4, text: 'Camera', amount: 150 }
  ],
  dispatch: () => {}
};

export const GlobalContext = createContext<globalContextType>(initialState);

interface props {
  children: React.ReactNode;
}

export const GlobalProvider = ({ children }: props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider
      value={{ transactions: state.transactions, dispatch }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
