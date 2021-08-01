// import PropTypes from 'prop-types';
import { Page } from 'components/layouts';
import { useEthers } from '@usedapp/core';
import MetamaskConnectButton from 'containers/metamask-connect-button';
import UnlockBuyButton from 'containers/unlock-buy-button';

function BuyLock() {
  const { account } = useEthers();

  return (
    <Page>
      <div className="wrapper">
        <h1>Buy Lock</h1>

        {account ? (
          <div>
            <UnlockBuyButton lockAddress="0xD0d33b9531dbD071B3baDDabe9fb289A60AC8cB8" />
          </div>
        ) : (
          <MetamaskConnectButton />
        )}
      </div>
    </Page>
  );
}

BuyLock.propTypes = {};

export default BuyLock;
