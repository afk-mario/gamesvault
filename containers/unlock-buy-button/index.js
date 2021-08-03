import PropTypes from 'prop-types';
import humanizeDuration from 'humanize-duration';

import { usePurchaseKeyMutation, useGetLockQuery } from 'hooks/api/unlock';

import Button from 'components/button';

function formatDuration(value) {
  return humanizeDuration(value * 1000, {
    units: ['d', 'h', 'm'],
  });
}

function UnlockBuyButton({ lockAddress }) {
  const mutation = usePurchaseKeyMutation({ lockAddress });
  const query = useGetLockQuery({ lockAddress });

  return (
    <div>
      {query.data ? (
        <div>
          <p>Name: {query.data.name}</p>
          <p>
            Price: {query.data.keyPrice} {query.data.symbol}
          </p>
          <p>
            Keys bought: {query.data.outstandingKeys} /{' '}
            {query.data.maxNumberOfKeys}
          </p>
          <p>Key Duration: {formatDuration(query.data.expirationDuration)}</p>
        </div>
      ) : (
        <div>Loading lock info...</div>
      )}

      {mutation.isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <Button onClick={mutation.mutate}>
            <span>Buy Lock</span>
          </Button>
          {mutation.isError && (
            <div className="error">Error: {mutation.error.message}</div>
          )}
        </div>
      )}
    </div>
  );
}

UnlockBuyButton.propTypes = {
  lockAddress: PropTypes.string.isRequired,
};

UnlockBuyButton.defaultProps = {};

export default UnlockBuyButton;
