import React, { useEffect, useState } from "react";
import { getTransaction } from "../Web3";
import TranxReciept from "./TranxReciept";

const Transaction = () => {
  const [input, setinput] = useState("");
  const [transaction, settransaction] = useState();
  useEffect(() => {}, []);

  const ShowTransaction = async (e) => {
    console.log(input);
    if (input === "") {
      console.log("input is empty");
      return;
    }
    try {
      let transaction = await getTransaction(input);
      settransaction(transaction);
      //   console.log(transaction);
    } catch (error) {
      if (error.code === -32602) {
        console.log("invalid");
        return;
      }
    }
  };

  return (
    <>
      {" "}
      <div className="">
        <h3>Get Transaction</h3>
        <div>
          <div className="input-group rounded border border-warning">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Transaction ID."
              onChange={(e) => setinput(e.target.value)}
            />
            <button
              onClick={ShowTransaction}
              className="btn fw-bold btn-warning"
            >
              Show Details
            </button>
          </div>
        </div>
        <div className="my-2 border p-3 border-warning overflow-scroll">
          {transaction?.tranx ? (
            Object.entries(transaction?.tranx).map((val, index) => {
              return (
                <div key={index} className="my-3">
                  <span className="text-secondary">{val[0]}</span>:{" "}
                  <span>{val[1]}</span>
                </div>
              );
            })
          ) : (
            <span className="text-secondary">
              Enter your transction Id Above to see transactions details
            </span>
          )}
        </div>
      </div>
      <div className="">
        <TranxReciept reciept={transaction?.reciept} />
      </div>
    </>
  );
};

export default Transaction;
