import React from "react";
import { Outlet } from "react-router";
import NavBar from "../Component/Share/NavBar";
import Footer from "../Component/Share/Footer";

export default function MainLayout() {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}
