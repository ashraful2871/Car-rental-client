import React from "react";
import Banner from "./banner/Banner";
import WhyChooseUs from "./WhyChooseUs";
import RecentListings from "./RecentListings";
import UserTestimonials from "./UserTestimonials";
import SpecialOffers from "./SpecialOffers";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <WhyChooseUs></WhyChooseUs>
      <RecentListings></RecentListings>
      <UserTestimonials></UserTestimonials>
      <SpecialOffers></SpecialOffers>
    </div>
  );
};

export default Home;
