import axios from "axios";

const api = axios.create({
  // baseURL: "http://localhost:3000"
  baseURL: "api.openweathermap.org/data/2.5"
});

export { api };
