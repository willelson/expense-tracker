import React, { useState, useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';
import { addTransaction } from '../context/actions';
import { transaction } from '../context/AppReducer';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const { dispatch } = useContext(GlobalContext);

  const onSubmit = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();

    const newTransaction: transaction = {
      id: Math.floor(Math.random() * 1000000000),
      text,
      amount
    };

    if (text && amount) {
      dispatch(addTransaction(newTransaction));
      setText('');
      setAmount(0);
    }
  };

  return (
    <div onSubmit={onSubmit}>
      <h3>Add new transaction</h3>
      <form id='form'>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input
            type='text'
            value={text}
            id='text'
            onChange={(e) => setText(e.target.value)}
            placeholder='Enter text...'
          />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type='number'
            value={amount ? amount : ''}
            step='0.01'
            id='amount'
            onChange={(e) => setAmount(parseFloat(e.target.value))}
            placeholder='Enter amount...'
          />
        </div>
        <button className={`btn ${text && amount ? 'active' : ''}`}>
          Add transaction
        </button>
      </form>
    </div>
  );
};
