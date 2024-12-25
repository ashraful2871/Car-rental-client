import { Link, NavLink } from "react-router-dom";
import DarkLightMood from "./DarkLightMood";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const { user, signOutUser } = useAuth();
  console.log(user);
  const handleSignOut = () => {
    signOutUser();
  };

  const menuLinks = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            `${
              isActive
                ? "bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg transition duration-300"
                : ""
            }`
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/available_car">Available Car</NavLink>
      </li>
      {user ? (
        ""
      ) : (
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition duration-300"
                : ""
            }
          >
            Login
          </NavLink>
        </li>
      )}
    </>
  );

  const dropdownLinks = (
    <>
      <li>
        <NavLink to="/add_car">Add Car</NavLink>
      </li>
      <li>
        <NavLink to="/my_cars">My Cars</NavLink>
      </li>
      <li>
        <NavLink to="/my_bookings">My Bookings</NavLink>
      </li>

      <li>
        <button
          className="bg-red-600 hover:bg-red-700 text-white block text-center font-bold"
          onClick={handleSignOut}
        >
          Logout
        </button>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to="/" className=" text-3xl font-extrabold flex items-center">
          <img
            className="h-16 w-16"
            src="https://i.ibb.co.com/D4YprTd/logo-removebg.png"
            alt=""
          />
          Car Rent
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">{menuLinks}</ul>
      </div>
      <div className="flex-none">
        <div>
          <DarkLightMood></DarkLightMood>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
          >
            <div className="card-body">
              <span className="text-lg font-bold">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>
        {user && (
          <div className="dropdown dropdown-end z-50">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  referrerPolicy="no-referrer"
                  alt="Tailwind CSS Navbar component"
                  src={user?.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {dropdownLinks}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
