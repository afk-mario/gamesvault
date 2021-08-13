// import PropTypes from 'prop-types';
import { Page } from 'components/layouts';
import Search from 'components/search';
import StoreDevelopers from 'components/store-developers';
import StoreNavigation from 'components/store-navigation';
import StoreTags from 'components/store-tags';

import GameGrid from 'containers/game-grid';

import { useAuth } from 'context/auth';
import { useDb } from 'context/db';

function Store() {
  const { identity } = useAuth();
  const { client } = useDb();
  return (
    <Page>
      <div className="container page-container content-header">
        <div className="heading-container">
          <h1 className="page-header">Store</h1>
        </div>
        <StoreNavigation />
      </div>
      <div className="container page-container main-container">
        <section className="sidebar">
          <Search />
          <StoreTags />
          <StoreDevelopers />
        </section>
        <main className="main">{identity && client ? <GameGrid /> : null}</main>
      </div>
    </Page>
  );
}

Store.propTypes = {};

export default Store;
