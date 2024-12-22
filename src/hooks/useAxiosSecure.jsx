import axios from "axios";
import React, { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
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
          signOutUser();

          //also redirect in login
          navigate("/login");
        }
      }
    );
  }, [signOutUser, navigate]);
  return axiosSecure;
};

export default useAxiosSecure;
