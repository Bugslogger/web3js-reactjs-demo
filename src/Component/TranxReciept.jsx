import React, { useState } from "react";

const TranxReciept = ({ reciept }) => {
  return (
    <div className="my-3">
      <h3>Transaction Receipt</h3>
      <div className="my-2 border d-flex flex-wrap  justify-content-start p-1">
        <div
          style={{ width: "" }}
          className="p-2 m-2 border rounded border-success"
        >
          {reciept ? (
            Object.entries(reciept).map((val, index) => {
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
    </div>
  );
};

export default TranxReciept;
