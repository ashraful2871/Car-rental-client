import axios from "axios";
import React, { useEffect, useState } from "react";
import ListingsCard from "./ListingsCard";

const Listings = () => {
  const [listings, setListings] = useState([]);
  useEffect(() => {
    const fetchListingsCar = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/listings`
      );
      setListings(data);
    };
    fetchListingsCar();
  }, []);
  console.log(listings);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Recent Listings</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {listings.map((listing, idx) => (
          <ListingsCard key={idx} listing={listing}></ListingsCard>
        ))}
      </div>
    </div>
  );
};

export default Listings;
