import React from "react";
import { Link } from "react-router-dom";

const NoDataFound = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="flex justify-center flex-col col-span-12 w-[350x] md:w-[1530px] items-center min-h-[660px] bg-white space-y-5 rounded-xl">
        <div className="mb-10">
          <img
            className="h-24 w-24"
            src="https://i.ibb.co.com/02xpnf8/car-free-day-symbol-isolated-icon-18591-83177.jpg"
            alt=""
          />
        </div>
        <div>
          {" "}
          <p className="text-4xl font-bold">No Car Found Please Add Car</p>
        </div>
        <Link to="/add_car">
          <button className="btn bg-blue-700 hover:bg-blue-600 text-white font-bold rounded-lg transition duration-300   text-base">
            Add Car
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NoDataFound;
