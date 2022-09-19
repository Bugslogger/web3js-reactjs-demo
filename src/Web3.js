import Web3 from "web3";

export let userAccount = [];
export let changedAddress;
export let changedChainId;

/**
 *
 * @param {String} provider
 * @returns
 *
 *
 *
 * ConnectToMetamask() Method takes on parameter which is provider.
 * And returns connect user acounts address.
 *
 * If no parameter is provider/assigned then ConnectToMetamask() Method
 * will use default global API injected by metamask into website i.e. window.ethereum
 *
 * If metamask is not install on your browser then the method will
 * throw an error saying to install metamask.
 *
 *
 *
 */

export const ConnectToMetmask = async (provider) => {
  let web3Provider = provider || window.ethereum;

  //   check id metamask is installed or not.
  if (typeof web3Provider === "undefined") {
    return {
      message: "Please Install Metamaks.",
    };
  }

  //   connect to metamask and get connect user address
  let address = await web3Provider.request({ method: "eth_requestAccounts" });

  let web3 = new Web3(web3Provider);

  let networkId = await web3.eth.net.getId();
  let networkType = await web3.eth.net.getNetworkType();
  let isListening = await web3.eth.net.isListening();
  //   let extend = await web3.eth.net.extend();
  let PeerCount = await web3.eth.net.getPeerCount();
  let currentProvider = await web3.eth.net.currentProvider;
  let givenProvider = await web3.eth.net.givenProvider;

  console.log(
    await web3.eth.isMining(),
    await web3.eth.getHashrate(),
    await web3.eth.getGasPrice(),
    await web3.eth.getBlockNumber(),
    await web3.eth.getBalance(address, "latest")
  );

  return {
    address: address,
    networkId,
    connected: web3Provider.isConnected(),
    networkType,
    isListening,
    // extend,
    PeerCount,
    currentProvider,
    givenProvider,
    chainID: changedChainId,
  };
};

// checking account changed on same network
window.ethereum.on("accountsChanged", (accounts) => {
  return accounts;
});

// checking account changed on same network
window.ethereum.on("chainChanged", (chainID) => {
  //   console.log(chainID);
  changedChainId = chainID;
  return {
    chainID: changedChainId,
  };
});

// checking account changed on same network
window.ethereum.on("connect", (connect) => {
  console.log(connect);
  return {
    connect,
  };
});
// checking account changed on same network
window.ethereum.on("disconnect", (disconnect) => {
  console.log(disconnect);
  return {
    disconnect,
  };
});
