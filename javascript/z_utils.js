var axios = require("axios");

var axiosInstance = axios.create({});

module.exports = {
  get: (...x) => {
    return axiosInstance.get(...x);
  },
  axiosInstance
};