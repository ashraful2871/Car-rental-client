import React, { useState } from "react";

const CarDetails = () => {
  return (
    <div>
      {/* Main Card */}
      <div className="flex flex-col md:flex-row items-start p-6 bg-white rounded-lg shadow-md">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src="https://via.placeholder.com/500x300"
            alt="Car"
            className="rounded-lg w-full"
          />
        </div>

        {/* Details Section */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-6">
          <h2 className="text-2xl font-bold text-red-500">
            $45.00{" "}
            <span className="text-gray-500 text-base font-normal">/ Day</span>
          </h2>
          <p className="mt-2 text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500.
          </p>
          <ul className="mt-4 space-y-2 text-gray-700">
            <li>
              <strong>Car year:</strong> 2015
            </li>
            <li>
              <strong>Fuel:</strong> Petrol
            </li>
            <li>
              <strong>Gearbox:</strong> Tiptronic
            </li>
            <li>
              <strong>Fuel usage:</strong> 10 l/100 km
            </li>
            <li>
              <strong>Max passengers:</strong> 5
            </li>
            <li>
              <strong>Engine capacity:</strong> 2500 cc
            </li>
          </ul>
          <button
            className="btn btn-primary mt-4"
            onClick={() => document.getElementById("my_modal_4").showModal()}
          >
            Book Now
          </button>
        </div>
      </div>

      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg text-center">
            Booking Confirmation
          </h3>
          <p className="py-4">Are you sure you want to book this car?</p>
          <ul className="space-y-2 text-gray-700">
            <li>
              <strong>Car:</strong> Lexus
            </li>
            <li>
              <strong>Price:</strong> $45.00 / Day
            </li>
            <li>
              <strong>Car year:</strong> 2015
            </li>
            <li>
              <strong>Fuel:</strong> Petrol
            </li>
            <li>
              <strong>Gearbox:</strong> Tiptronic
            </li>
            <li>
              <strong>Engine capacity:</strong> 2500 cc
            </li>
          </ul>

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default CarDetails;
