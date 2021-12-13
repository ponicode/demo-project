import axios from "axios";

const axiosInstance = axios.create({});

export const api = {
  get: (x: string) => {
    return axiosInstance.get(x);
  },
  axiosInstance
};