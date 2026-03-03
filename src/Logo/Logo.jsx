import React from "react";
import logo from "../assets/img/logo.svg";

export default function Logo() {
  return (
    <div className="flex items-end font-semibold text-secondary">
      <span className="text-2xl font-serif">G</span>
      <img src={logo} className="w-8 h-8" alt="logo" />
      <span className="text-2xl font-serif">Delivery</span>
    </div>
  );
}
