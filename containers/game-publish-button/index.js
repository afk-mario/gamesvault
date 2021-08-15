import PropTypes from 'prop-types';
import Spinner from 'components/spinner';

import { useCreateLockMutation } from 'hooks/api/unlock';
import {
  useGetGameById,
  useSaveGameMutation,
  useInvalidateAllGamesQuery,
} from 'hooks/api/games';

import Button from 'components/button';

function GamePublishButton({ id, onSuccess, onError, className }) {
  const query = useGetGameById({ id });
  const invalidate = useInvalidateAllGamesQuery();
  const saveGameMutation = useSaveGameMutation({
    config: {
      onSuccess: () => {
        console.log('Saved the game with lock address');
        onSuccess();
        invalidate();
      },
      onError: (data) => {
        console.log('Failed saving the game');
        onError(data);
      },
    },
  });

  const createLockMutation = useCreateLockMutation({
    config: {
      onSuccess: (data) => {
        const entry = {
          ...query.data,
          lockAddress: data,
          releaseDate: new Date().toISOString(),
        };
        console.log('entry', entry);
        saveGameMutation.mutate(entry);
      },
    },
  });

  if (query.isLoading) return <Spinner />;

  const { title, price, lockAddress, build } = query.data;
  const isPublished = lockAddress != null;
  const isEnabled = title != null && price != null && build != null;

  const handleClick = () => {
    createLockMutation.mutate({
      name: title,
      keyPrice: price,
      maxNumberOfKeys: -1,
      expirationDuration: '3153600000',
    });
  };

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
  if (isPublished) return <span>This game has been published!</span>;

  return (
    <Button
      onClick={handleClick}
      loading={saveGameMutation.isLoading || createLockMutation.isLoading}
      className={className}
    >
      Publish Game
    </Button>
  );
}

GamePublishButton.propTypes = {
  id: PropTypes.string.isRequired,
  onSuccess: PropTypes.func,
  onError: PropTypes.func,
  className: PropTypes.string,
};

GamePublishButton.defaultProps = {
  onSuccess: () => {},
  onError: () => {},
  className: '',
};

export default GamePublishButton;
