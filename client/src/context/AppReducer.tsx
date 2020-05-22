import { DELETE_TRANSACTION, ADD_TRANSACTION } from './actions';

export interface action {
  type: string;
  payload: any;
}

interface state {
  transactions: Array<transaction>;
}

export interface transaction {
  id: number;
  text: string;
  amount: number;
}

export default (state: state, action: action) => {
  switch (action.type) {
    case DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        )
      };
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [action.payload, ...state.transactions]
      };
    default:
      return state;
  }
};
