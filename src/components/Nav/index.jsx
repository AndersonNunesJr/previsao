import { Card, Input } from "../../components";
import { Container } from "./styles";

export function Nav() {
  return (
    <Container>
      <Card>
        <h1>Cidade</h1>
        <Input />
        <button>Search</button>
      </Card>
    </Container>
  );
}
