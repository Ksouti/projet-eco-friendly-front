/**
 * @name loadingCategoriesData
 * @description Action creator for loading categories data
 * @returns {object} : the action
 */
export const LOADING_CATEGORIES_DATA = 'LOADING_CATEGORIES_DATA';

export const loadingCategoriesData = () => ({
  type: LOADING_CATEGORIES_DATA,
});

/**
 * @name fetchCategoriesFromApi
 * @description Action creator to get categories data
 * @param {object} data : the data to fetch
 * @returns {object} : the action
 */
export const FETCH_CATEGORIES_FROM_API = 'FETCH_CATEGORIES_FROM_API';

export const fetchCategoriesFromApi = (data) => ({
  type: FETCH_CATEGORIES_FROM_API,
  data,
});

/**
 * @name lodaingHomePageData
 * @description Action creator for loading home page data
 * @returns {object} : the action
 */
export const LOADING_HOME_PAGE_DATA = 'LOADING_HOME_PAGE_DATA';

export const loadingHomePageData = () => ({
  type: LOADING_HOME_PAGE_DATA,
});

/**
 * @name fetchHomePageDataFromApi
 * @description Action creator to get home page data
 * @param {object} data : the data to fetch
 * @returns {object} : the action
 */
export const FETCH_HOME_PAGE_DATA_FROM_API = 'FETCH_HOME_PAGE_DATA_FROM_API';

export const fetchHomePageDataFromApi = (data) => ({
  type: FETCH_HOME_PAGE_DATA_FROM_API,
  data,
});

/**
 * @name loadingCategoriesData
 * @description Action creator for loading categories data
 * @param {ReactNodeLike} modalContent
 * @returns {object} : the action
 */
export const OPEN_MODAL = 'OPEN_MODAL';

export const openModal = (modalContent) => ({
  type: OPEN_MODAL,
  modalContent,
});

/**
 * @name closeModal
 * @description Action creator for closing the modal
 * @returns {object} : the action
 */
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const closeModal = () => ({
  type: CLOSE_MODAL,
});

/**
 * @name onInputChange
 * @description Action creator for changing the value of an input
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

/**
 * @name handleClickBurger
 * @description Action creator for changing the value of the burger
 * @returns {object} : the action
 */
export const HANDLE_CLICK_BURGER = 'HANDLE_CLICK_BURGER';

export const handleClickBurger = () => ({
  type: HANDLE_CLICK_BURGER,
});

/**
 * @name handleClickUserMenu
 * @description Action creator for changing the value of the user menu
 * @returns {object} : the action
 */
export const HANDLE_CLICK_USER_MENU = 'HANDLE_CLICK_USER_MENU';

export const handleClickUserMenu = () => ({
  type: HANDLE_CLICK_USER_MENU,
});
