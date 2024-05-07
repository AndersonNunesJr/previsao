import { useState, useEffect } from "react";
import {
  API_OPENMETEO,
  KEY_OPENMETEO,
  GEOLOCATION_DEFAULT,
  geoApiOptions,
  API_GEOLOCATION
} from "../../services/api";
import { fusoHorarioAjuste } from "../../services/timeStap";
import { Container } from "./styles";
import { useNavigate } from "react-router-dom";

import {
  Card,
  Section,
  Header,
  SideBar,
  Button,
  HighlightSection
} from "../../components";

export function OpenMeteo() {
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
      temp_max: {},
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

  const navigate = useNavigate();
  const [activeApi, setActiveApi] = useState("OpenMeteo");
  const [activeMetrics, setActiveMetrics] = useState("C");

  const timeStapResult = fusoHorarioAjuste(
    weather.dt,
    weather.timezone === "" ? "" : weather.timezone
  );

  const sunrise = fusoHorarioAjuste(
    weather.sys[0].sunrise[0],
    weather.timezone
  );

  const sunset = fusoHorarioAjuste(weather.sys[0].sunset[0], weather.timezone);

  // async function obterDadosGeolocalizacao() {
  //   try {
  //     const resposta = await GEOLOCATION_DEFAULT.get();
  //     return resposta.data;
  //   } catch (erro) {
  //     console.error("Erro na chamada de geolocalização:", erro);
  //     throw erro;
  //   }
  // }

  // function dadosGeolocalizacaoArmazenados() {
  //   return localStorage.getItem("dadosGeolocalizacao") !== null;
  // }

  // async function primeiraChamadaSeNecessario() {
  //   if (!dadosGeolocalizacaoArmazenados()) {
  //     const dadosGeolocalizacao = await obterDadosGeolocalizacao();
  //     localStorage.setItem(
  //       "dadosGeolocalizacao",
  //       JSON.stringify(dadosGeolocalizacao)
  //     );
  //     handleSearch(dadosGeolocalizacao.city);
  //   }
  // }

  const handleSearch = (event) => {
    const city = event;
    const UNIDADES_METRICAS = {
      C: "",
      F: "&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch"
    };

    // localStorage.setItem("cidadeSelecionada", city);

    if (!city) {
      alert("Digite um nome de cidade!");
      return;
    }

    const fetchDataOpenMeteo = async (city) => {
      try {
        const responseGeolocation = await API_GEOLOCATION.get(
          `/cities?minPopulation=100000&limit=1&namePrefix=${city}`,
          geoApiOptions
        );
        const dataGeolocation = responseGeolocation.data;

        const countryLocation = dataGeolocation.data[0].country;
        const lat = dataGeolocation.data[0].latitude;
        const lon = dataGeolocation.data[0].longitude;
        const nameLocation = dataGeolocation.data[0].name;

        const responseOpenMeteo = await API_OPENMETEO.get(
          `/forecast?latitude=${lat}&longitude=${lon}${UNIDADES_METRICAS[activeMetrics]}${KEY_OPENMETEO}`
        );

        const dataWeather = responseOpenMeteo.data;

        setWeather({
          city,
          name: nameLocation,
          dt: dataWeather.current.time,
          timezone: dataWeather.utc_offset_seconds,
          pop: dataWeather.current.precipitation,
          main: {
            temp: dataWeather.current.temperature_2m,
            humidity: dataWeather.current.relative_humidity_2m,
            pressure: dataWeather.current.pressure_msl,
            temp_max: dataWeather.daily.temperature_2m_max,
            temp_min: dataWeather.daily.temperature_2m_min[0],
            feels_like: dataWeather.current.apparent_temperature
          },
          daily: {
            time: dataWeather.daily.time
          },
          sys: [
            {
              sunrise: dataWeather.daily.sunrise,
              sunset: dataWeather.daily.sunset,
              country: countryLocation
            }
          ],
          weather: [
            {
              icon: dataWeather.daily.weather_code,
              is_day: dataWeather.current.is_day
            }
          ],
          wind: {
            speed: dataWeather.current.wind_speed_10m
          }
        });
      } catch (error) {
        console.error("Erro na busca de dados:", error);
        alert("Erro na busca da previsão do tempo!");
      }
    };

    fetchDataOpenMeteo(city);
  };

  const handleButtonClickApi = (buttonTitle) => {
    setActiveApi(buttonTitle);
    navigate(`/Openweathermap`);
  };

  const handleButtonClickMetrics = (buttonTitle) => {
    setActiveMetrics(buttonTitle);
  };
  useEffect(() => {
    handleSearch(localStorage.getItem("cidadeSelecionada"));
  });
  const UNIDADES = {
    C: "mm",
    F: "inch"
  };

  return (
    <Container>
      <SideBar
        data={weather}
        onSearch={handleSearch}
        metrics={`${activeMetrics}`}
        time={timeStapResult}
        iconName={weather.weather[0].icon[0]}
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
            title={weather.daily.time[0]}
            data={weather}
            iconName={weather.weather[0].icon[0]}
            temp={weather.main.temp_max[0]}
            metrics={`°${activeMetrics}`}
          />
          <Card
            title={weather.daily.time[1]}
            data={weather}
            iconName={weather.weather[0].icon[1]}
            temp={weather.main.temp_max[1]}
            metrics={`°${activeMetrics}`}
          />
          <Card
            title={weather.daily.time[2]}
            data={weather}
            temp={weather.main.temp_max[2]}
            iconName={weather.weather[0].icon[2]}
            metrics={`°${activeMetrics}`}
          />
          <Card
            title={weather.daily.time[3]}
            data={weather}
            temp={weather.main.temp_max[3]}
            iconName={weather.weather[0].icon[3]}
            metrics={`°${activeMetrics}`}
          />
          <Card
            title={weather.daily.time[4]}
            data={weather}
            temp={weather.main.temp_max[4]}
            iconName={weather.weather[0].icon[4]}
            metrics={`°${activeMetrics}`}
          />
          <Card
            title={weather.daily.time[5]}
            data={weather}
            temp={weather.main.temp_max[5]}
            iconName={weather.weather[0].icon[5]}
            metrics={`°${activeMetrics}`}
          />
          <Card
            title={weather.daily.time[6]}
            data={weather}
            temp={weather.main.temp_max[6]}
            iconName={weather.weather[0].icon[6]}
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
            metrics={`${UNIDADES[activeMetrics]}`}
          />
          <HighlightSection title="Nascer do sol" time={sunrise} />
          <HighlightSection
            title="Temperatura máxima"
            data={weather.main.temp_max[0]}
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
