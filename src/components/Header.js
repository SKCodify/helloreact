import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/usercontext";
import { useSelector } from "react-redux";
const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  const isOnline = useOnlineStatus();
  const userNameContext = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between p-2 items-center bg-pink-100">
      <div className="logo-container">
        <img className="w-24" src={LOGO_URL}></img>
      </div>
      <ul className="flex">
        <li className="p-2">{isOnline ? "Online 🟢" : "Offline 🔴"}</li>
        <li className="p-2">Menu</li>
        <li className="p-2">
          <Link to="/">Home</Link>
        </li>
        <li className="p-2">
          <Link to="/about">About Us</Link>
        </li>
        <li className="p-2">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="p-2 text-lg font-bold">
          <Link to="/cart">Cart - ({cartItems.length} items)</Link>
        </li>
        <li className="p-2">
          <button
            className="login-btn"
            onClick={() => {
              setbtnName((prevVal) =>
                setbtnName(prevVal === "Login" ? "Logout" : "Login")
              );
            }}
          >
            {btnName}
          </button>
        </li>
        <li className="p-2">{userNameContext.userName}</li>
      </ul>
    </div>
  );
};

export default Header;
