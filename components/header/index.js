import { useEthers } from '@usedapp/core';
import Account from 'containers/account';
import GameNewButton from 'containers/game-new-button';

function Header() {
  const { account } = useEthers();

  return (
    <header id="header">
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
      {account ? <GameNewButton /> : null}
      {account && <Account />}
    </header>
  );
}

Header.propTypes = {};

Header.defaultProps = {
  className: null,
};

export default Header;
