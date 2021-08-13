// import PropTypes from 'prop-types';

import { useGetAllGamesQuery } from 'hooks/api/games';

import Spinner from 'components/spinner';
import Empty from 'components/empty';

import GameCard from 'containers/game-card';

function GameGrid() {
  const { data, isLoading } = useGetAllGamesQuery();

  if (isLoading) return <Spinner />;

  if (!data || data?.length === 0) {
    return <Empty message="No Games" />;
  }
  return (
    <section className="main-content grid">
      {data.map((item) => {
        const { _id: id } = item;
        return (
          <GameCard
            key={id}
            gameTitle={item.title}
            gamePrice={0}
            developerWalletAddress={item.developerWalletAddress}
            imgUrl={item.cover}
          />
        );
      })}
    </section>
  );
}

GameGrid.propTypes = {};

GameGrid.defaultProps = {};

export default GameGrid;
