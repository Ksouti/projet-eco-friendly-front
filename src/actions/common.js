/**
 * Loading categories data action
 * @returns {object} : the action
 */
export const LOADING_CATEGORIES_DATA = 'LOADING_CATEGORIES_DATA';

export const loadingCategoriesData = () => ({
  type: LOADING_CATEGORIES_DATA,
});

/**
 * Fetch categories data action
 * @param {object} data : the data to fetch
 * @returns {object} : the action
 */
export const FETCH_CATEGORIES_FROM_API = 'FETCH_CATEGORIES_FROM_API';

export const fetchCategoriesFromApi = (data) => ({
  type: FETCH_CATEGORIES_FROM_API,
  data,
});

/**
 * Modal opening  action
 *
 * @param {ReactNodeLike} modalContent
 * @returns {object} : the action
 */
export const OPEN_MODAL = 'OPEN_MODAL';

export const openModal = (modalContent) => ({
  type: OPEN_MODAL,
  modalContent,
});

/**
 * Modal closing action
 * @returns {object} : the action
 */
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const closeModal = () => ({
  type: CLOSE_MODAL,
});

/**
 * Listen to the change in input type fields
 *
 * @param {string} value : the value of the input
 * @param {string} identifier : the name of the input
 * @returns {object} : the action
 */
export const ON_INPUT_CHANGE = 'ON_INPUT_CHANGE';

export const OnInputChange = (value, identifier) => ({
  type: ON_INPUT_CHANGE,
  value,
  identifier,
});
