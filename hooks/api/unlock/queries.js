export function getLockQuery({ web3Service, lockAddress }) {
  return web3Service.getLock(lockAddress, 4);
}
