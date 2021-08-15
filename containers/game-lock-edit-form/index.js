import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

import Spinner from 'components/spinner';
import Button from 'components/button';

import {
  useGetGameById,
  useSaveGameMutation,
  useInvalidateAllGamesQuery,
} from 'hooks/api/games';

function GameLockEditForm({ id, onSuccess, onError }) {
  const { register, handleSubmit } = useForm({ lockAddress: '' });
  const query = useGetGameById({ id });
  const invalidate = useInvalidateAllGamesQuery();
  const mutation = useSaveGameMutation({
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

  const onSubmit = (values) => {
    const entry = {
      ...query.data,
      lockAddress: values.lockAddress,
      _id: id,
    };
    mutation.mutate(entry);
  };

  if (query.isLoading) return <Spinner />;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {mutation.isError ? (
        <div>An error occurred: {mutation.error.message}</div>
      ) : null}
      <label htmlFor="lockAddress">Lock</label>
      <input {...register('lockAddress')} placeholder="1234..." />
      <Button type="submit" loading={mutation.isLoading}>
        <span>Publish</span>
      </Button>
    </form>
  );
}

GameLockEditForm.propTypes = {
  id: PropTypes.string.isRequired,
  onSuccess: PropTypes.func,
  onError: PropTypes.func,
};

GameLockEditForm.defaultProps = {
  onSuccess: () => {},
  onError: () => {},
};

export default GameLockEditForm;
