import { USER_AUTHENTICATION_SUCCESS, USER_LOGOUT } from '../actions/user';

export const initialState = {
  email: 'mueller.vesta@bernier.biz',
  password: '$2y$13$dEOvubTYGdZw8.6TXdHi/um62RPqPkAXyuAAu8fFeH7UyFZiUEdOG',
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
    default:
      return state;
  }
};

export default reducer;
