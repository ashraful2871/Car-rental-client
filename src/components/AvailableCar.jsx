import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import AvailableCarCard from "./AvailableCarCard";

const AvailableCar = () => {
  const [cars, setCars] = useState([]);
  console.log(cars);

  useEffect(() => {
    fetchAllCar();
  }, []);
  const fetchAllCar = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/add_car`);
    setCars(data);
  };

  return (
    <div className="grid grid-cols-4 gap-6">
      {cars.map((car, idx) => (
        <AvailableCarCard car={car} key={idx}></AvailableCarCard>
      ))}
    </div>
  );
};

export default AvailableCar;
