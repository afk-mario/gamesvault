import PropTypes from 'prop-types';
import classnames from 'classnames';
import { useEthers } from '@usedapp/core';
import Link from 'next/link';

import MetamaskConnectButton from 'containers/metamask-connect-button';
import { useAuth } from 'context/auth';

import styles from './style.module.css';

function Header({ className }) {
  const customClassName = classnames(className, styles.header, 'header');
  const { account } = useEthers();
  const { identity } = useAuth();

  return (
    <header id="header" className={customClassName}>
      <div className={`${styles.wrapper} wrapper`}>
        <h1>
          <Link href="/">
            <a>Games Vault</a>
          </Link>
        </h1>
        <div className={styles['header-actions']}>
          {account ? (
            <div className={styles['header-account']}>
              <span>metamask</span> <pre>{account}</pre>
            </div>
          ) : (
            <MetamaskConnectButton />
          )}
          {identity ? (
            <div className={styles['header-account']}>
              <span>textile.io</span>
              <pre>{identity.toString()}</pre>{' '}
            </div>
          ) : null}
        </div>
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
