// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "https://github.com/OpenZeppelin/openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";
import "https://github.com/OpenZeppelin/openzeppelin-solidity/contracts/access/Ownable.sol";

contract MyToken is ERC20("MyToken", "MTK"), Ownable {
    uint256 public faucetAmount = 10 * (10 ** decimals()); // 10 tokens

    /**
     * @dev Struct to store CosmosHub information
     */
    struct CosmosHubInfo {
        string cosmosHubAddress;
        bool isClaimed;
    }

    /**
     * @dev Mapping of Ethereum addresses to CosmosHub information
     */
    mapping(address => CosmosHubInfo) public ethereumToCosmosHub;

    /**
     * @dev Constructor to initialize the contract
     * @param initialOwner The initial owner of the contract
     * @param initialSupply The initial supply of tokens
     */
    constructor(address initialOwner, uint256 initialSupply) Ownable(initialOwner) {
        _mint(initialOwner, initialSupply); // Only callable by the smart contract’s owner(deployer)
    }

    /**
     * @dev Faucet function to transfer tokens to a recipient
     * @param to The Ethereum address to transfer tokens to
     * @param cosmosHubAddress The CosmosHub address associated with the recipient
     */
    function faucet(address to, string memory cosmosHubAddress) external onlyOwner {
        require(balanceOf(msg.sender) >= faucetAmount, "Not enough tokens in the owner's account");
        require(!ethereumToCosmosHub[to].isClaimed, "CosmosHub address already claimed");
        require(bytes(ethereumToCosmosHub[to].cosmosHubAddress).length == 0, "Ethereum address already associated with a CosmosHub address"); //converts the cosmosHubAddress string to a bytes array and checks if its length is 0, which means the string is empty.

        _transfer(msg.sender, to, faucetAmount); // Transfers 10 tokens from the creator’s address to the address provided as a parameter.
        ethereumToCosmosHub[to] = CosmosHubInfo(cosmosHubAddress, true); // mark the CosmosHub address as claimed
    }

    /**
     * @dev Transfer tokens to a recipient, but only if the recipient's Ethereum address
     * is associated with a stored CosmosHub address.
     * @param recipient The Ethereum address to transfer tokens to
     * @param amount The amount of tokens to transfer
     * @return A boolean indicating whether the transfer was successful
     */
    function transfer(address recipient, uint256 amount) public virtual override returns (bool) {
        // Check if the sender and recipient are not the zero address
        if (msg.sender != address(0) && recipient != address(0)) {
            // Check if the CosmosHub address has been claimed (i.e., it's in the mapping)
            require(ethereumToCosmosHub[recipient].isClaimed, "Token transfer only allowed to Ethereum addresses associated with stored CosmosHub addresses");
        }
        
        // If all checks pass, transfer the tokens
        return super.transfer(recipient, amount);
    }

    /**
     * @dev Returns the CosmosHub address associated with a given Ethereum address
     * @param ethereumAddress The Ethereum address to look up
     * @return The associated CosmosHub address, or an empty string if no association exists
     */
    function getCosmosHubAddress(address ethereumAddress) internal view returns (string memory) {
        // Look up the CosmosHub address associated with the given Ethereum address
        return ethereumToCosmosHub[ethereumAddress].cosmosHubAddress;
    }
}