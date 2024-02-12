import { Container } from "./styles";
// import { Date } from "../index";
import icon from "../../assets/icons/clear-day.png";

export function Card({ title, data, ...rest }) {
  return (
    <Container>
      <div className="cards" id="weather-cards">
        <div className="card">
          <h2 className="day-name">{title}</h2>
          <div className="card-icon">
            <img src={icon} alt="" />
          </div>
          <div className="day-temp">
            <h2 className="temp">{data}</h2>
            <span className="temp-unit">&deg;C</span>
          </div>
        </div>
      </div>
    </Container>
  );
}
