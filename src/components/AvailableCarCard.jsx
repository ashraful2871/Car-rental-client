import React from "react";
import { Link } from "react-router-dom";

const AvailableCarCard = ({ car }) => {
  const { _id, photo, model, rentalPrice, date, availability } = car;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src="https://i.ibb.co.com/WB2wdgg/bmw.jpg" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{model}</h2>
        <p>Price Per Day: ${rentalPrice}</p>
        <p>Availability: {availability}</p>
        <div className="card-actions justify-end">
          <Link to={`/car_details/1`}>
            <button className="btn btn-primary">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AvailableCarCard;
