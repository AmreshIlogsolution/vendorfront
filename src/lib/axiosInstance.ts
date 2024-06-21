import Cookies from "js-cookie";
// lib/axiosInstance.ts
import axios, { AxiosError, AxiosResponse } from "axios";
// import { cookies } from "next/headers";
// import { NextResponse } from "next/server";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL, // Set your API base URL
  timeout: 10000, // Set a timeout
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const session = Cookies.get("session"); // => 'value'

    if (session) {
      config.headers["Authorization"] = `Bearer ${session}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    // Handle errors
    if (error.response) {
      // Server responded with a status other than 200 range
      console.error("Server Error:", error.response.data);
      if (error.response.status === 401) {
        // Handle unauthorized access
        // Example: Redirect to login page
        // NextResponse.redirect(new URL("/login"));
        if (typeof window !== "undefined") {
          window.location.href = "/login";
        }
      }
    } else if (error.request) {
      // Request was made but no response received
      console.error("Network Error:", error.request);
    } else {
      // Something happened in setting up the request
      console.error("Error:", error.message);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
