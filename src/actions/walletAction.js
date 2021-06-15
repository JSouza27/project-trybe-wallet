import fecthEconomyApi from '../service/ economyApi';
import {
  DELETE_EXPENSES,
  ENABLE_EDIT,
  SAVE_CURRENCIES,
  SAVE_EDIT_EXPENSES,
  SAVE_EXPENSES } from '.';

export const saveCoins = (api) => ({
  type: SAVE_CURRENCIES,
  payload: api,
});

export const saveExpenses = (obj) => ({
  type: SAVE_EXPENSES,
  payload: obj,
});

export const deleteExpenses = (newExpenses) => ({
  type: DELETE_EXPENSES,
  payload: newExpenses,
});

export const enableEdit = (filter) => ({
  type: ENABLE_EDIT,
  payload: {
    edit: filter,
    enableEdit: true,
  },
});

export const saveEdit = (obj) => ({
  type: SAVE_EDIT_EXPENSES,
  payload: obj,
});

export const getInfoApi = () => async (dispatch) => {
  const result = await fecthEconomyApi();
  delete result.USDT;
  const valuesResult = Object.keys(result);

  return dispatch(saveCoins(valuesResult));
};

export const stateDispatch = (state) => async (dispatch) => {
  const result = await fecthEconomyApi();
  delete result.USDT;

  const newState = state;
  newState.exchangeRates = result;

  return dispatch(saveExpenses(newState));
};
