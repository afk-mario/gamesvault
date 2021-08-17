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

export async function getGameByLock({ client, lockAddress }) {
  const query = new Where();
  const allGames = await client.find(
    ThreadID.fromString(threadId),
    name,
    query
  );

  const matchingGames = allGames;

  for (let i = matchingGames.length - 1; i >= 0; i -= 1) {
    const game = matchingGames[i];

    if (game.lockAddress.toLowerCase() !== lockAddress.toLowerCase()) {
      matchingGames.splice(i, 1);
    }
  }

  return matchingGames;
}
