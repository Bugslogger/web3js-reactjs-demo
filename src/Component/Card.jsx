import React from "react";

const Card = ({ object, cn }) => {
  return (
    <div className="my-2 border p-3 overflow-scroll">
      {object ? (
        Object.entries(object).map((val, index) => {
          return (
            <div key={index} className=" my-3">
              <span className="text-secondary">{val[0]}</span>:{" "}
              <span className="text-break">{val[1]}</span> 
            </div>
          );
        })
      ) : (
        <span className="text-secondary">your not logged In</span>
      )}
    </div>
  );
};

export default Card;
