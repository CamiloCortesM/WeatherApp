import React, { useState } from "react";
import WeatherFrame from "./components/WeatherFrame";

const WorldWeather = () => {
  const [city, setCity] = useState("");
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    const resp = e.target.value;
    setInput(resp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim().length > 2) {
      setCity(input);
      setInput("");
    }
  };

  return (
    <div>
      <div className="Weather">
        <div className="Weather-header">
          <form onSubmit={handleSubmit}>
            <label>City</label>
            <input
              type="text"
              value={input}
              id="city"
              required
              placeholder="Enter you city..."
              onChange={handleChange}
            />
            <button>Confirm</button>
          </form>
        </div>
        <div className="Weather-body">{city && <WeatherFrame city={city}/>}</div>
      </div>
    </div>
  );
};

export default WorldWeather;
