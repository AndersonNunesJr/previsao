import { useState, useEffect } from "react";
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
  SideBar,
  Button,
  HighlightSection
} from "../../components";
// https://api.open-meteo.com/v1/forecast?latitude=-21.7642&longitude=-43.3503&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,pressure_msl,wind_speed_10m&daily=temperature_2m_max,sunrise,sunset&timezone=auto&past_hours=6&past_minutely_15=6&forecast_hours=6&forecast_minutely_15=24
// const KEY = "49f33e38045b62622c52ce2e261259ca";

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
    sys: [
      {
        sunrise: "",
        sunset: ""
      }
    ],
    weather: [
      {
        description: "",
        icon: ""
      }
    ],
    wind: {
      speed: ""
    }
    // },
    // inf: {
    //   0: {"Céu limpo"}
    //   1: {"Principalmente claro"}
    //   2: {"Encoberto"}
    //   3: {"Parcialmente nublado"}
    //   45:{ "Nevoeiro"}
    //   48:{ "Neblina depositada"}
    //   51:{ "Chuvisco: leve"}
    //   53:{ "Chuvisco: moderado"}
    //   55:{ "Chuvisco: denso"}
    //   57:{ "Chuvisco Congelante:  leve"}
    //   56:{ "Chuvisco Congelante: denso"}
    //   61:{ "Chuva: leve"}
    //   63:{ "Chuva: moderada"}
    //   65:{ "Chuva: forte"}
    //   66:{ "Chuva Congelante: leve"}
    //   67:{ "Chuva Congelante: pesada"}
    //   71:{ "Queda de neve: leve"}
    //   73:{ "Queda de neve: moderada"}
    //   75:{ "Queda de neve: forte"}
    //   77:{ "Grãos de neve"}
    //   80:{ "Pancadas de chuva: leves"}
    //   81:{ "Pancadas de chuva: moderadas"}
    //   82:{ "Pancadas de chuva: violentas"}
    //   85:{ "Pancadas de neve: leves"}
    //   86:{ "Pancadas de neve: fortes"}
    //   95:{ "Trovoada: leve ou moderada"}
    //   96:{ "Trovoada com granizo: leve"}
    //   99:{ "Trovoada com granizo: forte"}
    // }
  });

  const [forecast, setForecast] = useState();
  const [activeApi, setActiveApi] = useState("Openweathermap");
  const [activeMetrics, setActiveMetrics] = useState("C");

  // const icon = fetch(`https://openweathermap.org/img/wn/10d@2x.png`).then

  const handleSearch = (event) => {
    const city = event;
    console.log(activeMetrics);
    const UNIDADES_METRICAS = {
      C: "metric",
      F: "imperial"
    };

    if (!city) {
      alert("Digite um nome de cidade!");
      return;
    }

    const fetchDataOpenWeatherMap = async (city) => {
      try {
        const responseWeather = await API_OPENWEATHERMAP.get(
          `/weather?q=${city}&units=${UNIDADES_METRICAS[activeMetrics]}&appid=${KEY_OPENWEATHERMAP}&lang=pt_br`
        );
        const responseForecast = await API_OPENWEATHERMAP.get(
          `/forecast?q=${city}&units=${UNIDADES_METRICAS[activeMetrics]}&appid=${KEY_OPENWEATHERMAP}&lang=pt_br`
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
    // console.log("Forecast:", forecast);

    fetchDataOpenWeatherMap(city);
  };

  const handleButtonClickApi = (buttonTitle) => {
    setActiveApi(buttonTitle);
  };

  const handleButtonClickMetrics = (buttonTitle) => {
    setActiveMetrics(buttonTitle);
  };

  return (
    <Container>
      <SideBar
        data={weather}
        onSearch={handleSearch}
        metrics={`${activeMetrics}`}
      />

      <Section>
        <Header className="hearder0">
          <div className="header-options">
            <Button
              title="Openweathermap"
              isActive={activeApi === "Openweathermap"}
              onClick={handleButtonClickApi}
            />
            <Button
              title="Open-meteo"
              isActive={activeApi === "Open-meteo"}
              onClick={handleButtonClickApi}
            />
          </div>
          <div className="header-options units">
            <Button
              title="C"
              isActive={activeMetrics === "C"}
              onClick={handleButtonClickMetrics}
            />
            <Button
              title="F"
              isActive={activeMetrics === "F"}
              onClick={handleButtonClickMetrics}
            />
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
          <Header>
            <h2 className="heading">today's highlights</h2>
          </Header>
          <HighlightSection
            title="Sensação térmica"
            data={weather.main.feels_like}
            metrics={`°${activeMetrics}`}
          />
          <HighlightSection
            title="Uv index"
            data={weather.main.temp_min}
            metrics={`°${activeMetrics}`}
          />
          <HighlightSection
            title="Sunrise"
            data={weather.sys.sunrise}
            metrics={`°${activeMetrics}`}
          />
          <HighlightSection
            title="Temperatura máxima"
            data={weather.main.temp_max}
            metrics={`°${activeMetrics}`}
          />
          <HighlightSection
            title="Temperatura mínima"
            data={weather.main.temp_min}
            metrics={`°${activeMetrics}`}
          />
          <HighlightSection
            title="Sunset"
            data={weather.sys.sunset}
            metrics={`°${activeMetrics}`}
          />
        </Section>
      </Section>
    </Container>
  );
}

// <div className="max-min">
// <LiaTemperatureHighSolid />
// <p className="max">{data.main.temp_max}&deg;C</p>
// </div>
// <div className="min-temp">
// <LiaTemperatureLowSolid />
// <p className="min">{data.main.temp_min}&deg;C</p>
// </div>

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
