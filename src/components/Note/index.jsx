import { TbDroplets } from "react-icons/tb";
import { FaWind } from "react-icons/fa";
import { Container } from "./styles";

export function Note({ data, children, ...rest }) {
  return (
    <Container {...rest}>
      <h1>{data.city}</h1>
      <span>{data.list[0].temp}</span>
      <p className="humidade">
        <TbDroplets />
        <span>{data.list[0].humidity}%</span>
      </p>
      <p className="wind">
        <FaWind />
        <span>{data.list[0].wind.speed} km/h</span>
      </p>
      {children}
    </Container>
  );
}
