import { WalletService, Web3Service } from '@unlock-protocol/unlock-js';
import { useEthers } from '@usedapp/core';

import Button from 'components/button';
import { useState } from 'react';

import humanizeDuration from 'humanize-duration';

function UnlockBuyButton(props) {
  const [lockLoaded, setLockLoaded] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [errorText, setErrorText] = useState('');

  const [name, setName] = useState('');
  const [keyPrice, setKeyPrice] = useState('');
  const [outstandingKeys, setOutstandingKeys] = useState('');
  const [maxNumberOfKeys, setMaxNumberOfKeys] = useState('');
  const [expirationDuration, setExpirationDuration] = useState('');
  const [symbol, setSymbol] = useState('');

  const ethers = useEthers();
  const { lockAddress } = props;

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

  async function getLock() {
    const web3Service = new Web3Service(networks);
    const thisLock = await web3Service.getLock(lockAddress, 4);

    setName(thisLock.name);
    setKeyPrice(thisLock.keyPrice);
    setOutstandingKeys(thisLock.outstandingKeys);
    setMaxNumberOfKeys(thisLock.maxNumberOfKeys);

    setExpirationDuration(
      humanizeDuration(thisLock.expirationDuration * 1000, {
        units: ['d', 'h', 'm'],
      })
    );

    let thisSymbol = 'ETH';
    const address = thisLock.currencyContractAddress;
    if (address) {
      thisSymbol = await web3Service.getTokenSymbol(address, 4);
    }
    setSymbol(thisSymbol);

    setLockLoaded(true);

    console.log('get lock');
  }

  // Need this to call only once when the page has loaded
  getLock();

  return (
    <div>
      {lockLoaded ? (
        <div>
          <p>Name: {name}</p>
          <p>
            Price: {keyPrice} {symbol}
          </p>
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
