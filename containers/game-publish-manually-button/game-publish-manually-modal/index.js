import PropTypes from 'prop-types';
import Spinner from 'components/spinner';

import { useGetGameById } from 'hooks/api/games';

import GameCreateLockButton from 'containers/game-create-lock-button';
import GameLockEditForm from 'containers/game-lock-edit-form';

function GamePublishManuallyModal({ id, onSuccess, onError }) {
  const query = useGetGameById({ id });

  if (query.isLoading) return <Spinner />;

  const { title, price, lockAddress, build } = query.data;
  const isPublished = lockAddress != null;
  const isEnabled = title != null && price != null && build != null;

  if (!isEnabled)
    return (
      <div>
        <h2>Missing information</h2>
        <ul>
          {title == null ? (
            <li>Make sure to fill the title of the game</li>
          ) : null}
          {price == null ? (
            <li>Make sure to fill the price of the game</li>
          ) : null}
          {build == null ? (
            <li>Make sure to upload a build of the game</li>
          ) : null}
        </ul>
      </div>
    );

  if (isPublished) return <h2>Game already published!</h2>;

  return (
    <div>
      <GameLockEditForm id={id} onSuccess={onSuccess} onError={onError} />
      <GameCreateLockButton id={id} />
    </div>
  );
}

GamePublishManuallyModal.propTypes = {
  id: PropTypes.string.isRequired,
  onSuccess: PropTypes.func,
  onError: PropTypes.func,
};

GamePublishManuallyModal.defaultProps = {
  onSuccess: () => {},
  onError: () => {},
};

export default GamePublishManuallyModal;
