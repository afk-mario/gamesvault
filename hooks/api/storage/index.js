import { QUERY_KEY_FILE, QUERY_KEY_FILE_STATUS } from 'hooks/api/query-keys';
import { useQuery, useMutation } from 'react-query';

import { useStorage } from 'context/storage';

import { getFileQuery, fileStatusQuery } from './queries';
import { putFileMutation } from './mutations';

export function useGetFileQuery(props = {}) {
  const { cid, key = QUERY_KEY_FILE, config = {} } = props;
  const { client } = useStorage();
  return useQuery([key, { cid }], () => getFileQuery({ client, cid }), config);
}

export function useFileStatusQuery(props = {}) {
  const { cid, key = QUERY_KEY_FILE_STATUS, config = {} } = props;
  const { client } = useStorage();
  return useQuery(
    [key, { cid }],
    () => fileStatusQuery({ client, cid }),
    config
  );
}

export function usePutFileMutation(props = {}) {
  const { config } = props;
  const { client } = useStorage();
  return useMutation((values) => putFileMutation({ client, values }), config);
}
