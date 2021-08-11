import PropTypes from 'prop-types';
import { CgAdd } from 'react-icons/cg';
import { useForm } from 'react-hook-form';

import Button from 'components/button';
import { emptyDefaultValues } from './constants';

import styles from './style.module.css';

function DeveloperForm({ defaultValues, onSubmit, error, isLoading }) {
  const { register, handleSubmit } = useForm({ defaultValues });

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      {error ? <div>An error occurred: {error.message}</div> : null}
      <label htmlFor="name">Name</label>
      <input {...register('name')} placeholder="Mr Developer" />

      <label htmlFor="walletAddress">Wallet Address</label>
      <input {...register('walletAddress')} placeholder="random wallet" />

      <label htmlFor="description">Description</label>
      <textarea
        {...register('description')}
        placeholder="I'm the person from ..."
      />

      <Button className={styles.submit} type="submit" loading={isLoading}>
        {!isLoading ? <CgAdd /> : null}
        <span>Submit</span>
      </Button>
    </form>
  );
}

DeveloperForm.propTypes = {
  onSubmit: PropTypes.func,
  defaultValues: PropTypes.shape({}),
  error: PropTypes.shape({
    message: PropTypes.string.isRequired,
  }),
  isLoading: PropTypes.bool,
};

DeveloperForm.defaultProps = {
  onSubmit: () => {},
  defaultValues: emptyDefaultValues,
  error: null,
  isLoading: false,
};

export default DeveloperForm;
