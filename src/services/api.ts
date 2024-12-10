import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_URL_API || "http://localhost:3000",
  timeout: 10000,
  headers: { 
    "Content-Type": "application/json",
  },
});

export default instance;