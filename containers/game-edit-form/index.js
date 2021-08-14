import PropTypes from 'prop-types';

import GameForm from 'components/game-form';
import Spinner from 'components/spinner';

import {
  useGetGameById,
  useSaveGameMutation,
  useInvalidateAllGamesQuery,
} from 'hooks/api/games';

function GameEditForm({ id, onSuccess, onError }) {
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
      title: values.title,
      tagline: values.tagline,
      description: values.description,
      tags: values.tags.split(','),
      releaseDate: values.releaseDate,
      lockAddress: values.lockAddress,
      price: values.price,
      _id: id,
    };
    mutation.mutate(entry);
  };

  if (query.isLoading) return <Spinner />;

  const {
    data: { title, tagline, description, tags, releaseDate, lockAddress },
  } = query;

  const defaultValues = {
    title,
    tagline,
    description,
    tags: tags ? tags.join(',') : '',
    releaseDate,
    lockAddress,
  };

  return (
    <GameForm
      onSubmit={onSubmit}
      isLoading={mutation.isLoading}
      defaultValues={defaultValues}
    />
  );
}

GameEditForm.propTypes = {
  id: PropTypes.string.isRequired,
  onSuccess: PropTypes.func,
  onError: PropTypes.func,
};

GameEditForm.defaultProps = {
  onSuccess: () => {},
  onError: () => {},
};

export default GameEditForm;
