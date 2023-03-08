import {
  USER_AUTHENTICATION_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_SUCCESS,
} from '../actions/user';

import { ON_INPUT_CHANGE } from '../actions/common';

export const initialState = {
  token: sessionStorage.getItem('user')
    ? JSON.parse(sessionStorage.getItem('user')).token
    : '',
  isLoaded: sessionStorage.getItem('user')
    ? JSON.parse(sessionStorage.getItem('user')).isLoaded
    : false,
  isLogged: sessionStorage.getItem('user')
    ? JSON.parse(sessionStorage.getItem('user')).isLogged
    : false,
  id: sessionStorage.getItem('user')
    ? JSON.parse(sessionStorage.getItem('user')).id
    : '',
  roles: sessionStorage.getItem('user')
    ? JSON.parse(sessionStorage.getItem('user')).roles
    : [],
  firstname: sessionStorage.getItem('user')
    ? JSON.parse(sessionStorage.getItem('user')).firstname
    : '',
  lastname: sessionStorage.getItem('user')
    ? JSON.parse(sessionStorage.getItem('user')).lastname
    : '',
  nickname: sessionStorage.getItem('user')
    ? JSON.parse(sessionStorage.getItem('user')).nickname
    : '',
  avatar: sessionStorage.getItem('user')
    ? JSON.parse(sessionStorage.getItem('user')).avatar
    : '',
  isActive: sessionStorage.getItem('user')
    ? JSON.parse(sessionStorage.getItem('user')).isActive
    : false,
  isVerified: sessionStorage.getItem('user')
    ? JSON.parse(sessionStorage.getItem('user')).isVerified
    : false,
  email: sessionStorage.getItem('user')
    ? JSON.parse(sessionStorage.getItem('user')).email
    : '',
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
        token: action.token,
        isLoaded: true,
        isLogged: true,
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
        isLoaded: false,
        isLogged: false,
        id: '',
        roles: [],
        firstname: '',
        lastname: '',
        nickname: '',
        avatar: '',
        isActive: false,
        isVerified: false,
        email: '',
        password: '',
      };
    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        nickname: action.data.nickname,
        email: action.data.email,
        password: '',
        confirmPassword: '',
      };
    default:
      return state;
  }
};

export default reducer;
