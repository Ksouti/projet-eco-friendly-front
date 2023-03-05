import {
  USER_AUTHENTICATION_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_SUCCESS,
} from '../actions/user';

import { ON_INPUT_CHANGE } from '../actions/common';

export const initialState = {
  token: '',
  isLoaded: false,
  isLogged: false,
  advices: [],
  data: {},
  id: '',
  email: '',
  roles: [],
  firstname: '',
  lastname: '',
  nickname: '',
  avatar: '',
  isActive: false,
  isVerified: false,
  password: '',
  isLoadedAdvices: false,
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
        token: action.token,
        isLoaded: true,
        isLogged: true,
        data: action.data,
        id: action.data.id,
        roles: action.data.roles,
        firstname: action.data.firstname,
        lastname: action.data.lastname,
        nickname: action.data.nickname,
        avatar: action.data.avatar,
        isActive: action.data.isActive,
        isVerified: action.data.isVerified,
        email: '',
        password: '',
      };
    case USER_LOGOUT:
      return {
        ...state,
        token: '',
        isLogged: false,
        isLoaded: false,
        data: {},
        id: '',
        roles: [],
        firstname: '',
        lastname: '',
        nickname: '',
        avatar: '',
        isActive: false,
        isVerified: false,
      };
    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        email: '',
        password: '',
        confirmPassword: '',
      };
    default:
      return state;
  }
};

export default reducer;
