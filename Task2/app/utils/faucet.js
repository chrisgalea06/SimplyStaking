export async function faucet(contract, ethereumAddress, cosmosHubAddress) {
  return contract.faucet(ethereumAddress, cosmosHubAddress);
}
