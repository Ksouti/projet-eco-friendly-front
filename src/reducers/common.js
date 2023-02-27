import {
  OPEN_MODAL,
  CLOSE_MODAL,
  FETCH_CATEGORIES_FROM_API,
} from '../actions/common';

export const initialState = {
  modalIsOpen: false,
  modalContent: null,
  categories: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_CATEGORIES_FROM_API:
      return {
        ...state,
        categories: action.data,
      };
    case OPEN_MODAL:
      return {
        ...state,
        modalIsOpen: !state.modalIsOpen,
        modalContent: action.modalContent,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        modalIsOpen: !state.modalIsOpen,
        modalContent: null,
      };
    default:
      return state;
  }
};

export default reducer;
