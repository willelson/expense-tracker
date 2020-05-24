import { transaction, action } from '../context/AppReducer';
import axios from 'axios';

// action types
export const DELETE_TRANSACTION: string = 'DELETE_TRANSACTION';
export const ADD_TRANSACTION: string = 'ADD_TRANSACTION';
export const GET_TRANSACTIONS: string = 'GET_TRANSACTIONS';
export const TRANSACTION_ERROR: string = 'TRANSACTION_ERROR';

export function deleteTransaction(id: number): any {
  return {
    type: 'DELETE_TRANSACTION',
    payload: id
  };
}

export function addTransaction(transaction: transaction): any {
  return {
    type: 'ADD_TRANSACTION',
    payload: transaction
  };
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
