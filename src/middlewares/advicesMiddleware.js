import { LOADING_ADVICES_DATA, fetchAdvicesFromApi } from '../actions/advices';

import advices from '../data/advices'; // dev only

const advicesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOADING_ADVICES_DATA:
      console.log('Middleware: loading advices data'); // dev only
      store.dispatch(fetchAdvicesFromApi(advices)); // dev only
      break;
    default:
  }
  next(action);
};

export default advicesMiddleware;
