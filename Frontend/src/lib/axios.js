import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://chatt-app-l3za.onrender.com/api" : "/api",
  withCredentials: true,
});
