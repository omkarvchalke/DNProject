import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8025",
  headers: {
    "Content-type": "application/json",
  },
});
