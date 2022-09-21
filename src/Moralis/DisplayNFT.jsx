import React, { useEffect } from "react";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";

export const DisplayNFT = () => {
  const Web3Api = useMoralisWeb3Api();

  const getNFT = async () => {
    const testnetNFTs = await Web3Api.Web3API.account.getNFTs({
      chain: "goerli",
    });
    console.log(testnetNFTs);
  };
  // const moralisProperties = useMoralis();

  return (
    <div className="my-4">
      <h4>DisplayNFT</h4>
      <div>
        <button onClick={getNFT} className="btn btn-info">
          Show NFT
        </button>
      </div>
    </div>
  );
};
