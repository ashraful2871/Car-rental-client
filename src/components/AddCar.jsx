import React from "react";
import SelectImage from "./SelectImage";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const AddCar = () => {
  const queryClient = useQueryClient();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { isPending, mutateAsync } = useMutation({
    mutationFn: async (CarData) => {
      const { data } = await axiosSecure.post(`/add_car`, CarData);
      console.log(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cars"] });
      // 2. Reset form
      // form.reset();

      // 3. Show toast and navigate
      toast.success("data added successfully");
      //   navigate("/my-posted-jobs");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const model = formData.get("model");
    const rentalPrice = formData.get("rentalPrice");
    const availability = formData.get("availability");
    const registration = formData.get("registration");
    const features = formData.get("features");
    const location = formData.get("location");
    const description = formData.get("description");
    const photo = formData.get("photo");
    const date = new Date();

    const CarData = {
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
      photo: photo.path,
      location,
      date,
      status: "Pending",
      booking_count: 0,
    };
    console.log(CarData);

    await mutateAsync(CarData);
    //save joData in db
    // const { data } = await axios.post(
    //   `${import.meta.env.VITE_API_URL}/add-jobs`,
    //   formData
    // );
    try {
      //make post request using useMutation hook

      // await axios.post(`${import.meta.env.VITE_API_URL}/add-jobs`, formData);

      // 2. Reset form
      formData.reset();

      // 3. Show toast and navigate
      // toast.success("data added successfully");
      // navigate("/my-posted-jobs");
    } catch (error) {
      // toast.error(error.message);
    }
  };
  return (
    <div>
      <div className="card bg-base-100 w-full  shadow-2xl">
        <form
          onSubmit={handleSubmit}
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
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Availability</span>
            </label>
            {/* <input
              type="text"
              name="availability"
              placeholder="Availability"
              className="input input-bordered"
              required
            /> */}
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
              <span className="label-text">Vehicle Registration Number</span>
            </label>
            <input
              type="text"
              name="registration"
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
              <span className="label-text">Select Image</span>
            </label>
            <SelectImage></SelectImage>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              name="description"
              className="textarea textarea-bordered h-36"
              placeholder="Bio"
              required
            ></textarea>
          </div>
          <div className="form-control mt-6 col-span-2">
            <button className="btn btn-primary">
              {isPending ? "Adding..." : "Add Car"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCar;
