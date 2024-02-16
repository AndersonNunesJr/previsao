import { useState } from "react";

import { Button, Input } from "../../components";
import { Container } from "./styles";
import { CiSearch } from "react-icons/ci";

export function Nav({ onSearch }) {
  const [cityInput, setCityInput] = useState("");

  const handleInputChange = (event) => {
    setCityInput(event.target.value);
  };

  const handleSearchClick = () => {
    if (onSearch) {
      onSearch(cityInput);
    }
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearchClick();
    }
  };
  return (
    <Container>
      <Input
        placeholder="Digite nome da cidade..."
        type="text"
        onChange={handleInputChange}
        onKeyPress={handleKeyDown}
      />
      <Button icon={CiSearch} onClick={handleSearchClick} />
    </Container>
  );
}
