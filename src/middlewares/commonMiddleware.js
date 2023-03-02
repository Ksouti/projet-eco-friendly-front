/* eslint-disable brace-style */
import axios from 'axios';
import {
  LOADING_CATEGORIES_DATA,
  fetchCategoriesFromApi,
} from '../actions/common';

import config from '../config';

const commonMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOADING_CATEGORIES_DATA:
      if (config.env === 'dev') {
        store.dispatch(fetchCategoriesFromApi(config.defaultNavLinks));
      } else {
        axios
          .get(`${config.apiBaseUrl}/categories`)
          .then((response) => {
            store.dispatch(fetchCategoriesFromApi(response.data));
          })
          .catch((error) => `Error: ${error.message}`);
      }
      break;
    default:
  }
  next(action);
};

export default commonMiddleware;
