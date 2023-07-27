
import './Modal.css';

const Modal = ({ message, deleteMember, onCancel }) => {
  return (
    <div className="confirm-modal">
      <div className="modal-content">
        <p>{message}</p>
        <div className="modal-actions">
          <button className="btn-confirm" onClick={deleteMember}>Xác nhận</button>
          <button className="btn-cancel" onClick={onCancel}>Hủy</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;