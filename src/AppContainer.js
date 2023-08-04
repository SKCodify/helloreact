import Header from "./components/Header";
import { Outlet } from "react-router";

const AppContainer = () => {
  return (
    <div className="app-container">
      <Header />
      <Outlet />
    </div>
  );
};

export default AppContainer;
