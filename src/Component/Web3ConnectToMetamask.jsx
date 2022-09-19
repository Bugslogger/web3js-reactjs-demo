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
        <button
          onClick={MetaMask}
          className="btn bs btn-info text-light mt-4 fw-bold"
        >
          {" "}
          Connect To Metamask
        </button>
      </section>
      <section className="my-3 d-flex justify-content-center aign-items-center flex-wrap">
        <div className="section d-grid border-secondary">
          <div className="input-group">
            <span class="border-0 rounded-0 input-group-text">Address</span>
            <input
              type="text"
              class="border-0 rounded-0 form-control"
              value={first?.address}
              disabled
            />
          </div>
          <div className="input-group">
            <span class="border-0 rounded-0 input-group-text">Balance</span>
            <input
              type="text"
              class="border-0 rounded-0 form-control"
              value={first?.balance}
              disabled
            />
          </div>
          <div className="input-group">
            <span class="border-0 rounded-0 input-group-text">
              Network Type
            </span>
            <input
              type="text"
              class="border-0 rounded-0 form-control"
              value={first?.networkType}
              disabled
            />
          </div>
        </div>
        <div className="section d-grid border-secondary">
          <div className="input-group">
            <span class="border-0 rounded-0 input-group-text">Network Id</span>
            <input
              type="text"
              class="border-0 rounded-0 form-control"
              value={first?.networkId}
              disabled
            />
          </div>
          <div className="input-group">
            <span class="border-0 rounded-0 input-group-text">Peer Count</span>
            <input
              type="text"
              class="border-0 rounded-0 form-control"
              value={first?.PeerCount}
              disabled
            />
          </div>
          <div className="input-group">
            <span class="border-0 rounded-0 input-group-text">Chain ID</span>
            <input
              type="text"
              class="border-0 rounded-0 form-control"
              value={first?.chainID}
              disabled
            />
          </div>
        </div>
        <div className="section d-grid border-secondary">
          <div className="input-group">
            <span class="border-0 rounded-0 input-group-text">Listening</span>
            <input
              type="text"
              class="border-0 rounded-0 form-control"
              value={first?.isListening}
              disabled
            />
          </div>

          <div className="input-group">
            <span class="border-0 rounded-0 input-group-text">Connected</span>
            <input
              type="text"
              class="border-0 rounded-0 form-control"
              value={first?.connected}
              disabled
            />
          </div>
          <div className="input-group">
            <span class="border-0 rounded-0 input-group-text">
              Block Number
            </span>
            <input
              type="text"
              class="border-0 rounded-0 form-control"
              value={first?.BlockNumber}
              disabled
            />
          </div>
        </div>
        <div className="section d-grid border-secondary">
          <div className="input-group">
            <span class="border-0 rounded-0 input-group-text">Mining</span>
            <input
              type="text"
              class="border-0 rounded-0 form-control"
              value={first?.mining ? "Yes" : "No"}
              disabled
            />
          </div>
          <div className="input-group">
            <span class="border-0 rounded-0 input-group-text">Hash Rate</span>
            <input
              type="text"
              class="border-0 rounded-0 form-control"
              value={first?.hashrate}
              disabled
            />
          </div>
          <div className="input-group">
            <span class="border-0 rounded-0 input-group-text">Gas Price</span>
            <input
              type="text"
              class="border-0 rounded-0 form-control"
              value={first?.gasprice}
              disabled
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Web3ConnectToMetamask;
