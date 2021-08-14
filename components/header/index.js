import { useEthers } from '@usedapp/core';
import Link from 'next/link';

import { useDb } from 'context/db';
import { useAuth } from 'context/auth';

import Account from 'containers/account';
import GameNewButton from 'containers/game-new-button';

function Header() {
  const { account } = useEthers();
  const { client } = useDb();
  const { identity } = useAuth();
  const isAdmin = account === process.env.NEXT_PUBLIC_ADMIN_WALLET;

  return (
    <header id="header">
      <nav>
        <Link href="/">
          <a>
            <h1 className="main-logo">
              <img src="/logo.svg" alt="Game Vault" width="50" />
            </h1>
          </a>
        </Link>
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
          {isAdmin ? (
            <li>
              <Link href="/admin">
                <a className="active">Admin</a>
              </Link>
            </li>
          ) : null}
        </ul>
      </nav>
      {account && client && identity ? <GameNewButton /> : null}
      {account && <Account />}
    </header>
  );
}

Header.propTypes = {};

Header.defaultProps = {
  className: null,
};

export default Header;
