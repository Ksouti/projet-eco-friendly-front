import { createContext } from 'react';
import useModal from '../hook/useModal';

const ModalContext = createContext(null);

const ModalContextProvider = ({ children }) => {
  const { isShowing, toggleModal } = useModal();

  return (
    <ModalContext.Provider value={{ isShowing, toggleModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalContextProvider };
