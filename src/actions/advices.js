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
 * @name EditAdviceData
 * @description Action creator for editing advice data
 * @param {object} data
 * @returns {object}
 */
export const EDIT_ADVICE_DATA = 'EDIT_ADVICE_DATA';

export const editAdviceData = (data) => ({
  type: EDIT_ADVICE_DATA,
  data,
});
