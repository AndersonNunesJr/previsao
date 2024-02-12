import { Container } from "./styles";

export function Section({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}
