/**
 * Loading advices data
 * @returns {object}
 */
export const LOADING_ADVICES_DATA = 'LOADING_ADVICES_DATA';

export const loadingAdvicesData = () => ({
  type: LOADING_ADVICES_DATA,
});

/**
 * Fetch advices data from API
 * @param {array} list
 * @returns {object}
 */
export const FETCH_ADVICES_FROM_API = 'FETCH_ADVICES_FROM_API';

export const fetchAdvicesFromApi = (data) => ({
  type: FETCH_ADVICES_FROM_API,
  data,
});
