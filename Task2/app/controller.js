import { ethers } from "ethers";
import { isDelegator } from "./services/cosmosService";
import {
  validateRequest,
  validateDelegator,
  validateClaim,
} from "./validators";
import { faucet } from "./faucet";

const wallet = new ethers.Wallet(privateKey);
const contract = new ethers.Contract(contractAddress, contractABI, wallet);

export async function handleFaucetRequest(req, res) {
  try {
    const { ethereumAddress, cosmosHubAddress } = req.body;

    validateRequest(ethereumAddress, cosmosHubAddress);

    const isDelegatorStatus = await isDelegator(cosmosHubAddress);
    validateDelegator(isDelegatorStatus, cosmosHubAddress);

    const isClaimed = await validateClaim(contract, ethereumAddress);
    if (isClaimed) {
      return res.status(400).json({
        error: "Claim has already been made for this Ethereum address",
      });
    }

    const tx = await faucet(contract, ethereumAddress, cosmosHubAddress);
    await tx.wait(); // Wait for the transaction to be mined

    res
      .status(200)
      .json({ message: "Faucet request successful", transactionHash: tx.hash });
  } catch (error) {
    console.error("Error handling faucet request:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
