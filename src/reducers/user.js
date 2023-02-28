import {
  USER_AUTHENTICATION_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_SUCCESS,
} from '../actions/user';

import { ON_INPUT_CHANGE } from '../actions/common';

export const initialState = {
  email: '',
  password: '',
  confirmPassword: '',
  firstname: '',
  lastname: '',
  nickname: '',
  token: '',
  isLogged: false,
  data: {},
  isLoaded: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case USER_AUTHENTICATION_SUCCESS:
      return {
        ...state,
        isLogged: true,
        data: action.data,
        token: '',
        isLoaded: true,
        email: '',
        password: '',
      };
    case USER_LOGOUT:
      return {
        ...state,
        isLogged: false,
        data: {},
        token: '',
      };
    case ON_INPUT_CHANGE:
      return {
        ...state,
        [action.identifier]: action.value, // [action.identifier] is a computed property name
      };
    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        isLogged: true,
        data: action.data,
        token: '',
        isLoaded: true,
        email: '',
        password: '',
      };
    default:
      return state;
  }
};

export default reducer;
