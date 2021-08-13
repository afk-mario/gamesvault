import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { CgDollar } from 'react-icons/cg';

import { useCreateLockMutation } from 'hooks/api/unlock';

import Button from 'components/button';

import styles from './style.module.css';

function LockCreateForm({ onSuccess, onError }) {
  const { register, handleSubmit, reset } = useForm({});
  const mutation = useCreateLockMutation({
    config: {
      onSuccess: (data) => {
        onSuccess(data);
        reset();
      },
      onError: (data) => {
        onError(data);
      },
    },
  });

  const onSubmit = (values) => {
    mutation.mutate(values.address);
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        {mutation.isError ? (
          <div>An error occurred: {mutation.error.message}</div>
        ) : null}

        <label htmlFor="lockName">Lock Name *</label>
        <input {...register('lockName')} />

        <label htmlFor="expirationDuration">Expiration Duration (Days)*</label>
        <input {...register('expirationDuration')} />

        <label htmlFor="lockKeyPrice">Key Price (MATIC)*</label>
        <input {...register('lockKeyPrice')} type="number" />

        <Button
          className={styles.submit}
          type="submit"
          loading={mutation.isLoading}
        >
          {!mutation.isLoading ? <CgDollar /> : null}
          <span>Create Lock</span>
        </Button>
      </form>
    </>
  );
}

LockCreateForm.propTypes = {
  onSuccess: PropTypes.func,
  onError: PropTypes.func,
};

LockCreateForm.defaultProps = {
  onSuccess: () => {},
  onError: () => {},
};

export default LockCreateForm;
