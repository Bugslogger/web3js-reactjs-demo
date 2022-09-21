import "./App.css";
import Header from "./Component/Header";
import Web3ConnectToMetamask from "./Component/Web3ConnectToMetamask";
import { Route, Routes } from "react-router-dom";
import { DisplayNFT } from "./Moralis/DisplayNFT";
import Moralis from "./Moralis/Moralis";

function App() {
  return (
    <div className="w-100 position-relative">
      <div className="w-100">
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Web3ConnectToMetamask />} />
        <Route path="moralis" element={<Moralis />} />
      </Routes>
    </div>
  );
}

export default App;
