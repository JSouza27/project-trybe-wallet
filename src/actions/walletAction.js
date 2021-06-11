import fecthEconomyApi from '../service/ economyApi';
import { SAVE_CURRENCIES, SAVE_EXPENSES } from '.';

export const saveCoins = (api) => ({
  type: SAVE_CURRENCIES,
  payload: api,
});

export const saveExpenses = (obj) => ({
  type: SAVE_EXPENSES,
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
