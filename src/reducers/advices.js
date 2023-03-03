import { FETCH_ADVICES_FROM_API, EDIT_ADVICE_DATA } from '../actions/advices';

import {
  USER_PUBLISH_NEW_ADVICE_SUCCESS,
  USER_PUBLISH_NEW_ADVICE_FAILED,
} from '../actions/user';

import { ON_INPUT_CHANGE } from '../actions/common';

export const initialState = {
  data: [],
  isLoaded: false,
  lastFourAdvices: [],
  newAdviceTitle: '',
  newAdviceCategory: '',
  newAdviceContent: '',
  newAdviceData: {},
  newAdviceErrors: [],
  editAdviceId: '',
  editAdviceTitle: '',
  editAdviceCategory: '',
  editAdviceContent: '',
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
    case USER_PUBLISH_NEW_ADVICE_SUCCESS:
      return {
        ...state,
        newAdviceData: action.data,
        newAdviceTitle: '',
        newAdviceCategory: '',
        newAdviceContent: '',
      };
    case USER_PUBLISH_NEW_ADVICE_FAILED:
      return {
        ...state,
        newAdviceErrors: action.errors,
      };
    case EDIT_ADVICE_DATA:
      return {
        ...state,
        editAdviceId: action.data.id,
        editAdviceTitle: action.data.title,
        editAdviceCategory: action.data.category,
        editAdviceContent: action.data.content,
      };
    default:
      return state;
  }
};

export default reducer;
