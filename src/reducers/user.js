import { SET_EMAIL, SET_PASSWORD, SET_NAME } from '../actions';

const INITIAL_USER = {
  email: '',
  password: '',
  name: '',
};

const user = (state = INITIAL_USER, { type, payload }) => {
  switch (type) {
  case SET_EMAIL:
    return { ...state, email: payload.email };

  case SET_PASSWORD:
    return { ...state, password: payload.password };

  case SET_NAME:
    return { ...state, name: payload.name };

  default:
    return state;
  }
};

export default user;
