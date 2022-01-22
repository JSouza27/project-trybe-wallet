import { SET_EMAIL, SET_PASSWORD, SET_NAME } from '.';

export const setEmailAction = (email) => ({
  type: SET_EMAIL,
  payload: { email },
});

export const setPasswordAction = (password) => ({
  type: SET_PASSWORD,
  payload: { password },
});

export const setNameAction = (name) => ({
  type: SET_NAME,
  payload: { name },
});
