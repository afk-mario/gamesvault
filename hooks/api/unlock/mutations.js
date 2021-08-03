export function purchaseKeyMutation({ walletService, lockAddress }) {
  return walletService.purchaseKey({ lockAddress });
}
