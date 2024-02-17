import { Container } from "./styles";

export function Button({
  icon: Icon,
  title,
  loading,
  isActive,
  onClick,
  ...rest
}) {
  const handleClick = () => {
    onClick(title);
  };
  return (
    <Container
      type="button"
      disabled={loading}
      className={`${isActive ? "active" : ""}`}
      onClick={handleClick}
      {...rest}
    >
      {Icon && <Icon size={20} />}
      {loading ? "Carregando..." : title}
    </Container>
  );
}
