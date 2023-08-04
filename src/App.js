import React from "react";
import ReactDOM from "react-dom/client";
import AppContainer from "./AppContainer";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ResDetail from "./components/ResDetail";

const root = ReactDOM.createRoot(document.getElementById("root"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppContainer />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/resdetail/:resId", element: <ResDetail /> },
    ],
  },
]);

root.render(<RouterProvider router={appRouter} />);
