export async function getFileQuery({ client, cid }) {
  if (!cid) return null;
  const res = await client.get(cid);
  const files = await res.files();
  return files;
}

export function fileStatusQuery({ client, cid }) {
  return client.status(cid);
}
