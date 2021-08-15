import { ThreadID, Where } from '@textile/hub';
import { GAMES_COLLECTION_NAME as name } from 'data/games';

const { NEXT_PUBLIC_DB_ID: threadId } = process.env;

export function getAllGamesQuery({ client }) {
  const query = new Where();
  return client.find(ThreadID.fromString(threadId), name, query);
}

export function getGameById({ client, id }) {
  return client.findByID(ThreadID.fromString(threadId), name, id);
}

export function getGameByLock({ client, lockAddress }) {
  const query = new Where('lockAddress').eq(lockAddress);
  return client.find(ThreadID.fromString(threadId), name, query);
}

export function getPublishedGames({ client }) {
  const query = new Where('lockAddress').ne('');
  return client.find(ThreadID.fromString(threadId), name, query);
}

export function getGamesByDeveloper({ client, walletAddress }) {
  const query = new Where('walletAddress').eq(walletAddress);
  return client.find(ThreadID.fromString(threadId), name, query);
}
