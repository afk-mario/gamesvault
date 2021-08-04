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
  return { error, hash };
}
