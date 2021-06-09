import { SET_EMAIL, SET_PASSWORD } from '../actions';

const INITIAL_USER = {
  email: '',
  password: '',
};

const user = (state = INITIAL_USER, { type, payload }) => {
  switch (type) {
  case SET_EMAIL:
    return { ...state, email: payload.email };

  case SET_PASSWORD:
    return { ...state, password: payload.password };

  default:
    return state;
  }
};

export default user;
