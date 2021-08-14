import PropTypes from 'prop-types';

import { useGetTokenSymbolQuery } from 'hooks/api/unlock';

import Spinner from 'components/spinner';

import styles from './style.module.css';

function LockSymbol({ lockAddress }) {
  const { data, isLoading } = useGetTokenSymbolQuery({ lockAddress });

  if (isLoading) return <Spinner />;

  return <span className={styles['lock-symbol']}>-{data}</span>;
}

LockSymbol.propTypes = {
  lockAddress: PropTypes.string.isRequired,
};

LockSymbol.defaultProps = {};

export default LockSymbol;
