import { QUERY_KEY_OWNED_LOCKS } from 'hooks/api/query-keys';

import { useQuery } from 'react-query';
import { getAllOwnedLocks } from './queries';

export function useGetAllOwnedLocks(props = {}) {
  const { account, key = QUERY_KEY_OWNED_LOCKS, config = {} } = props;

  return useQuery(
    [key, { account }],
    () => {
      return getAllOwnedLocks({
        account,
      });
    },
    config
  );
}
