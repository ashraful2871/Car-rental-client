import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { formatDistanceToNow } from "date-fns";
import { Link } from "react-router-dom";

const ListingsCard = ({ listing }) => {
  const { _id, availability, date, model, photo, rentalPrice, booking_count } =
    listing;
  return (
    <div className="card bg-base-100 border shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
      <figure>
        <img src={photo} alt="car" className="w-full h-64 object-cover" />
      </figure>
      <div className="card-body">
        <h3 className="card-title text-lg font-semibold">{model}</h3>
        <p className="text-gray-500">${rentalPrice}/day</p>
        <div className="flex items-center gap-2">
          {availability ? (
            <span className="badge badge-success flex items-center text-white gap-1">
              <FaCheckCircle /> Available
            </span>
          ) : (
            <span className="badge badge-error flex items-center text-white gap-1">
              <FaTimesCircle /> Not Available
            </span>
          )}
        </div>
        <p>Total Booking: {booking_count}</p>
        <p className="text-sm text-gray-400">
          Added {formatDistanceToNow(new Date(date), { addSuffix: true })}
        </p>
        <div className="card-actions justify-end">
          <Link to={`/car_details/${_id}`}>
            <button className="btn bg-blue-700 hover:bg-blue-600 text-white font-bold rounded-lg transition duration-300   text-base">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListingsCard;
