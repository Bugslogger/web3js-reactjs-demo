import React, { useEffect, useState } from "react";
import { ConnectToMetmask, changedChainId } from "../Web3";

const Web3ConnectToMetamask = () => {
  const [first, setfirst] = useState();

  useEffect(() => {
    // ConnectToMetmask();
    // console.log(userAccountChanged())
    console.log(changedChainId);
  }, [changedChainId]);

  const MetaMask = async () => {
    const data = await ConnectToMetmask();
    setfirst(data);
    console.log(data);
  };

  return (
    <div className="container-fluid py-2 border">
      <section>
        <button onClick={MetaMask} className="btn btn-info text-light mt-4 fw-bold">
          {" "}
          Connect To Metamask
        </button>
      </section>
      <section className="my-3">
        <div className="card ">
          {!first ? (
            <div className="card-body text-secondary text-center">
              Click On Connect To Metamask To See Something here...
            </div>
          ) : (
            <div className="card-body text-secondary">
              <p>
                Address:{" "}
                <span className="text-primary">{first?.address[0]}</span>
              </p>
              <p>
                Network Type:{" "}
                <span className="text-primary">{first?.networkType}</span>
              </p>
              <p>
                Network Id:{" "}
                <span className="text-primary">{first?.networkId}</span>
              </p>
              <p>
                Peer Count:{" "}
                <span className="text-primary">{first?.PeerCount}</span>
              </p>
              <p>
                Listening:{" "}
                <span className="text-primary">{first?.isListening? "true" : "false"}</span>
              </p>
              <p>
                Connected:{" "}
                <span className="text-primary">
                  {first?.connected ? "true" : "false"}
                </span>
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Web3ConnectToMetamask;
