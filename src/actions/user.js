/* eslint-disable operator-linebreak */
/* eslint-disable operator-linebreak */

/**
 * @name userOnInputChange
 * @description Action creator for user on input change
 * @param {string} value
 * @param {string} identifier
 * @returns {object}
 */
export const USER_ON_INPUT_CHANGE = 'USER_ON_INPUT_CHANGE';

export const userOnInputChange = (value, identifier) => ({
  type: USER_ON_INPUT_CHANGE,
  value,
  identifier,
});

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

export const userRegister = () => ({
  type: USER_REGISTER,
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
 * @param {array} errors
 * @returns {object}
 */
export const USER_REGISTER_ERROR = 'USER_REGISTER_ERROR';

export const userRegisterError = (errors) => ({
  type: USER_REGISTER_ERROR,
  errors,
});

/**
 * @name userSettingsUpdate
 * @description Action creator for user settings update
 * @returns {object}
 */
export const USER_SETTINGS_UPDATE = 'USER_SETTINGS_UPDATE';

export const userSettingsUpdate = () => ({
  type: USER_SETTINGS_UPDATE,
});

/**
 * @name userSettingsUpdateSuccess
 * @description Action creator for user settings update success
 * @param {Object} data
 * @returns {object}
 */
export const USER_SETTINGS_UPDATE_SUCCESS = 'USER_SETTINGS_UPDATE_SUCCESS';

export const userSettingsUpdateSuccess = (data) => ({
  type: USER_SETTINGS_UPDATE_SUCCESS,
  data,
});

/**
 * @name userSettingsUpdateError
 * @description Action creator for user settings update error
 * @param {array} errors
 * @returns {object}
 */
export const USER_SETTINGS_UPDATE_ERROR = 'USER_SETTINGS_UPDATE_ERROR';

export const userSettingsUpdateError = (errors) => ({
  type: USER_SETTINGS_UPDATE_ERROR,
  errors,
});

/**
 * @name userEmailUpdate
 * @description Action creator for user email update
 * @returns {object}
 */
export const USER_EMAIL_UPDATE = 'USER_EMAIL_UPDATE';

export const userEmailUpdate = () => ({
  type: USER_EMAIL_UPDATE,
});

/**
 * @name userEmailUpdateSuccess
 * @description Action creator for user email update success
 * @param {Object} data
 * @returns {object}
 */
export const USER_EMAIL_UPDATE_SUCCESS = 'USER_EMAIL_UPDATE_SUCCESS';

export const userEmailUpdateSuccess = (data) => ({
  type: USER_EMAIL_UPDATE_SUCCESS,
  data,
});

/**
 * @name userEmailUpdateError
 * @description Action creator for user email update error
 * @param {array} errors
 * @returns {object}
 */
export const USER_EMAIL_UPDATE_ERROR = 'USER_EMAIL_UPDATE_ERROR';

export const userEmailUpdateError = (errors) => ({
  type: USER_EMAIL_UPDATE_ERROR,
  errors,
});

/**
 * @name userRemoveErrorMessages
 * @description Action creator for user remove error messages
 * @returns {object}
 */

export const USER_REMOVE_ERROR_MESSAGES = 'USER_REMOVE_ERROR_MESSAGES';

export const userRemoveErrorMessages = () => ({
  type: USER_REMOVE_ERROR_MESSAGES,
});

/**
 * @name userToggleIsUpdated
 * @description Action creator for user toggle is updated
 * @returns {object}
 */
export const USER_TOGGLE_IS_UPDATED = 'USER_TOGGLE_IS_UPDATED';

export const userToggleIsUpdated = () => ({
  type: USER_TOGGLE_IS_UPDATED,
});
