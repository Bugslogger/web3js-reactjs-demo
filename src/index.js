import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { MoralisProvider } from "react-moralis";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MoralisProvider
        serverUrl="https://z8iipot14qf6.usemoralis.com:2053/server"
        appId="5IzU3yTJiIEBiBMzZuMyigczSsvmCvEQ4hZcay4Z"
      >
        <App />
      </MoralisProvider>
    </BrowserRouter>
  </React.StrictMode>
);
