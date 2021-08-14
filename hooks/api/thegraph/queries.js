import axios from 'axios';

export async function getAllOwnedLocks({ account }) {
  const ownedLocks = [];
  const query = `
  {
    keyPurchases(where: {purchaser: "${account}"}) {
      lock
    }
  }      
  `;

  try {
    const resp = await axios.post(
      'https://api.thegraph.com/subgraphs/name/unlock-protocol/polygon',
      {
        query,
      }
    );
    resp.data.data.keyPurchases.forEach((lock) => {
      ownedLocks.push(lock);
    });
  } catch (err) {
    console.error(err);
  }

  return ownedLocks;
}
