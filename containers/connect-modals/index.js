import MetamaskConnectModal from './metamask-connect-modal';
import PolygonConnectModal from './polygon-connect-modal';

function ConnectModals() {
  return (
    <>
      <MetamaskConnectModal />
      <PolygonConnectModal />
    </>
  );
}

ConnectModals.propTypes = {};

ConnectModals.defaultProps = {};

export default ConnectModals;
