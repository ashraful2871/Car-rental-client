import { format } from "date-fns";
import React from "react";
import { Link } from "react-router-dom";

const AvailableCarCard = ({ car }) => {
  const {
    _id,
    photo,
    model,
    rentalPrice,
    date,
    availability,
    location,
    booking_count,
  } = car;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img className="w-full h-64 object-cover" src={photo} alt="car" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{model}</h2>
        <p>Posted Date: {format(new Date(date), "Pp")}</p>
        <p>Price Per Day: ${rentalPrice}</p>
        <p>Availability: {availability}</p>
        <p>Location: {location}</p>
        <p>Total Booking: {booking_count}</p>
        <div className="card-actions justify-end">
          <Link to={`/car_details/${_id}`}>
            <button className="btn btn-primary text-white font-bold text-base">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AvailableCarCard;
