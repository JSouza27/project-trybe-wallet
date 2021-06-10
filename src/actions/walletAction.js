import fecthEconomyApi from '../service/ economyApi';
import { SAVE_COIN } from '.';

export const saveCoins = (api) => ({
  type: SAVE_COIN,
  payload: api,
});

export const getInfoApi = () => async (dispatch) => {
  const result = await fecthEconomyApi();
  return dispatch(saveCoins(result));
};
