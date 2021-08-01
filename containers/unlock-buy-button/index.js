import { WalletService, Web3Service } from '@unlock-protocol/unlock-js';
import { useEthers } from '@usedapp/core';

import Button from 'components/button';
import { useState } from 'react';

function UnlockBuyButton(props) {
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

  async function purchaseLock() {
    setLoading(true);

    const provider = ethers.library;
    const walletService = new WalletService(networks);
    await walletService.connect(provider);

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

  function secondsToDhms(secs) {
    const seconds = Number(secs);
    const d = Math.floor(seconds / (3600 * 24));
    const h = Math.floor((seconds % (3600 * 24)) / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor(seconds % 60);

    const dDisplay = d > 0 ? d + (d === 1 ? ' day, ' : ' days, ') : '';
    const hDisplay = h > 0 ? h + (h === 1 ? ' hour, ' : ' hours, ') : '';
    const mDisplay = m > 0 ? m + (m === 1 ? ' minute, ' : ' minutes, ') : '';
    const sDisplay = s > 0 ? s + (s === 1 ? ' second' : ' seconds') : '';
    return dDisplay + hDisplay + mDisplay + sDisplay;
  }

  async function getLock() {
    const web3Service = new Web3Service(networks);
    const thisLock = await web3Service.getLock(lockAddress, 4);
    setPrice(thisLock.keyPrice);
    setName(thisLock.name);
    setOutstandingKeys(thisLock.outstandingKeys);
    setMaxNumberOfKeys(thisLock.maxNumberOfKeys);
    setExpirationDuration(secondsToDhms(thisLock.expirationDuration));
  }

  getLock();

  return (
    <div>
      {name ? (
        <div>
          <p>Name: {name}</p>
          <p>Price: {keyPrice}</p>
          <p>
            Keys bought: {outstandingKeys} / {maxNumberOfKeys}
          </p>
          <p>Key Duration: {expirationDuration}</p>
        </div>
      ) : (
        <div>Loading lock info...</div>
      )}

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <Button onClick={purchaseLock}>
            <span>Buy Lock</span>
          </Button>
          {isError && <div className="error">Error: {errorText}</div>}
        </div>
      )}
    </div>
  );
}

UnlockBuyButton.propTypes = {};

UnlockBuyButton.defaultProps = {};

export default UnlockBuyButton;
