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
import { converterTimestamp } from "../../services/timeStap";

export function Card({ title, data, iconName, temp, metrics }) {
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

  const iconCode = iconName;
  const day = converterTimestamp(title);

  const period =
    data.weather[0].is_day === ""
      ? ""
      : data.weather[0].is_day === 0
        ? "n"
        : "d";

  const icon = iconMap[`${iconCode}${period}`]
    ? iconMap[`${iconCode}${period}`]
    : iconMap[iconCode];

  return (
    <Container>
      <div className="cards" id="weather-cards">
        <div className="card">
          <h2 className="day-name">{day.nomeDoDia}</h2>
          <div className="card-icon">
            <img src={icon} alt="" />
          </div>
          <div className="day-temp">
            {temp ? (
              <h2 className="temp">{Math.round(temp)}</h2>
            ) : (
              <h2 className="temp"></h2>
            )}
            <span className="temp-unit">{metrics}</span>
          </div>
        </div>
      </div>
    </Container>
  );
}
