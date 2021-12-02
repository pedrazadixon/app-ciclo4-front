import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "https://some-domain.com/api/",
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
