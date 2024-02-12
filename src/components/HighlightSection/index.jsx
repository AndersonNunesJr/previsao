import { Container } from "./styles";

export function HighlightSection({ title, data, children, ...rest }) {
  return (
    <Container {...rest}>
      <div className="highlights">
        {children}
        <div className="cards">
          <div className="card2">
            <h4 className="card-heading">{title}</h4>
            <div className="content">
              <p className="uv-index">{data}</p>
              <p className="uv-text">{data}</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
