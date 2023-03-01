import {
  LOADING_ADVICES_DATA,
  fetchAdvicesFromApi,
  LOADING_LAST_FOUR_ADVICES,
  fetchLastFourAdvicesFromApi,
} from '../actions/advices';

import advices from '../data/advices'; // dev only
import lastFourAdvices from '../data/lastFourAdvices'; // dev only

const advicesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOADING_ADVICES_DATA:
      console.log('Middleware: loading advices data'); // dev only
      store.dispatch(fetchAdvicesFromApi(advices)); // dev only
      break;
    case LOADING_LAST_FOUR_ADVICES:
      console.log('Middleware: loading last four advices data'); // dev only
      store.dispatch(fetchLastFourAdvicesFromApi(lastFourAdvices)); // dev only
      break;
    default:
  }
  next(action);
};

export default advicesMiddleware;
