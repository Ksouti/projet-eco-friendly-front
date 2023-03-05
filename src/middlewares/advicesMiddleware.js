/* eslint-disable brace-style */
import axios from 'axios';
import {
  LOADING_ADVICES_DATA,
  fetchAdvicesFromApi,
  GET_USER_ADVICES,
  getUserAdvicesSuccess,
  getUserAdvicesFailed,
  USER_PUBLISH_NEW_ADVICE,
  userPublishNewAdviceSuccess,
  userPublishNewAdviceFailed,
  USER_PUBLISH_EDIT_ADVICE,
  userPublishEditAdviceSuccess,
  userPublishEditAdviceFailed,
  USER_SAVE_NEW_ADVICE,
  userSaveNewAdviceSuccess,
  userSaveNewAdviceFailed,
  USER_SAVE_EDIT_ADVICE,
  userSaveEditAdviceSuccess,
  userSaveEditAdviceFailed,
  USER_DELETE_ADVICE,
  userDeleteAdviceSuccess,
  userDeleteAdviceFailed,
} from '../actions/advices';

import config from '../config';

import advices from '../data/advices'; // dev only
import user from '../data/single-user'; // dev only

const advicesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOADING_ADVICES_DATA:
      if (config.env === 'dev') {
        store.dispatch(fetchAdvicesFromApi(advices));
      } else {
        axios
          .get(`${config.apiBaseUrl}/advices`)
          .then((response) => {
            store.dispatch(fetchAdvicesFromApi(response.data));
          })
          .catch((error) => `Error: ${error.message}`);
      }
      break;
    case GET_USER_ADVICES:
      if (config.env === 'dev') {
        store.dispatch(getUserAdvicesSuccess(user.advices));
      } else {
        axios
          .get(`${config.apiBaseUrl}/users/${store.getState().user.id}`, {
            headers: {
              Authorization: `Bearer ${store.getState().user.token}`,
            },
          })
          .then((response) => {
            store.dispatch(getUserAdvicesSuccess(response.data));
          })
          .catch((error) => {
            store.dispacth(getUserAdvicesFailed(error));
          });
      }
      break;
    case USER_PUBLISH_NEW_ADVICE:
      axios
        .post(
          `${config.apiBaseUrl}/advices`,
          {
            title: store.getState().advices.newAdviceTitle,
            category: store.getState().advices.newAdviceCategory,
            content: store.getState().advices.newAdviceContent,
            status: 1,
            contributor: store.getState().user.id,
          },
          {
            headers: {
              Authorization: `Bearer ${store.getState().user.token}`,
            },
          },
        )
        .then((response) => {
          store.dispatch(userPublishNewAdviceSuccess(response.data));
        })
        .catch((error) => {
          store.dispacth(userPublishNewAdviceFailed(error));
        });
      break;
    case USER_PUBLISH_EDIT_ADVICE:
      axios
        .put(
          `${config.apiBaseUrl}/advices/${
            store.getState().advices.editAdviceId
          }`,
          {
            title: store.getState().advices.editAdviceTitle,
            category: store.getState().advices.editAdviceCategory,
            content: store.getState().advices.editAdviceContent,
            status: 1,
            contributor: store.getState().user.id,
          },
          {
            headers: {
              Authorization: `Bearer ${store.getState().user.token}`,
            },
          },
        )
        .then((response) => {
          store.dispatch(userPublishEditAdviceSuccess(response.data));
        })
        .catch((error) => {
          store.dispacth(userPublishEditAdviceFailed(error));
        });
      break;
    case USER_SAVE_NEW_ADVICE:
      axios
        .post(
          `${config.apiBaseUrl}/advices`,
          {
            title: store.getState().advices.newAdviceTitle,
            category: store.getState().advices.newAdviceCategory,
            content: store.getState().advices.newAdviceContent,
            status: 0,
            contributor: store.getState().user.id,
          },
          {
            headers: {
              Authorization: `Bearer ${store.getState().user.token}`,
            },
          },
        )
        .then((response) => {
          store.dispatch(userSaveNewAdviceSuccess(response.data));
        })
        .catch((error) => {
          store.dispacth(userSaveNewAdviceFailed(error));
        });
      break;
    case USER_SAVE_EDIT_ADVICE:
      axios
        .put(
          `${config.apiBaseUrl}/advices/${
            store.getState().advices.editAdviceId
          }`,
          {
            title: store.getState().advices.editAdviceTitle,
            category: store.getState().advices.editAdviceCategory,
            content: store.getState().advices.editAdviceContent,
            status: 0,
            contributor: store.getState().user.id,
          },
          {
            headers: {
              Authorization: `Bearer ${store.getState().user.token}`,
            },
          },
        )
        .then((response) => {
          store.dispatch(userSaveEditAdviceSuccess(response.data));
        })
        .catch((error) => {
          store.dispacth(userSaveEditAdviceFailed(error));
        });
      break;
    case USER_DELETE_ADVICE:
      axios
        .delete(
          `${config.apiBaseUrl}/advices/${
            store.getState().advices.editAdviceId
          }`,
          {
            headers: {
              Authorization: `Bearer ${store.getState().user.token}`,
            },
          },
        )
        .then(() => {
          store.dispatch(userDeleteAdviceSuccess()); // API doesn't return anything
        })
        .catch((error) => {
          store.dispacth(userDeleteAdviceFailed(error));
        });
      break;
    default:
  }
  next(action);
};

export default advicesMiddleware;
