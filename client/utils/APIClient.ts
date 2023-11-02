import axios from "axios";

const APIClient = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:4000"
      : "http://localhost:4000",
  headers: { "Content-Type": "application/json" },
});

export default APIClient;
