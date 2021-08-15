import PropTypes from 'prop-types';
import Spinner from 'components/spinner';

import { useCreateLockMutation } from 'hooks/api/unlock';
import {
  useGetGameById,
  useSaveGameMutation,
  useInvalidateAllGamesQuery,
} from 'hooks/api/games';

import Button from 'components/button';

function GamePublishButton({ id, onSuccess, onError }) {
  const query = useGetGameById({ id });
  const invalidate = useInvalidateAllGamesQuery();
  const saveGameMutation = useSaveGameMutation({
    config: {
      onSuccess: (data) => {
        onSuccess(data);
        invalidate();
      },
      onError: (data) => {
        onError(data);
      },
    },
  });

  const createLockMutation = useCreateLockMutation({
    config: {
      onSuccess: (data) => {
        saveGameMutation.mutate({
          ...data,
          lockAddress: data,
        });
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
      <span>Fill the game information to be able to publish the game</span>
    );
  if (isPublished) return <span>Game published!</span>;

  return (
    <Button
      onClick={handleClick}
      loading={saveGameMutation.isLoading || createLockMutation.isLoading}
    >
      Publish Game
    </Button>
  );
}

GamePublishButton.propTypes = {
  id: PropTypes.string.isRequired,
  onSuccess: PropTypes.func,
  onError: PropTypes.func,
};

GamePublishButton.defaultProps = {
  onSuccess: () => {},
  onError: () => {},
};

export default GamePublishButton;