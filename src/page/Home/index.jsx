import { useState } from "react";
// import { api } from "../../services/api";
import icon from "../../assets/icons/clear-day.png";
import { Container } from "./styles";

import {
  Card,
  Section,
  Header,
  Nav,
  Note,
  Date,
  SideBar,
  Button,
  HighlightSection
} from "../../components";

const KEY = "49f33e38045b62622c52ce2e261259ca";
export function Home() {
  const [weather, setWeather] = useState({
    city: "paris",
    list: [
      {
        dt_txt: "",
        dt: 0,
        temp: 32,
        humidity: 0,
        wind: {
          speed: 0
        }
      }
    ],
    id: 0
  });

  const handleSearch = (event) => {
    const city = event;

    if (!city) {
      alert("Digite um nome de cidade!");
      return;
    }

    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${KEY}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error();
        }
        return response.json();
      })
      .then((data) => {
        const cityWeather = {
          city: data.city.name,
          list: data.list.map((item) => ({
            dt_txt: item.dt_txt,
            dt: item.dt,
            temp: item.main.temp,
            humidity: item.main.humidity,
            wind: {
              speed: item.wind.speed
            }
          }))
        };
        setWeather(cityWeather);
      })
      .catch((error) => {
        alert("Erro na busca da previsão do tempo!");
      });
  };

  return (
    <Container>
      <SideBar>
        <Nav onSearch={handleSearch} />
      </SideBar>

      <Section>
        <Header className="hearder0">
          <div className="header-options">
            <Button title="today" />
            <Button title="week" className="active" />
          </div>
          <div className="header-options units">
            <Button title="&deg;C" className="active" />
            <Button title="&deg;F" />
          </div>
        </Header>
        <Header className="hearder1">
          <Card title="segunda" />
          <Card title="segunda" />
          <Card title="segunda" />
          <Card title="segunda" />
          <Card title="segunda" />
          <Card title="segunda" />
          <Card title="segunda" />
        </Header>
        <Section className="highlightSection">
          <HighlightSection title="Uv index">
            <h2 className="heading">today's highlights</h2>
          </HighlightSection>
          <HighlightSection title="Uv index" />
          <HighlightSection title="Uv index" />
          <HighlightSection title="Uv index" />
          <HighlightSection title="Uv index" />
          <HighlightSection title="Uv index" />
        </Section>
      </Section>
    </Container>
  );
}
