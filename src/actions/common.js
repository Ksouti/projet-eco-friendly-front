export const OPEN_MODAL = 'OPEN_MODAL';

export const openModal = (modalContent) => ({
  type: OPEN_MODAL,
  modalContent,
});

export const CLOSE_MODAL = 'CLOSE_MODAL';

export const closeModal = () => ({
  type: CLOSE_MODAL,
});
