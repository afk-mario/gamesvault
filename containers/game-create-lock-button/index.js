import PropTypes from 'prop-types';
import Spinner from 'components/spinner';

import { useCreateLockMutation } from 'hooks/api/unlock';
import { useGetGameById } from 'hooks/api/games';

import Button from 'components/button';

function GameCreateLockButton({ id, onSuccess, onError }) {
  const query = useGetGameById({ id });
  const mutation = useCreateLockMutation({
    config: {
      onSuccess,
      onError,
    },
  });

  if (query.isLoading) return <Spinner />;

  const { title, price, lockAddress, build } = query.data;
  const isPublished = lockAddress != null;
  const isEnabled = title != null && price != null && build != null;

  const handleClick = () => {
    mutation.mutate({
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
    <Button onClick={handleClick} loading={mutation.isLoading}>
      Create Lock
    </Button>
  );
}

GameCreateLockButton.propTypes = {
  id: PropTypes.string.isRequired,
  onSuccess: PropTypes.func,
  onError: PropTypes.func,
};

GameCreateLockButton.defaultProps = {
  onSuccess: () => {},
  onError: () => {},
};

export default GameCreateLockButton;
