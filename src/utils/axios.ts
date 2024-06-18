import axios, { AxiosInstance } from "axios";
import { getStorageAuthItems } from "./helper";

// Axios instance file with default header
export const api: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Interceptor for handling request globally
api.interceptors.request.use(
  (config) => {
    const { token } = getStorageAuthItems();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    Promise.reject(new Error(error));
  },
);

// Interceptor response for global configuration
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const errConfig = error.config;
    if (error.response && error.response.status === 401 && !errConfig._retry) {
      errConfig._retry = true;
      try {
        const { refreshToken } = getStorageAuthItems();
        const response = await api.post("/auth/refresh", {
          refresh: refreshToken,
        });
        const accessToken = response?.data?.accessToken?.access;
        const token = accessToken;
        if (token) {
          sessionStorage.setItem("token", token);
          errConfig.headers["Authorization"] = `Bearer ${token}`;
          return api(errConfig); // Retry the original request with the new token
        } else {
          // Handle the case where no new token is received
          throw new Error("No new token received");
        }
      } catch (error) {
        console.error("Token refresh failed:", error);
        // Handle token refresh failure
        throw error;
      }
    }
    if (error.response.status === 500) {
      error.response.data.message = "Something went wrong. Please try again!";
    }
    Promise.reject(new Error(error));
  },
);
