import MetamaskConnectButton from 'containers/metamask-connect-button';
import styles from './style.module.css';

function MetamaskNotConnected() {
  return (
    <span className={styles['not-connected']}>
      <h2>You are not connected</h2>
      <p>To access this content, you need to be connected to MetaMask</p>
      <MetamaskConnectButton />
    </span>
  );
}

MetamaskNotConnected.propTypes = {};

MetamaskNotConnected.defaultProps = {};

export default MetamaskNotConnected;
