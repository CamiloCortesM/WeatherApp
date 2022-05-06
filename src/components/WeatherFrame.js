import React from "react";
import useWeather from "../hooks/useWeather";

const WeatherFrame = ({ city }) => {
  const { data, loading } = useWeather(city);

  return (
    <div>
      {!loading && <p>Cargando...</p>}
      {loading && <div className="content">
      <img src={`https://openweathermap.org/img/wn/${data.weather.icon}@2x.png`} alt="icon" />
      <h2 className="temp">{data.temps}°C</h2>
      <h2>{data.name}</h2>
      <h2 className="countryData">{data.country}</h2>
      <h2>{data.weather.main}</h2>
      <h2>{data.weather.description}</h2></div>}
    </div>
  );
};

export default WeatherFrame;
