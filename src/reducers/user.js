import { USER_AUTHENTICATION_SUCCESS, USER_LOGOUT } from '../actions/user';

export const initialState = {
  email: 'john.doe@mail.fr',
  password: 'password',
  token: '',
  isLogged: false,
  data: {},
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case USER_AUTHENTICATION_SUCCESS:
      return {
        ...state,
        isLogged: action.isLogged,
        data: action.data,
        token: action.token,
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
