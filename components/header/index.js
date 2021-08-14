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
            <Link href="/store">
              <a className="active">Store</a>
            </Link>
          </li>
          <li>
            <Link href="/library">
              <a className="inactive">Library</a>
            </Link>
          </li>
          <li>
            <Link href="/developer">
              <a className="inactive">Developer</a>
            </Link>
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
