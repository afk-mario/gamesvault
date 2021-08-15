import { useEthers } from '@usedapp/core';

import ModalButton from 'components/modal-button';
import FullscreenModal from 'containers/fullscreen-modal';

function MetamaskConnectModal() {
  const { account, activateBrowserWallet } = useEthers();

  if (account) return null;

  return (
    <FullscreenModal
      title="Welcome to GamesVault"
      text="To continue, please sign-in with MetaMask."
    >
      <ModalButton
        text="Sign-in with MetaMask"
        icon="/metamask-fox.svg"
        onClick={activateBrowserWallet}
      />

      <span className="sub-text">
        For more information on MetaMask, read
        <a href="https://metamask.zendesk.com/hc/en-us/articles/360015489531-Getting-Started-With-MetaMask">
          Getting Started With MetaMask
        </a>
        .
      </span>
    </FullscreenModal>
  );
}

export default MetamaskConnectModal;
