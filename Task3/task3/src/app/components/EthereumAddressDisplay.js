// EthereumAddressDisplay.js
"use client";
import React, { useState, useEffect } from "react";
import Web3 from "web3";

const EthereumAddressDisplay = ({ setEthAddress }) => {
  const [errorMsg, setErrorMsg] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [selectedAccount, setSelectedAccount] = useState("");

  useEffect(() => {
    const loadEthereumData = async () => {
      if (window.ethereum) {
        try {
          const web3 = new Web3(window.ethereum);
          const accountsList = await web3.eth.getAccounts();
          setAccounts(accountsList);
          setSelectedAccount(accountsList[0]);
          setEthAddress(accountsList[0]);
        } catch (error) {
          console.error(error);
          setErrorMsg("Failed to connect to MetaMask. Please try again.");
        }
      } else {
        setErrorMsg("Please install MetaMask to use this application.");
      }
    };

    loadEthereumData();
  }, []);

  const handleAccountChange = (event) => {
    setSelectedAccount(event.target.value);
    setEthAddress(event.target.value);
  };

  return (
    <div className="py-6 w-3/4">
      {errorMsg && (
        <h1 className="mt-2 text-sm text-red-600 dark:text-red-500">
          <span className="font-medium">Error!</span> {errorMsg}.
        </h1>
      )}

      {accounts.length > 0 && (
        <div>
          <label className="mb-2 font-medium text-gray-900 dark:text-white text-2xl">
            Select your Ethereum address:
          </label>
          <select
            value={selectedAccount}
            onChange={handleAccountChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            {accounts.map((account, index) => (
              <option key={index} value={account}>
                {account}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default EthereumAddressDisplay;
