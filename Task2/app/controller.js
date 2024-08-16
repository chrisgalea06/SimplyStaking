const { ethers } = require("ethers");
const { isDelegator } = require("./services/cosmosService");
const path = require("path");
const fs = require("fs");

const publicFolderPath = path.resolve(__dirname, "..", "public");

let privateKey;
try {
  privateKey = fs
    .readFileSync(path.join(publicFolderPath, "privateKey.txt"), "utf8")
    .trim();
} catch (error) {
  throw new Error("Error reading private key from file: " + error.message);
}
let data;
try {
  data = fs
    .readFileSync(path.join(publicFolderPath, "contractABI.json"), "utf8")
    .trim();
} catch (error) {
  throw new Error("Error reading file: " + error.message);
}

const contractABI = JSON.parse(data);
const contractAddress = "0x9E4875790F98629CdaF5469Ea3933f0099237Fe7";
const provider = new ethers.JsonRpcProvider(
  "https://sepolia.infura.io/v3/662ab90ce13a45fabc31a7a01f2c13b6"
);
const wallet = new ethers.Wallet(privateKey, provider);
const contract = new ethers.Contract(contractAddress, contractABI, wallet);

async function handleFaucetRequest(req, res) {
  const { ethAddress, cosmosAddress } = req.body;

  try {
    // Validate the request body
    if (!ethAddress || !cosmosAddress) {
      throw new Error("Ethereum address and CosmosHub address are required");
    }

    // Check if the Cosmos Hub address is a delegator
    const isDelegatorStatus = await isDelegator(cosmosAddress);
    if (!isDelegatorStatus) {
      throw new Error(
        `CosmosHub address ${cosmosAddress} is not a valid Simply Staking delegator`
      );
    }

    // Check if the comosAddress is already claimed
    const isClaimed = await contract.addressClaimed(cosmosAddress);
    if (isClaimed) {
      throw new Error(`CosmosHub address ${cosmosAddress} is already claimed.`);
    }

    // Execute the faucet function and wait for the transaction to be mined
    const tx = await contract.faucet(ethAddress, cosmosAddress);
    const receipt = await tx.wait();

    // successfull receipt
    if (receipt.status === 1) {
      res.status(200).json({
        message: "Faucet request successful",
        transactionHash: tx.hash,
      });
    } else {
      res.status(500).json({
        message: "Faucet request failed",
        transactionHash: tx.hash,
      });
    }
  } catch (error) {
    console.error("Error handling faucet request:", error);
    res
      .status(500)
      .json({ error: "Internal server error", details: error.message });
  }
}

module.exports = {
  handleFaucetRequest,
};
