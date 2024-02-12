import React from "react";
import { Container } from "./styles";

export function Date({ date }) {
  const nomeDoDia = convertToLocalTime(date);

  function convertToLocalTime(dt) {
    const dateObject = new Date(dt * 1000);

    const year = dateObject.getFullYear();
    const month = String(dateObject.getMonth() + 1).padStart(2, "0");
    const day = String(dateObject.getDate()).padStart(2, "0");
    const hours = String(dateObject.getHours() % 12 || 12).padStart(2, "0");
    const minutes = String(dateObject.getMinutes()).padStart(2, "0");
    const seconds = String(dateObject.getSeconds()).padStart(2, "0");
    const period = dateObject.getHours() >= 12 ? "PM" : "AM";

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds} ${period}`;
  }

  return (
    <Container>
      <p>segunda</p>
    </Container>
  );
}
