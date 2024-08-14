import { Router } from "express";
import { handleFaucetRequest } from "./controller";

const router = Router();

// POST request to /faucet
router.post("/", handleFaucetRequest);

export default router;
