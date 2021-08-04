import PropTypes from 'prop-types';
import humanizeDuration from 'humanize-duration';

import { useGetLockQuery } from 'hooks/api/unlock';

import Spinner from 'components/spinner';
import LockSymbol from 'containers/lock-symbol';

import styles from './style.module.css';

function formatDuration(value) {
  return humanizeDuration(value * 1000, {
    units: ['d', 'h', 'm'],
  });
}

function LockInfo({ lockAddress }) {
  const { data, isLoading } = useGetLockQuery({ lockAddress });

  if (isLoading) return <Spinner />;

  const {
    name,
    keyPrice,
    outstandingKeys,
    maxNumberOfKeys,
    expirationDuration,
    currencyContractAddress,
  } = data;

  return (
    <article className={styles['lock-info-wrapper']}>
      <header>
        <h1>Information for: {name}</h1>
      </header>

      <div className={styles['lock-info']}>
        <div className={styles['lock-info-price']}>
          <span>{keyPrice}</span>
          {currencyContractAddress ? (
            <LockSymbol address={currencyContractAddress} />
          ) : (
            <span>ETH</span>
          )}
        </div>
        <span>
          Keys bought: {outstandingKeys} / {maxNumberOfKeys}
        </span>
        <span>Key Duration: {formatDuration(expirationDuration)}</span>
      </div>
    </article>
  );
}

LockInfo.propTypes = {
  lockAddress: PropTypes.string.isRequired,
};

LockInfo.defaultProps = {};

export default LockInfo;
