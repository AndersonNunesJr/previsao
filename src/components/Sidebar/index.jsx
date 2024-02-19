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

export function SideBar({ data, onSearch, metrics, time }) {
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
    "50n": img50n
  };
  const iconCode = data.weather[0].icon;
  const icon = iconMap[iconCode];

  const horarioLocal = converterTimestamp(time);
  const ishorarioValid = !isNaN(horarioLocal.horas, horarioLocal.minutos);
  const UNIDADES_METRICAS = {
    C: "m/s",
    F: "mph"
  };

  return (
    <Container>
      <Nav onSearch={handleSearch} value={search} />
      <div className="status">
        <h1 id="temp">{data.name}</h1>
        <div className="weather-icon">
          <img src={icon} alt="" id="icon" />
        </div>
        <div className="temperature">
          <h1 id="temp">{data.main.temp}</h1>
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
              <p id="condition">{data.weather[0].description}</p>
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
