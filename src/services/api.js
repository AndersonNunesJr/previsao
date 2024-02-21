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

const API_GEOLOCATION = axios.create({
  baseURL: "http://api.openweathermap.org/geo/1.0"
});

const GEOLOCATION_DEFAULT = axios.create({
  baseURL: "https://geolocation-db.com/json/"
});
// /direct?q={city}&limit=1&appid={key}

export {
  API_OPENWEATHERMAP,
  API_OPENMETEO,
  KEY_OPENWEATHERMAP,
  KEY_OPENMETEO,
  API_GEOLOCATION,
  GEOLOCATION_DEFAULT
};

// https://api.open-meteo.com/v1/forecast?latitude=-21.7642&longitude=-43.3503&current=temperature_2m,is_day,relative_humidity_2m,apparent_temperature,precipitation,pressure_msl,wind_speed_10m&daily=temperature_2m_max,weather_code,sunrise,sunset&timezone=auto&past_hours=6&past_minutely_15=6&forecast_hours=6&forecast_minutely_15=24&timeformat=unixtime
