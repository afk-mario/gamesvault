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

export async function createLockMutation({ walletService, provider, lock }) {
  console.log('lock', lock);
  await walletService.connect(provider);
  return walletService.createLock(lock);
}
