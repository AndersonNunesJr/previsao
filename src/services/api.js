import axios from "axios";

const API_OPENWEATHERMAP = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5"
});
const API_OPENMETEO = axios.create({
  baseURL: "https://api.open-meteo.com/v1"
});

const KEY_OPENWEATHERMAP = "49f33e38045b62622c52ce2e261259ca";

const KEY_OPENMETEO =
  "&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,pressure_msl,wind_speed_10m&daily=temperature_2m_max,sunrise,sunset&timezone=auto&past_hours=6&past_minutely_15=6&forecast_hours=6&forecast_minutely_15=24";

export { API_OPENWEATHERMAP, API_OPENMETEO, KEY_OPENWEATHERMAP, KEY_OPENMETEO };
