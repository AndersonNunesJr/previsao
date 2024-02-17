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

import { WiWindy } from "react-icons/wi";

import { Nav } from "../Nav";

export function SideBar({ data, onSearch, metrics }) {
  const [search, setSearch] = useState("");

  const handleSearch = (value) => {
    setSearch(value);
    onSearch(value);
  };

  const iconCode = data.weather[0].icon;
  const iconPath = `img${iconCode}`;

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
          <img src={iconPath} alt="" id="icon" />
        </div>
        <div className="temperature">
          <h1 id="temp">{data.main.temp}</h1>
          <span className="temp-unit">&deg;{metrics}</span>
        </div>
        <div className="details-container">
          <p className="date-time">segunda , 12:00</p>

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
