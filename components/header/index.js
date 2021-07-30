import PropTypes from 'prop-types';
import classnames from 'classnames';
import { CgLogIn } from 'react-icons/cg';

import Button from 'components/button';

import styles from './style.module.css';

function Header({ className }) {
  const customClassName = classnames(className, styles.header, 'header');

  return (
    <header id="header" className={customClassName}>
      <div className={`${styles.wrapper} wrapper`}>
        <h1>Games Vault</h1>
        <Button>
          <CgLogIn />
          <span>Connect</span>
        </Button>
      </div>
    </header>
  );
}

Header.propTypes = {
  className: PropTypes.string,
};

Header.defaultProps = {
  className: null,
};

export default Header;
