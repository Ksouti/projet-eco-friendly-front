import {
  USER_AUTHENTICATION_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_SUCCESS,
} from '../actions/user';

import { ON_INPUT_CHANGE } from '../actions/common';

export const initialState = {
  isLoaded: false,
  isLoadedAdvices: false,
  isLogged: false,
  token: '',
  data: {},
  advices: [],
  id: '',
  nickname: '',
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ON_INPUT_CHANGE:
      return {
        ...state,
        [action.identifier]: action.value, // [action.identifier] is a computed property name
      };
    case USER_AUTHENTICATION_SUCCESS:
      return {
        ...state,
        isLoaded: true,
        isLogged: true,
        token: action.token,
        data: action.data,
        id: action.data.id,
        nickname: action.data.nickname,
        firstname: action.data.firstname,
        lastname: action.data.lastname,
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
