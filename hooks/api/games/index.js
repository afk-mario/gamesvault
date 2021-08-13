import { useQuery, useMutation, useQueryClient } from 'react-query';

import { useDb } from 'context/db';
import { QUERY_KEY_GAMES_ALL } from 'hooks/api/query-keys';

import { getAllGamesQuery, getGameById } from './queries';

import {
  createGameMutation,
  deleteGameMutation,
  saveGameMutation,
} from './mutations';

export function useGetAllGamesQuery(props = {}) {
  const { config, key = QUERY_KEY_GAMES_ALL } = props;
  const { client } = useDb();

  return useQuery([key], () => getAllGamesQuery({ client }), config);
}

export function useGetGameById(props = {}) {
  const { id, config, key = QUERY_KEY_GAMES_ALL } = props;
  const { client } = useDb();

  return useQuery([key, { id }], () => getGameById({ client, id }), config);
}

export function useCreateGameMutation(props = {}) {
  const { config } = props;
  const { client } = useDb();

  return useMutation((entry) => createGameMutation({ client, entry }), config);
}

export function useSaveGameMutation(props = {}) {
  const { config } = props;
  const { client } = useDb();

  return useMutation((entry) => saveGameMutation({ client, entry }), config);
}

export function useDeleteGameMutation(props = {}) {
  const { config } = props;
  const { client } = useDb();

  return useMutation((id) => deleteGameMutation({ client, id }), config);
}

export function useInvalidateAllGamesQuery(props = {}) {
  const { key = QUERY_KEY_GAMES_ALL } = props;
  const queryClient = useQueryClient();
  return () => {
    queryClient.invalidateQueries([key]);
  };
}
