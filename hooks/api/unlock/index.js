import { useQuery, useMutation } from 'react-query';

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

  return useMutation(
    (lockAddress) => purchaseKeyMutation({ walletService, lockAddress }),
    config
  );
}
