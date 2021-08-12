import PropTypes from 'prop-types';
import classnames from 'classnames';
import { useEthers } from '@usedapp/core';
import Account from 'containers/account';
import styles from './style.module.css';

function Header({ className }) {
  const customClassName = classnames(className, styles.header, 'header');
  const { account } = useEthers();

  return (
    <header id="header" className={customClassName}>
      <h1 className="main-logo">
        <img src="logo.svg" alt="Game Vault" width="50" />
      </h1>
      <nav>
        <ul className="main-navigation horizontal-nav nav">
          <li>
            <a href="/" className="active">
              Store
            </a>
          </li>
          <li>
            <a href="/library" className="inactive">
              Library
            </a>
          </li>
          <li>
            <a href="/developer" className="inactive">
              Developer
            </a>
          </li>
        </ul>
      </nav>

      {account && <Account />}
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
