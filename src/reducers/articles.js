import {
  FETCH_ARTICLES_FROM_API,
  FETCH_LAST_ARTICLE_FROM_API,
  FETCH_LAST_FOUR_ARTICLES_FROM_API,
  /* SELECTED ARTICLE IN PROGRESS */
  FETCH_SELECTED_ARTICLE_FROM_API,
} from '../actions/articles';

export const initialState = {
  data: [],
  lastArticleData: [{}],
  lastArticleDataIsLoaded: false,
  isLoaded: false,
  lastFourArticles: [],
  /* SELECTED ARTICLE IN PROGRESS */
  selectedArticle: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_ARTICLES_FROM_API:
      return {
        ...state,
        data: action.data,
        isLoaded: true,
      };

    case FETCH_LAST_ARTICLE_FROM_API:
      return {
        ...state,
        lastArticleData: action.data,
        lastArticleDataIsLoaded: true,
      };

    case FETCH_LAST_FOUR_ARTICLES_FROM_API:
      return {
        ...state,
        lastFourArticles: action.data,
        isLoaded: true,
      };

    /* SELECTED ARTICLE IN PROGRESS */
    case FETCH_SELECTED_ARTICLE_FROM_API:
      return {
        ...state,
        selectedArticle: action.data,
        isLoaded: true,
      };
    default:
      return state;
  }
};

export default reducer;
