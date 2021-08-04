import React from 'react';
import PropTypes from 'prop-types';

import { WalletService, Web3Service } from '@unlock-protocol/unlock-js';

const Context = React.createContext();
const { Provider } = Context;

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

function UnlockProvider({ children }) {
  const walletService = new WalletService(networks);
  const web3Service = new Web3Service(networks);

  return <Provider value={{ walletService, web3Service }}>{children}</Provider>;
}

UnlockProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const useUnlock = () => React.useContext(Context);

export { UnlockProvider, useUnlock };
