import PropTypes from 'prop-types';
import CollectionCreateButton from 'containers/collection-create-button';

import {
  DEVELOPERS_COLLECTION_NAME as name,
  DEVELOPERS_COLLECTION_SCHEMA as schema,
} from 'data/developers';

function CreateDevelopersCollectionButton({ threadId, onSuccess }) {
  return (
    <CollectionCreateButton
      threadId={threadId}
      name={name}
      schema={schema}
      onSuccess={onSuccess}
    />
  );
}

CreateDevelopersCollectionButton.propTypes = {
  threadId: PropTypes.string.isRequired,
  onSuccess: PropTypes.func,
};

CreateDevelopersCollectionButton.defaultProps = {
  onSuccess: () => {},
};

export default CreateDevelopersCollectionButton;
