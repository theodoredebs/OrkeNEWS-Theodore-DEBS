import Axios from "axios";
const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;
export const axios = Axios.create({
  baseURL: BASE_URL, // Replace this with your API base URL
  headers: {
    "X-Api-Key": API_KEY,
    "Content-Type": "application/json",
    // You can add other default headers here if needed
  },
});
