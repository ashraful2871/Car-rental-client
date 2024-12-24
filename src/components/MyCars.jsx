import React, { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";

import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import MyCarTableRow from "./MyCarTableRow";
import NoDataFound from "./NoDataFound";

const MyCars = () => {
  const axiosSecure = useAxiosSecure();
  const [cars, setCars] = useState([]);
  const { user } = useAuth();
  const [sort, setSort] = useState("");
  console.log(sort);
  useEffect(() => {
    fetchAllCar();
  }, [user?.email, sort]);
  const fetchAllCar = async () => {
    const { data } = await axiosSecure.get(`/cars/${user?.email}?sort=${sort}`);
    setCars(data);
  };

  const handleDelete = async (id) => {
    try {
      const { data } = await axiosSecure.delete(`/cars/${id}`);
      console.log(data);
      toast.success("Data Deleted Successfully");
      fetchAllCar();
    } catch (error) {
      console.log(error.message);
    }
  };

  //change after complete all requirements
  const confirmDelete = (id) => {
    toast((t) => (
      <div className="flex gap-3 items-center">
        <p>
          Are You sure you want to <b>Delete</b> it?
        </p>
        <div className="flex gap-2">
          <button
            className="bg-red-400 text-white px-3 py-1 rounded-md"
            onClick={() => {
              toast.dismiss(t.id);
              handleDelete(id);
            }}
          >
            Yes
          </button>
          <button
            className="bg-green-400 text-white px-3 py-1 rounded-md"
            onClick={() => toast.dismiss(t.id)}
          >
            Cancel
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div className="overflow-x-auto">
      <div className="flex flex-col md:flex-row justify-end  mr-28 my-8 items-center gap-5 ">
        <div>
          <select
            name="category"
            id="category"
            value={sort}
            className="border-2 font-bold p-4 rounded-md"
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="">Sort By Date/Price</option>
            <option value="dsc">Date (Newest First)</option>
            <option value="asc">price (Lowest First)</option>
          </select>
        </div>
      </div>
      <table className="table table-auto border-collapse border border-gray-200 w-full text-left">
        <thead className="  bg-neutral text-white">
          <tr>
            <th className="border border-gray-300 px-4 py-2">Car Image</th>
            <th className="border border-gray-300 px-4 py-2">Car Model</th>
            <th className="border border-gray-300 px-4 py-2">
              Daily Rental Price
            </th>
            <th className="border border-gray-300 px-4 py-2">Availability</th>
            <th className="border border-gray-300 px-4 py-2">Date Added</th>
            <th className="border border-gray-300 px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {cars.length > 0 ? (
            cars?.map((car, index) => (
              <MyCarTableRow
                confirmDelete={confirmDelete}
                car={car}
                key={index}
                fetchAllCar={fetchAllCar}
              ></MyCarTableRow>
            ))
          ) : (
            <NoDataFound></NoDataFound>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MyCars;
