import axios from "axios";
import React, { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "https://assignment-11-sable.vercel.app",
  withCredentials: true, // Ensure credentials are sent with the request
});

const useAxiosSecure = () => {
  const { signOutUser } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (err) => {
        console.log("error caught in our very won interceptor", err);
        if (err.response.status === 401 || err.response.status === 403) {
          //make user logout
          signOutUser()
            .then(() => {
              console.log("logged out user");
              navigate("/login");
            })
            .catch((error) => {
              console.log(error);
            });
        }
        // return Promise.reject(err);
      }
    );
  }, [signOutUser, navigate]);
  return axiosSecure;
};

export default useAxiosSecure;
