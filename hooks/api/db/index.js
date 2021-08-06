import { useQuery, useMutation, useQueryClient } from 'react-query';

import { useAuth } from 'context/auth';
import { useDb } from 'context/db';
import {
  QUERY_KEY_THREADS,
  QUERY_KEY_THREADS_COLLECTIONS,
  QUERY_KEY_THREAD_INFO,
} from 'hooks/api/query-keys';

import {
  listThreadsQuery,
  listCollectionsQuery,
  getThreadInfoQuery,
} from './queries';

import {
  createDbMutation,
  createCollectionMutation,
  deleteDbMutation,
  deleteCollectionMutation,
} from './mutations';

export function useListThreadsQuery(props = {}) {
  const { key = QUERY_KEY_THREADS, config = {} } = props;
  const { identity } = useAuth();
  const { client } = useDb();

  return useQuery(
    [key, identity.toString()],
    () => listThreadsQuery({ client }),
    config
  );
}

export function useGetThreadInfoQuery(props = {}) {
  const { key = QUERY_KEY_THREAD_INFO, threadId, config = {} } = props;
  const { client } = useDb();

  return useQuery(
    [key, { threadId }],
    () => getThreadInfoQuery({ client, threadId }),
    config
  );
}

export function useListCollectionsQuery(props = {}) {
  const { key = QUERY_KEY_THREADS_COLLECTIONS, threadId, config = {} } = props;
  const { client } = useDb();

  return useQuery(
    [key, { threadId }],
    () => listCollectionsQuery({ client, threadId }),
    config
  );
}

export function useCreateDbMutation(props = {}) {
  const { config } = props;
  const { client } = useDb();

  return useMutation((name) => createDbMutation({ client, name }), config);
}

export function useDeleteDbMutation(props = {}) {
  const { threadId, config } = props;
  const { client } = useDb();

  return useMutation(() => deleteDbMutation({ client, threadId }), config);
}

export function useCreateCollectionMutation(props = {}) {
  const { config, threadId } = props;
  const { client } = useDb();

  return useMutation(
    (name) => createCollectionMutation({ client, threadId, name }),
    config
  );
}

export function useDeleteCollectionMutation(props = {}) {
  const { threadId, name, config } = props;
  const { client } = useDb();

  return useMutation(
    () => deleteCollectionMutation({ client, threadId, name }),
    config
  );
}

export function useInvalidateThreadsQuery(props = {}) {
  const { key = QUERY_KEY_THREADS } = props;
  const queryClient = useQueryClient();
  const { identity } = useAuth();
  return () => {
    queryClient.invalidateQueries([key, identity.toString()]);
  };
}

export function useInvalidateCollectionsQuery(props = {}) {
  const { threadId, key = QUERY_KEY_THREADS_COLLECTIONS } = props;
  const queryClient = useQueryClient();
  return () => {
    queryClient.invalidateQueries([key, { threadId }]);
  };
}
