import React, { useEffect, useState } from "react";
import { ConnectToMetmask, changedChainId, Setprovider } from "../Web3";
import Loader from "./Loader";
import Transaction from "./Transaction";
import TranxReciept from "./TranxReciept";

const Web3ConnectToMetamask = () => {
  const [first, setfirst] = useState();
  const [isSomthingChnaged, setisSomthingChnaged] = useState(false);
  const [show, setshow] = useState(false);
  const [provider, setprovider] = useState("");

  useEffect(() => {
    const MetaMask = async () => {
      const data = await ConnectToMetmask();
      setfirst(data);
      console.log(data);
    };

    if (isSomthingChnaged) {
      MetaMask();
    }

    return () => {
      setisSomthingChnaged();
    };
  }, [isSomthingChnaged]);

  const MetaMask = async () => {
    setshow(true);
    setfirst();

    const data = await ConnectToMetmask();
    setfirst(data);
    console.log(data);
  };

  // web3js

  // checking account changed on same network
  window.ethereum.on("accountsChanged", (accounts) => {
    setfirst();
    setisSomthingChnaged(true);
    // return accounts;
  });

  // checking account changed on same network
  window.ethereum.on("chainChanged", (chainID) => {
    console.log(chainID);
    setfirst();
    // changedChainId = chainID;
    // return {
    //   chainID: changedChainId,
    // };
    setisSomthingChnaged(true);
  });

  // checking account changed on same network
  window.ethereum.on("connect", (connect) => {
    // console.log(connect);
    // return {
    //   connect,
    // };
    setfirst();
    setisSomthingChnaged(true);
  });
  // checking account changed on same network
  window.ethereum.on("disconnect", (disconnect) => {
    // console.log(disconnect);
    // return {
    //   disconnect,
    // };
    setfirst();
    setisSomthingChnaged(true);
  });

  const SetProvider = () => {
    localStorage.setItem("provider", provider);
    Setprovider(provider);
  };

  return (
    <>
      <div className="container-fluid py-2">
        <section>
          <div className="input-group border rounded border-info">
            <input
              onChange={(e) => setprovider(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Enter New Provider URL Here"
            />
            <button
              onClick={SetProvider}
              className="btn btn-info text-light fw-bold"
            >
              Set provider
            </button>
          </div>
        </section>
        <section>
          <button
            onClick={MetaMask}
            className="btn bs mx-2 btn-info text-light mt-4 fw-bold"
          >
            {" "}
            Connect To Metamask
          </button>
          <button
            onClick={() => alert("coming soon...")}
            className="btn bs btn-info mx-2 text-light mt-4 fw-bold"
          >
            {" "}
            Send Eth
          </button>
        </section>
        <section className="my-5 row ">
          <div className="section col-lg-4 col-md-6 col-12 d-grid border-secondary">
            <div className="input-group">
              <span className="border-0 rounded-0 input-group-text">
                Address
              </span>
              <input
                type="text"
                className="border-0 rounded-0 form-control"
                defaultValue={first?.address}
                disabled
              />
            </div>
            <div className="input-group">
              <span className="border-0 rounded-0 input-group-text">
                Balance
              </span>
              <input
                type="text"
                className="border-0 rounded-0 form-control"
                defaultValue={first?.balance ? `${first?.balance} Eth` : ""}
                disabled
              />
            </div>
            <div className="input-group">
              <span className="border-0 rounded-0 input-group-text">
                Network Type
              </span>
              <input
                type="text"
                className="border-0 rounded-0 form-control"
                defaultValue={first?.networkType}
                disabled
              />
            </div>
          </div>
          <div className="section col-lg-4 col-md-6 col-12 d-grid border-secondary">
            <div className="input-group">
              <span className="border-0 rounded-0 input-group-text">
                Network Id
              </span>
              <input
                type="text"
                className="border-0 rounded-0 form-control"
                defaultValue={first?.networkId}
                disabled
              />
            </div>
            <div className="input-group">
              <span className="border-0 rounded-0 input-group-text">
                Peer Count
              </span>
              <input
                type="text"
                className="border-0 rounded-0 form-control"
                defaultValue={first?.PeerCount}
                disabled
              />
            </div>
            <div className="input-group">
              <span className="border-0 rounded-0 input-group-text">
                Chain ID
              </span>
              <input
                type="text"
                className="border-0 rounded-0 form-control"
                defaultValue={first?.chainID}
                disabled
              />
            </div>
          </div>
          <div className="section col-lg-4 col-md-6 col-12 d-grid border-secondary">
            <div className="input-group">
              <span className="border-0 text-capitalize rounded-0 input-group-text">
                listening for peers
              </span>
              <input
                type="text"
                className="border-0 rounded-0 form-control"
                defaultValue={first?.isListening}
                disabled
              />
            </div>

            <div className="input-group">
              <span className="border-0 rounded-0 input-group-text">
                Connected
              </span>
              <input
                type="text"
                className="border-0 rounded-0 form-control"
                defaultValue={first?.connected}
                disabled
              />
            </div>
            <div className="input-group">
              <span className="border-0 rounded-0 input-group-text">
                Block Number
              </span>
              <input
                type="text"
                className="border-0 rounded-0 form-control"
                defaultValue={first?.BlockNumber}
                disabled
              />
            </div>
          </div>
          <div className="section col-lg-4 col-md-6 col-12 d-grid border-secondary">
            <div className="input-group">
              <span className="border-0 rounded-0 input-group-text">
                Mining
              </span>
              <input
                type="text"
                className="border-0 rounded-0 form-control"
                defaultValue={
                  first?.mining ? "yes" : first?.mining == false ? "No" : ""
                }
                disabled
              />
            </div>
            <div className="input-group">
              <span className="border-0 rounded-0 input-group-text">
                Hash Rate
              </span>
              <input
                type="text"
                className="border-0 rounded-0 form-control"
                defaultValue={first?.hashrate}
                disabled
              />
            </div>
            <div className="input-group">
              <span className="border-0 rounded-0 input-group-text">
                Gas Price
              </span>
              <input
                type="text"
                className="border-0 rounded-0 form-control"
                defaultValue={first?.gasprice}
                disabled
              />
            </div>
          </div>

          <div className="section col-lg-4 col-md-6 col-12 d-grid border-secondary">
            <div className="input-group">
              <span className="border-0 text-capitalize rounded-0 input-group-text">
                transction count
              </span>
              <input
                type="text"
                className="border-0 rounded-0 form-control"
                defaultValue={first?.transactioncount}
                disabled
              />
            </div>
            <div className="input-group">
              <span className="border-0 rounded-0 input-group-text">
                current client version
              </span>
              <input
                type="text"
                className="border-0 rounded-0 form-control"
                defaultValue={first?.nodeinfo}
                disabled
              />
            </div>
            <div className="input-group">
              <span className="border-0 rounded-0 input-group-text">
                Address Code
              </span>
              <input
                type="text"
                className="border-0 rounded-0 form-control"
                defaultValue={first?.code}
                disabled
              />
            </div>
          </div>

          <div className="section col-lg-4 col-md-6 col-12 d-grid border-secondary">
            <div className="w-100">
              <div className="border-0 rounded-0 input-group-text justify-content-center fs-5">
                Accounts
              </div>
              <div className="overflow-scroll">
                {first?.accounts?.map((val) => {
                  return (
                    <input
                      type="text"
                      className="border-0 rounded-0 form-control"
                      defaultValue={val}
                      disabled
                    />
                  );
                })}
              </div>
            </div>
          </div>

          <div className="section col-lg-4 col-md-6 col-12 d-grid border-secondary">
            <div className="input-group">
              <span className="border-0 text-capitalize rounded-0 input-group-text">
                ethereum protocol version
              </span>
              <input
                type="text"
                className="border-0 rounded-0 form-control"
                defaultValue={first?.epv}
                disabled
              />
            </div>
            {first?.isSync === false ? (
              <div className="input-group">
                <span className="border-0 rounded-0 input-group-text">
                  isSyncing
                </span>
                <input
                  type="text"
                  className="border-0 rounded-0 form-control"
                  defaultValue={
                    first?.isSync === false ? "Node is not syncing" : "true"
                  }
                  disabled
                />
              </div>
            ) : (
              ""
            )}
            <div className="input-group">
              <span className="border-0 rounded-0 input-group-text">
                Default Block
              </span>
              <input
                type="text"
                className="border-0 rounded-0 form-control"
                defaultValue={first?.defaultBlock}
                disabled
              />
            </div>
          </div>

          {first?.isSync !== false && (
            <div className="section col-lg-4 col-md-6 col-12 d-grid border-secondary">
              {/* {Object.entries(first?.isSync === false ? {key: ""} : first?.isSync).map(
                (val, index) => {
                  return (
                    <div className="input-group" key={index}>
                      <span className="border-0 text-capitalize rounded-0 input-group-text">
                        val[0]
                      </span>
                      <input
                        type="text"
                        className="border-0 rounded-0 form-control"
                        defaultValue={val[1]}
                        disabled
                      />
                    </div>
                  );
                }
              )} */}
            </div>
          )}
        </section>
      </div>
      <div className="container-fluid py-2 my-3">
        <Transaction />
      </div>

      {first === undefined && show && (
        <div
          style={{
            zIndex: "999",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.1)",
          }}
          className="w-100 d-flex justify-content-center align-items-center position-fixed top-0"
        >
          <Loader />
        </div>
      )}
    </>
  );
};

export default Web3ConnectToMetamask;
