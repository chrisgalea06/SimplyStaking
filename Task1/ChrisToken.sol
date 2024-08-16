// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ChrisToken is ERC20("ChrisToken", "CG"), Ownable {
    uint256 constant FAUCET_AMOUNT = 10 * (10 ** 18); // Assuming the token has 18 decimals

    // Mapping to store if a CosmosHub address has been claimed
    mapping(string => address) public cosmosHubClaims;

    constructor(address initialOwner) Ownable(initialOwner) {
        _mint(initialOwner, 50 * 10 ** 18); // Mint tokens to the initial owner
    }

    // Faucet function that can only be called by the contract owner
    function faucet(address recipient, string memory cosmosHubAddress) external onlyOwner {
        if (cosmosHubClaims[cosmosHubAddress] != address(0)) {
           revert("CosmosHub address already claimed");
        }

        // Transfer the tokens from the contract's address to the recipient
        transfer(recipient, FAUCET_AMOUNT);

        // Mark the CosmosHub address as claimed
        cosmosHubClaims[cosmosHubAddress] = recipient;
    }

    // Function to check if a claim has already been made for a specific CosmosHub address
    function addressClaimed(string memory cosmosHubAddress) public view returns (bool) {
        return cosmosHubClaims[cosmosHubAddress] != address(0);
    }

    // Function to transfer tokens to the associated address
    function transferToAssociatedAddress(string memory cosmosHubAddress) external onlyOwner {
        address recipient = cosmosHubClaims[cosmosHubAddress];
        if (recipient == address(0)) {
            revert("CosmosHub address not found");
        }

        // Transfer the tokens from the contract's address to the associated address
        transfer(recipient, FAUCET_AMOUNT);
    }
}
