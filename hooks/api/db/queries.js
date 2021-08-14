import { ThreadID } from '@textile/hub';

export function listThreadsQuery({ client }) {
  return client.listThreads();
}

export function getThreadInfoQuery({ client, threadId }) {
  return client.getDBInfo(ThreadID.fromString(threadId));
}

export function listCollectionsQuery({ client, threadId }) {
  return client.listCollections(ThreadID.fromString(threadId));
}

export function getCollectionInfoQuery({ client, threadId, name }) {
  return client.getCollectionInfo(ThreadID.fromString(threadId), name);
}
