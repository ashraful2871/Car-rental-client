import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="text-center space-y-5">
      <h3 className="text-6xl font-bold mt-5"> Oops!</h3>
      <h2 className="text-5xl mb-5 mt-8 font-bold">
        Looks like our GPS can't find this page either.
      </h2>
      <div className="flex justify-center">
        <img
          className=" h-[550px] rounded-2xl"
          src="https://i.ibb.co.com/f1QRMmD/car-error.gif"
          alt=""
        />
      </div>
      <div>
        <Link to="/">
          <button className="btn btn-primary font-bold">Back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
