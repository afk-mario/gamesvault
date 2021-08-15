import PropTypes from 'prop-types';
import { useEthers } from '@usedapp/core';

import GameForm from 'components/game-form';

import {
  useCreateGameMutation,
  useInvalidateAllGamesQuery,
} from 'hooks/api/games';

function GameCreateForm({ onSuccess, onError }) {
  const { account } = useEthers();
  const invalidate = useInvalidateAllGamesQuery();
  const mutation = useCreateGameMutation({
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
      title: values.title,
      tagline: values.tagline,
      description: values.description,
      tags: values.tags.split(','),
      releaseDate: values.releaseDate,
      developerWalletAddress: account,
      _id: '',
    };
    console.log('onSubmit', entry);
    mutation.mutate(entry);
  };
  return <GameForm onSubmit={onSubmit} isLoading={mutation.isLoading} />;
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
