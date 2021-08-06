import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { CgDatabase } from 'react-icons/cg';

import { useInvalidateThreadsQuery, useCreateDbMutation } from 'hooks/api/db';

import Button from 'components/button';

import styles from './style.module.css';

const defaultValues = {
  name: '',
};

function DbCreateForm({ onSuccess, onError }) {
  const invalidate = useInvalidateThreadsQuery();
  const { register, handleSubmit, reset } = useForm({
    defaultValues,
  });
  const mutation = useCreateDbMutation({
    config: {
      onSuccess: (data) => {
        onSuccess(data);
        invalidate();
        reset();
      },
      onError: (data) => {
        onError(data);
      },
    },
  });

  const onSubmit = (values) => {
    mutation.mutate(values.name);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      {mutation.isError ? (
        <div>An error occurred: {mutation.error.message}</div>
      ) : null}
      <label htmlFor="name">Name *</label>
      <input {...register('name')} placeholder="users-db..." />
      <Button
        className={styles.submit}
        type="submit"
        loading={mutation.isLoading}
      >
        {!mutation.isLoading ? <CgDatabase /> : null}
        <span>Create</span>
      </Button>
    </form>
  );
}

DbCreateForm.propTypes = {
  onSuccess: PropTypes.func,
  onError: PropTypes.func,
};

DbCreateForm.defaultProps = {
  onSuccess: () => {},
  onError: () => {},
};

export default DbCreateForm;
