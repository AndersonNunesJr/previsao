import { Container } from "./styles";

export function HighlightSection({ title, data, metrics, ...rest }) {
  return (
    <Container {...rest}>
      <div className="highlights">
        <div className="cards">
          <div className="card2">
            <h4 className="card-heading">{title}</h4>
            <div className="content">
              <p>{data}</p>
              <p>{metrics}</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
