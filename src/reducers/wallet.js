import { SAVE_COIN } from '../actions';

const INITIAL_WALLET = {
  coins: [],
};

const wallet = (state = INITIAL_WALLET, action) => {
  switch (action.type) {
  case SAVE_COIN:
    return {
      ...state,
      coins: action.payload,
    };

  default:
    return state;
  }
};

export default wallet;
