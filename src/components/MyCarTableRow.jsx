import { format } from "date-fns";
import React, { useState } from "react";
import { FaTrashRestoreAlt } from "react-icons/fa";
import { TiEdit } from "react-icons/ti";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import useAuth from "../hooks/useAuth";

const MyCarTableRow = ({ car, handleDelete, fetchAllCar }) => {
  const [openModal, setOpenModal] = useState(false);
  const { user } = useAuth();

  const {
    _id,
    photo,
    model,
    rentalPrice,
    date,
    availability,
    registration,
    features,
    location,
    description,
  } = car;
  const handleUpdateNow = async () => {
    setOpenModal(true);
  };

  const handleCancelModal = () => {
    setOpenModal(false);
  };
  const handleUpdate = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const model = formData.get("model");
    const rentalPrice = formData.get("rentalPrice");
    const availability = formData.get("availability");
    const registration = formData.get("registration");
    const features = formData.get("features");
    const location = formData.get("location");
    const description = formData.get("description");
    const photo = formData.get("image");
    const date = new Date();

    const updateCarData = {
      model,
      rentalPrice,
      addPostUser: {
        email: user?.email,
        name: user?.displayName,
      },
      availability,
      registration,
      features,
      description,
      photo,
      location,
      date,
      status: "Pending",
      booking_count: 0,
    };

    try {
      await axios.put(
        `${import.meta.env.VITE_API_URL}/update_car/${_id}`,
        updateCarData
      );

      toast.success("data updated successfully", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      fetchAllCar();
      setOpenModal(false);
    } catch (error) {
      toast.error(error.message, {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
  };

  return (
    <>
      <tr className="hover text-lg font-semibold text-center">
        <td className="border border-gray-300 px-4 py-2">
          <div className="flex justify-center">
            <img
              src={photo}
              alt="Car"
              className="h-16 w-32 object-cover rounded-md flex"
            />
          </div>
        </td>
        <td className="border border-gray-300 px-4 py-2">{model}</td>
        <td className="border border-gray-300 px-4 py-2">${rentalPrice}</td>
        <td className="border border-gray-300 px-4 py-2">{availability}</td>
        <td className="border border-gray-300 px-4 py-2">
          {format(new Date(date), "P")}
        </td>
        <td className="border border-gray-300 px-4 py-2">
          <div className="flex gap-7 justify-center">
            <button
              onClick={() => handleDelete(_id)}
              className="hover:text-red-600 text-xl"
            >
              <FaTrashRestoreAlt />
            </button>
            <Link>
              <button
                onClick={handleUpdateNow}
                className="hover:text-blue-600 text-2xl"
              >
                <TiEdit />
              </button>
            </Link>
          </div>
        </td>
      </tr>

      {/* update modal */}
      {openModal && (
        <div className="modal modal-open">
          <div className="modal-box w-11/12 max-w-5xl">
            <div className="card bg-base-100 w-full">
              <div>
                <h2 className="text-center text-3xl md:text-4xl font-bold">
                  Update <span className="text-red-500">Car</span> Data
                </h2>
              </div>
              <form
                onSubmit={handleUpdate}
                className="card-body grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg font-semibold">
                      Car Model
                    </span>
                  </label>
                  <input
                    type="text"
                    name="model"
                    placeholder="Car Model"
                    className="input input-bordered"
                    defaultValue={model}
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg font-semibold">
                      Daily Rental Price
                    </span>
                  </label>
                  <input
                    type="number"
                    name="rentalPrice"
                    placeholder="Rental Price"
                    className="input input-bordered"
                    defaultValue={rentalPrice}
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg font-semibold">
                      Availability
                    </span>
                  </label>
                  <select
                    name="availability"
                    id="availability"
                    className="border p-2 rounded-md"
                    defaultValue={availability}
                    required
                  >
                    <option value="Available">Available</option>
                    <option value="Unavailable">Unavailable</option>
                  </select>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg font-semibold">
                      Vehicle Registration Number
                    </span>
                  </label>
                  <input
                    type="numbers"
                    name="registration"
                    defaultValue={registration}
                    placeholder="Add Vehicle Registration Number"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg font-semibold">
                      Features
                    </span>
                  </label>
                  <input
                    type="text"
                    name="features"
                    defaultValue={features}
                    placeholder="Features (e.g., GPS, AC, etc.)"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg font-semibold">
                      Location
                    </span>
                  </label>
                  <select
                    name="location"
                    id="location"
                    defaultValue={location}
                    className="border p-2 rounded-md"
                    required
                  >
                    <option value="Dhaka">Dhaka</option>
                    <option value="Rajshhahi">Rajshhahi</option>
                    <option value="Rangpur">Rangpur</option>
                  </select>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg font-semibold">
                      Image
                    </span>
                  </label>
                  <input
                    type="url"
                    name="image"
                    placeholder="Image Url"
                    className="input input-bordered"
                    defaultValue={photo}
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-lg font-semibold">
                      Description
                    </span>
                  </label>
                  <textarea
                    name="description"
                    defaultValue={description}
                    className="textarea textarea-bordered h-36"
                    placeholder="description"
                    required
                  ></textarea>
                </div>
                <div className="grid grid-cols-2 md:col-span-2 gap-8">
                  <div className="form-control mt-6">
                    <button
                      type="button"
                      className="btn bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg transition duration-300 text-base"
                      onClick={handleCancelModal}
                    >
                      Cancel
                    </button>
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg transition duration-300 text-base w-32 md:w-full">
                      Update Car
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MyCarTableRow;
