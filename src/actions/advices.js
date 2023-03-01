/* eslint-disable operator-linebreak */
/**
 * @name loadingAdvicesData
 * @description Action creator for loading advices data
 * @returns {object}
 */
export const LOADING_ADVICES_DATA = 'LOADING_ADVICES_DATA';

export const loadingAdvicesData = () => ({
  type: LOADING_ADVICES_DATA,
});

/**
 * @name loadingLastFourAdvices
 * @description Action creator for loading last four advices data
 * @param {array} data
 * @returns {object}
 */
export const FETCH_ADVICES_FROM_API = 'FETCH_ADVICES_FROM_API';

export const fetchAdvicesFromApi = (data) => ({
  type: FETCH_ADVICES_FROM_API,
  data,
});

/**
 * @name loadingLastFourAdvices
 * @description Action creator for loading last four advices data
 * @returns {object}
 */
export const LOADING_LAST_FOUR_ADVICES = 'LOADING_LAST_FOUR_ADVICES';

export const loadingLastFourAdvices = () => ({
  type: LOADING_LAST_FOUR_ADVICES,
});

/**
 * @name fetchLastFourAdvicesFromApi
 * @description Action creator for loading last four advices data
 * @param {array} data
 * @returns {object}
 */
export const FETCH_LAST_FOUR_ADVICES_FROM_API =
  'FETCH_LAST_FOUR_ADVICES_FROM_API';

export const fetchLastFourAdvicesFromApi = (data) => ({
  type: FETCH_LAST_FOUR_ADVICES_FROM_API,
  data,
});
