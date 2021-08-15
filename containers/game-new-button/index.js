import { useState } from 'react';
import { useEthers } from '@usedapp/core';
import PropTypes from 'prop-types';
import { CgAdd } from 'react-icons/cg';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

import {
  useCreateGameMutation,
  useInvalidateAllGamesQuery,
} from 'hooks/api/games';

import Button from 'components/button';
import Modal from 'components/modal';

import styles from './style.module.css';

function GameNewButton({ onSuccess, onError, className }) {
  const router = useRouter();
  const { account } = useEthers();
  const [showModal, setShowModal] = useState(false);
  const { register, handleSubmit } = useForm({ defaultValues: { name: '' } });
  const open = () => setShowModal(true);
  const close = () => setShowModal(false);
  const invalidate = useInvalidateAllGamesQuery();

  const mutation = useCreateGameMutation({
    config: {
      onSuccess: (data) => {
        onSuccess(data);
        invalidate();
        router.push(`/admin/games/${data[0]}/edit`);
      },
      onError: (data) => {
        console.log('error', data);
        onError(data);
      },
    },
  });

  const onSubmit = (values) => {
    mutation.mutate({
      title: values.title,
      developerWalletAddress: account,
      _id: '',
    });
  };

  return (
    <>
      <Button onClick={open} className={className}>
        <CgAdd />
        <span>Add New</span>
      </Button>
      <Modal
        title="Add New Game"
        aria-label="game-new-modal"
        status="danger"
        onDismiss={close}
        isOpen={showModal}
      >
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="title">Title</label>
          <input {...register('title')} placeholder="My game" />

          <div className={styles['game-new-button-modal-actions']}>
            <Button onClick={close}>Cancel</Button>
            <Button
              type="submit"
              loading={mutation.isLoading}
              disabled={mutation.isLoading}
            >
              <CgAdd />
              <span>Create</span>
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
}

GameNewButton.propTypes = {
  onSuccess: PropTypes.func,
  onError: PropTypes.func,
  className: PropTypes.string,
};

GameNewButton.defaultProps = {
  onSuccess: () => {},
  onError: () => {},
  className: '',
};
export default GameNewButton;
