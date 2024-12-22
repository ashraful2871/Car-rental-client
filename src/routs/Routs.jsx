import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../components/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Profile from "../components/Profile";
import Privet from "../privet/Privet";
import AddPost from "../pages/AddPost";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
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
        path: "/profile",
        element: (
          <Privet>
            <Profile></Profile>
          </Privet>
        ),
      },
      {
        path: "/data",
        element: <AddPost></AddPost>,
      },
    ],
  },
]);

export default router;
