import React from "react";

const Header = () => {
  return (
    <header class="p-3 text-bg-dark position-sticky top-0">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-sm-between">
          <div class="fw-bold align-items-center mb-2 mb-lg-0 fs-4 text-white">
            <span className="text-uppercase text-warning"> Web3js</span>
            <span className="text-capitalize"> Demo</span>
          </div>

          <div class="text-end ms-3">
            <button
              type="button"
              onClick={() => window.open("https://discord.gg/AbqSA5bT2E")}
              class="fw-bold btn btn-primary me-2"
            >
              Discord
            </button>
            <button
              onClick={() => window.open("https://github.com/bugslogger")}
              type="button"
              class="btn fw-bold btn-light"
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
