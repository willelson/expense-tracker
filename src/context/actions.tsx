import { transaction } from './AppReducer';

// action types
export const DELETE_TRANSACTION: string = 'DELETE_TRANSACTION';
export const ADD_TRANSACTION: string = 'ADD_TRANSACTION';

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
