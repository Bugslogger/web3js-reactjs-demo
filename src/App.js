import "./App.css";
import Header from "./Component/Header";
import Web3ConnectToMetamask from "./Component/Web3ConnectToMetamask";

function App() {
  return (
    <div className="w-100">
      <div className="w-100">
        <Header/>
      </div>
      <Web3ConnectToMetamask />
    </div>
  );
}

export default App;
