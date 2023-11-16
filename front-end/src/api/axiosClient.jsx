import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:8080/",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 1000,
  withCredentials: true,
});

axiosClient.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (error) => {
    return Promise.reject(error.response.data);
  }
);

export default axiosClient;
