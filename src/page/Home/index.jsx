import { useState } from "react";
import {
  API_OPENWEATHERMAP,
  API_OPENMETEO,
  KEY_OPENWEATHERMAP,
  KEY_OPENMETEO
} from "../../services/api";
// import icon from "../../assets/icons/clear-day.png";
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
// https://api.open-meteo.com/v1/forecast?latitude=-21.7642&longitude=-43.3503&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,pressure_msl,wind_speed_10m&daily=temperature_2m_max,sunrise,sunset&timezone=auto&past_hours=6&past_minutely_15=6&forecast_hours=6&forecast_minutely_15=24
const KEY = "49f33e38045b62622c52ce2e261259ca";

export function Home() {
  const [weather, setWeather] = useState({
    city: "",
    name: "",
    dt_txt: "",
    dt: "",
    main: {
      temp: "",
      humidity: "",
      temp_max: "",
      pressure: "",
      temp_min: ""
    },
    weather: [
      {
        description: "",
        icon: ""
      }
    ],
    wind: {
      speed: ""
    }
  });

  const [forecast, setForecast] = useState();

  // const icon = fetch(`https://openweathermap.org/img/wn/10d@2x.png`).then

  // const handleSearch = (event) => {
  //   const city = event;

  //   if (!city) {
  //     alert("Digite um nome de cidade!");
  //     return;
  //   }

  //   const apiweather = fetch(
  //     `${API_OPENWEATHERMAP}/weather?q=${city}&units=metric&appid=${KEY}`
  //   );

  //   const apiforecast = fetch(
  //     `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${KEY}`
  //   );

  //   //   .then((response) => {
  //   //     if (!response.ok) {
  //   //       throw new Error();
  //   //     }
  //   //     return response.json();
  //   //   })
  //   //   .then((data) => {
  //   //     const cityWeather = {
  //   //       city: data.city.name,
  //   //       list: data.list.map((item) => ({
  //   //         dt_txt: item.dt_txt,
  //   //         dt: item.dt,
  //   //         temp: item.main.temp,
  //   //         humidity: item.main.humidity,
  //   //         temp_max: item.main.temp_max,
  //   //         temp_min: item.main.temp_min,
  //   //         pressure: item.main.pressure,
  //   //         weather_icons: item.weather.map((weatherItem) => weatherItem.icon),
  //   //         wind: {
  //   //           speed: item.wind.speed
  //   //         }
  //   //       }))
  //   //     };
  //   //   })
  //   //   .catch((error) => {
  //   //     alert("Erro na busca da previsão do tempo!");
  //   //   });

  //   Promise.all([apiweather, apiforecast])
  //     .then(async (response) => {
  //       const weatherResponse = await response[0].json();
  //       const forrecastResponse = await response[1].json();

  //       setWeather({ city: event, ...weatherResponse });
  //       setForecast({ city: event, ...forrecastResponse });
  //     })
  //     .catch((error) => {
  //       alert("Erro na busca da previsão do tempo!");
  //     });

  //   console.log(forecast);
  //   console.log(weather);
  // };

  const handleSearch = (event) => {
    const city = event;

    if (!city) {
      alert("Digite um nome de cidade!");
      return;
    }

    const fetchDataOpenWeatherMap = async (city) => {
      try {
        const responseWeather = await API_OPENWEATHERMAP.get(
          `/weather?q=${city}&units=metric&appid=${KEY}`
        );
        const responseForecast = await API_OPENWEATHERMAP.get(
          `/forecast?q=${city}&units=metric&appid=${KEY}`
        );

        const dataWeather = responseWeather.data;
        const dataForecast = responseForecast.data;

        setWeather({ city, ...dataWeather });
        setForecast({ city, ...dataForecast });
      } catch (error) {
        console.error("Erro na busca de dados:", error);
        alert("Erro na busca da previsão do tempo!");
      }
    };

    console.log("Weather:", weather);
    console.log("Forecast:", forecast);
    console.log("LAT E LONG", weather.coord);

    // Chame a função passando a cidade desejada
    fetchDataOpenWeatherMap(city);
  };
  return (
    <Container>
      <SideBar data={weather} onSearch={handleSearch} />

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
