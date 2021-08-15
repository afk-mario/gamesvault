import { useState } from 'react';
import PropTypes from 'prop-types';
import { CgTrash } from 'react-icons/cg';

import {
  useDeleteGameMutation,
  useInvalidateAllGamesQuery,
} from 'hooks/api/games';

import Button from 'components/button';
import RichText from 'components/rich-text';
import Modal from 'components/modal';

import styles from './style.module.css';

function GameDeleteButton({ id, onSuccess, onError, className }) {
  const [showModal, setShowModal] = useState(false);
  const open = () => setShowModal(true);
  const close = () => setShowModal(false);
  const invalidate = useInvalidateAllGamesQuery();
  const mutation = useDeleteGameMutation({
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
      <Button onClick={open} className={className}>
        <CgTrash />
        <span>Delete</span>
      </Button>
      <Modal
        title="Delete game"
        aria-label="delete-game-modal"
        status="danger"
        onDismiss={close}
        isOpen={showModal}
      >
        <RichText className={styles['delete-game-button-modal-message']}>
          <p>
            Are you sure you want to delete the game
            <strong>{id}</strong>?
          </p>
          <p>
            This action <strong>cannot</strong> be undone.
          </p>
        </RichText>
        <div className={styles['delete-game-button-modal-actions']}>
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

GameDeleteButton.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  onSuccess: PropTypes.func,
  onError: PropTypes.func,
};

GameDeleteButton.defaultProps = {
  className: '',
  onSuccess: () => {},
  onError: () => {},
};
export default GameDeleteButton;
