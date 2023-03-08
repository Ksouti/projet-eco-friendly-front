/* eslint-disable brace-style */
import axios from 'axios';
import {
  USER_LOGIN,
  userAuthenticationSuccess,
  USER_REGISTER,
  userRegisterSuccess,
  userAuthenticationError,
} from '../actions/user';

import config from '../config';

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case USER_LOGIN:
      axios
        .post(`${config.apiBaseUrl}/login_check`, {
          username: store.getState().user.email,
          password: store.getState().user.password,
        })
        .then((response) => {
          sessionStorage.setItem('user', JSON.stringify(response.data.user));
          store.dispatch(userAuthenticationSuccess(response.data.user));
        })
        .catch((error) => {
          store.dispacth(userAuthenticationError(error));
        });
      break;
    case USER_REGISTER:
      axios
        .post(`${config.apiBaseUrl}/register`, {
          email: store.getState().user.email,
          password: store.getState().user.password,
          nickname: store.getState().user.nickname,
          firstname: store.getState().user.firstname,
          lastname: store.getState().user.lastname,
        })
        .then((response) => {
          store.dispatch(userRegisterSuccess(response.data));
        })
        .catch((error) => {
          store.dispacth(userAuthenticationError(error));
        });
      break;
    default:
  }
  next(action);
};

export default userMiddleware;
