// cosmosService.js

import axios from "axios";

// Endpoint URL to check if an address is a Simply Staking delegator
const simplyStakingUrl =
  "https://spectrum-01.simplystaking.xyz/cosmos/mainnet/lhgwTP39mKNxkg";

export async function isDelegator(cosmosHubAddress) {
  try {
    // Perform GET request to the Simply Staking API
    const response = await axios.get(simplyStakingUrl);

    // Parse the response
    const delegators = response.data.delegators || [];

    // Check if the address is in the list of delegators
    const isDelegator = delegators.includes(cosmosHubAddress);

    return isDelegator;
  } catch (error) {
    console.error("Error querying Simply Staking API:", error);
    throw new Error("Failed to validate delegator status.");
  }
}
