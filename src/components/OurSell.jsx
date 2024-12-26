import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Fade } from "react-awesome-reveal";
import Loading from "./Loading";

const OurSell = () => {
  const { data: sells, isLoading } = useQuery({
    queryKey: ["sells"],
    queryFn: async () => {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/sell`);
      return data;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <>
      <h2 className="text-3xl md:text-4xl font-bold mt-12 text-center">
        Our <span className="text-red-500">Sells </span>
      </h2>
      <p className="text-center bg-base-100 text-base-content mb-10">
        We Sell some Products, if you want explore our products.
      </p>

      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {sells.map((sell) => (
            <Fade cascade damping={0.2}>
              <div key={sell.id} className="border rounded-lg p-4 text-center">
                <img
                  src={sell.image}
                  alt="product"
                  className="w-full h-60 object-cover mb-4"
                />
                <h3 className="text-lg font-semibold">{sell.name}</h3>
                <p className="text-red-500 font-bold">{sell.price}</p>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </>
  );
};

export default OurSell;
