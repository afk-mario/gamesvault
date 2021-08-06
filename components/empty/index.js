import PropTypes from 'prop-types';
import classnames from 'classnames';
import { CgSmileUpside } from 'react-icons/cg';

import styles from './style.module.css';

function Empty({ message, className }) {
  const customClassName = classnames(className, styles.empty, 'empty');
  return (
    <section className={customClassName}>
      <CgSmileUpside />
      <h3 className={styles['empty-message']}>{message}</h3>
    </section>
  );
}

Empty.propTypes = {
  className: PropTypes.string,
  message: PropTypes.node,
};

Empty.defaultProps = {
  className: null,
  message: null,
};

export default Empty;
