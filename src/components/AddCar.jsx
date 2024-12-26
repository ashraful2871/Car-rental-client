import React from "react";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const AddCar = () => {
  const queryClient = useQueryClient();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const { isPending, mutateAsync } = useMutation({
    mutationFn: async (CarData) => {
      const { data } = await axiosSecure.post(`/add_car`, CarData);
      console.log(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cars"] });

      toast.success("data added successfully", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      navigate("/my_cars");
    },
    onError: (err) => {
      toast.error(err.message, {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const model = form.get("model");
    const rentalPrice = form.get("rentalPrice");
    const availability = form.get("availability");
    const registration = form.get("registration");
    const features = form.get("features");
    const location = form.get("location");
    const description = form.get("description");
    const photo = form.get("image");
    const date = new Date();

    const CarData = {
      model,
      rentalPrice,
      userDetails: {
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
    console.log(CarData);

    await mutateAsync(CarData);

    try {
      e.target.reset();
    } catch (error) {
      // toast.error(error.message);
    }
  };
  return (
    <div>
      <div className="card bg-base-100 w-full  shadow-2xl">
        <div>
          {" "}
          <h2 className="text-center text-3xl md:text-5xl font-bold">
            {" "}
            <span>
              <Typewriter words={["Add Car For Rent"]} />
            </span>
          </h2>
        </div>
        <form
          onSubmit={handleSubmit}
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
              placeholder="Car Model"
              className="input input-bordered"
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
              defaultValue="Select Availability"
              className="border p-2 rounded-md"
              required
            >
              <option disabled value="Select Availability">
                Select Availability
              </option>
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
              type="text"
              name="registration"
              placeholder="Add Vehicle Registration Number"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-semibold">Features</span>
            </label>
            <input
              type="text"
              name="features"
              placeholder="Features (e.g., GPS, AC, etc.)"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-semibold">Location</span>
            </label>
            <select
              name="location"
              id="location"
              defaultValue="Select location"
              className="border p-2 rounded-md"
              required
            >
              <option disabled value="Select location">
                Select location
              </option>
              <option value="Dhaka">Dhaka</option>
              <option value="Rajshhahi">Rajshhahi</option>
              <option value="Rangpur">Rangpur</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-semibold">Image</span>
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
              <span className="label-text text-lg font-semibold">
                Description
              </span>
            </label>
            <textarea
              name="description"
              className="textarea textarea-bordered h-36"
              placeholder="Description"
              required
            ></textarea>
          </div>
          <div className="form-control mt-6 md:col-span-2">
            <button
              className="btn bg-blue-500 hover:bg-blue-600 text-white font-bold 
            rounded-lg transition duration-300 text-base"
            >
              {isPending ? "Adding..." : "Add Car"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCar;
