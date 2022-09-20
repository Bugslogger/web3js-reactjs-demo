import Web3 from "web3";
import Transaction from "./Component/Transaction";

export let userAccount = [];
export let changedAddress;
export let changedChainId;

/**
 *
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

let web3Provider = localStorage.getItem("provider") || window.ethereum;
let web3 = new Web3(web3Provider);

export const Setprovider = (providerFromInput) => {
  web3.setProvider(providerFromInput);
};

export const ConnectToMetmask = async () => {
  //   check id metamask is installed or not.
  if (typeof web3Provider === "undefined") {
    return {
      message: "Please Install Metamaks.",
    };
  }

  //   connect to metamask and get connect user address
  let address = await web3Provider.request({ method: "eth_requestAccounts" });

  let networkId = await web3.eth.net.getId();
  let networkType = await web3.eth.net.getNetworkType();
  let isListening = await web3.eth.net.isListening();
  //   let extend = await web3.eth.net.extend();
  let PeerCount = await web3.eth.net.getPeerCount();
  let currentProvider = await web3.eth.net.currentProvider;
  let givenProvider = await web3.eth.net.givenProvider;

  // console.log(
  //   await web3.eth.isMining(),
  //   await web3.eth.getHashrate(),
  //   await web3.eth.getGasPrice(),
  //   await web3.eth.getBlockNumber(),
  //   web3.utils.fromWei(await web3.eth.getBalance(address[0], "latest"))
  // );

  // console.log(
  //   "get transaction",
  //   await web3.eth.getTransaction(
  //     "0xc9e641f154cacd8e58f544d50698e5dae69044b159190099ad2d321fe499b439"
  //   )
  // );
  // console.log(
  //   await web3.eth.getTransactionReceipt(
  //     "0xc9e641f154cacd8e58f544d50698e5dae69044b159190099ad2d321fe499b439"
  //   )
  // );
  // console.log(await web3.eth.getPendingTransactions());

  return {
    address: address,
    networkId,
    connected: web3Provider.isConnected(),
    networkType,
    isListening,
    // extend,
    PeerCount,
    currentProvider,
    balance: web3.utils.fromWei(
      await web3.eth.getBalance(address[0], "latest")
    ),
    givenProvider,
    chainID: await web3.eth.getChainId(),
    BlockNumber: await web3.eth.getBlockNumber(),
    mining: await web3.eth.isMining(),
    hashrate: await web3.eth.getHashrate(),
    gasprice: web3.utils.fromWei(await web3.eth.getGasPrice()),
    transactioncount: await web3.eth.getTransactionCount(address[0]),
    nodeinfo: await web3.eth.getNodeInfo(),
    code: await web3.eth.getCode(address[0], "latest"),
    accounts: await web3.eth.getAccounts(),
    epv: web3.utils.toNumber(await web3.eth.getProtocolVersion()),
    isSync: await web3.eth.isSyncing(),
    defaultBlock: web3.eth.defaultBlock,
  };
};
//
// "0xc9e641f154cacd8e58f544d50698e5dae69044b159190099ad2d321fe499b439"
export const getTransaction = async (transactionHash) => {
  let transaction = await web3.eth.getTransaction(transactionHash);
  let reciepts = await web3.eth.getTransactionReceipt(transactionHash);
  console.log(reciepts);

  let tranx = {
    blockHash: transaction.blockHash,
    blockNumber: transaction.blockNumber,
    chainId: transaction.chainId,
    from: transaction.from,
    gas: transaction.gas,
    gasPrice: transaction.gasPrice,
    hash: transaction.hash,
    input: transaction.input,
    nonce: transaction.nonce,
    r: transaction.r,
    s: transaction.s,
    to: transaction.to,
    transactionIndex: transaction.transactionIndex,
    type: transaction.type,
    v: transaction.v,
    // value: transaction.value,
    value: `${web3.utils.fromWei(transaction.value)} Eth`,
  };

  let reciept = {
    blockHash: reciepts.blockHash,
    blockNumber: reciepts.blockNumber,
    contractAddress: reciepts.contractAddress,
    cumulativeGasUsed: reciepts.cumulativeGasUsed,
    effectiveGasPrice: reciepts.effectiveGasPrice,
    from: reciepts.from,
    gasUsed: reciepts.gasUsed,
    // logs:
    // logsBloom:
    status: reciepts.status,
    to: reciepts.to,
    transactionHash: reciepts.transactionHash,
    transactionIndex: reciepts.Transaction,
    type: reciepts.type,
  };

  return {
    tranx,
    reciept,
  };
};
