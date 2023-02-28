/* eslint-disable operator-linebreak */
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
 * @param {array} data
 * @returns {object}
 */
export const FETCH_ADVICES_FROM_API = 'FETCH_ADVICES_FROM_API';

export const fetchAdvicesFromApi = (data) => ({
  type: FETCH_ADVICES_FROM_API,
  data,
});

export const LOADING_LAST_FOUR_ADVICES = 'LOADING_LAST_FOUR_ADVICES';

export const loadingLastFourAdvices = () => ({
  type: LOADING_LAST_FOUR_ADVICES,
});

export const FETCH_LAST_FOUR_ADVICES_FROM_API =
  'FETCH_LAST_FOUR_ADVICES_FROM_API';

export const fetchLastFourAdvicesFromApi = (data) => ({
  type: FETCH_LAST_FOUR_ADVICES_FROM_API,
  data,
});
