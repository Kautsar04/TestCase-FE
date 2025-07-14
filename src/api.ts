import axios from "axios";

const API_KEY = "40fbf92853544acca16ed7c0a013e2f7"

const api = axios.create({
  baseURL: "https://newsapi.org/v2",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

export default api;
