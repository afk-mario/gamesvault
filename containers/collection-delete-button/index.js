import { useState } from 'react';
import PropTypes from 'prop-types';
import { CgTrash } from 'react-icons/cg';

import {
  useDeleteCollectionMutation,
  useInvalidateCollectionsQuery,
} from 'hooks/api/db';

import Button from 'components/button';
import RichText from 'components/rich-text';
import Modal from 'components/modal';

import styles from './style.module.css';

function CollectionDeleteButton({ threadId, name, onSuccess, onError }) {
  const [showModal, setShowModal] = useState(false);
  const open = () => setShowModal(true);
  const close = () => setShowModal(false);
  const invalidate = useInvalidateCollectionsQuery();
  const mutation = useDeleteCollectionMutation({
    threadId,
    name,
    config: {
      onSuccess: (data) => {
        invalidate();
        onSuccess(data);
        close();
      },
      onError: (data) => {
        onError(data);
      },
    },
  });

  return (
    <>
      <Button onClick={open}>
        <CgTrash />
        <span>Delete</span>
      </Button>
      <Modal
        title="Delete DB"
        aria-label="delete-team-modal"
        status="danger"
        onDismiss={close}
        isOpen={showModal}
      >
        <RichText className={styles['delete-collection-button-modal-message']}>
          <p>
            Are you sure you want to delete the collection
            <strong>{name}</strong>?
          </p>
          <p>
            This action <strong>cannot</strong> be undone.
          </p>
        </RichText>
        <div className={styles['delete-collection-button-modal-actions']}>
          <Button onClick={close}>Cancel</Button>
          <Button
            status="danger"
            loading={mutation.isLoading}
            disabled={mutation.isLoading}
            onClick={mutation.mutate}
          >
            <CgTrash />
            <span>Delete</span>
          </Button>
        </div>
      </Modal>
    </>
  );
}

CollectionDeleteButton.propTypes = {
  threadId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onSuccess: PropTypes.func,
  onError: PropTypes.func,
};

CollectionDeleteButton.defaultProps = {
  onSuccess: () => {},
  onError: () => {},
};
export default CollectionDeleteButton;
