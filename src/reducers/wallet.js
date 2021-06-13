import { DELETE_EXPENSES, SAVE_CURRENCIES, SAVE_EXPENSES } from '../actions';

const INITIAL_WALLET = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_WALLET, { type, payload }) => {
  switch (type) {
  case SAVE_CURRENCIES:
    return {
      ...state,
      currencies: payload,
    };

  case SAVE_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, {
        id: state.expenses.length,
        ...payload,
      }],
    };

  case DELETE_EXPENSES:
    return {
      ...state,
      expenses: payload,
    };

  default:
    return state;
  }
};

export default wallet;
