export function validateRequest(ethereumAddress, cosmosHubAddress) {
  if (!ethereumAddress || !cosmosHubAddress) {
    throw new Error("Ethereum address and CosmosHub address are required");
  }
}

export function validateDelegator(isDelegatorStatus, cosmosHubAddress) {
  if (!isDelegatorStatus) {
    throw new Error(
      `CosmosHub address ${cosmosHubAddress} is not a valid Simply Staking delegator`
    );
  }
}

export async function validateClaim(contract, ethereumAddress) {
  const [_, isClaimed] = await contract.ethereumToCosmosHub(ethereumAddress);
  return isClaimed;
}
