import { useQuery, useMutation } from 'react-query';
import { useEthers } from '@usedapp/core';

import {
  QUERY_KEY_UNLOCK_FILE,
  QUERY_KEY_UNLOCK_SYMBOL,
} from 'hooks/api/query-keys';
import { useUnlock } from 'context/unlock';

import { getLockQuery, getTokenSymbolQuery } from './queries';
import { purchaseKeyMutation } from './mutations';

const DEFAULT_NETWORK_NUMBER = 4;

export function useGetLockQuery(props = {}) {
  const {
    lockAddress,
    networkNumber = DEFAULT_NETWORK_NUMBER,
    key = QUERY_KEY_UNLOCK_FILE,
    config = {},
  } = props;
  const { web3Service } = useUnlock();
  return useQuery(
    [key, { lockAddress }],
    () => getLockQuery({ web3Service, lockAddress, networkNumber }),
    config
  );
}

export function useGetTokenSymbolQuery(props = {}) {
  const {
    address,
    networkNumber = DEFAULT_NETWORK_NUMBER,
    key = QUERY_KEY_UNLOCK_SYMBOL,
    config = {},
  } = props;
  const { web3Service } = useUnlock();
  return useQuery(
    [key, { address }],
    () => getTokenSymbolQuery({ web3Service, address, networkNumber }),
    config
  );
}

export function usePurchaseKeyMutation(props = {}) {
  const { config } = props;
  const { walletService } = useUnlock();
  const { library } = useEthers();

  return useMutation(
    (lockAddress) =>
      purchaseKeyMutation({ walletService, provider: library, lockAddress }),
    config
  );
}
