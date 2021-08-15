import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import Spinner from 'components/spinner';

import {
  usePurchaseKeyMutation,
  useGetHasValidKeyQuery,
  useGetLockQuery,
} from 'hooks/api/unlock';

import Button from 'components/button';

function GamePurchaseButton({ lockAddress, build }) {
  const getValidKey = useGetHasValidKeyQuery({ lockAddress });
  const hasValidKey = getValidKey.data;
  const validKeyIsLoading = getValidKey.isLoading;

  const getLock = useGetLockQuery({ lockAddress });
  const lock = getLock.data;
  const lockIsLoading = getLock.isLoading;

  const { handleSubmit } = useForm({});
  const mutation = usePurchaseKeyMutation({
    config: {
      onSuccess: () => {},
      onError: () => {},
    },
  });

  const onSubmit = () => {
    mutation.mutate(lockAddress);
  };

  if (validKeyIsLoading) return <Spinner />;

  if (lockIsLoading) return <Spinner />;

  return (
    <>
      {hasValidKey ? (
        <form method="get" action={build}>
          <button className="full-width-btn" type="submit">
            Download
          </button>
        </form>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          {mutation.isError ? (
            <div>An error occurred: {mutation.error.message}</div>
          ) : null}

          <span className="price-cell">
            <span className="game-price eth">{lock.keyPrice}</span>
          </span>

          <Button
            type="submit"
            loading={mutation.isLoading}
            className="full-width-btn"
          >
            <span>Purchase</span>
          </Button>
        </form>
      )}
    </>
  );
}

GamePurchaseButton.propTypes = {
  lockAddress: PropTypes.string.isRequired,
  build: PropTypes.string.isRequired,
};

GamePurchaseButton.defaultProps = {};

export default GamePurchaseButton;
