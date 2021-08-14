import { ThreadID } from '@textile/hub';
import { DEVELOPERS_COLLECTION_NAME as name } from 'data/developers';

const { NEXT_PUBLIC_DB_ID: threadId } = process.env;

export function createDeveloperMutation({ client, entry }) {
  return client.create(ThreadID.fromString(threadId), name, [entry]);
}

export function saveDeveloperMutation({ client, entry }) {
  return client.save(ThreadID.fromString(threadId), name, [entry]);
}

export function deleteDeveloperMutation({ client, id }) {
  return client.delete(ThreadID.fromString(threadId), name, [id]);
}
