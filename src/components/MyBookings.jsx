import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { format } from "date-fns";
import { af } from "date-fns/locale";

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
      const { data } = await axiosSecure.patch(`/booking_status_update/${id}`, {
        status,
      });
      console.log(data);
      fetchAllCar();
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
              <td className="border border-gray-300  space-x-2 text-center py-2">
                <button className="mr-2 bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600">
                  Modify
                </button>
                <button className="bg-green-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600">
                  View
                </button>
                <button
                  onClick={() =>
                    handleStatusChange(booking._id, booking.status, "Cancel")
                  }
                  disabled={booking.status === "Cancel"}
                  className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600 disabled:cursor-not-allowed"
                >
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
