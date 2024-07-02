import { useEffect, useState } from "react";
import { getFaucetBalance } from "../services/faucetService";

const Balance = () => {
  const [balance, setBalance] = useState("");

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const faucetBalance = await getFaucetBalance();
        setBalance(faucetBalance);
      } catch (error) {
        console.error("Lỗi khi lấy số dư của faucet:", error);
      }
    };

    fetchBalance();
  }, [balance]);

  return (
    <p className="w-full font-bold text-success">
      ETH BALANCE:
      <span className="font-medium text-info"> {balance} ETH</span>
    </p>
  );
};

export default Balance;
