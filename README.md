# Task Description

This task involves building a simple end-to-end blockchain application where users can interact with Ethereum and CosmosHub networks. From a frontend, users input a CosmosHub wallet address, specifically belonging to a Simply Staking delegator on the CosmosHub Mainnet, and connect their MetaMask wallet to receive a new FaucetToken. Upon interaction, a Node.js backend verifies the provided CosmosHub address, ensuring it belongs to a delegator. If validated, the backend, equipped with the private key of the FaucetToken smart contract deployer, facilitates token transfer to the user's Ethereum address. This process ensures each CosmosHub address links uniquely to an Ethereum destination, forming a secure and streamlined blockchain interaction flow.

# Deployment Steps

1. **Copy the Contract into Remix IDE:**

   - Open [Remix IDE](https://remix.ethereum.org/).
   - Paste your smart contract code into Remix.

2. **Compile the Contract and Deploy:**

   - Compile the contract within Remix.
   - Deploy the contract using a MetaMask Ethereum address.

3. **Update Contract Information:**

   - Copy the contract address into `task2/app/controller.js`.
   - Copy the contract ABI into `task2/public/contractABI.json`.

4. **Provide Private Key:**

   - Save the private key for the Ethereum address used to deploy the contract into `task2/public/privateKey.txt`.

5. **Run the Backend:**

   - Open a terminal in the `task2` directory.
   - Run `npm start` to start the backend server.

6. **Run the Frontend:**

   - Open a terminal in the `task3` directory.
   - Run `npm run dev` to start the frontend server.

7. **MetaMask Access:**

   - Give access to `localhost` from the MetaMask extension.
   - If addresses are not showing, please refresh the page.

8. **Interact with the Application:**

   - Choose the recipient Ethereum address from the MetaMask-connected accounts.
   - Input a CosmosHub address in the provided input field.

9. **Verify Transaction:**
   - If the transaction is successful, copy the transaction hash.
   - Confirm the transaction on [Etherscan](https://sepolia.etherscan.io/).

Following these steps ensures a smooth deployment and interaction with your blockchain application.
