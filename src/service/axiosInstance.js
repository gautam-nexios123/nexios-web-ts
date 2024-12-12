import axios from "axios";
import Cookies from "js-cookie"; // Using js-cookie for client-side token retrieval

const baseURL = process.env.NEXT_PUBLIC_API_BASEURL;

const axiosInstance = axios.create({
  baseURL, // Set the base URL for all API requests
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to include the token in the headers
axiosInstance.interceptors.request.use(
  (config) => {
    const token = Cookies.get("authToken"); // Retrieve token from cookies
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Add the token to the Authorization header
    }
    if (config.data instanceof FormData) {
      delete config.headers["Content-Type"];
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Optionally, add a response interceptor to handle errors globally
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors globally (e.g., redirect on 401 unauthorized)
    if (error.response?.status === 401) {
      Cookies.remove("authToken"); // Clear token if unauthorized
      window.location.href = "/admin/login"; // Redirect to login
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
