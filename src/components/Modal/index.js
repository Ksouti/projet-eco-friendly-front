import './styles.scss';

export default function Modal({ children }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="btn-close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
}
