import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { format } from "date-fns";
import Swal from "sweetalert2";
import { FaEdit, FaTrashRestoreAlt } from "react-icons/fa";
import { RiTimelineView } from "react-icons/ri";
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
    console.log(id, PrevStatus, status);

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
            {
              status,
            }
          );
          console.log(data);
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
    <div className="overflow-x-auto p-4">
      <table className="min-w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2 text-left">
              Car Image
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Car Model
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Booking Date
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Total Price
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Booking Status
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {bookingCar.map((booking, idx) => (
            <tr key={idx} className="hover">
              <td className="border border-gray-300 px-4 py-2">
                <img
                  src={booking.photo}
                  alt={booking.model}
                  className="h-12 w-12 object-cover"
                />
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {booking.model}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {format(new Date(booking.bookingDate), "Pp")}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {booking.rentalPrice}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <span
                  className={
                    `px-2 py-1 rounded text-white text-sm ` +
                    (booking.status === "Confirmed"
                      ? "bg-green-500"
                      : booking.status === "Pending"
                      ? "bg-yellow-500"
                      : "bg-red-500")
                  }
                >
                  {booking.status}
                </span>
              </td>
              <td className="px-4 py-5 flex justify-center gap-3">
                <button className=" bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600 flex gap-1 items-center">
                  <MdOutlineDateRange /> Modify
                </button>
                {/* <button className="bg-green-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600 flex gap-1 items-center">
                  <RiTimelineView /> View
                </button> */}
                <button
                  onClick={() =>
                    handleStatusChange(booking._id, booking.status, "Canceled")
                  }
                  disabled={booking.status === "Canceled"}
                  className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600 flex gap-1 items-center disabled:cursor-not-allowed"
                >
                  <span>
                    <FaTrashRestoreAlt />
                  </span>{" "}
                  Cancel
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
