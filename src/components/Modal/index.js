import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { closeModal } from '../../actions/common';

import './styles.scss';

export default function Modal({ children }) {
  const dispatch = useDispatch();

  const toggleModal = (e) => {
    dispatch(closeModal());
    e.stopPropagation();
  };

  return (
    <div className="modal" onClick={toggleModal}>
      <div className="modal-content">
        <div className="modal-header">
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={toggleModal}
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

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};
