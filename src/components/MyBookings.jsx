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
    <div className="overflow-x-auto p-4 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-lg">
      <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200">
            <th className="px-4 py-3  font-bold uppercase text-sm border border-gray-300 dark:border-gray-700 ">
              Car Image
            </th>
            <th className="px-4 py-3  font-bold uppercase text-sm border border-gray-300 dark:border-gray-700">
              Car Model
            </th>
            <th className="px-4 py-3  font-bold uppercase text-sm border border-gray-300 dark:border-gray-700">
              Booking Date
            </th>
            <th className="px-4 py-3  font-bold uppercase text-sm border border-gray-300 dark:border-gray-700">
              Total Price
            </th>
            <th className="px-4 py-3  font-bold uppercase text-sm border border-gray-300 dark:border-gray-700">
              Booking Status
            </th>
            <th className="px-4 py-3  font-bold uppercase text-sm border border-gray-300 dark:border-gray-700">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {bookingCar.map((booking, idx) => (
            <tr
              key={idx}
              className="transition hover:bg-gray-200 dark:hover:bg-gray-800 text-center"
            >
              <td className="px-4 py-3 text-center border border-gray-300 dark:border-gray-700">
                <img
                  src={booking.photo}
                  alt={booking.model}
                  className="h-12 w-12 object-cover rounded-md shadow-md"
                />
              </td>
              <td className="px-4 py-3 border border-gray-300 dark:border-gray-700">
                <p className="text-gray-900 dark:text-gray-200 font-medium">
                  {booking.model}
                </p>
              </td>
              <td className="px-4 py-3 border border-gray-300 dark:border-gray-700">
                <p className="text-sm text-gray-700 dark:text-gray-400">
                  {format(new Date(booking.bookingDate), "Pp")}
                </p>
              </td>
              <td className="px-4 py-3 border border-gray-300 dark:border-gray-700">
                <p className="text-green-600 dark:text-green-400 font-semibold">
                  ${booking.rentalPrice}
                </p>
              </td>
              <td className="px-4 py-3 border border-gray-300 dark:border-gray-700">
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
                        ? "text-yellow-600 dark:text-yellow-400"
                        : booking.status === "Confirmed"
                        ? "text-green-600 dark:text-green-400"
                        : "text-red-600 dark:text-red-400"
                    }`}
                  >
                    {booking.status}
                  </span>
                </div>
              </td>
              <td className="px-4 py-3 flex justify-center gap-3 border border-gray-300 dark:border-gray-700">
                <button className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600 transition-all flex gap-1 items-center shadow-md">
                  <MdOutlineDateRange /> Modify
                </button>
                <button
                  onClick={() =>
                    handleStatusChange(booking._id, booking.status, "Canceled")
                  }
                  disabled={booking.status === "Canceled"}
                  className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600 transition-all flex gap-1 items-center shadow-md disabled:bg-gray-500 disabled:cursor-not-allowed"
                >
                  <FaTrashRestoreAlt /> Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyBookings;
