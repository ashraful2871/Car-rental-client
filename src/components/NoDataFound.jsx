import React from "react";
import { Link } from "react-router-dom";

const NoDataFound = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="flex justify-center flex-col col-span-12 w-[1530px] items-center min-h-[660px] bg-white space-y-5">
        <div className="mb-10">
          <img src="https://i.ibb.co.com/CQrT0NX/error.webp" alt="" />
        </div>
        <div>
          {" "}
          <p className="text-4xl font-bold">No Date Found</p>
        </div>
        <Link to="/add_car">
          <button className="btn btn-primary">Add Car</button>
        </Link>
      </div>
    </div>
  );
};

export default NoDataFound;
