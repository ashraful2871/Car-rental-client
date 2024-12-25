import React from "react";
import { motion } from "framer-motion";

const offers = [
  {
    id: 1,
    title: "Get 15% off for weekend rentals!",
    description:
      "Book your car for the weekend and enjoy a 15% discount on all models.",
    buttonText: "Book Now",
  },
  {
    id: 2,
    title: "Luxury cars at $99/day this holiday season!",
    description:
      "Drive in style this holiday season with our luxury cars for just $99/day.",
    buttonText: "Book Now",
  },
];

const SpecialOffers = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Special Offers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {offers.map((offer, index) => (
          <motion.div
            key={offer.id}
            className="card bg-base-100 shadow-md p-6 rounded-lg hover:shadow-lg hover:scale-105 transition-transform"
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-semibold mb-2">{offer.title}</h3>
            <p className="text-gray-500 mb-4">{offer.description}</p>
            <button className="btn bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg transition duration-300">
              {offer.buttonText}
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SpecialOffers;
