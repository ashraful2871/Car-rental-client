import React from "react";
import Banner from "./banner/Banner";
import WhyChooseUs from "./WhyChooseUs";
import SpecialOffers from "./SpecialOffers";
import Listings from "./Listings";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <WhyChooseUs></WhyChooseUs>
      <Listings></Listings>
      <SpecialOffers></SpecialOffers>
    </div>
  );
};

export default Home;
