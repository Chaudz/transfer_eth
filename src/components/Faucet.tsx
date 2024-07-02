import { useState } from "react";
import { handleFaucet } from "../services/faucetService";
import { BeatLoader } from "react-spinners";
import Balance from "./Balance";

const Faucet = () => {
  const [address, setAddress] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleFaucetp = async () => {
    setIsLoading(true);
    await handleFaucet(address);
    setIsLoading(false);
  };

  return (
    <div className="p-10 flex justify-center h-[100vh]">
      <div className="flex flex-col gap-3 items-center w-80 mt-28">
        <Balance />
        <input
          type="text"
          className="input input-bordered input-secondary w-full max-w-xs"
          value={address}
          placeholder="Enter wallet address"
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />
        <button
          disabled={!address}
          className=" w-full btn btn-secondary"
          onClick={handleFaucetp}
        >
          {isLoading ? <BeatLoader color="#59ff00" size={8} /> : "Receive ETH"}
        </button>
      </div>
    </div>
  );
};

export default Faucet;
