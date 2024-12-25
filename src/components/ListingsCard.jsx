import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const ListingsCard = ({ listing }) => {
  const { availability, date, model, photo, rentalPrice } = listing;
  return (
    <div className="card bg-base-100 shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
      <figure>
        <img src={photo} alt="car" className="w-full h-64 object-cover" />
      </figure>
      <div className="card-body">
        <h3 className="card-title text-lg font-semibold">{model}</h3>
        <p className="text-gray-500">${rentalPrice}/day</p>
        <div className="flex items-center gap-2">
          {availability ? (
            <span className="badge badge-success flex items-center gap-1">
              <FaCheckCircle /> Available
            </span>
          ) : (
            <span className="badge badge-error flex items-center gap-1">
              <FaTimesCircle /> Not Available
            </span>
          )}
        </div>
        <p className="text-sm text-gray-400">Added {date}</p>
      </div>
    </div>
  );
};

export default ListingsCard;
