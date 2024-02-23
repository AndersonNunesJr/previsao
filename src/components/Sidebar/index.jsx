import { Container } from "./styles";
import { useState } from "react";
import { TbDroplets } from "react-icons/tb";
import { FaWind, FaCloud, FaMapMarkerAlt } from "react-icons/fa";
import {
  img01d,
  img01n,
  img02d,
  img02n,
  img03d,
  img03n,
  img04d,
  img04n,
  img09d,
  img09n,
  img10d,
  img10n,
  img11d,
  img11n,
  img13d,
  img13n,
  img50d,
  img50n
} from "../../assets/icons";
import { converterTimestamp } from "../../services/timeStap";
import { WiWindy } from "react-icons/wi";

import { Nav } from "../Nav";

export function SideBar({ data, onSearch, metrics, time, iconName }) {
  const [search, setSearch] = useState("");

  const handleSearch = (value) => {
    setSearch(value);
    onSearch(value);
  };

  const iconMap = {
    "01d": img01d,
    "01n": img01n,
    "02d": img02d,
    "02n": img02n,
    "03d": img03d,
    "03n": img03n,
    "04d": img04d,
    "04n": img04n,
    "09d": img09d,
    "09n": img09n,
    "10d": img10d,
    "10n": img10n,
    "11d": img11d,
    "11n": img11n,
    "13d": img13d,
    "13n": img13n,
    "50d": img50d,
    "50n": img50n,
    "0d": img01d,
    "1d": img01d,
    "2d": img02d,
    "3d": img02d,
    "45d": img50d,
    "48d": img50d,
    "51d": img10d,
    "53d": img10d,
    "55d": img10d,
    "56d": img10d,
    "57d": img10d,
    "61d": img09d,
    "63d": img09d,
    "65d": img09d,
    "66d": img09d,
    "67d": img09d,
    "71d": img13d,
    "73d": img13d,
    "75d": img13d,
    "77d": img13d,
    "80d": img09d,
    "81d": img09d,
    "82d": img09d,
    "85d": img13d,
    "86d": img13d,
    "95d": img11d,
    "96d": img11d,
    "99d": img11d,
    "0n": img01n,
    "1n": img01n,
    "2n": img02n,
    "3n": img02n,
    "45n": img50n,
    "48n": img50n,
    "51n": img10n,
    "53n": img10n,
    "55n": img10n,
    "57n": img10n,
    "56n": img10n,
    "61n": img09n,
    "63n": img09n,
    "65n": img09n,
    "66n": img09n,
    "67n": img09n,
    "71n": img13n,
    "73n": img13n,
    "75n": img13n,
    "77n": img13n,
    "80n": img09n,
    "81n": img09n,
    "82n": img09n,
    "85n": img13n,
    "86n": img13n,
    "95n": img11n,
    "96n": img11n,
    "99n": img11n
  };
  const period =
    data.weather[0].is_day === ""
      ? ""
      : data.weather[0].is_day === 0
        ? "n"
        : "d";

  const iconCode = iconName;

  const icon = iconMap[`${iconCode}${period}`]
    ? iconMap[`${iconCode}${period}`]
    : iconMap[iconCode];

  const horarioLocal = converterTimestamp(time);
  const ishorarioValid = !isNaN(horarioLocal.horas, horarioLocal.minutos);
  const UNIDADES_METRICAS = {
    C: "m/s",
    F: "mph"
  };
  const description = {
    0: "Céu limpo",
    1: "Principalmente claro",
    2: "Encoberto",
    3: "Parcialmente nublado",
    45: "Nevoeiro",
    48: "Neblina depositada",
    51: "Chuvisco: leve",
    53: "Chuvisco: moderado",
    55: "Chuvisco: denso",
    57: "Chuvisco Congelante:  leve",
    56: "Chuvisco Congelante: denso",
    61: "Chuva: leve",
    63: "Chuva: moderada",
    65: "Chuva: forte",
    66: "Chuva Congelante: leve",
    67: "Chuva Congelante: pesada",
    71: "Queda de neve: leve",
    73: "Queda de neve: moderada",
    75: "Queda de neve: forte",
    77: "Grãos de neve",
    80: "Pancadas de chuva: leves",
    81: "Pancadas de chuva: moderadas",
    82: "Pancadas de chuva: violentas",
    85: "Pancadas de neve: leves",
    86: "Pancadas de neve: fortes",
    95: "Trovoada: leve ou moderada",
    96: "Trovoada com granizo: leve",
    99: "Trovoada com granizo: forte"
  };

  return (
    <Container>
      <Nav onSearch={handleSearch} value={search} />
      <div className="status">
        {data.name ? (
          <h1 id="temp">
            {data.name}/{data.sys[0].country}
          </h1>
        ) : (
          <h1 id="temp"></h1>
        )}

        <div className="weather-icon">
          <img src={icon} alt="" id="icon" />
        </div>
        <div className="temperature">
          <h1 id="temp">{Math.round(data.main.temp * 10) / 10}</h1>
          <span className="temp-unit">&deg;{metrics}</span>
        </div>
        <div className="details-container">
          {ishorarioValid ? (
            <p className="date-time">
              {horarioLocal.dias} {horarioLocal.nomeDoDia} {horarioLocal.horas}:
              {horarioLocal.minutos}
            </p>
          ) : (
            <p className="date-time"></p>
          )}

          <div className="divider" />

          <div className="condition-rain">
            <div className="condition">
              <FaCloud />
              {data.weather[0].description ? (
                <p id="condition">{data.weather[0].description}</p>
              ) : (
                <p id="condition">{description[iconCode]}</p>
              )}
            </div>
            <div className="humidity">
              <TbDroplets />
              <p className="rain">{data.main.humidity}%</p>
            </div>
            <div className="vel-wind">
              <FaWind />
              <p className="wind">
                {data.wind.speed}
                {UNIDADES_METRICAS[metrics]}
              </p>
            </div>
            <div className="pressure">
              <WiWindy />
              <p className="wind">{data.main.pressure}hpa</p>
            </div>
          </div>
        </div>
        <div className="location">
          <div className="location-icon">
            <FaMapMarkerAlt />
          </div>
          <div className="location-text">
            <p className="location">location</p>
          </div>
        </div>
      </div>
    </Container>
  );
}
