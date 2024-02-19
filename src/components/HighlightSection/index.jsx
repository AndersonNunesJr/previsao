import { Container } from "./styles";
import { converterTimestamp } from "../../services/timeStap";
export function HighlightSection({ title, data, metrics, time, ...rest }) {
  const horarioLocal = converterTimestamp(time);
  const isHorarioValid = !isNaN(horarioLocal.horas, horarioLocal.minutos);

  return (
    <Container {...rest}>
      <div className="highlights">
        <div className="cards">
          <div className="card2">
            <h4 className="card-heading">{title}</h4>
            <div className="content">
              {isHorarioValid ? (
                <p>
                  {horarioLocal.horas}:{horarioLocal.minutos}
                </p>
              ) : (
                <p>{data}</p>
              )}
              <p>{metrics}</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
