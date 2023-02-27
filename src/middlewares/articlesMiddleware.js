import {
  LOADING_ARTICLES_DATA,
  fetchArticlesFromApi,
} from '../actions/articles';

import articles from '../data/articles'; // dev only

const articlesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOADING_ARTICLES_DATA:
      console.log('Middleware: loading articles data'); // dev only
      store.dispatch(fetchArticlesFromApi(articles)); // dev only
      break;
    default:
  }
  next(action);
};

export default articlesMiddleware;
