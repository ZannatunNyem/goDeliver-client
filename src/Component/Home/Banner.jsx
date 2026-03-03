import React from "react";
import manOne from "../../assets/img/man.webp";

export default function Banner() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${manOne})`,
      }}
    >
      <div className="hero-overlay "></div>
      {/* <div className=" absolute top-0 left-0 right-0 z-10 text-secondary w-11/12 mx-auto my-8 ">
        <NavBar></NavBar>
      </div> */}

      <div className="hero-content  text-neutral-content text-left absolute left-16 top-3/5 -translate-y-1/2">
        <div className="max-w-md ">
          <h1 className="mb-5 text-6xl font-bold">Fast Delivery</h1>
          <p className="mb-8 text-5xl">Reliable delivery with zero hassle</p>
          <button className="btn btn-primary text-lg">Get Started</button>
        </div>
      </div>
    </div>
  );
}
