import { ThreadID, Where } from '@textile/hub';
import { GAMES_COLLECTION_NAME as name } from 'data/games';

const { NEXT_PUBLIC_DB_ID: threadId } = process.env;

export function getAllGamesQuery({ client }) {
  const query = new Where();
  return client.find(ThreadID.fromString(threadId), name, query);
}
