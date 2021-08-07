import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { usePurchaseKeyMutation } from 'hooks/api/unlock';
import Button from 'components/button';

import { UNLOCK_DEVELOPER_LOCK_ADDRESS } from 'constants/locks';

import styles from './style.module.css';

function DeveloperSignUpButton({ onSuccess, onError }) {
  const { handleSubmit } = useForm({});
  const mutation = usePurchaseKeyMutation({
    config: {
      onSuccess: (data) => {
        console.log('on success');
        onSuccess(data);
      },
      onError: (data) => {
        console.log('on error');
        onError(data);
      },
    },
  });

  const onSubmit = () => {
    mutation.mutate(UNLOCK_DEVELOPER_LOCK_ADDRESS);
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        {mutation.isError ? (
          <div>An error occurred: {mutation.error.message}</div>
        ) : null}
        <Button
          className={styles.submit}
          type="submit"
          loading={mutation.isLoading}
        >
          <span>Sign Up</span>
        </Button>
      </form>
    </>
  );
}

DeveloperSignUpButton.propTypes = {
  onSuccess: PropTypes.func,
  onError: PropTypes.func,
};

DeveloperSignUpButton.defaultProps = {
  onSuccess: () => {},
  onError: () => {},
};

export default DeveloperSignUpButton;
