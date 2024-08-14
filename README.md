# SimplyStaking

Task given for SimplyStaking Interview.

# Task Description

This task involves building a simple end-to-end blockchain application where users can interact with
Ethereum and CosmosHub networks. From a frontend, users input a CosmosHub wallet address,
specifically belonging to a Simply Staking delegator on the CosmosHub Mainnet, and connect their
Metamask wallet to receive a new FaucetToken. Upon interaction, a Node.js backend verifies the
provided CosmosHub address, ensuring it belongs to a delegator. If validated, the backend, equipped
with the private key of the FaucetToken smart contract deployer, facilitates token transfer to the user's
Ethereum address. This process ensures each CosmosHub address links uniquely to an Ethereum
destination, forming a secure and streamlined blockchain interaction flow.

# Notes

## Ethereum and Solidity

Ethereum: A blockchain platform that allows developers to create decentralized applications (dApps) using smart contracts.
Solidity: The programming language used to write smart contracts on Ethereum. Developers can use an online tool called Remix to write and deploy these contracts.

## Mainnet and Testnet

Mainnet: The main Ethereum network where real funds are used.
Testnet: A simulation network for testing and developing applications without using real cryptocurrency. Developers can get free tokens for testing from tools called faucets.

## Faucets

Faucet: A tool that provides free tokens on a blockchain’s testnet to help developers test their applications without spending real money.

## CosmosHub and Proof-of-Stake

CosmosHub: A blockchain platform using Proof-of-Stake (PoS) consensus, where validators lock tokens to validate blocks.
Delegators: Users who stake their tokens with validators on PoS networks like CosmosHub. They earn rewards based on the validator’s performance, and their staked tokens help secure the network.

# References

## Remix vs Hardhat vs Truffle

https://medium.com/@arashtad/hardhat-vs-truffle-which-one-is-best-7147eb316f2d#:~:text=Additionally%2C%20Hardhat%20offers%20stack%20traces,messages%20rather%20than%20stack%20traces.
https://theblockchainguy.dev/hardhat-vs-truffle-vs-remix

Since this is a small project hardhat and truffle are not required. However for more complex projects it would be more suitable.
Hardhat - stack traces
Truffle - only error messages

# EVM

## Sepolia vs Holesky

https://blog.chain.link/sepolia-vs-holesky-comparison/

Sepolia: Sepolia is the best place to test smart contracts and dApps.
Holesky: The intent of Holesky is testing validators and staking.

# Deploy

Got tokens from google cloud and https://faucets.chain.link/sepolia and https://www.sepoliafaucet.io/
