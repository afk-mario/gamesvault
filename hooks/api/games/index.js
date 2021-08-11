import { useQuery, useMutation } from 'react-query';

import { useDb } from 'context/db';
import { QUERY_KEY_GAMES_ALL } from 'hooks/api/query-keys';

import { getAllGamesQuery } from './queries';

import { createGameMutation } from './mutations';

export function useGetAllGamesQuery(props = {}) {
  const { config, key = QUERY_KEY_GAMES_ALL } = props;
  const { client } = useDb();

  return useQuery([key], () => getAllGamesQuery({ client }), config);
}

export function useCreateGameMutation(props = {}) {
  const { config } = props;
  const { client } = useDb();

  return useMutation((entry) => createGameMutation({ client, entry }), config);
}
