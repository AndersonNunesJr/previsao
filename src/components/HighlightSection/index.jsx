import { Container } from "./styles";
import { converterTimestamp } from "../../services/timeStap";
export function HighlightSection({ title, data, metrics, time }) {
  const horarioLocal = converterTimestamp(time);
  const isHorarioValid = !isNaN(horarioLocal.horas, horarioLocal.minutos);

  return (
    <Container>
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
              {metrics ? <p>{metrics}</p> : <p>{horarioLocal.periodo}</p>}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
