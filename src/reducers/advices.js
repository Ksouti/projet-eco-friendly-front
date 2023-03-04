import {
  FETCH_ADVICES_FROM_API,
  EDIT_ADVICE_DATA,
  GET_USER_ADVICES_SUCCESS,
  GET_USER_ADVICES_FAILED,
  USER_PUBLISH_NEW_ADVICE_SUCCESS,
  USER_PUBLISH_NEW_ADVICE_FAILED,
  USER_SAVE_NEW_ADVICE_SUCCESS,
  USER_SAVE_NEW_ADVICE_FAILED,
  USER_PUBLISH_EDIT_ADVICE_SUCCESS,
  USER_PUBLISH_EDIT_ADVICE_FAILED,
  USER_SAVE_EDIT_ADVICE_SUCCESS,
  USER_SAVE_EDIT_ADVICE_FAILED,
  USER_DELETE_ADVICE_SUCCESS,
  USER_DELETE_ADVICE_FAILED,
} from '../actions/advices';

import { ON_INPUT_CHANGE } from '../actions/common';

export const initialState = {
  data: [],
  isLoaded: false,
  /* TODO: This is a temporary solution, we refacto this later */
  /* It's possible to dispatch actions in the middlewares */
  /* to toggle isLoaded false */
  isLoadedAdvices: false,
  userAdvices: [],
  newAdviceTitle: '',
  newAdviceCategory: '',
  newAdviceContent: '',
  newAdviceData: {},
  editAdviceId: '',
  editAdviceTitle: '',
  editAdviceCategory: '',
  editAdviceContent: '',
  editAdviceData: {},
  errorsMessage: [],
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
    case EDIT_ADVICE_DATA:
      return {
        ...state,
        editAdviceId: action.data.id,
        editAdviceTitle: action.data.title,
        editAdviceCategory: action.data.category.id,
        editAdviceContent: action.data.content,
      };
    case GET_USER_ADVICES_SUCCESS:
      return {
        ...state,
        userAdvices: action.data.advices,
        isLoadedAdvices: true,
      };
    case GET_USER_ADVICES_FAILED:
      return {
        ...state,
        errorsMessage: action.errors,
        isLoadedAdvices: false,
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
    case USER_SAVE_NEW_ADVICE_SUCCESS:
      return {
        ...state,
        newAdviceData: action.data,
        newAdviceTitle: '',
        newAdviceCategory: '',
        newAdviceContent: '',
      };
    case USER_SAVE_NEW_ADVICE_FAILED:
      return {
        ...state,
        errorsMessage: action.errors,
      };
    case USER_PUBLISH_EDIT_ADVICE_SUCCESS:
      return {
        ...state,
        editAdviceData: action.data,
        editAdviceId: '',
        editAdviceTitle: '',
        editAdviceCategory: '',
        editAdviceContent: '',
      };
    case USER_PUBLISH_EDIT_ADVICE_FAILED:
      return {
        ...state,
        errorsMessage: action.errors,
      };
    case USER_SAVE_EDIT_ADVICE_SUCCESS:
      return {
        ...state,
        editAdviceData: action.data,
        editAdviceId: '',
        editAdviceTitle: '',
        editAdviceCategory: '',
        editAdviceContent: '',
      };
    case USER_SAVE_EDIT_ADVICE_FAILED:
      return {
        ...state,
        errorsMessage: action.errors,
      };
    case USER_DELETE_ADVICE_SUCCESS:
      console.log('action.data.id', action.data.id);
      return {
        ...state,
        // TODO: Actually API doesn't return anything, so we use the id of the deleted advice
        userAdvices: state.userAdvices.filter(
          (advice) => advice.id !== action.data.id,
        ),
      };
    case USER_DELETE_ADVICE_FAILED:
      return {
        ...state,
        errorsMessage: action.errors,
      };
    default:
      return state;
  }
};

export default reducer;
