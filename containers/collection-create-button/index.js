import PropTypes from 'prop-types';
import { CgDatabase } from 'react-icons/cg';

import {
  useCreateCollectionFromObjectMutation,
  useInvalidateCollectionsQuery,
} from 'hooks/api/db';

import Button from 'components/button';

import styles from './style.module.css';

function CollectionCreateButton({
  threadId,
  name,
  schema,
  onSuccess,
  onError,
}) {
  const invalidate = useInvalidateCollectionsQuery({ threadId });
  const mutation = useCreateCollectionFromObjectMutation({
    threadId,
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

  const onSubmit = () => {
    mutation.mutate({ schema, name });
  };

  return (
    <Button
      onClick={onSubmit}
      className={styles.submit}
      loading={mutation.isLoading}
    >
      {!mutation.isLoading ? <CgDatabase /> : null}
      <span>Create {name} collection</span>
    </Button>
  );
}

CollectionCreateButton.propTypes = {
  onSuccess: PropTypes.func,
  onError: PropTypes.func,
  threadId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  schema: PropTypes.shape({}).isRequired,
};

CollectionCreateButton.defaultProps = {
  onSuccess: () => {},
  onError: () => {},
};

export default CollectionCreateButton;
