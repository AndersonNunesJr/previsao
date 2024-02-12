import { Container } from "./styles";
import { TbDroplets } from "react-icons/tb";
import { FaWind, FaCloud, FaMapMarkerAlt } from "react-icons/fa";
import icon from "../../assets/icons/clear-day.png";
import { WiWindy } from "react-icons/wi";
import {
  LiaTemperatureHighSolid,
  LiaTemperatureLowSolid
} from "react-icons/lia";

export function SideBar({ children }) {
  return (
    <Container>
      {children}
      <div className="status">
        <h1 id="temp">juiz de fora</h1>
        <div className="weather-icon">
          <img src={icon} alt="" id="icon" />
        </div>

        <div className="temperature">
          <h1 id="temp">36</h1>
          <span className="temp-unit">&deg;C</span>
        </div>
        <div className="details-container">
          <p className="date-time">segunda , 12:00</p>

          <div className="divider"></div>

          <div className="condition-rain">
            <div className="condition">
              <FaCloud />
              <p id="condition">condition</p>
            </div>
            <div className="humidity">
              <TbDroplets />
              <p className="rain">15%</p>
            </div>
            <div className="max-min">
              <LiaTemperatureHighSolid />
              <p className="max">25&deg;C</p>
            </div>
            <div className="min-temp">
              <LiaTemperatureLowSolid />
              <p className="min">18&deg;C</p>
            </div>
            <div className="vel-wind">
              <FaWind />
              <p className="wind">3 km/h</p>
            </div>
            <div className="pressure">
              <WiWindy />
              <p className="wind">3 hpa</p>
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
