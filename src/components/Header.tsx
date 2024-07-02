import { Link } from "react-router-dom";
import walletIcon from "../assets/images/wallet.png";
import { connectWalletHandler } from "../services/walletService";
import logo from "../assets/images/person.png";
import { ChangeEvent, useEffect, useState } from "react";

const Header = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const walletAddress = localStorage.getItem("walletAddress");
  const shortenedAddress = walletAddress
    ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`
    : "Connect Wallet";

  const handleToggleTheme = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    if (theme) {
      localStorage.setItem("theme", theme);
      const localTheme = localStorage.getItem("theme") as string;
      document.querySelector("html")?.setAttribute("data-theme", localTheme);
    }
  }, [theme]);

  return (
    <div className="w-full flex justify-center fixed top-0 left-0 right-0 items-center gap-4 p-4 shadow-2xl">
      <div className="flex items-center space-x-4">
        <div
          className="h-16 w-16 rounded-full bg-blue-500 shadow-lg"
          style={{
            filter: "hue-rotate(180deg) saturate(200%)",
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="rounded-full object-fit-cover"
          />
        </div>
        <h1 className="text-2xl font-bold text-orange-600">Get free ETH</h1>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link
              to="/"
              className=" hover:text-gray-500 text-success transition duration-300 font-bold"
            >
              Receive ETH
            </Link>
          </li>
          <li>
            <Link
              to="/diposit"
              className=" hover:text-gray-500 text-success transition duration-300 font-bold"
            >
              Diposit ETH
            </Link>
          </li>
        </ul>
      </nav>
      <button
        className="text-blue-600 font-medium py-2 px-4 rounded focus:outline-1 focus:outline-blue-600 hover:outline-1 flex items-center gap-3  hover:outline hover:outline-blue-600"
        onClick={connectWalletHandler}
      >
        <img src={walletIcon} alt="Wallet" className="w-6" />
        <p>{shortenedAddress}</p>
      </button>
      <input
        onChange={(e) => {
          handleToggleTheme(e);
        }}
        type="checkbox"
        checked={theme === "light" ? false : true}
        className="toggle theme-controller col-span-2 col-start-1 row-start-1 border-sky-400 bg-amber-300 [--tglbg:theme(colors.sky.500)] checked:border-blue-800 checked:bg-blue-300 checked:[--tglbg:theme(colors.blue.900)]"
      />
    </div>
  );
};

export default Header;
