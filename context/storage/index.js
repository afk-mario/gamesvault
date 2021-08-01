import React from 'react';
import PropTypes from 'prop-types';

import { Web3Storage } from 'web3.storage';

const Context = React.createContext();
const { Provider } = Context;

function StorageProvider({ children }) {
  const client = new Web3Storage({
    token: process.env.NEXT_PUBLIC_WEB3_STORAGE,
  });

  return <Provider value={{ client }}>{children}</Provider>;
}

StorageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const useStorage = () => React.useContext(Context);

export { StorageProvider, useStorage };
