import { useEthers } from '@usedapp/core';
import Link from 'next/link';
import NavLink from 'components/nav-link';

import Account from 'containers/account';

function Header() {
  const { account } = useEthers();
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
            <NavLink href="/" activeClassName="active" exact>
              <a>Store</a>
            </NavLink>
          </li>
          <li>
            <NavLink href="/library" activeClassName="active">
              <a>Library</a>
            </NavLink>
          </li>
          <li>
            <NavLink href="/developer" activeClassName="active">
              <a>Developer</a>
            </NavLink>
          </li>
          {isAdmin ? (
            <li>
              <NavLink href="/admin" activeClassName="active">
                <a>Admin</a>
              </NavLink>
            </li>
          ) : null}
        </ul>
      </nav>
      {account && <Account />}
    </header>
  );
}

Header.propTypes = {};

Header.defaultProps = {
  className: null,
};

export default Header;
