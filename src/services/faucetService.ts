import { ethers } from "ethers";
import faucetAbi from "../abis/Faucet.json";
import { connectWalletHandler } from "./walletService";
import { toast } from "react-toastify";

const rpcUrl = "https://rpc.sepolia.org";
const contractAddress = "0x03F2dA58099C91EE098Cc1586F761841f649a2C7";
const provider = new ethers.JsonRpcProvider(rpcUrl);

export const getFaucetBalance = async () => {
  try {
    const balance = await provider.getBalance(contractAddress);
    return ethers.formatEther(balance);
  } catch (error) {
    console.error("Lỗi khi lấy số dư của faucet:", error);
    throw error;
  }
};

export const handleFaucet = async (walletAddress: string) => {
  const provider = await connectWalletHandler();
  if (!provider) return;

  const signer = await provider.getSigner();
  const faucetContract = new ethers.Contract(
    contractAddress,
    faucetAbi,
    signer
  );

  try {
    const tx = await faucetContract.faucet(walletAddress);

    // Chờ giao dịch được xác nhận
    await tx.wait();
    toast.success("Successfully received ETH !", {
      position: "top-right",
    });
  } catch (error) {
    console.error("Error calling faucet:", error);
    toast.error("Failed to call faucet.", {
      position: "top-right",
    });
  }
};

export const depositEth = async (value: string) => {
  const provider = await connectWalletHandler();
  if (!provider) return;

  const signer = await provider.getSigner();
  const faucetContract = new ethers.Contract(
    contractAddress,
    faucetAbi,
    signer
  );

  try {
    const tx = await faucetContract.deposit({
      value: ethers.parseEther(value),
    });

    // Chờ giao dịch được xác nhận
    await tx.wait();
    toast.success("Deposited ETH successfully !", {
      position: "top-right",
    });
  } catch (error) {
    console.error("Error:", error);
    toast.error("Failed to call diposit.", {
      position: "top-right",
    });
  }
};

export async function getTransactions() {}
