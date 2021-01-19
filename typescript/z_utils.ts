var axios = require("axios");

var axiosInstance = axios.create({});

module.exports = {
  get: (...x:any) => {
    return axiosInstance.get(...x);
  },
  axiosInstance
};