import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    id: 1,
    name: "Ashraful Islam",
    profileImage: "https://i.ibb.co.com/VYhG1PQ/Ash.jpg",
    rating: 5,
    review: "Amazing service and great cars. Highly recommend!",
  },
  {
    id: 2,
    name: "Protik Roy",
    profileImage: "https://i.ibb.co.com/pv79hCT/protik.jpg",
    rating: 4,
    review: "Great experience overall. Will rent again!",
  },
  {
    id: 3,
    name: "H.S Rokon",
    profileImage: "https://i.ibb.co.com/zm0H56B/rock.jpg",
    rating: 5,
    review: "The booking process was smooth and the car was excellent!",
  },
  {
    id: 4,
    name: "Galib Al Zidan",
    profileImage: "https://i.ibb.co.com/VY2Yv0d/zidan.jpg",
    rating: 4,
    review: "Very satisfied with the service and car quality.",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: false,
};

const UserTestimonials = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">User Testimonials</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            className="p-6 bg-base-100 rounded-lg shadow-md text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={testimonial.profileImage}
              alt={testimonial.name}
              className="w-20 h-20 rounded-full mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{testimonial.name}</h3>
            <div className="flex justify-center mb-2">
              {Array.from({ length: testimonial.rating }, (_, index) => (
                <span key={index} className="text-yellow-400 text-lg">
                  ★
                </span>
              ))}
              {Array.from({ length: 5 - testimonial.rating }, (_, index) => (
                <span key={index} className="text-gray-300 text-lg">
                  ★
                </span>
              ))}
            </div>
            <p className="text-gray-500">"{testimonial.review}"</p>
          </motion.div>
        ))}
      </Slider>
    </div>
  );
};

export default UserTestimonials;
