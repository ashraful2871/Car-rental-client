import { format } from "date-fns";
import React from "react";
import { Link } from "react-router-dom";

const ListView = ({ car }) => {
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
    <div className="card card-side bg-base-100 border-2 p-4 gap-5">
      <div className="w-[60%] md:w-[750px]">
        <img
          className="w-full h-56 md:h-full rounded-xl object-cover"
          src={photo}
          alt="Car"
        />
      </div>
      <div className="w-[60%] md:w-full font-semibold space-y-3">
        <h2 className="card-title text-2xl md:text-3xl">{model}</h2>
        <p>Posted Date: {format(new Date(date), "Pp")}</p>
        <p>Price Per Day: ${rentalPrice}</p>
        <p>
          Availability:{" "}
          <span
            className={`${
              availability === "Unavailable"
                ? "text-red-600 font-bold"
                : "text-green-600 font-bold"
            }`}
          >
            {availability}
          </span>
        </p>
        <p>Location: {location}</p>
        <p>Total Booking: {booking_count}</p>
        <div className="card-actions justify-end">
          {availability === "Unavailable" ? (
            <button
              disabled={availability === "Unavailable"}
              className="btn bg-blue-700 hover:bg-blue-600 text-white font-bold rounded-lg transition duration-300 text-base disabled:bg-gray-500 disabled:cursor-not-allowed"
            >
              Book Now
            </button>
          ) : (
            <Link to={`/car_details/${_id}`}>
              <button className="btn bg-blue-700 hover:bg-blue-600 text-white font-bold rounded-lg transition duration-300 text-base disabled:bg-gray-500 disabled:cursor-not-allowed">
                Book Now
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListView;
