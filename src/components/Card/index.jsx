import { Container } from "./styles";
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

export function Card({ title, data, ...rest }) {
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

  const iconCode = data.day_1.icon;
  const icon = iconMap[iconCode];
  return (
    <Container>
      <div className="cards" id="weather-cards">
        <div className="card">
          <h2 className="day-name">{title}</h2>
          <div className="card-icon">
            <img src={icon} alt="" />
          </div>
          <div className="day-temp">
            <h2 className="temp">{Math.round(data.main.temp)}</h2>
            <span className="temp-unit">&deg;C</span>
          </div>
        </div>
      </div>
    </Container>
  );
}
