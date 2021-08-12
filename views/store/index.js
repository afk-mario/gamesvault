// import PropTypes from 'prop-types';
import GameCard from 'components/game-card';
import { Page } from 'components/layouts';
import Search from 'components/search';
import StoreDevelopers from 'components/store-developers';
import StoreNavigation from 'components/store-navigation';
import StoreTags from 'components/store-tags';

function Store() {
  const games = [];
  for (let i = 0; i < 20; i += 1) {
    games.push(
      <GameCard
        gameTitle="Awesome Game Title"
        gameDeveloper="Developer Name"
        gamePrice={0.01}
        imgUrl={`https://source.unsplash.com/174x232?random?sig=${i}`}
      />
    );
  }

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
        <main className="main">
          <div className="main-content grid">{games}</div>
        </main>
      </div>
    </Page>
  );
}

Store.propTypes = {};

export default Store;
