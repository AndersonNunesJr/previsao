import axios from "axios";

const API_OPENWEATHERMAP = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5"
});
const API_OPENMETEO = axios.create({
  baseURL: "https://api.open-meteo.com/v1"
});

const KEY_OPENWEATHERMAP = "49f33e38045b62622c52ce2e261259ca";

const KEY_OPENMETEO =
  "&current=temperature_2m,is_day,relative_humidity_2m,apparent_temperature,precipitation,pressure_msl,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min,weather_code,sunrise,sunset&timezone=auto&past_hours=6&past_minutely_15=6&forecast_hours=6&forecast_minutely_15=24&timeformat=unixtime";
const API_GEOLOCATION = axios.create({
  baseURL: "https://wft-geo-db.p.rapidapi.com/v1/geo"
});

const GEOLOCATION_DEFAULT = axios.create({
  baseURL: "https://geolocation-db.com/json/"
});

const geoApiOptions = {
  headers: {
    "X-RapidAPI-Key": "60b3a5c2e2mshdd5332cf6265c8ap1f8ea6jsn50001b6fd6d8",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com"
  }
};

export {
  API_OPENWEATHERMAP,
  API_OPENMETEO,
  KEY_OPENWEATHERMAP,
  KEY_OPENMETEO,
  API_GEOLOCATION,
  geoApiOptions,
  GEOLOCATION_DEFAULT
};

// https://api.open-meteo.com/v1/forecast?latitude=-21.7642&longitude=-43.3503
