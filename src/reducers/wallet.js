import {
  DELETE_EXPENSES,
  ENABLE_EDIT,
  SAVE_CURRENCIES,
  SAVE_EDIT_EXPENSES,
  SAVE_EXPENSES } from '../actions';

const INITIAL_WALLET = {
  currencies: [],
  expenses: [],
  enableEdit: false,
  edit: {},
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

  case SAVE_EDIT_EXPENSES:
    return {
      ...state,
      expenses: payload,
      enableEdit: false,
      edit: {},
    };

  case DELETE_EXPENSES:
    return {
      ...state,
      expenses: payload,
    };

  case ENABLE_EDIT:
    return {
      ...state,
      enableEdit: payload.enableEdit,
      edit: payload.edit,
    };

  default:
    return state;
  }
};

export default wallet;
