import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../components/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import AvailableCar from "../components/AvailableCar";
import AddCar from "../components/AddCar";
import MyCars from "../components/MyCars";
import MyBookings from "../components/MyBookings";
import Privet from "../privet/Privet";
import UpdateMyCars from "../components/UpdateMyCars";

import CarDetails from "../components/CarDetails";
import Error from "../components/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/available_car",
        element: <AvailableCar></AvailableCar>,
      },
      {
        path: "/add_car",
        element: (
          <Privet>
            <AddCar></AddCar>
          </Privet>
        ),
      },
      {
        path: "/my_cars",
        element: (
          <Privet>
            <MyCars></MyCars>
          </Privet>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <Privet>
            <UpdateMyCars></UpdateMyCars>
          </Privet>
        ),
      },
      {
        path: "/car_details/:id",
        element: (
          <Privet>
            <CarDetails></CarDetails>
          </Privet>
        ),
      },
      {
        path: "/my_bookings",
        element: (
          <Privet>
            <MyBookings></MyBookings>
          </Privet>
        ),
      },
    ],
  },
]);

export default router;
