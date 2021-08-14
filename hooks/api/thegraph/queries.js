import axios from 'axios';

export async function getAllOwnedLocks({ account }) {
  const query = `
  {
    keyPurchases(where: {purchaser: "${account}"}) {
      lock
    }
  }      
  `;

  const resp = await axios.post(
    'https://api.thegraph.com/subgraphs/name/unlock-protocol/polygon',
    {
      query,
    }
  );

  return resp.data.data.keyPurchases;
}
