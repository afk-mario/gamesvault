import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './style.module.css';

function Footer({ className }) {
  const customClassName = classnames(className, styles.footer, 'footer');
  return (
    <footer id="footer" className={customClassName}>
      <div className="wrapper">
        <h2>Footer</h2>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  className: PropTypes.string,
};

Footer.defaultProps = {
  className: null,
};

export default Footer;
