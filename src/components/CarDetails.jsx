import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const CarDetails = () => {
  const [openModal, setOpenModal] = useState(false);
  const { id } = useParams();
  const [car, setCar] = useState({});
  const { user } = useAuth();
  useEffect(() => {
    fetchJobData();
  }, [id]);

  const fetchJobData = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/car/${id}`
    );
    setCar(data);
    // setStartDate(new Date(data.deadline));
  };

  const {
    _id,
    model,
    photo,
    rentalPrice,
    availability,
    features,
    description,
    userDetails,
    date,
    status,
  } = car;

  const handleBookNow = async () => {
    // 1.check book permission validation
    if (user?.email === userDetails?.email) {
      return toast.error("Won Account Action Not Permitted", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }

    setOpenModal(true);
  };

  const handleConfirmModal = async () => {
    const bookingDate = new Date();
    const bookData = {
      bookId: _id,
      model,
      email: user?.email,
      photo,
      bookingDate,
      status,
      rentalPrice,
      userDetails: userDetails?.email,
    };

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/add_book`,
        bookData
      );
      toast.success("Car Book successful", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      // navigate("/my-bids");
      console.log(data);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data);
    }
    setOpenModal(false);
  };
  const handleCancelModal = () => {
    setOpenModal(false);
  };
  return (
    <div>
      <div className="flex flex-col md:flex-row text-base-content items-start p-6 rounded-lg shadow-md">
        <div className="w-full md:w-1/2">
          {/* image should be dynamic  ❌❌❌❌❌✅✅✅✅✅*/}
          <img
            src="https://via.placeholder.com/500x300"
            alt="Car"
            className="rounded-lg w-full"
          />
        </div>

        <div className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-6 space-y-5 ">
          <h2 className="text-2xl font-bold text-red-500">
            ${rentalPrice}{" "}
            <span className=" text-base font-normal text-base-content">
              / Day
            </span>
          </h2>
          <p className="mt-2 ">{description}</p>
          <ul className="mt-4 space-y-2">
            <li>
              <strong>Model:</strong> {model}
            </li>
            <li>
              <strong>Price Per Day:</strong> {rentalPrice}
            </li>
            <li>
              <strong>Availability:</strong> {availability}
            </li>
            <li>
              <strong>Features:</strong> {features}
            </li>
            <li>
              <strong>Reviews:</strong>
            </li>
          </ul>
          <button
            className="btn btn-primary text-white font-bold text-base mt-4"
            onClick={handleBookNow}
          >
            Book Now
          </button>
        </div>
      </div>

      {/* modal */}
      {openModal && (
        <div className="modal modal-open ">
          <div className="modal-box w-11/12 max-w-5xl bg-base-100 text-base-content">
            <h3 className="font-bold text-lg text-center">
              Booking Confirmation
            </h3>
            <p className="py-4">Are you sure you want to book this car?</p>
            <ul className="space-y-2">
              <li>
                <strong>Model:</strong> {model}
              </li>
              <li>
                <strong>Price Per Day:</strong> {rentalPrice}
              </li>
              <li>
                <strong>Availability:</strong> {availability}
              </li>
              <li>
                <strong>Features:</strong> {features}
              </li>
              <li>
                <strong>Reviews:</strong>
              </li>
            </ul>
            <div className="modal-action">
              <button
                className="btn btn-error text-white font-bold text-base"
                onClick={handleCancelModal}
              >
                Cancel
              </button>
              <button
                className="btn btn-primary text-white font-bold text-base"
                onClick={() => {
                  handleConfirmModal();
                }}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarDetails;
