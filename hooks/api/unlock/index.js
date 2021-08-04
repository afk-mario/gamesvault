import { useQuery, useMutation } from 'react-query';
import { useEthers } from '@usedapp/core';

import { QUERY_KEY_UNLOCK_FILE } from 'hooks/api/query-keys';
import { useUnlock } from 'context/unlock';

import { getLockQuery } from './queries';
import { purchaseKeyMutation } from './mutations';

export function useGetLockQuery(props = {}) {
  const { lockAddress, key = QUERY_KEY_UNLOCK_FILE, config = {} } = props;
  const { client } = useUnlock();
  return useQuery(
    [key, { lockAddress }],
    () => getLockQuery({ client, lockAddress }),
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
