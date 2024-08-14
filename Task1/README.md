# Part 1: ERC20 Smart Contract

Develop an ERC20 Solidity smart contract with enhanced functionality:
The contract includes a faucet function:
● Only callable by the smart contract’s owner(deployer).
● Transfers 10 tokens from the creator’s address to the address provided as a parameter.
● Requires a parameter, an Ethereym address, which should receive the tokens if the function
succeeds
● Requires a second parameter, a CosmosHub address, which is stored in the contract along with
its relationship to the recipient Ethereum address (1st parameter).
● Ensures that a claim for a particular CosmosHub address can only be made once.
Additionally, the contract features a getter function:
● Checks whether a claim has already been made for a specific CosmosHub address.
● Permits token transfers only to Ethereum addresses associated with stored CosmosHub
addresses.

This contract should be deployed on any EVM test chain of your choice, such as Ethereum Sepolia,
Ethereum Holesky, Polygon Mumbai, Optimism Sepolia, or Arbitrum Testnet. Prior to deployment,
ensure your wallet is funded with tokens from a faucet. Tests are not required for this task.
