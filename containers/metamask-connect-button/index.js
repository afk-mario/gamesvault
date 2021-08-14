// import PropTypes from 'prop-types';
import { useEthers } from '@usedapp/core';
import { CgLogIn } from 'react-icons/cg';

import Button from 'components/button';

function MetamaskConnectButton() {
  const { activateBrowserWallet } = useEthers();

  return (
    <Button onClick={activateBrowserWallet}>
      <CgLogIn />
      <span>Connect</span>
    </Button>
  );
}

MetamaskConnectButton.propTypes = {};

MetamaskConnectButton.defaultProps = {};

export default MetamaskConnectButton;
