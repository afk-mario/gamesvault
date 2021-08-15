import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import Spinner from 'components/spinner';

import {
  useGetGameById,
  useSaveGameMutation,
  useInvalidateAllGamesQuery,
} from 'hooks/api/games';

import Button from 'components/button';

function GameReleaseDateUpdateButton({ id, onSuccess, onError }) {
  const query = useGetGameById({ id });
  const invalidate = useInvalidateAllGamesQuery();
  const mutation = useSaveGameMutation({
    config: {
      onSuccess: (data) => {
        onSuccess(data);
        toast.success('Release date updated');
        invalidate();
      },
      onError: (data) => {
        onError(data);
      },
    },
  });

  if (query.isLoading) return <Spinner />;

  const handleClick = () => {
    const entry = {
      ...query.data,
      releaseDate: new Date().toISOString(),
      _id: id,
    };
    mutation.mutate(entry);
  };

  return (
    <Button onClick={handleClick} loading={mutation.isLoading}>
      Update release date
    </Button>
  );
}

GameReleaseDateUpdateButton.propTypes = {
  id: PropTypes.string.isRequired,
  onSuccess: PropTypes.func,
  onError: PropTypes.func,
};

GameReleaseDateUpdateButton.defaultProps = {
  onSuccess: () => {},
  onError: () => {},
};

export default GameReleaseDateUpdateButton;
