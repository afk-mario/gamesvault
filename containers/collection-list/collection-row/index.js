import PropTypes from 'prop-types';
import CollectionDeleteButton from 'containers/db-delete-button';
import { toast } from 'react-toastify';

import styles from './style.module.css';

function CollectionRow({ threadId, name, schema }) {
  const onSuccess = () => {
    toast.success(`Deleted Collection ${name}`);
  };

  const onError = () => {
    toast.error('Something went wrong please try again later');
  };

  return (
    <div className={styles['collection-row']}>
      <div className={styles['collection-row-info']}>
        <span>
          <strong>Name:</strong> {name}
        </span>
        <span>
          <strong>Schema:</strong> {schema}
        </span>
      </div>
      <CollectionDeleteButton
        name={name}
        threadId={threadId}
        onSuccess={onSuccess}
        onError={onError}
      />
    </div>
  );
}

CollectionRow.propTypes = {
  threadId: PropTypes.string.isRequired,
  schema: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default CollectionRow;
