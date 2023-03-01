/* eslint-disable brace-style */
import axios from 'axios';
import {
  LOADING_ADVICES_DATA,
  fetchAdvicesFromApi,
  LOADING_LAST_FOUR_ADVICES,
  fetchLastFourAdvicesFromApi,
} from '../actions/advices';

import config from '../config';

import advices from '../data/advices'; // dev only
import lastFourAdvices from '../data/lastFourAdvices'; // dev only

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

    case LOADING_LAST_FOUR_ADVICES:
      store.dispatch(fetchLastFourAdvicesFromApi(lastFourAdvices)); // dev only
      break;
    default:
  }
  next(action);
};

export default advicesMiddleware;
