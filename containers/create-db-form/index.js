import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { CgDatabase } from 'react-icons/cg';

import { useInvalidateQuery, useCreateDbMutation } from 'hooks/api/db';

import Button from 'components/button';

import styles from './style.module.css';

const defaultValues = {
  name: '',
};

function CreateDbForm({ onSuccess, onError }) {
  const invalidate = useInvalidateQuery();
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
      <input {...register('name')} />
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

CreateDbForm.propTypes = {
  onSuccess: PropTypes.func,
  onError: PropTypes.func,
};

CreateDbForm.defaultProps = {
  onSuccess: () => {},
  onError: () => {},
};

export default CreateDbForm;
