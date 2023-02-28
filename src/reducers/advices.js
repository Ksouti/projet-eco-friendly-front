import {
  FETCH_ADVICES_FROM_API,
  FETCH_LAST_FOUR_ADVICES_FROM_API,
} from '../actions/advices';

export const initialState = {
  data: [],
  isLoaded: false,
  lastFourAdvices: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_ADVICES_FROM_API:
      return {
        ...state,
        data: action.data,
        isLoaded: true,
      };
    case FETCH_LAST_FOUR_ADVICES_FROM_API:
      return {
        ...state,
        lastFourAdvices: action.data,
        isLoaded: true,
      };
    default:
      return state;
  }
};

export default reducer;
