import { transaction, action } from '../context/AppReducer';
import axios from 'axios';

interface Iconfig {
  headers: object;
}

// action types
export const DELETE_TRANSACTION: string = 'DELETE_TRANSACTION';
export const ADD_TRANSACTION: string = 'ADD_TRANSACTION';
export const GET_TRANSACTIONS: string = 'GET_TRANSACTIONS';
export const TRANSACTION_ERROR: string = 'TRANSACTION_ERROR';

export function deleteTransaction(id: string): any {
  try {
    axios.delete(`api/v1/transactions/${id}`);
    return {
      type: 'DELETE_TRANSACTION',
      payload: id
    };
  } catch (err) {
    return {
      type: TRANSACTION_ERROR,
      payload: err.response.data.error
    };
  }
}

export async function addTransaction(
  transaction: transaction,
  dispatch: React.Dispatch<action>
): Promise<any> {
  const config: Iconfig = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const postTransaction = {
    text: transaction.text,
    amount: transaction.amount
  };

  try {
    const res = await axios.post(
      'api/v1/transactions',
      postTransaction,
      config
    );
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: res.data.data
    });
  } catch (err) {
    dispatch({
      type: TRANSACTION_ERROR,
      payload: err.response.data.error
    });
  }
}

export async function getTransactions(
  dispatch: React.Dispatch<action>
): Promise<any> {
  try {
    const res = await axios.get('api/v1/transactions');
    dispatch({
      type: GET_TRANSACTIONS,
      payload: res.data.data
    });
  } catch (err) {
    dispatch({
      type: TRANSACTION_ERROR,
      payload: err.response.data.error
    });
  }
}
