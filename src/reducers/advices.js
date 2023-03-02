import {
  FETCH_ADVICES_FROM_API,
  FETCH_LAST_FOUR_ADVICES_FROM_API,
} from '../actions/advices';

import { ON_INPUT_CHANGE } from '../actions/common';

export const initialState = {
  data: [],
  isLoaded: false,
  lastFourAdvices: [],
  addTitle: '',
  addCategory: '',
  addContent: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ON_INPUT_CHANGE:
      return {
        ...state,
        [action.identifier]: action.value, // [action.identifier] is a computed property name
      };
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
