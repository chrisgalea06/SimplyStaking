"use client";
import React, { useState } from "react";

const AddressInput = ({ ethAddress }) => {
  const [address, setAddress] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);
  const [txHash, setTxHash] = useState(null);

  const handleSubmit = async () => {
    setTxHash(null); // reset txHash
    setErrorMsg(null); // reset errorMsg
    if (address === "") {
      setErrorMsg("Please enter an address in the field.");
    } else if (!address.match(/^cosmos1[a-zA-Z0-9].*/)) {
      setErrorMsg("Invalid CosmosHub address");
    } else {
      setErrorMsg(null);
      try {
        const response = await fetch("http://localhost:3001/faucet", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ cosmosAddress: address, ethAddress }),
        });
        const data = await response.json();
        console.log(data);
        if (data.transactionHash) {
          setTxHash(data.transactionHash);
        } else if (data.error) {
          setErrorMsg(data.details);
        }
      } catch (error) {
        setErrorMsg("Failed to transfer tokens");
      }
    }
  };

  return (
    <div className="flex flex-col align-middle justify-center w-3/4">
      <label
        htmlFor="address"
        className="block mb-2 font-medium text-gray-900 dark:text-white text-2xl"
      >
        Enter CosmosHub address:
      </label>
      <input
        id="address"
        type="text"
        value={address}
        onChange={(event) => setAddress(event.target.value)}
        placeholder="cosmos1..."
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />

      {errorMsg && (
        <p className="mt-2 text-sm text-red-600 dark:text-red-500">
          <span className="font-medium">Error!</span> {errorMsg}.
        </p>
      )}

      {txHash && (
        <p className="mt-2 text-sm text-green-600 dark:text-green-500">
          Transaction hash: {txHash}
        </p>
      )}

      <button
        className="mt-6 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        onClick={handleSubmit}
      >
        Submit Address
      </button>
    </div>
  );
};

export default AddressInput;
