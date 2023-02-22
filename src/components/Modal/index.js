import { useContext } from 'react';
import { ModalContext } from '../../context/ModalContext';

import './styles.scss';

export default function Modal({ children }) {
  const { isShowing, toggleModal } = useContext(ModalContext);

  return (
    <div
      className={isShowing ? 'modal' : 'modal modal-hidden'}
      onClick={() => toggleModal()}
    >
      <div className="modal-content">
        <div className="modal-header">
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={() => toggleModal()}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body" onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </div>
  );
}
