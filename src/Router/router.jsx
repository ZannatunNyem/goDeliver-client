import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Component/Pages/Home";
import About from "../Component/Pages/About";
import Login from "../Component/Pages/Login";
import Register from "../Component/Pages/Register";
import PrivateRoute from "./PrivateRoute";
import SendParcel from "../Component/Pages/SendParcel";

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
      {
        path: "/sendParcel",
        element: (
          <PrivateRoute>
            <SendParcel></SendParcel>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
