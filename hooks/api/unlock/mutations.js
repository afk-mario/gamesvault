export async function purchaseKeyMutation({
  walletService,
  provider,
  lockAddress,
}) {
  await walletService.connect(provider);
  return walletService.purchaseKey({ lockAddress });
}
