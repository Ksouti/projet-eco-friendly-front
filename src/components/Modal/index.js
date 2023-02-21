import './styles.scss';

export default function Modal({ onClose, open, children }) {
  return (
    <div
      className={open ? 'modal' : 'modal modal-hidden'}
      onClick={() => onClose()}
    >
      <div className="modal-content">
        <div className="modal-header">
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={() => onClose()}
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
