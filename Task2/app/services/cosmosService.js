const axios = require("axios");

// Base URL for Simply Staking API
const simplyStakingBaseUrl =
  "https://spectrum-01.simplystaking.xyz/cosmos/mainnet/lhgwTP39mKNxkg/cosmos/staking/v1beta1";

// Function to check if the delegator is associated with "Simply Staking" validator
async function isDelegator(cosmosHubAddress) {
  try {
    // Construct URL for fetching delegations
    const delegationUrl = `${simplyStakingBaseUrl}/delegations/${cosmosHubAddress}`;

    // Perform GET request to fetch delegations
    const delegationResponse = await axios.get(delegationUrl);
    const delegationData = delegationResponse.data;

    if (
      !delegationData.delegation_responses ||
      delegationData.delegation_responses.length === 0
    ) {
      throw new Error("No delegations found for this address.");
    }

    let found = false;
    const SimplyStakingAddress =
      "cosmosvaloper124maqmcqv8tquy764ktz7cu0gxnzfw54n3vww8";

    delegationData.delegation_responses.forEach((delegation) => {
      if (delegation.delegation.validator_address == SimplyStakingAddress)
        found = true;
    });

    return found;
  } catch (error) {
    console.error("Error querying Simply Staking API:", error);
    throw new Error("Failed to validate delegator status.");
  }
}

module.exports = { isDelegator };
