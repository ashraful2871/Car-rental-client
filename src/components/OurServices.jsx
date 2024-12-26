import React from "react";
import { Fade } from "react-awesome-reveal";
import { FaArrowRight } from "react-icons/fa";

const OurServices = () => {
  const rentals = [
    {
      title: "Motobike rental",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",
      image: "https://i.ibb.co.com/VYLk6LM/moto.jpg",
    },
    {
      title: "Boat rental",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",
      image: "https://i.ibb.co.com/zXP2nXF/boat.jpg",
    },
    {
      title: "Car rental",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",
      image: "https://i.ibb.co.com/GkBjC3W/car.webp",
    },
  ];
  return (
    <>
      <h2 className="text-3xl md:text-4xl font-bold mt-8 mb-4 text-center">
        Looking for the others <span className="text-red-500">services? </span>
      </h2>
      <p className="text-center bg-base-100 text-base-content mb-10">
        We've got you covered with top-notch options tailored to your needs!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-12">
        {rentals.map((rental, idx) => (
          <Fade cascade damping={0.2}>
            <div
              key={idx}
              className="card bg-base-100 border rounded-lg overflow-hidden"
            >
              <img
                src={rental.image}
                alt={rental.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold">{rental.title}</h2>
                <p className="text-sm bg-base-100 text-base-content mt-2">
                  {rental.description}
                </p>
                <div className="flex justify-end">
                  <button className="btn bg-blue-700 hover:bg-blue-600 text-white font-bold rounded-lg transition duration-300 text-base mt-4">
                    <FaArrowRight /> View Details
                  </button>
                </div>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </>
  );
};

export default OurServices;
