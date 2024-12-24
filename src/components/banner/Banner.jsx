import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Banner() {
  return (
    <div className=" h-[400px] md:h-[550px] rounded-xl">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-full"
      >
        <SwiperSlide>
          <div className="relative w-full h-full rounded-2xl">
            <img
              src="https://i.ibb.co.com/yND6jr7/bugati.webp"
              alt="Car 1"
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white px-4 rounded-2xl">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
                Drive Your Dreams Today!
              </h1>
              <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition duration-300">
                View Available Cars
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full rounded-2xl">
            <img
              src="https://i.ibb.co.com/N21fX1f/car.webp"
              alt="Car 1"
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white px-4 rounded-2xl">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
                Drive Your Dreams Today!
              </h1>
              <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition duration-300">
                View Available Cars
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
