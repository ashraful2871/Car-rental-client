import React, { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";

import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import MyCarTableRow from "./MyCarTableRow";
import NoDataFound from "./NoDataFound";
import Swal from "sweetalert2";

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
    try {
      const { data } = await axiosSecure.get(
        `/cars/${user?.email}?sort=${sort}`
      );
      setCars(data);
    } catch (err) {
      console.error("Error fetching cars:", err.data || err.message);
      if (err.status === 401) {
        toast.error("Unauthorized access. Please log in again.");
      } else {
        toast.error("An error occurred while fetching cars.");
      }
    }
  };

  const handleDelete = async (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "you want to Delete this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await axiosSecure.delete(`/cars/${id}`);

          fetchAllCar();
          Swal.fire({
            title: "Deleted!",
            text: "Your Car has been deleted.",
            icon: "success",
          });
        }
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      {cars.length > 0 ? (
        <div className="overflow-x-auto">
          <div className="flex flex-col md:flex-row justify-end  mr-28 my-2 items-center gap-5 ">
            <div>
              <select
                name="category"
                id="category"
                value={sort}
                className="border-2 font-bold p-4 rounded-md text-center"
                onChange={(e) => setSort(e.target.value)}
              >
                <option value="">Sort By Date</option>
                <option value="dsc">Date (Newest First)</option>
                <option value="asc">Date (Oldest First)</option>
              </select>
            </div>
          </div>
          <table className="table table-auto border-collapse border border-gray-200 w-full text-left">
            <thead className="bg-red-600 text-white font-bold rounded-lg transition duration-300 text-base text-center">
              <tr>
                <th className="border border-gray-300 px-4 py-2">Car Image</th>
                <th className="border border-gray-300 px-4 py-2">Car Model</th>
                <th className="border border-gray-300 px-4 py-2">
                  Daily Rental Price
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Availability
                </th>
                <th className="border border-gray-300 px-4 py-2">Date Added</th>
                <th className="border border-gray-300 px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {cars?.map((car, index) => (
                <MyCarTableRow
                  handleDelete={handleDelete}
                  car={car}
                  key={index}
                  fetchAllCar={fetchAllCar}
                ></MyCarTableRow>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <NoDataFound></NoDataFound>
      )}
    </>
  );
};

export default MyCars;
