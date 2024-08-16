"use client";
import React, { useState } from "react";
import AddressInput from "./AddressInput";
import EthereumAddressDisplay from "./EthereumAddressDisplay";

const Landing = () => {
  const [ethAddress, setEthAddress] = useState("");

  return (
    <div
      className="
      flex
      min-h-screen
      flex-col
      items-center
      justify-center
      p-24"
    >
      <EthereumAddressDisplay setEthAddress={setEthAddress} />
      <AddressInput ethAddress={ethAddress} />
    </div>
  );
};

export default Landing;
