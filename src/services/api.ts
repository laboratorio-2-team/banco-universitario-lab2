import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_URL_API || "http://localhost:3000",
  timeout: 1000,
  // headers: { "X-Custom-Header": "foobar" },
});

export default instance;