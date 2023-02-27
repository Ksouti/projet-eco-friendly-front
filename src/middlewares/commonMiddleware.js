import {
  LOADING_CATEGORIES_DATA,
  fetchCategoriesFromApi,
} from '../actions/common';

import categories from '../data/categories'; // dev only

const commonMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOADING_CATEGORIES_DATA:
      console.log('Middleware: loading categories data'); // dev only
      store.dispatch(fetchCategoriesFromApi(categories)); // dev only
      break;
    default:
  }
  next(action);
};

export default commonMiddleware;
