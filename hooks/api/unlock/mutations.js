export async function purchaseKeyMutation({
  walletService,
  provider,
  lockAddress,
}) {
  let hash = null;
  let error = null;

  await walletService.connect(provider);
  await walletService.purchaseKey({ lockAddress }, (errorR, hashR) => {
    hash = hashR;
    error = errorR;
  });

  return { hash, error };
}

export async function createLockMutation({
  walletService,
  web3Service,
  owner,
  networkNumber,
  provider,
  lock,
}) {
  await walletService.connect(provider);

  const expectedLockAddress = await web3Service.generateLockAddress(
    owner,
    lock,
    networkNumber
  );

  try {
    await walletService.createLock(lock);
  } catch (error) {
    if (error.code === 'INVALID_ARGUMENT') {
      // This is a workaround for what seems to be a bug with Unlock.js on Polygon? No events in response.
      console.log(
        'Ignore error below! This seems to be an Unlock.js/Polygon bug, so outputting for posterity.'
      );
      console.log(error);
    } else {
      throw error;
    }
  }

  return expectedLockAddress;
}
