import axios from "axios";
import type {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse,
} from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15000,
});

apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem("auth_token");

    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    console.log("INTERCEPTOR RESPONSE:", response);
    return response;
  },
  (error: AxiosError) => {
    console.log("INTERCEPTOR ERROR:", error);
    console.log("ERROR RESPONSE:", error.response);
    console.log("ERROR DATA:", error.response?.data);

    return Promise.reject(error);
  }
);


export { apiClient };
