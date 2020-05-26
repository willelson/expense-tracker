import React, { useContext, useEffect } from 'react';
import { Transaction } from './Transaction';
import { GlobalContext } from '../context/GlobalState';
import { getTransactions } from '../context/actions';

export const TransactionList = () => {
  const { transactions, dispatch } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions(dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h3>History</h3>
      <ul id='list' className='list'>
        {transactions.map((transaction) => (
          <Transaction key={transaction._id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};
