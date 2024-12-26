import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

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
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Special <span className="text-red-500">Offer</span>
      </h2>
      <p className="text-center bg-base-100 text-base-content mb-10">
        Discover special offers on cars,with exclusive discounts and
        limited-time deals.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {offers.map((offer, index) => (
          <Fade cascade damping={0.2}>
            <motion.div
              key={offer.id}
              className="card bg-base-100 shadow-md p-6 rounded-lg hover:shadow-lg hover:scale-105 transition-transform border"
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-semibold mb-2">{offer.title}</h3>
              <p className="text-gray-500 mb-4">{offer.description}</p>
              <div className="flex justify-end">
                <Link to="/available_car">
                  <button className="btn bg-blue-700 hover:bg-blue-600 text-white font-bold rounded-lg transition duration-300 text-base">
                    {offer.buttonText}
                  </button>
                </Link>
              </div>
            </motion.div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default SpecialOffers;
