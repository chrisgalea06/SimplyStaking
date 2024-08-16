# Part 1: ERC20 Smart Contract

Develop an ERC20 Solidity smart contract with enhanced functionality that includes a faucet function:

1. **Faucet Functionality:**

   - Callable only by the smart contract’s owner (deployer).
   - Transfers 10 tokens from the creator’s address to the Ethereum address provided as a parameter.
   - Requires two parameters:
     1. An Ethereum address to receive the tokens if the function succeeds.
     2. A CosmosHub address, which is stored in the contract along with its relationship to the recipient Ethereum address.
   - Ensures that a claim for a particular CosmosHub address can only be made once.

2. **Getter Function:**
   - Checks whether a claim has already been made for a specific CosmosHub address.
   - Permits token transfers only to Ethereum addresses associated with stored CosmosHub addresses.

This contract should be deployed on any EVM test chain of your choice, such as Ethereum Sepolia, Ethereum Holesky, Polygon Mumbai, Optimism Sepolia, or Arbitrum Testnet. Prior to deployment, ensure your wallet is funded with tokens from a faucet. Testing is not required for this task.
