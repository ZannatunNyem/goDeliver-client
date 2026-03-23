import React from "react";
import manOne from "../../assets/img/man.webp";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${manOne})`,
      }}
    >
      <div className="hero-overlay "></div>

      <div className="hero-content  text-neutral-content text-left absolute left-16 top-3/5 -translate-y-1/2">
        <div className="max-w-md ">
          <h1 className="mb-5 text-6xl font-bold">Fast Delivery</h1>
          <p className="mb-8 text-5xl">Reliable delivery with zero hassle</p>
          <Link to={"/sendParcel"}>
            <button className="btn btn-primary text-lg">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
