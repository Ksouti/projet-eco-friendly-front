import { OPEN_MODAL, CLOSE_MODAL } from '../actions/common';

export const initialState = {
  modalIsOpen: false,
  modalContent: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
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
