import axios from "axios";

export const axios_instance = axios.create({
  baseURL: "http://localhost:3000/api/v1",
  withCredentials: true,
});
