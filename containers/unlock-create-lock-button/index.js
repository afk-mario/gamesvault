import { WalletService, Web3Service } from '@unlock-protocol/unlock-js';
import { useEthers } from '@usedapp/core';

import Button from 'components/button';
import { useState } from 'react';

import humanizeDuration from 'humanize-duration';

function UnlockCreateLockButton(props) {
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [errorText, setErrorText] = useState('');

  const [keyPrice, setPrice] = useState('');
  const [name, setName] = useState('');
  const [outstandingKeys, setOutstandingKeys] = useState('');
  const [maxNumberOfKeys, setMaxNumberOfKeys] = useState('');
  const [expirationDuration, setExpirationDuration] = useState('');

  const ethers = useEthers();
  const { lockAddress } = props;
  const { account } = useEthers();

  const networks = {
    4: {
      provider:
        'https://eth-rinkeby.alchemyapi.io/v2/n0NXRSZ9olpkJUPDLBC00Es75jaqysyT',
      locksmithUri: 'https://rinkeby.locksmith.unlock-protocol.com',
      unlockAddress: '0xd8c88be5e8eb88e38e6ff5ce186d764676012b0b',
      unlockAppUrl: 'https://app.unlock-protocol.com',
      subgraphURI:
        'https://api.thegraph.com/subgraphs/name/unlock-protocol/unlock-rinkeby',
    },
  };

  async function createLock() {
    setLoading(true);

    const provider = ethers.library;
    const walletService = new WalletService(networks);
    await walletService.connect(provider);

    walletService.createLock();

    try {
      await walletService.purchaseKey(
        {
          lockAddress,
        },
        (error, hash) => {
          // This is the hash of the transaction!
          console.log({ hash });
        }
      );
    } catch (error) {
      setErrorText(error.message);
      setError(true);
    }

    setLoading(false);
  }

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <Button onClick={createLock}>
            <span>Create Lock</span>
          </Button>
          {isError && <div className="error">Error: {errorText}</div>}
        </div>
      )}
    </div>
  );
}

UnlockCreateLockButton.propTypes = {};

UnlockCreateLockButton.defaultProps = {};

export default UnlockCreateLockButton;
