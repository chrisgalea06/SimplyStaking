# Part 2: Node.js Server

Create a Node.js Express backend server that handles a POST request to `/faucet`, accepting parameters for a CosmosHub address and an Ethereum address. The server performs the following tasks:

- **Private Key Storage:**

  - Stores the private key used to deploy the smart contract from Part 1 in a text file.

- **POST Request Handling:**

  - Listens for POST requests to `/faucet` with a body containing an Ethereum address and a CosmosHub address.

- **CosmosHub Address Validation:**

  - Validates if the CosmosHub address is a Simply Staking delegator by querying the Cosmos Hub API (not Mintscan) through a public REST endpoint.
  - You can use the following endpoint: `https://spectrum-01.simplystaking.xyz/cosmos/mainnet/lhgwTP39mKNxkg`.

- **Claim Status Check:**

  - Checks the ERC20 smart contract to determine if a claim has already been made for the provided CosmosHub address.

- **Error Handling:**

  - Returns an error if a claim has already been made for the CosmosHub address or if the address is not a delegator.

- **Faucet Function Invocation:**
  - If eligible, calls the faucet function in the ERC20 smart contract using Ethers.js, utilizing the stored private key, to transfer tokens to the provided Ethereum address.
  - Returns the transaction hash upon successful execution.
