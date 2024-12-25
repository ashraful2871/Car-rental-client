import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { format } from "date-fns";
import Swal from "sweetalert2";
import { FaTrashRestoreAlt } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";

const MyBookings = () => {
  const { user } = useAuth();
  const [bookingCar, setBookingCar] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    fetchAllCar();
  }, [user?.email]);
  const fetchAllCar = async () => {
    const { data } = await axiosSecure.get(`/books/${user?.email}`);
    setBookingCar(data);
  };

  const handleStatusChange = async (id, PrevStatus, status) => {
    try {
      Swal.fire({
        title: "Are you sure you want to cancel this booking?",
        text: "You won't be able to change it after Cancellation!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
        cancelButtonText: "No",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const { data } = await axiosSecure.patch(
            `/booking_status_update/${id}`,
            { status }
          );
          fetchAllCar();
          Swal.fire({
            title: "Canceled!",
            text: "Your booking has been Canceled.",
            icon: "success",
          });
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="table table-auto border-collapse border border-gray-200 w-full text-left">
        <thead className="bg-red-600 text-white font-bold rounded-lg transition duration-300 text-base text-center">
          <tr>
            <th className="border border-gray-300 px-4 py-2 ">Car Image</th>
            <th className="border border-gray-300 px-4 py-2">Car Model</th>
            <th className="border border-gray-300 px-4 py-2">Booking Date</th>
            <th className="border border-gray-300 px-4 py-2">Total Price</th>
            <th className="border border-gray-300 px-4 py-2">Booking Status</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookingCar.map((booking, idx) => (
            <tr key={idx} className="hover text-lg font-semibold text-center">
              <td className="border border-gray-300 px-4 py-2">
                <div className="flex justify-center">
                  {" "}
                  <img
                    src={booking.photo}
                    alt="car"
                    className="h-16 w-32 object-cover rounded-md flex"
                  />
                </div>
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {booking.model}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {format(new Date(booking.bookingDate), "Pp")}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                ${booking.rentalPrice}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-sm font-bold shadow-md transition-colors">
                  <span
                    className={`h-2 w-2 rounded-full ${
                      booking.status === "Pending"
                        ? "bg-yellow-500"
                        : booking.status === "Confirmed"
                        ? "bg-green-500"
                        : "bg-red-500"
                    }`}
                  ></span>
                  <span
                    className={`${
                      booking.status === "Pending"
                        ? "text-yellow-600"
                        : booking.status === "Confirmed"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {booking.status}
                  </span>
                </div>
              </td>
              <td className="border border-gray-300 px-4 py-2 ">
                <div className="flex justify-center gap-4">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600 transition-all flex gap-1 items-center shadow-md">
                    <MdOutlineDateRange /> Modify
                  </button>
                  <button
                    onClick={() =>
                      handleStatusChange(
                        booking._id,
                        booking.status,
                        "Canceled"
                      )
                    }
                    disabled={booking.status === "Canceled"}
                    className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600 transition-all flex gap-1 items-center shadow-md disabled:bg-gray-500 disabled:cursor-not-allowed"
                  >
                    <FaTrashRestoreAlt /> Cancel
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyBookings;
