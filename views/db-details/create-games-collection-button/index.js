import PropTypes from 'prop-types';
import CollectionCreateButton from 'containers/collection-create-button';

import {
  GAMES_COLLECTION_NAME as name,
  GAMES_COLLECTION_SCHEMA as schema,
} from 'data/games';

function CreateGamesCollectionButton({ threadId, onSuccess }) {
  return (
    <CollectionCreateButton
      threadId={threadId}
      name={name}
      schema={schema}
      onSuccess={onSuccess}
    />
  );
}

CreateGamesCollectionButton.propTypes = {
  threadId: PropTypes.string.isRequired,
  onSuccess: PropTypes.func,
};

CreateGamesCollectionButton.defaultProps = {
  onSuccess: () => {},
};

export default CreateGamesCollectionButton;
