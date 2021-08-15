import PropTypes from 'prop-types';
import { CgAdd } from 'react-icons/cg';
import { useForm } from 'react-hook-form';

import Button from 'components/button';
import { emptyDefaultValues } from './constants';

import styles from './style.module.css';

function GameForm({ defaultValues, onSubmit, error, isLoading }) {
  const { register, handleSubmit } = useForm({ defaultValues });

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      {error ? <div>An error occurred: {error.message}</div> : null}
      <label htmlFor="title">Title</label>
      <input {...register('title')} placeholder="My game" />

      <label htmlFor="tagline">Tagline</label>
      <input {...register('tagline')} placeholder="My game is awesome" />

      <label htmlFor="description">Description</label>
      <textarea
        {...register('description')}
        placeholder="My game is awesome because..."
      />

      <label htmlFor="tags">Tags</label>
      <input {...register('tags')} placeholder="tag1,tag2" />

      <label htmlFor="Price">Price</label>
      <input step="any" min="0" type="number" {...register('price')} />

      <Button className={styles.submit} type="submit" loading={isLoading}>
        {!isLoading ? <CgAdd /> : null}
        <span>Submit</span>
      </Button>
    </form>
  );
}

GameForm.propTypes = {
  onSubmit: PropTypes.func,
  defaultValues: PropTypes.shape({}),
  error: PropTypes.shape({
    message: PropTypes.string.isRequired,
  }),
  isLoading: PropTypes.bool,
};

GameForm.defaultProps = {
  onSubmit: () => {},
  defaultValues: emptyDefaultValues,
  error: null,
  isLoading: false,
};

export default GameForm;
