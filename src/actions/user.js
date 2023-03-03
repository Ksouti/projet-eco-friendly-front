/* eslint-disable operator-linebreak */
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

export const userAuthenticationSuccess = (token, data) => ({
  type: USER_AUTHENTICATION_SUCCESS,
  token,
  data,
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

/**
 * @name UserAdvices
 * @description Action creator for loading user advices
 * @returns {object}
 */
export const USER_ADVICES = 'USER_ADVICES';

export const loadingUserAdvices = () => ({
  type: USER_ADVICES,
});

/**
 * @name getUserAdvices
 * @description Action creator for getting user advices
 * @param {array} data
 * @returns {object}
 */
export const GET_USER_ADVICES = 'GET_USER_ADVICES';

export const getUserAdvices = (data) => ({
  type: GET_USER_ADVICES,
  data,
});

/**
 * @name UserPublishNewAdvice
 * @description Action creator for publishing new advice
 * @returns {object}
 */
export const USER_PUBLISH_NEW_ADVICE = 'USER_PUBLISH_NEW_ADVICE';

export const userPublishNewAdvice = () => ({
  type: USER_PUBLISH_NEW_ADVICE,
});

/**
 * @name userPublishNewAdviceSuccess
 * @description Action creator for publishing new advice success
 * @param {object} data
 * @returns {object}
 */
export const USER_PUBLISH_NEW_ADVICE_SUCCESS =
  'USER_PUBLISH_NEW_ADVICE_SUCCESS';

export const userPublishNewAdviceSuccess = (data) => ({
  type: USER_PUBLISH_NEW_ADVICE_SUCCESS,
  data,
});

/**
 * @name userPublishNewAdviceFailed
 * @description Action creator for publishing new advice failed
 * @param {array} errors
 * @returns {object}
 */
export const USER_PUBLISH_NEW_ADVICE_FAILED = 'USER_PUBLISH_NEW_ADVICE_FAILED';

export const userPublishNewAdviceFailed = (errors) => ({
  type: USER_PUBLISH_NEW_ADVICE_FAILED,
  errors,
});

/** @name userPublishEditAdvice
 * @description Action creator for publishing edited advice
 * @returns {object}
 */
export const USER_PUBLISH_EDIT_ADVICE = 'USER_PUBLISH_EDIT_ADVICE';

export const userPublishEditAdvice = () => ({
  type: USER_PUBLISH_EDIT_ADVICE,
});

/** @name userPublishEditAdviceSuccess
 * @description Action creator for publishing edited advice success
 * @param {object} data
 * @returns {object}
 */
export const USER_PUBLISH_EDIT_ADVICE_SUCCESS =
  'USER_PUBLISH_EDIT_ADVICE_SUCCESS';

export const userPublishEditAdviceSuccess = (data) => ({
  type: USER_PUBLISH_EDIT_ADVICE_SUCCESS,
  data,
});

/** @name userPublishEditAdviceFailed
 * @description Action creator for publishing edited advice failed
 * @param {array} errors
 * @returns {object}
 */
export const USER_PUBLISH_EDIT_ADVICE_FAILED =
  'USER_PUBLISH_EDIT_ADVICE_FAILED';

export const userPublishEditAdviceFailed = (errors) => ({
  type: USER_PUBLISH_EDIT_ADVICE_FAILED,
  errors,
});
