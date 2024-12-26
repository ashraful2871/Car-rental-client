import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Loading from "./Loading";
import ButtonSpinner from "./ButtonSpinner";

const CarDetails = () => {
  const queryClient = useQueryClient();
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useAuth();

  const { data: car, isLoading } = useQuery({
    queryKey: ["car", id],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/car/${id}`
      );
      return data;
    },
  });

  const { isPending, mutateAsync } = useMutation({
    mutationFn: async (bookData) => {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/add_book`,
        bookData
      );
      console.log(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["book"] });
      toast.success("Car Book successful", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      navigate("/my_bookings");
    },
    onError: (error) => {
      toast.error(error.response.data, {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      setOpenModal(false);
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }
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
      await mutateAsync(bookData);
      // const { data } = await axios.post(
      //   `${import.meta.env.VITE_API_URL}/add_book`,
      //   bookData
      // );
      // toast.success("Car Book successful", {
      //   style: {
      //     borderRadius: "10px",
      //     background: "#333",
      //     color: "#fff",
      //   },
      // });
      // navigate("/my_bookings");
      // console.log(data);
    } catch (error) {
      console.log(error);
      // toast.error(error.response.data, {
      //   style: {
      //     borderRadius: "10px",
      //     background: "#333",
      //     color: "#fff",
      //   },
      // });
    }
    // setOpenModal(false);
  };
  const handleCancelModal = () => {
    setOpenModal(false);
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row text-base-content items-start p-6 rounded-lg shadow-md">
        <div className="w-full md:w-1/2">
          <img src={photo} alt="Car" className="rounded-lg w-full h-[400px]" />
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
          </ul>
          <button
            className="btn btn-primary bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg transition duration-300 text-base mt-4"
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
                className="btn bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg transition duration-300 text-base"
                onClick={handleCancelModal}
              >
                Cancel
              </button>
              <button
                className="btn bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg transition duration-300 text-base"
                onClick={() => {
                  handleConfirmModal();
                }}
              >
                {isPending ? <ButtonSpinner></ButtonSpinner> : "Confirm"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarDetails;
