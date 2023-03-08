/* eslint-disable brace-style */
import axios from 'axios';
import {
  USER_LOGIN,
  userAuthenticationSuccess,
  USER_REGISTER,
  userRegisterSuccess,
  userAuthenticationError,
  USER_SETTINGS_UPDATE,
  userSettingsUpdateSuccess,
  userSettingsUpdateError,
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
          store.dispatch(
            userAuthenticationSuccess(response.data.token, response.data.user),
          );
        })
        .catch((error) => {
          store.dispatch(userAuthenticationError(error.response.data.errors));
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
          store.dispatch(userAuthenticationError(error.response.data.errors));
        });
      break;
    case USER_SETTINGS_UPDATE:
      axios
        .put(
          `${config.apiBaseUrl}/users/${store.getState().user.id}`,
          {
            password: store.getState().user.password,
            email: store.getState().user.email,
            nickname: store.getState().user.nickname,
            firstname: store.getState().user.firstname,
            lastname: store.getState().user.lastname,
            avatar: store.getState().user.avatar,
          },
          {
            headers: {
              Authorization: `Bearer ${store.getState().user.token}`,
            },
          },
        )
        .then((response) => {
          sessionStorage.setItem('user', JSON.stringify(response.data)); // update user in sessionStorage
          store.dispatch(userSettingsUpdateSuccess(response.data));
        })
        .catch((error) => {
          store.dispatch(userSettingsUpdateError(error.response.data.errors));
        });
      break;
    default:
  }
  next(action);
};

export default userMiddleware;
