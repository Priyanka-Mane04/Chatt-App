import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://chatt-app-6uy3.onrender.com/api" : "/api",
  withCredentials: true,
});
