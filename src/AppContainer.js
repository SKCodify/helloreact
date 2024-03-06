import Header from "./components/Header";
import { Outlet } from "react-router";
import UserContext from "./utils/usercontext";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const AppContainer = () => {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    /**Make API Call */
    const data = {
      userName: "Shubham khare",
    };
    setUserName(data.userName);
  }, []);
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ userName: userName, setUserName }}>
        <div className="app-container">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

export default AppContainer;
