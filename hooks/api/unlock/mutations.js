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
  return { error, hash };
}
