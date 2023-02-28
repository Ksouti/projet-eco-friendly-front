import {
  LOADING_ARTICLES_DATA,
  fetchArticlesFromApi,
  LOADING_LAST_ARTICLE_DATA,
  fetchLastArticleFromApi,
  LOADING_LAST_FOUR_ARTICLES,
  fetchLastFourArticlesFromApi,
} from '../actions/articles';

import articles from '../data/articles'; // dev only
import article from '../data/lastArticle'; // dev only
import lastFourArticles from '../data/lastFourArticles'; // dev only

const articlesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOADING_ARTICLES_DATA:
      console.log('Middleware: loading articles data'); // dev only
      store.dispatch(fetchArticlesFromApi(articles)); // dev only
      break;

    case LOADING_LAST_ARTICLE_DATA:
      console.log('Middleware: loading last article data'); // dev only
      store.dispatch(fetchLastArticleFromApi(article)); // dev only
      break;

    case LOADING_LAST_FOUR_ARTICLES:
      console.log('Middleware: loading last four articles data'); // dev only
      store.dispatch(fetchLastFourArticlesFromApi(lastFourArticles)); // dev only
      break;
    default:
  }
  next(action);
};

export default articlesMiddleware;
