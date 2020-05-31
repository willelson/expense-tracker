import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

import { transaction } from '../context/AppReducer';
import { deleteTransaction } from '../context/actions';
import { displayAmount } from '../utils/format';

interface props {
  transaction: transaction;
}

export const Transaction: React.FunctionComponent<props> = (props: props) => {
  const { dispatch } = useContext(GlobalContext);
  const { transaction } = props;

  return (
    <div>
      <li
        className={`${
          transaction.amount < 0 ? 'minus' : 'plus'
        } transaction-text`}
      >
        {transaction.text} <span>{displayAmount(transaction.amount)}</span>
        <button
          className='delete-btn'
          onClick={() => dispatch(deleteTransaction(transaction._id))}
        >
          x
        </button>
      </li>
    </div>
  );
};
