export function getLockQuery({ web3Service, lockAddress, networkNumber }) {
  return web3Service.getLock(lockAddress, networkNumber);
}

export function getTokenSymbolQuery({ web3Service, address, networkNumber }) {
  return web3Service.getTokenSymbol(address, networkNumber);
}

export async function getHasValidKey({
  web3Service,
  lockAddress,
  networkNumber,
  account,
}) {
  const lockContract = await web3Service.getLockContract(
    lockAddress,
    web3Service.providerForNetwork(networkNumber)
  );

  return lockContract.getHasValidKey(account);
}
