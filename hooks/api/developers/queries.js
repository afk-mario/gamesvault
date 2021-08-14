import { ThreadID, Where } from '@textile/hub';

import { DEVELOPERS_COLLECTION_NAME as name } from 'data/developers';

const { NEXT_PUBLIC_DB_ID: threadId } = process.env;

export function getAllDevelopersQuery({ client }) {
  const query = new Where();
  return client.find(ThreadID.fromString(threadId), name, query);
}

export function getDeveloperById({ client, id }) {
  return client.findByID(ThreadID.fromString(threadId), name, id);
}

export function getDeveloperByWalletAddress({ client, walletAddress }) {
  const query = new Where('walletAddress').eq(walletAddress);
  return client.find(ThreadID.fromString(threadId), name, query);
}
