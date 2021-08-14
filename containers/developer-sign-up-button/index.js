import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import {
  usePurchaseKeyMutation,
  useInvalidateValidKeyQuery,
} from 'hooks/api/unlock';
import Button from 'components/button';

import { UNLOCK_DEVELOPER_LOCK_ADDRESS } from 'constants/locks';

function DeveloperSignUpButton({ onSuccess, onError }) {
  const invalidate = useInvalidateValidKeyQuery();
  const { handleSubmit } = useForm({});
  const mutation = usePurchaseKeyMutation({
    config: {
      onSuccess: (data) => {
        console.log('on success');
        onSuccess(data);
        invalidate(UNLOCK_DEVELOPER_LOCK_ADDRESS);
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
      <form onSubmit={handleSubmit(onSubmit)}>
        {mutation.isError ? (
          <div>An error occurred: {mutation.error}</div>
        ) : null}
        <Button
          type="submit"
          loading={mutation.isLoading}
          className="btn-text btn-wide"
        >
          Sign Up
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
