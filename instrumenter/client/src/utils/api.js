var axios = require("axios");

var axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API,
});

module.exports = {
  get: function(...x){
    return axiosInstance.get(...x);
  },
  axiosInstance
};