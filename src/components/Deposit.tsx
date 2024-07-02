import { BeatLoader } from "react-spinners";
import Balance from "./Balance";
import { useState } from "react";
import { depositEth, getTransactions } from "../services/faucetService";

const Diposit = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [valueEth, setValueEth] = useState("");

  const handleDipositEth = async () => {
    setIsLoading(true);
    await depositEth(valueEth);
    setIsLoading(false);
  };

  return (
    <div className="p-10 flex justify-center h-[100vh]  ">
      <div className="flex flex-col gap-3 items-center w-80 mt-28">
        <Balance />
        <input
          type="text"
          className="input input-bordered input-secondary w-full max-w-xs"
          placeholder="Enter ETH"
          onChange={(e) => {
            setValueEth(e.target.value);
          }}
        />

        <button
          className={`w-full btn ${
            !valueEth ? "cursor-not-allowed bg-opacity-50" : "btn-secondary"
          }`}
          onClick={handleDipositEth}
          disabled={!valueEth}
        >
          {isLoading ? <BeatLoader color="#59ff00" size={8} /> : "Diposit ETH"}
        </button>
      </div>
    </div>
  );
};

export default Diposit;
