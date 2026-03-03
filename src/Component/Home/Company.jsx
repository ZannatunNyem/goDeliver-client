import React from "react";
import amazon from "../../assets/img/amazon.png";
import casio from "../../assets/img/casio.png";
import moonstar from "../../assets/img/moonstar.png";
import star from "../../assets/img/star.png";
import start_people from "../../assets/img/start_people.png";
import Marquee from "react-fast-marquee";

export default function Company() {
  const logos = [amazon, casio, moonstar, star, start_people];
  return (
    <div className="overflow-hidden py-15 bg-white">
      <h2 className="text-3xl font-bold text-center my-12">
        Trusted By Leading Brands
      </h2>
      <Marquee>
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt="logo" className="mx-10 h-6" />
        ))}
      </Marquee>
    </div>
  );
}
