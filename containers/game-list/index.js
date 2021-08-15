// import PropTypes from 'prop-types';

import { useGetAllGamesQuery } from 'hooks/api/games';
import GameNewButton from 'containers/game-new-button';
import Spinner from 'components/spinner';
import GameRow from './game-row';

function GameList() {
  const { data, isLoading } = useGetAllGamesQuery();

  if (isLoading) return <Spinner />;

  return (
    <>
      <h2>Games</h2>
      <GameNewButton className="corner-btn" />
      {!data || data?.length === 0 ? (
        <p>No games have been added for this developer.</p>
      ) : (
        <p>Below is your list of games.</p>
      )}
      <div className="grid-container">
        {data.map((item) => {
          const { _id: id, _coverImage: coverImage } = item;
          return <GameRow key={id} coverImage={coverImage} {...item} />;
        })}
      </div>
    </>
  );
}

GameList.propTypes = {};

GameList.defaultProps = {};

export default GameList;
