import PropTypes from 'prop-types';
import { CgSpinner } from 'react-icons/cg';
import classnames from 'classnames';

import styles from './style.module.css';

function Spinner({ className }) {
  const customClassName = classnames('spinner', styles.spinner, className);
  return <CgSpinner className={customClassName} />;
}

Spinner.propTypes = {
  className: PropTypes.string,
};

Spinner.defaultProps = {
  className: null,
};

export default Spinner;
