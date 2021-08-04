import PropTypes from 'prop-types';

import { useGetTokenSymbolQuery } from 'hooks/api/unlock';

import Spinner from 'components/spinner';

import styles from './style.module.css';

function LockSymbol({ address }) {
  const { data, isLoading } = useGetTokenSymbolQuery({ address });

  if (isLoading) return <Spinner />;

  return <span className={styles['lock-symbol']}>-{data}</span>;
}

LockSymbol.propTypes = {
  address: PropTypes.string.isRequired,
};

LockSymbol.defaultProps = {};

export default LockSymbol;
