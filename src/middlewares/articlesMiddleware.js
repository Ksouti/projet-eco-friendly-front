/* eslint-disable brace-style */
import axios from 'axios';
import {
  LOADING_ARTICLES_DATA,
  fetchArticlesFromApi,
  LOADING_LAST_ARTICLE_DATA,
  fetchLastArticleFromApi,
  LOADING_LAST_FOUR_ARTICLES,
  fetchLastFourArticlesFromApi,

  /* SELECTED ARTICLE IN PROGRESS */
  // LOADING_SELECTED_ARTICLE,
  // fetchSelectedArticleFromApi,
} from '../actions/articles';

import config from '../config';

import articles from '../data/articles'; // dev only
import article from '../data/lastArticle'; // dev only
import lastFourArticles from '../data/lastFourArticles'; // dev only

const articlesMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOADING_ARTICLES_DATA:
      if (config.env === 'dev') {
        store.dispatch(fetchArticlesFromApi(articles));
      } else {
        axios
          .get(`${config.apiBaseUrl}/articles`)
          .then((response) => {
            store.dispatch(fetchArticlesFromApi(response.data));
          })
          .catch((error) => `Error: ${error.message}`);
      }
      break;

    case LOADING_LAST_ARTICLE_DATA:
      if (config.env === 'dev') {
        store.dispatch(fetchLastArticleFromApi(article)); // dev only
      } else {
        axios
          .get(
            `${config.apiBaseUrl}/articles?category=${action.id}&limit=1&sorttype=created_at&order=DESC`,
          )
          .then((response) => {
            store.dispatch(fetchLastArticleFromApi(response.data));
          })
          .catch((error) => `Error: ${error.message}`);
      }
      break;

    case LOADING_LAST_FOUR_ARTICLES:
      store.dispatch(fetchLastFourArticlesFromApi(lastFourArticles)); // dev only
      break;

    /* SELECTED ARTICLE IN PROGRESS */
    // case LOADING_SELECTED_ARTICLE:
    //   if (config.env === 'dev') {
    //     store.dispatch(fetchSelectedArticleFromApi(article));
    //   } else {
    //     axios
    //       .get(
    //         `${config.apiBaseUrl}/articles?articles=${action.id}&limit=1&sorttype=created_at&order=DESC`,
    //       )
    //       .then((response) => {
    //         store.dispatch(fetchSelectedArticleFromApi(response.data));
    //       })
    //       .catch((error) => `Error: ${error.message}`);
    //   }
    //   break;
    default:
  }
  next(action);
};

export default articlesMiddleware;
