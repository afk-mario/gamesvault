import FullscreenModal from 'containers/fullscreen-modal';
import ModalButton from 'components/modal-button';
import { useEthers, ChainId } from '@usedapp/core';

function ConnectModals() {
  const { account, chainId, activateBrowserWallet } = useEthers();

  const addPolygonToMetamask = () => {
    if (window.ethereum) {
      window.ethereum
        .request({
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
        })
        .catch((error) => {
          if (error.code === 4001) {
            console.error(error);
          }
        });
    }
  };

  return (
    <>
      {!account ? (
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
      ) : (
        <>
          {chainId !== ChainId.Polygon && (
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
          )}
        </>
      )}
    </>
  );
}

ConnectModals.propTypes = {};

ConnectModals.defaultProps = {};

export default ConnectModals;
