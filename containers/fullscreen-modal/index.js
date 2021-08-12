import PropTypes from 'prop-types';

function FullscreenModal({ children, title, text }) {
  return (
    <div className="modal">
      <div className="modal-wrapper">
        <div className="modal-content">
          <h1>{title}</h1>
          <p>{text}</p>
          {children}
        </div>
      </div>
    </div>
  );
}

FullscreenModal.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

FullscreenModal.defaultProps = {};

export default FullscreenModal;
