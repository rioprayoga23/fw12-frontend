import axios from "axios";

const http = (token) => {
  const headers = {};
  if (token) {
    headers.authorization = "Bearer " + token;
  }
  const instance = axios.create({
    baseURL: process.env.REACT_APP_API_KEY,
    headers,
  });
  return instance;
};

export default http;
