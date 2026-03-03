import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Component/Pages/Home";
import About from "../Component/Pages/About";
import Login from "../Component/Pages/Login";
import Register from "../Component/Pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, path: "/", Component: Home },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
]);

export default router;
