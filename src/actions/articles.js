/**
 * Loading articles data
 * @returns {object}
 */
export const LOADING_ARTICLES_DATA = 'LOADING_ARTICLES_DATA';

export const loadingArticlesData = () => ({
  type: LOADING_ARTICLES_DATA,
});

/**
 * Fetch articles data from API
 * @param {array} list
 * @returns {object}
 */
export const FETCH_ARTICLES_FROM_API = 'FETCH_ARTICLES_FROM_API';

export const fetchArticlesFromApi = (data) => ({
  type: FETCH_ARTICLES_FROM_API,
  data,
});

/**
 * Loading last article data
 * @returns {object}
 */
export const LOADING_LAST_ARTICLE_DATA = 'LOADING_LAST_ARTICLE_DATA';

export const loadingLastArticleData = () => ({
  type: LOADING_LAST_ARTICLE_DATA,
});

/**
 * Fetch last article data from API
 * @param {object} data
 * @returns {object}
 */
export const FETCH_LAST_ARTICLE_FROM_API = 'FETCH_LAST_ARTICLE_FROM_API';

export const fetchLastArticleFromApi = (data) => ({
  type: FETCH_LAST_ARTICLE_FROM_API,
  data,
});
