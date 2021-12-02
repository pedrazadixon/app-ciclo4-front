import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_MINTIC_API_URL,
});

axiosInstance.interceptors.request.use(
  function (config) {
    let usuario = JSON.parse(localStorage.getItem("usuario"));
    if (usuario) {
      config.headers["User-Id"] = usuario._id;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosInstance;
