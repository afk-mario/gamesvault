import PropTypes from 'prop-types';
import classnames from 'classnames';
import { useEthers } from '@usedapp/core';
import Link from 'next/link';

import MetamaskConnectButton from 'containers/metamask-connect-button';

import styles from './style.module.css';

function Header({ className }) {
  const customClassName = classnames(className, styles.header, 'header');
  const { account } = useEthers();

  return (
    <header id="header" className={customClassName}>
      <div className={`${styles.wrapper} wrapper`}>
        <h1>
          <Link href="/">
            <a>Games Vault</a>
          </Link>
        </h1>
        {account ? <pre>{account}</pre> : <MetamaskConnectButton />}
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
