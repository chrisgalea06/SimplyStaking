const express = require("express");
const { handleFaucetRequest } = require("./controller.js");

const router = express.Router();

// POST request to /faucet
router.post("/faucet", handleFaucetRequest);

module.exports = router;
