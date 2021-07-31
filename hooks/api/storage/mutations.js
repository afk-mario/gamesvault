export function putFileMutation({ client, values, options = {} }) {
  return client.put(values, options);
}
