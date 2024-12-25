import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import Loading from "./Loading";

const UpdateMyCars = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [car, setCar] = useState({});
  const [loading, setLoading] = useState(true);
  console.log(car);
  useEffect(() => {
    fetchCar();
  }, [id]);
  const fetchCar = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/car/${id}`
    );
    setCar(data);
    setLoading(false);
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
      const { data } = await axios.put(
        `${import.meta.env.VITE_API_URL}/update_car/${id}`,
        updateCarData
      );
      console.log(data);
      //   form.reset();
      toast.success("data updated successfully", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      fetchCar();
      //   navigate("/my-posted-jobs");
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
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div className="card bg-base-100 w-full  shadow-2xl">
        <form
          onSubmit={handleUpdate}
          className="card-body grid grid-cols-2 gap-8"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Car Model</span>
            </label>
            <input
              type="text"
              name="model"
              placeholder="Car Model"
              className="input input-bordered"
              defaultValue={car.model}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Daily Rental Price</span>
            </label>
            <input
              type="number"
              name="rentalPrice"
              placeholder="Car Model"
              className="input input-bordered"
              defaultValue={car.rentalPrice}
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Availability</span>
            </label>
            <select
              name="availability"
              id="availability"
              className="border p-2 rounded-md"
              defaultValue={car.availability}
              required
            >
              <option value="Available">Available</option>
              <option value="Unavailable">Unavailable</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Vehicle Registration Number</span>
            </label>
            <input
              type="text"
              name="registration"
              defaultValue={car.registration}
              placeholder="Add Vehicle Registration Number
"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Features</span>
            </label>
            <input
              type="text"
              name="features"
              defaultValue={car.features}
              placeholder="Features (e.g., GPS, AC, etc.)"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <select
              name="location"
              id="location"
              defaultValue={car.location}
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
              <span className="label-text">Image</span>
            </label>
            <input
              type="url"
              name="image"
              placeholder="Image Url"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              name="description"
              defaultValue={car.description}
              className="textarea textarea-bordered h-36"
              placeholder="description"
              required
            ></textarea>
          </div>
          <div className="form-control mt-6 col-span-2">
            <button className="btn btn-primary">Update Car</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateMyCars;
