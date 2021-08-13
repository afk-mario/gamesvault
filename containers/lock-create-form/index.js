import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { CgDollar } from 'react-icons/cg';

import { useCreateLockMutation } from 'hooks/api/unlock';

import Button from 'components/button';

import styles from './style.module.css';

const defaultValues = {
  name: 'Lock Name',
  expirationDuration: '100',
  keyPrice: '10',
  maxNumberOfKeys: '-1',
};

function LockCreateForm({ onSuccess, onError }) {
  const { register, handleSubmit, reset } = useForm({
    defaultValues,
  });
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
    const entry = {
      name: values.name,
      expirationDuration: values.expirationDuration,
      keyPrice: values.keyPrice,
      maxNumberOfKeys: values.maxNumberOfKeys,
    };
    mutation.mutate(entry);
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        {mutation.isError ? (
          <div>An error occurred: {mutation.error.message}</div>
        ) : null}

        <label htmlFor="name">Lock Name *</label>
        <input {...register('name')} />

        <label htmlFor="expirationDuration">Expiration Duration*</label>
        <input {...register('expirationDuration')} />

        <label htmlFor="keyPrice">Key Price (MATIC)*</label>
        <input {...register('keyPrice')} type="number" />

        <label htmlFor="maxNumberOfKeys">
          Max number of keys (-1 is infinity)*
        </label>
        <input {...register('maxNumberOfKeys')} type="number" />

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
