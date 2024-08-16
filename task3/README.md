# Part 3: Next.js Frontend

Develop a Next.js frontend that communicates with the backend created in Part 2. The frontend includes the following functionalities:

- **CosmosHub Address Input:**

  - Displays a single input field for users to enter a CosmosHub address.

- **MetaMask Integration:**

  - Connects to MetaMask to obtain the current Ethereum address of the user.

- **Backend Communication:**

  - Sends a request to the backend `/faucet` endpoint with the entered CosmosHub address and the Ethereum address obtained from MetaMask.

- **Error Handling:**

  - Displays any error messages to the user if the request fails.

- **Success Confirmation:**
  - Shows the transaction hash to the user upon a successful request, indicating that tokens have been transferred.
