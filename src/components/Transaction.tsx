import React from 'react';

import { transaction } from '../context/AppReducer';

interface props {
  transaction: transaction;
}

export const Transaction: React.SFC<props> = (props) => {
  const { transaction } = props;
  const sign = transaction.amount < 0 ? '-' : '+';
  return (
    <div>
      <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
        {transaction.text}{' '}
        <span>
          {sign}£{Math.abs(transaction.amount)}
        </span>
        <button className='delete-btn'>x</button>
      </li>
    </div>
  );
};
