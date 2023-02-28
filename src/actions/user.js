/**
 * @name loadingUserData
 * @description Action creator for loading user data
 * @returns {object}
 */
export const LOADING_USER_DATA = 'LOADING_USER_DATA';

export const loadingUserData = () => ({
  type: LOADING_USER_DATA,
});

/**
 * @name userLogin
 * @description Action creator for user login
 * @returns {object}
 */
export const USER_LOGIN = 'USER_LOGIN';

export const userLogin = () => ({
  type: USER_LOGIN,
});

/**
 * @name userLogout
 * @description Action creator for user logout
 * @returns {object}
 */
export const USER_LOGOUT = 'USER_LOGOUT';

export const userLogout = () => ({
  type: USER_LOGOUT,
});

/**
 * @name userAuthentication
 * @description Action creator for user authentication
 * @param {string} email
 * @param {string} password
 * @returns {object}
 */

export const USER_AUTHENTICATION_SUCCESS = 'USER_AUTHENTICATION_SUCCESS';

export const userAuthenticationSuccess = (data, token) => ({
  type: USER_AUTHENTICATION_SUCCESS,
  data,
  token,
});

/**
 * @name userAuthenticationError
 * @description Action creator for user authentication error
 * @param {string} error
 * @returns {object}
 */
export const USER_AUTHENTICATION_ERROR = 'USER_AUTHENTICATION_ERROR';

export const userAuthenticationError = (error) => ({
  type: USER_AUTHENTICATION_ERROR,
  error,
});

/**
 * @name userRegister
 * @description Action creator for user register
 * @returns {object}
 */
export const USER_REGISTER = 'USER_REGISTER';

export const userRegister = (data) => ({
  type: USER_REGISTER,
  data,
});

/**
 * @name userRegisterSuccess
 * @description Action creator for user register success
 * @param {Object} data
 * @returns {object}
 */
export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS';

export const userRegisterSuccess = (data) => ({
  type: USER_REGISTER_SUCCESS,
  data,
});

/**
 * @name userRegisterError
 * @description Action creator for user register error
 * @param {string} error
 * @returns {object}
 */
export const USER_REGISTER_ERROR = 'USER_REGISTER_ERROR';

export const userRegisterError = (error) => ({
  type: USER_REGISTER_ERROR,
  error,
});
