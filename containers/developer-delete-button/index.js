import { useState } from 'react';
import PropTypes from 'prop-types';
import { CgTrash } from 'react-icons/cg';

import {
  useDeleteDeveloperMutation,
  useInvalidateAllDevelopersQuery,
} from 'hooks/api/developers';

import Button from 'components/button';
import RichText from 'components/rich-text';
import Modal from 'components/modal';

import styles from './style.module.css';

function DeveloperDeleteButton({ id, onSuccess, onError }) {
  const [showModal, setShowModal] = useState(false);
  const open = () => setShowModal(true);
  const close = () => setShowModal(false);
  const invalidate = useInvalidateAllDevelopersQuery();
  const mutation = useDeleteDeveloperMutation({
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
        aria-label="delete-developer-modal"
        status="danger"
        onDismiss={close}
        isOpen={showModal}
      >
        <RichText className={styles['delete-developer-button-modal-message']}>
          <p>
            Are you sure you want to delete the developer
            <strong>{id}</strong>?
          </p>
          <p>
            This action <strong>cannot</strong> be undone.
          </p>
        </RichText>
        <div className={styles['delete-developer-button-modal-actions']}>
          <Button onClick={close}>Cancel</Button>
          <Button
            status="danger"
            loading={mutation.isLoading}
            disabled={mutation.isLoading}
            onClick={() => {
              mutation.mutate(id);
            }}
          >
            <CgTrash />
            <span>Delete</span>
          </Button>
        </div>
      </Modal>
    </>
  );
}

DeveloperDeleteButton.propTypes = {
  id: PropTypes.string.isRequired,
  onSuccess: PropTypes.func,
  onError: PropTypes.func,
};

DeveloperDeleteButton.defaultProps = {
  onSuccess: () => {},
  onError: () => {},
};
export default DeveloperDeleteButton;
