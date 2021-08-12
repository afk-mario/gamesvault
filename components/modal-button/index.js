import PropTypes from 'prop-types';

function ModalButton({ text, icon, onClick }) {
  return (
    <button type="button" className="modal-btn" onClick={onClick}>
      <img src={icon} className="btn-icon" width="20" alt="" />
      <span className="btn-text">{text}</span>
    </button>
  );
}

ModalButton.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

ModalButton.defaultProps = {};

export default ModalButton;
