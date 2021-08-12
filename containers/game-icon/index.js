import PropTypes from 'prop-types';

import { useGetGameById } from 'hooks/api/games';
import { useGetFileQuery } from 'hooks/api/storage';

import Empty from 'components/empty';
import Spinner from 'components/spinner';

function GameIcon({ id }) {
  const queryGame = useGetGameById({ id });
  const { icon } = queryGame.data || {};
  const queryFile = useGetFileQuery({ cid: icon });

  if (queryGame.isLoading || queryFile.isLoading) return <Spinner />;

  const baseUrl = `https://${icon}.ipfs.dweb.link`;
  const [file] = queryFile.data || [];

  if (!file) return <Empty message="No Icon" />;

  const directUrl = `${baseUrl}/${file?.name}`;

  return (
    <div>
      <h1>Game Icon</h1>
      <img src={directUrl} alt={queryGame.data.title} />
    </div>
  );
}

GameIcon.propTypes = {
  id: PropTypes.string.isRequired,
};

GameIcon.defaultProps = {};

export default GameIcon;
