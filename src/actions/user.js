export const USER_LOGIN = 'USER_LOGIN';

export const userLogin = () => ({
  type: USER_LOGIN,
});

export const USER_LOGOUT = 'USER_LOGOUT';

export const userLogout = () => ({
  type: USER_LOGOUT,
});

export const USER_AUTHENTICATION_SUCCESS = 'USER_AUTHENTICATION_SUCCESS';

export const userAuthenticationSuccess = (isLogged, data, token) => ({
  type: USER_AUTHENTICATION_SUCCESS,
  isLogged,
  data,
  token,
});

export const USER_AUTHENTICATION_ERROR = 'USER_AUTHENTICATION_ERROR';

export const userAuthenticationError = (error) => ({
  type: USER_AUTHENTICATION_ERROR,
  error,
});
