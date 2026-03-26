import axios from "axios";
import React from "react";

const axiosSecure = axios.create({
  baseURL: "https://go-deliver-backend.vercel.app",
});
export default function useAxiosSecure() {
  return axiosSecure;
}
