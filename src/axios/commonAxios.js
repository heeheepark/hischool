import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 1000,
  // headers: {
  //   "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
  //   Accept: "*/*",
  // },
});

export default axiosInstance;
