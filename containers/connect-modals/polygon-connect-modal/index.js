import { useEthers, ChainId } from '@usedapp/core';

import ModalButton from 'components/modal-button';
import FullscreenModal from 'containers/fullscreen-modal';

const requestBody = {
  method: 'wallet_addEthereumChain',
  params: [
    {
      chainId: '0x89',
      chainName: 'Matic Network',
      rpcUrls: ['https://rpc-mainnet.maticvigil.com'],
      iconUrls: [
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0/logo.png',
      ],
      blockExplorerUrls: ['https://polygonscan.com/'],
      nativeCurrency: {
        name: 'Matic Token',
        symbol: 'MATIC',
        decimals: 18,
      },
    },
  ],
};

function PolygonConnectModal() {
  const { account, chainId } = useEthers();
  const isConnectedToPolygon = chainId === ChainId.Polygon;

  if (!account) return null;
  if (isConnectedToPolygon) return null;

  const addPolygonToMetamask = () => {
    if (window.ethereum) {
      window.ethereum.request(requestBody).catch((error) => {
        if (error.code === 4001) {
          console.error(error);
        }
      });
    }
  };

  return (
    <FullscreenModal
      title="Welcome to GamesVault"
      text="To continue, please connect to the Polygon network."
    >
      <ModalButton
        text="Connect with Polygon"
        icon="/polygon.svg"
        onClick={addPolygonToMetamask}
      />

      <span className="sub-text">
        For more information on connecting to Polygon, read
        <a href="https://docs.matic.network/docs/develop/metamask/config-polygon-on-metamask/">
          Configure Polygon on Metamask
        </a>
        .
      </span>
    </FullscreenModal>
  );
}

export default PolygonConnectModal;
