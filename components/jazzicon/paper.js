import PropTypes from 'prop-types';

const styles = {
  borderRadius: '50px',
  display: 'inline-block',
  margin: 0,
  overflow: 'hidden',
  padding: 0,
};

function Paper({ children, color, diameter, style: styleOverrides }) {
  return (
    <div
      className="paper"
      style={{
        ...styles,
        backgroundColor: color,
        height: diameter,
        width: diameter,
        ...styleOverrides,
      }}
    >
      {children}
    </div>
  );
}

Paper.propTypes = {
  color: PropTypes.string,
  diameter: PropTypes.number,
  style: PropTypes.shape({}),
  children: PropTypes.node.isRequired,
};

Paper.defaultProps = {
  color: null,
  diameter: null,
  style: null,
};

export default Paper;
