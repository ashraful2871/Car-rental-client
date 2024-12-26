import React from "react";
import Banner from "./banner/Banner";
import WhyChooseUs from "./WhyChooseUs";
import SpecialOffers from "./SpecialOffers";
import Listings from "./Listings";
import OurServices from "./OurServices";
import OurSell from "./OurSell";
import ButtonSpinner from "./ButtonSpinner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ButtonSpinner></ButtonSpinner>
      <WhyChooseUs></WhyChooseUs>
      <Listings></Listings>
      <SpecialOffers></SpecialOffers>
      <OurServices></OurServices>
      <OurSell></OurSell>
    </div>
  );
};

export default Home;
