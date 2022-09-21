import React, { useEffect } from "react";
import { useMoralis } from "react-moralis";
import MoralisAuthentication from "./MoralisAuthentication";
import { DisplayNFT } from "./DisplayNFT";

const Moralis = () => {
  const moralisProperties = useMoralis();

  // useEffect(() => {
  //   console.log(moralisProperties);
  // }, []);

  return (
    <div className="container-fluid py-3">
      <MoralisAuthentication />
      <DisplayNFT />
    </div>
  );
};

export default Moralis;
