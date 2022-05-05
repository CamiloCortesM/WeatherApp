import React from "react";
import useWeather from "../hooks/useWeather";

const WeatherFrame = ({ city }) => {
  const { data, loading } = useWeather(city);
  console.log(loading);
  console.log(data);

  return (
    <div>
      {!loading && <p>Cargando...</p>}
      {loading && <div><h2>{data.temps}</h2>
      <h2>{data.name}</h2>
      <h2>{data.country}</h2>
      <h2>{data.weather.main}</h2>
      <h2>{data.weather.icon}</h2>
      <h2>{data.weather.description}</h2>
      <h2>{data.weather.id}</h2></div>}
    </div>
  );
};

export default WeatherFrame;
