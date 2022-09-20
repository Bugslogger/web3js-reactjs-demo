import React from "react";

const Header = () => {
  return (
    <header className="p-3 text-bg-dark position-sticky top-0">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-sm-between">
          <div className="fw-bold align-items-center mb-2 mb-lg-0 fs-4 text-white">
            <span className="text-uppercase text-warning"> Web3js</span>
            <span className="text-capitalize"> Demo</span>
          </div>

          <div className="text-end ms-3">
          <button
              onClick={() => alert("Coming soon...")}
              type="button"
              className="btn mx-2 fw-bold btn-success"
            >
              For Miners
            </button>
            <button
              type="button"
              onClick={() => window.open("https://discord.gg/AbqSA5bT2E")}
              className="fw-bold btn btn-primary me-2"
            >
              Discord
            </button>
            <button
              onClick={() => window.open("https://github.com/bugslogger")}
              type="button"
              className="btn fw-bold btn-light"
            >
              Github
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
