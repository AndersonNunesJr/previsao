import { Container } from "./styles";

export function Header({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}
