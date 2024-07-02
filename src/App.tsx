import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Faucet from "./components/Faucet";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Diposit from "./components/Deposit";

function App() {
  return (
    <Router>
      <div className="d-flex justify-center">
        <div className="w-[669px]">
          <Header />
          <Routes>
            <Route path="/" element={<Faucet />} />
            <Route path="/diposit" element={<Diposit />} />
          </Routes>
        </div>
      </div>
      <ToastContainer />
    </Router>
  );
}

export default App;
