import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import AppContainer from "./AppContainer";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ResDetail from "./components/ResDetail";
import UserContext from "./utils/usercontext";
import Cart from "./components/Cart";

const root = ReactDOM.createRoot(document.getElementById("root"));

const About = lazy(() => import("./components/About"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppContainer />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading..</h1>}>
            <About />
          </Suspense>
        ),
      },
      { path: "/contact", element: <Contact /> },
      { path: "/resdetail/:resId", element: <ResDetail /> },
      { path: "/cart", element: <Cart /> },
    ],
  },
]);

root.render(<RouterProvider router={appRouter} />);
