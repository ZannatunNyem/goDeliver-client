import React from "react";

import Logo from "../Logo/Logo";
import useAuth from "../Hooks/useAuth";
import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  const { user, logOut } = useAuth();

  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log("Sign out success");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  const link = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>

      {user && (
        <>
          <li>
            <NavLink to={"/sendParcel"}>Send Parcel</NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/mydashboard"}>Dashboard</NavLink>
          </li>
        </>
      )}
      <li>
        <NavLink to={"/about"}>About</NavLink>
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
          {user ? (
            <button onClick={handleLogout} className="btn btn-primary text-lg">
              Logout
            </button>
          ) : (
            <Link to="/login" className="btn btn-primary text-lg">
              Login
            </Link>
          )}
          {/* <Link to="/login" className="btn bg-primary text-secondary">
            Login
          </Link> */}
        </div>
      </div>
    </div>
  );
}
