import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import AvailableCarCard from "./AvailableCarCard";

const AvailableCar = () => {
  const [cars, setCars] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  console.log(search, sort);

  useEffect(() => {
    const fetchAllCar = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/cars?search=${search}&sort=${sort}`
      );
      setCars(data);
    };
    fetchAllCar();
  }, [search, sort]);

  return (
    <div className="space-y-9">
      <div className="flex flex-col md:flex-row justify-center items-center gap-5 ">
        {/* <div>
          <select
            name="category"
            id="category"
            className="border p-4 rounded-lg"
          >
            <option value="">Filter By Category</option>
            <option value="Web Development">Web Development</option>
            <option value="Graphics Design">Graphics Design</option>
            <option value="Digital Marketing">Digital Marketing</option>
          </select>
        </div> */}

        <form onSubmit={(e) => e.preventDefault()}>
          <div className="flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
            <input
              className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
              type="text"
              name="search"
              placeholder="Enter Job Title"
              aria-label="Enter Job Title"
              onChange={(e) => setSearch(e.target.value)}
            />

            <button className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
              Search
            </button>
          </div>
        </form>
        <div>
          <select
            name="category"
            id="category"
            className="border p-4 rounded-md"
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="">Sort By Date, price</option>
            <option value="date-dsc">Date (Newest First)</option>
            <option value="price-asc">Price (Lowest First)</option>
          </select>
        </div>
        <button className="btn">Reset</button>
      </div>
      <div className="grid grid-cols-4 gap-6">
        {cars.map((car, idx) => (
          <AvailableCarCard car={car} key={idx}></AvailableCarCard>
        ))}
      </div>
    </div>
  );
};

export default AvailableCar;
