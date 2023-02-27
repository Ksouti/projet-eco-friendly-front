import { FETCH_ARTICLES_FROM_API } from '../actions/articles';

export const initialState = {
  data: [],
  isLoaded: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_ARTICLES_FROM_API:
      return {
        ...state,
        data: action.data,
        isLoaded: true,
      };
    default:
      return state;
  }
};

export default reducer;
