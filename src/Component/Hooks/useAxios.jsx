import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://go-deliver-backend.vercel.app",
});
export default function useAxios() {
  return axiosInstance;
}
