import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const RecentListings = () => {
  const cars = [
    {
      id: 1,
      image:
        "https://i.ibb.co.com/55zPZQV/2023-Toyota-Camry-driving-down-road-at-dusk.webp",
      model: "Toyota Camry 2023",
      dailyPrice: "$45/day",
      availability: true,
      datePosted: "2 days ago",
    },
    {
      id: 2,
      image:
        "https://i.ibb.co.com/DgYXV43/2022-honda-accord-sport-2-0t-15.jpg  ",
      model: "Honda Accord 2022",
      dailyPrice: "$50/day",
      availability: false,
      datePosted: "5 days ago",
    },
    {
      id: 3,
      image:
        "https://i.ibb.co.com/M1gZ1Qw/2023-Tesla-Model-3-Performance-Red-Front-Quarter-Aerial-1600.jpg",
      model: "Tesla Model 3 2023",
      dailyPrice: "$120/day",
      availability: true,
      datePosted: "1 day ago",
    },
    {
      id: 4,
      image: "https://i.ibb.co.com/F4ZmSfn/X5-1.webp",
      model: "BMW X5 2023",
      dailyPrice: "$90/day",
      availability: true,
      datePosted: "3 days ago",
    },
    {
      id: 5,
      image: "https://i.ibb.co.com/fq7Fv9x/Audi-A6-PHEV-2022-10-jmmure.webp",
      model: "Audi A6 2022",
      dailyPrice: "$70/day",
      availability: false,
      datePosted: "4 days ago",
    },
    {
      id: 6,
      image:
        "https://i.ibb.co.com/K9rfCTz/2020-ford-mustang-shelby-gt500-563-1608256402.jpg",
      model: "Ford Mustang 2021",
      dailyPrice: "$65/day",
      availability: true,
      datePosted: "6 days ago",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Recent Listings</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cars.map((car) => (
          <div
            key={car.id}
            className="card bg-base-100 shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
          >
            <figure>
              <img
                src={car.image}
                alt={car.model}
                className="w-full h-64 object-cover"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-lg font-semibold">{car.model}</h3>
              <p className="text-gray-500">{car.dailyPrice}</p>
              <div className="flex items-center gap-2">
                {car.availability ? (
                  <span className="badge badge-success flex items-center gap-1">
                    <FaCheckCircle /> Available
                  </span>
                ) : (
                  <span className="badge badge-error flex items-center gap-1">
                    <FaTimesCircle /> Not Available
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-400">Added {car.datePosted}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentListings;
