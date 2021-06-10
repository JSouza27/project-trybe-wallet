import fecthEconomyApi from '../service/ economyApi';
import { SAVE_COIN } from '.';

export const saveCoins = (api) => ({
  type: SAVE_COIN,
  payload: api,
});

// const BASE_URL_API = 'https://economia.awesomeapi.com.br/json/all';

export const getInfoApi = () => async (dispatch) => {
  // const response = await fetch(BASE_URL_API);
  // const result = await response.json();
  const result = await fecthEconomyApi();
  console.log(result, '-------------------------------------------------------');
  return dispatch(saveCoins(result));
};

// export const getInfoApi = () => (dispatch) => dispatch(saveCoins(infoApi));
