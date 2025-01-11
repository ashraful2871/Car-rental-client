import React, { useRef } from "react";
import Banner from "./banner/Banner";
import WhyChooseUs from "./WhyChooseUs";
import SpecialOffers from "./SpecialOffers";
import Listings from "./Listings";
import OurSell from "./OurSell";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <WhyChooseUs></WhyChooseUs>
      <Listings></Listings>
      <SpecialOffers></SpecialOffers>
      <OurSell></OurSell>
    </div>
  );
};

export default Home;
