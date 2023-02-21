import './styles.scss';

export default function Modal({ toggle, isShowing, children }) {
  return (
    <div
      className={isShowing ? 'modal' : 'modal modal-hidden'}
      onClick={() => toggle()}
    >
      <div className="modal-content">
        <div className="modal-header">
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={() => toggle()}
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
