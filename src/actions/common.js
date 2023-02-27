export const LOADING_CATEGORIES_DATA = 'LOADING_CATEGORIES_DATA';

export const loadingCategoriesData = () => ({
  type: LOADING_CATEGORIES_DATA,
});

export const FETCH_CATEGORIES_FROM_API = 'FETCH_CATEGORIES_FROM_API';

export const fetchCategoriesFromApi = (data) => ({
  type: FETCH_CATEGORIES_FROM_API,
  data,
});

export const OPEN_MODAL = 'OPEN_MODAL';

export const openModal = (modalContent) => ({
  type: OPEN_MODAL,
  modalContent,
});

export const CLOSE_MODAL = 'CLOSE_MODAL';

export const closeModal = () => ({
  type: CLOSE_MODAL,
});
