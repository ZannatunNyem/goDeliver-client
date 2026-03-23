import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Component/Pages/Home";
import About from "../Component/Pages/About";
import Login from "../Component/Pages/Login";
import Register from "../Component/Pages/Register";
import PrivateRoute from "./PrivateRoute";
import SendParcel from "../Component/Pages/SendParcel";
import DashboardLayout from "../Layout/DashboardLayout";
import MyDashboard from "../Component/Pages/Dashboard/MyDashboard";
import Payment from "../Component/Pages/Dashboard/Payment";

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
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "mydashboard",
        Component: MyDashboard,
      },
      {
        path: "payment/:id",
        Component: Payment,
      },
    ],
  },
]);

export default router;
