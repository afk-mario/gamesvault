export function getLockQuery({ web3Service, lockAddress, networkNumber }) {
  return web3Service.getLock(lockAddress, networkNumber);
}

export function getTokenSymbolQuery({ web3Service, address, networkNumber }) {
  return web3Service.getTokenSymbol(address, networkNumber);
}
