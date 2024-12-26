import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import AvailableCarCard from "./AvailableCarCard";
import ListView from "./ListView";
import Loading from "./Loading";
import { useQuery } from "@tanstack/react-query";

const AvailableCar = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [view, setView] = useState("grid");

  const {
    data: cars,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["cars"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/cars?search=${search}&sort=${sort}`
      );
      return data;
    },
  });

  useEffect(() => {
    refetch();
  }, [sort, search]);

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="md:space-y-9">
      <div className="flex  justify-between flex-col md:flex-row p-4 md:p-0">
        <div className="flex  justify-center items-center gap-5">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="flex p-1 overflow-hidden border-2 rounded-lg focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
              <input
                className="px-0 md:px-6 py-2  placeholder-gray-500 outline-none focus:placeholder-transparent bg-base-100 text-base-content"
                type="text"
                name="search"
                placeholder="Search Car Model, Location"
                aria-label="Search Car Model, Location"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </form>
          <div>
            <select
              name="category"
              id="category"
              className="border p-4 rounded-md text-center bg-base-100 text-base-content font-semibold"
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="">Sort By Date</option>
              <option value="date-dsc">Date (Newest First)</option>
              <option value="date-asc">Date ( Oldest First)</option>
            </select>
          </div>
        </div>
        <div className="flex gap-5 justify-end mt-6 md:mt-0">
          <button
            onClick={() => setView("grid")}
            className="btn bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg transition duration-300"
          >
            Grid View
          </button>

          <button
            onClick={() => setView("list")}
            className="btn btn-primary  text-white font-bold text-base"
          >
            List View
          </button>
        </div>
      </div>
      <div
        className={`${
          view === "grid"
            ? " grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            : "space-y-6"
        }`}
      >
        {cars.map((car, idx) =>
          view === "grid" ? (
            <AvailableCarCard car={car} key={idx}></AvailableCarCard>
          ) : (
            <ListView car={car} key={idx}></ListView>
          )
        )}
      </div>
    </div>
  );
};

export default AvailableCar;
