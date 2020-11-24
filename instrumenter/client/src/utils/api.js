var axios = require("axios");

var axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API
});

export default axiosInstance;
