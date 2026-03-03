import React from "react";
import Banner from "../Home/Banner";
import Features from "../Home/Features";
import OurService from "../Home/OurService";
import Company from "../Home/Company";
import Services from "../Home/Services";
import CommentCarousel from "../Home/CommentCarousel";
import FAQ from "../Home/FAQ";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Features></Features>
      <Services></Services>
      <OurService></OurService>
      <CommentCarousel></CommentCarousel>
      <Company></Company>
      <FAQ></FAQ>
    </div>
  );
}
