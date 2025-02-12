import { Link, NavLink } from "react-router-dom";
import DarkLightMood from "./DarkLightMood";
import useAuth from "../hooks/useAuth";

const Navbar = ({ footRef }) => {
  const { user, signOutUser } = useAuth();
  console.log(user);
  const handleSignOut = () => {
    signOutUser();
  };
  const handleRef = () => {
    if (footRef.current.scrollIntoView({ behavior: "smooth" })) {
    }
  };
  const menuLinks = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            `${
              isActive
                ? "bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition duration-300"
                : " hover:text-red-500 hover:font-bold"
            }`
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li className="hidden md:block">
        <NavLink
          className={({ isActive }) =>
            `${
              isActive
                ? "bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition duration-300"
                : " hover:text-red-500 hover:font-bold"
            }`
          }
          to="/available_car"
        >
          Available Car
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "font-bold hover:text-red-500" : undefined
          }
          to="#contact"
          onClick={handleRef}
        >
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "font-bold hover:text-red-500" : undefined
          }
          to="#flow"
          onClick={handleRef}
        >
          Flow Us
        </NavLink>
      </li>
      {user ? (
        ""
      ) : (
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `${
                isActive
                  ? "bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition duration-300"
                  : " hover:text-red-500 hover:font-bold"
              }`
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
      <li className="block md:hidden">
        <NavLink
          className={({ isActive }) =>
            `${
              isActive
                ? "bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition duration-300"
                : " hover:text-red-500 hover:font-bold"
            }`
          }
          to="/available_car"
        >
          Available Car
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `${
              isActive
                ? "bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition duration-300"
                : " hover:text-red-500 hover:font-bold"
            }`
          }
          to="/add_car"
        >
          Add Car
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `${
              isActive
                ? "bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition duration-300"
                : " hover:text-red-500 hover:font-bold"
            }`
          }
          to="/my_cars"
        >
          My Cars
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `${
              isActive
                ? "bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition duration-300"
                : " hover:text-red-500 hover:font-bold"
            }`
          }
          to="/my_bookings"
        >
          My Bookings
        </NavLink>
      </li>

      <li>
        <button
          className="bg-red-400 hover:bg-red-700 text-white block text-center font-bold mt-5"
          onClick={handleSignOut}
        >
          Logout
        </button>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 sticky top-0 z-50">
      <div className="flex-1 ">
        <Link
          to="/"
          className="text-xl md:text-3xl font-extrabold flex items-center"
        >
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
