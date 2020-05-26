import {
  DELETE_TRANSACTION,
  ADD_TRANSACTION,
  GET_TRANSACTIONS,
  TRANSACTION_ERROR
} from './actions';

export interface action {
  type: string;
  payload: any;
}

interface state {
  transactions: Array<transaction>;
  error: null;
  loading: boolean;
}

export interface transaction {
  _id: string;
  text: string;
  amount: number;
}

export default (state: state, action: action) => {
  switch (action.type) {
    case GET_TRANSACTIONS:
      return {
        ...state,
        loading: false,
        transactions: action.payload
      };
    case DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction._id !== action.payload
        )
      };
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [...state.transactions, action.payload]
      };
    case TRANSACTION_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
