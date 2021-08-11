import { ThreadID } from '@textile/hub';
import { GAMES_COLLECTION_NAME as name } from 'data/games';

const { NEXT_PUBLIC_DB_ID: threadId } = process.env;

export function createGameMutation({ client, entry }) {
  return client.create(ThreadID.fromString(threadId), name, [entry]);
}
