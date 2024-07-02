import { ethers } from "ethers";

export const connectWalletHandler = async () => {
  if (window.ethereum) {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);

      if (accounts.length > 0) {
        const walletAddress = accounts[0];
        localStorage.setItem("walletAddress", walletAddress);
        return provider;
      } else {
        localStorage.removeItem("walletAddress");
      }

      return provider;
    } catch (error) {
      console.error("Lỗi khi kết nối ví:", error);
    }
  } else {
    alert("Vui lòng cài đặt MetaMask");
  }
};
