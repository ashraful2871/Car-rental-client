import { format } from "date-fns";
import React from "react";
import { FaTrashRestoreAlt } from "react-icons/fa";
import { TiEdit } from "react-icons/ti";

const MyCarTableRow = ({ car, confirmDelete }) => {
  const { _id, photo, model, rentalPrice, date, availability } = car;

  return (
    <tr className="hover:bg-gray-50">
      <td className="border border-gray-300 px-4 py-2">
        <img
          src={photo}
          alt={photo}
          className="h-16 w-16 object-cover rounded-md"
        />
      </td>
      <td className="border border-gray-300 px-4 py-2">{model}</td>
      <td className="border border-gray-300 px-4 py-2">${rentalPrice}</td>
      <td className="border border-gray-300 px-4 py-2">{availability}</td>
      <td className="border border-gray-300 px-4 py-2">
        {format(new Date(date), "P")}
      </td>
      <td className="border border-gray-300 px-4 py-2">
        <div className="flex gap-7 justify-center">
          {" "}
          <button
            onClick={() => confirmDelete(_id)}
            className="hover:text-red-600 text-xl"
          >
            <FaTrashRestoreAlt />
          </button>
          <button className="hover:text-blue-600 text-2xl">
            <TiEdit />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default MyCarTableRow;
