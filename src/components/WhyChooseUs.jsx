import React from "react";
import {
  FaCar,
  FaMoneyBillWave,
  FaMousePointer,
  FaHeadset,
} from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <div className="bg-base-100 text-base-content py-12 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Why Choose <span className="text-red-500">Us</span>
      </h2>
      <p className="text-center bg-base-100 text-base-content mb-10">
        Get more free slide templates: JustFreeSlide.com
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="flex flex-col items-center p-6 border rounded-lg shadow hover:shadow-md transition duration-200 bg-base-100 text-base-content">
          <FaCar className="text-4xl text-red-500" />
          <h3 className="mt-4 text-xl font-semibold">Wide Variety of Cars</h3>
          <p className="text-center mt-2 bg-base-100 text-base-content">
            From budget-friendly options to luxury vehicles.
          </p>
        </div>
        <div className="flex flex-col items-center p-6 border rounded-lg shadow hover:shadow-md transition duration-200 bg-base-100 text-base-content">
          <FaMoneyBillWave className="text-4xl text-red-500" />
          <h3 className="mt-4 text-xl font-semibold">Affordable Prices</h3>
          <p className="text-center mt-2 bg-base-100 text-base-content">
            Competitive daily rates you can count on.
          </p>
        </div>
        <div className="flex flex-col items-center p-6 border rounded-lg shadow hover:shadow-md transition duration-200 bg-base-100 text-base-content">
          <FaMousePointer className="text-4xl text-red-500" />
          <h3 className="mt-4 text-xl font-semibold">Easy Booking Process</h3>
          <p className="text-center mt-2 bg-base-100 text-base-content">
            Seamlessly book your ride in just a few clicks.
          </p>
        </div>
        <div className="flex flex-col items-center p-6 border rounded-lg shadow hover:shadow-md transition duration-200 bg-base-100 text-base-content">
          <FaHeadset className="text-4xl text-red-500" />
          <h3 className="mt-4 text-xl font-semibold">Customer Support</h3>
          <p className="text-center mt-2 bg-base-100 text-base-content">
            24/7 assistance for all your queries.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
