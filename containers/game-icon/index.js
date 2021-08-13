import PropTypes from 'prop-types';

import { useGetGameById } from 'hooks/api/games';

import Empty from 'components/empty';
import Spinner from 'components/spinner';

function GameIcon({ id }) {
  const queryGame = useGetGameById({ id });
  const { icon } = queryGame.data || {};

  if (queryGame.isLoading) return <Spinner />;

  if (!icon) return <Empty message="No Icon" />;

  return (
    <div>
      <h1>Game Icon</h1>
      <img src={icon} alt={queryGame.data.title} />
    </div>
  );
}

GameIcon.propTypes = {
  id: PropTypes.string.isRequired,
};

GameIcon.defaultProps = {};

export default GameIcon;
