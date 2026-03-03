import React from "react";
import { Link } from "react-router";
import Logo from "../../Logo/Logo";

export default function NavBar() {
  const link = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/about"}>About</Link>
      </li>
    </>
  );
  return (
    <div className=" bg-base-200 text-secondary w-full  mx-auto px-5">
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-lg"
            >
              {link}
            </ul>
          </div>
          <Link to={"/"}>
            <Logo></Logo>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg">{link}</ul>
        </div>
        <div className="navbar-end">
          <Link to="/login" className="btn bg-primary text-secondary">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
