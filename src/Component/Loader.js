import React from "react";
import "./loader.css";

const Loader = () => {
  return (
    <div
      // style={{
      //   zIndex: "999",
      //   height: "100vh",
      //   // backgroundColor: "rgba(0,0,0,0.1)",
      // }}
      className="w-100 d-flex justify-content-center align-items-center"
    >
      <div className="lds-circle">
        <div className="bg-info"></div>
      </div>
    </div>
  );
};

export default Loader;
