import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

import { transaction } from '../context/AppReducer';
import { deleteTransaction } from '../context/actions';

interface props {
  transaction: transaction;
}

export const Transaction: React.FunctionComponent<props> = (props: props) => {
  const { dispatch } = useContext(GlobalContext);
  const { transaction } = props;
  const sign = transaction.amount < 0 ? '-' : '+';
  return (
    <div>
      <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
        {transaction.text}{' '}
        <span>
          {sign}£{Math.abs(transaction.amount)}
        </span>
        <button
          className='delete-btn'
          onClick={() => dispatch(deleteTransaction(transaction.id))}
        >
          x
        </button>
      </li>
    </div>
  );
};
