export async function purchaseKeyMutation({
  walletService,
  provider,
  lockAddress,
}) {
  let hash = null;
  let error = null;

  await walletService.connect(provider, provider.getSigner(0));
  await walletService.purchaseKey({ lockAddress }, (errorR, hashR) => {
    hash = hashR;
    error = errorR;
  });

  return { hash, error };
}

export async function createLockMutation({ walletService }) {
  // createLock(uint256 _expirationDuration,address _tokenAddress,uint256 _keyPrice,uint256 _maxNumberOfKeys,string _lockName)
  const lock = {
    name: 'test lock',
    expirationDuration: 2592000,
    decimalKeyPrice: 1,
  };
  return walletService.createLock(lock);
}
