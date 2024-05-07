import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { API_OPENWEATHERMAP, KEY_OPENWEATHERMAP } from "../../services/api";
import { fusoHorarioAjuste } from "../../services/timeStap";
import { Container } from "./styles";

import {
  Card,
  Section,
  Header,
  SideBar,
  Button,
  HighlightSection
} from "../../components";

export function Openweathermap() {
  const [weather, setWeather] = useState({
    city: "",
    name: "",
    dt_txt: "",
    dt: "",
    timezone: "",
    pop: "",
    main: {
      temp: "",
      humidity: "",
      temp_max: "",
      pressure: "",
      temp_min: "",
      feels_like: ""
    },
    daily: {
      time: ""
    },
    sys: [
      {
        sunrise: "",
        sunset: "",
        country: ""
      }
    ],
    weather: [
      {
        description: "",
        icon: "",
        is_day: ""
      }
    ],
    wind: {
      speed: ""
    }
  });

  const [forecast, setForecast] = useState({
    list: {
      day1: {
        dt: "",
        icon: "",
        is_day: "",
        temp_max: ""
      },
      day2: {
        dt: "",
        icon: "",
        is_day: "",
        temp_max: ""
      },
      day3: {
        dt: "",
        icon: "",
        is_day: "",
        temp_max: ""
      },
      day4: {
        dt: "",
        icon: "",
        is_day: "",
        temp_max: ""
      },
      day5: {
        dt: "",
        icon: "",
        is_day: "",
        temp_max: ""
      },
      day6: {
        dt: "",
        icon: "",
        is_day: "",
        temp_max: ""
      }
    }
  });

  const navigate = useNavigate();
  const [activeApi, setActiveApi] = useState("Openweathermap");
  const [activeMetrics, setActiveMetrics] = useState("C");

  const timeStapResult = fusoHorarioAjuste(
    weather.dt,
    weather.timezone === "" ? "" : weather.timezone
  );

  const sunrise = fusoHorarioAjuste(weather.sys[0].sunrise, weather.timezone);

  const sunset = fusoHorarioAjuste(weather.sys[0].sunset, weather.timezone);

  const handleSearch = (event) => {
    const city = event;

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

        setWeather({
          city,
          name: dataWeather.name,
          dt: dataWeather.dt,
          timezone: dataWeather.timezone,
          pop: dataForecast.list[0].pop,
          main: {
            temp: dataWeather.main.temp,
            humidity: dataWeather.main.humidity,
            pressure: dataWeather.main.pressure,
            temp_max: dataWeather.main.temp_max,
            temp_min: dataWeather.main.temp_min,
            feels_like: dataWeather.main.feels_like
          },
          sys: [
            {
              sunrise: dataWeather.sys.sunrise,
              sunset: dataWeather.sys.sunset,
              country: dataWeather.sys.country
            }
          ],
          weather: [
            {
              description: dataWeather.weather[0].description,
              icon: dataWeather.weather[0].icon
            }
          ],
          wind: {
            speed: dataWeather.wind.speed
          }
        });
        setForecast({
          list: {
            day1: {
              dt: dataForecast.list[0].dt,
              icon: dataForecast.list[0].weather[0].icon,
              temp_max: dataForecast.list[0].main.temp,
              is_day: dataForecast.list[0].sys.pod
            },
            day2: {
              dt: dataForecast.list[8].dt,
              icon: dataForecast.list[8].weather[0].icon,
              temp_max: dataForecast.list[8].main.temp,
              is_day: dataForecast.list[8].sys.pod
            },
            day3: {
              dt: dataForecast.list[16].dt,
              icon: dataForecast.list[16].weather[0].icon,
              temp_max: dataForecast.list[16].main.temp,
              is_day: dataForecast.list[16].sys.pod
            },
            day4: {
              dt: dataForecast.list[24].dt,
              icon: dataForecast.list[24].weather[0].icon,
              temp_max: dataForecast.list[24].main.temp,
              is_day: dataForecast.list[24].sys.pod
            },
            day5: {
              dt: dataForecast.list[32].dt,
              icon: dataForecast.list[32].weather[0].icon,
              temp_max: dataForecast.list[32].main.temp,
              is_day: dataForecast.list[32].sys.pod
            },
            day6: {
              dt: dataForecast.list[39].dt,
              icon: dataForecast.list[39].weather[0].icon,
              temp_max: dataForecast.list[39].main.temp,
              is_day: dataForecast.list[39].sys.pod
            }
          }
        });
      } catch (error) {
        console.error("Erro na busca de dados:", error);
        alert("Erro na busca da previsão do tempo!");
      }
    };
    fetchDataOpenWeatherMap(city);
  };

  const handleButtonClickApi = (buttonTitle) => {
    setActiveApi(buttonTitle);
    navigate(`/OpenMeteo`);
  };

  const handleButtonClickMetrics = (buttonTitle) => {
    setActiveMetrics(buttonTitle);
  };
  const UNIDADE = "mm";
  useEffect(() => {
    // handleSearch(localStorage.getItem("cidadeSelecionada"));
  });
  return (
    <Container>
      <SideBar
        data={weather}
        onSearch={handleSearch}
        metrics={`${activeMetrics}`}
        time={timeStapResult}
        iconName={weather.weather[0].icon}
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
              title="OpenMeteo"
              isActive={activeApi === "OpenMeteo"}
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
          <Card
            title={forecast.list.day1.dt}
            data={weather}
            temp={forecast.list.day1.temp_max}
            iconName={forecast.list.day1.icon}
            metrics={`°${activeMetrics}`}
          />
          <Card
            title={forecast.list.day2.dt}
            temp={forecast.list.day2.temp_max}
            data={weather}
            iconName={forecast.list.day2.icon}
            metrics={`°${activeMetrics}`}
          />
          <Card
            title={forecast.list.day3.dt}
            temp={forecast.list.day3.temp_max}
            data={weather}
            iconName={forecast.list.day3.icon}
            metrics={`°${activeMetrics}`}
          />
          <Card
            title={forecast.list.day4.dt}
            temp={forecast.list.day4.temp_max}
            data={weather}
            iconName={forecast.list.day4.icon}
            metrics={`°${activeMetrics}`}
          />
          <Card
            title={forecast.list.day5.dt}
            temp={forecast.list.day5.temp_max}
            data={weather}
            iconName={forecast.list.day5.icon}
            metrics={`°${activeMetrics}`}
          />
          <Card
            title={forecast.list.day6.dt}
            temp={forecast.list.day6.temp_max}
            data={weather}
            iconName={forecast.list.day6.icon}
            metrics={`°${activeMetrics}`}
          />
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
            title="Precipitação"
            data={weather.pop}
            metrics={`${UNIDADE}`}
          />
          <HighlightSection title="Nascer do sol" time={sunrise} />
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
          <HighlightSection title="Pôr do sol" time={sunset} />
        </Section>
      </Section>
    </Container>
  );
}
