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

import user from '../data/single-user'; // dev only

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case USER_LOGIN:
      if (config.env === 'dev') {
        store.dispatch(userAuthenticationSuccess(user));
      } else {
        axios
          .post(config.apiBaseUrl, {
            email: store.getState().user.email,
            password: store.getState().user.password,
          })
          .then((response) => {
            store.dispatch(userAuthenticationSuccess(response.data));
          })
          .catch((error) => {
            store.dispacth(userAuthenticationError(error));
          });
      }
      break;
    case USER_REGISTER:
      if (config.env === 'dev') {
        store.dispatch(
          userRegisterSuccess({
            email: store.getState().user.email,
            password: store.getState().user.password,
            nickname: store.getState().user.nickname,
            firstname: store.getState().user.firstname,
            lastname: store.getState().user.lastname,
          }),
        );
      } else {
        axios
          .post(config.apiBaseUrl, {
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
      }
      break;
    default:
  }
  next(action);
};

export default userMiddleware;
