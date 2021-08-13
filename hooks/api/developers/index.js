import { useQuery, useMutation, useQueryClient } from 'react-query';

import { useDb } from 'context/db';
import { QUERY_KEY_DEVELOPERS_ALL } from 'hooks/api/query-keys';

import {
  getAllDevelopersQuery,
  getDeveloperById,
  getDeveloperByWalletAddress,
} from './queries';

import {
  createDeveloperMutation,
  deleteDeveloperMutation,
  saveDeveloperMutation,
} from './mutations';

export function useGetAllDevelopersQuery(props = {}) {
  const { config, key = QUERY_KEY_DEVELOPERS_ALL } = props;
  const { client } = useDb();

  return useQuery([key], () => getAllDevelopersQuery({ client }), config);
}

export function useGetDeveloperById(props = {}) {
  const { id, config, key = QUERY_KEY_DEVELOPERS_ALL } = props;
  const { client } = useDb();

  return useQuery(
    [key, { id }],
    () => getDeveloperById({ client, id }),
    config
  );
}

export function useGetDeveloperByWalletAddress(props = {}) {
  const {
    walletAddress,
    config,
    key = QUERY_KEY_DEVELOPERS_ALL,
  } = props;
  const { client } = useDb();
  return useQuery(
    [key, { walletAddress }],
    () => getDeveloperByWalletAddress({ client, walletAddress }),
    config
  );
}

export function useCreateDeveloperMutation(props = {}) {
  const { config } = props;
  const { client } = useDb();

  return useMutation(
    (entry) => createDeveloperMutation({ client, entry }),
    config
  );
}

export function useSaveDeveloperMutation(props = {}) {
  const { config } = props;
  const { client } = useDb();

  return useMutation(
    (entry) => saveDeveloperMutation({ client, entry }),
    config
  );
}

export function useDeleteDeveloperMutation(props = {}) {
  const { config } = props;
  const { client } = useDb();

  return useMutation((id) => deleteDeveloperMutation({ client, id }), config);
}

export function useInvalidateAllDevelopersQuery(props = {}) {
  const { key = QUERY_KEY_DEVELOPERS_ALL } = props;
  const queryClient = useQueryClient();
  return () => {
    queryClient.invalidateQueries([key]);
  };
}
