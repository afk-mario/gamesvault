import PropTypes from 'prop-types';
import GameForm from 'components/game-form';

import { useCreateGameMutation } from 'hooks/api/games';

function GameCreateForm({ onSuccess, onError }) {
  const mutation = useCreateGameMutation({
    config: {
      onSuccess: (data) => {
        onSuccess(data);
      },
      onError: (data) => {
        onError(data);
      },
    },
  });

  const onSubmit = (values) => {
    const entry = {
      title: values.title,
      tagline: values.tagline,
      tags: values.tags.split(','),
      releaseDate: values.releaseDate,
      lockAddress: values.lockAddress,
      _id: '',
    };
    console.log('onSubmit', entry);
    mutation.mutate(entry);
  };
  return <GameForm onSubmit={onSubmit} />;
}

GameCreateForm.propTypes = {
  onSuccess: PropTypes.func,
  onError: PropTypes.func,
};

GameCreateForm.defaultProps = {
  onSuccess: () => {},
  onError: () => {},
};

export default GameCreateForm;
