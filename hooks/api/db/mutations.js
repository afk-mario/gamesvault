import { ThreadID } from '@textile/hub';

export function createDbMutation({ client, name }) {
  return client.newDB(undefined, name);
}

export function createCollectionMutation({ client, threadId, name }) {
  return client.newCollection(ThreadID.fromString(threadId), { name });
}
