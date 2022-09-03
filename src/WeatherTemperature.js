import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span id="temperature">{props.celsius}</span>
        <span className=" units">
          <a href="/" className="celsius-link active">
            °C
          </a>
          |
          <a href="/" className="fahrenheit-link" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span id="temperature">{Math.round((props.celsius * 9) / 5 + 32)}</span>
        <span className=" units">
          <a href="/" className="celsius-link" onClick={showCelsius}>
            °C
          </a>
          |
          <a href="/" className="fahrenheit-link active">
            °F
          </a>
        </span>
      </div>
    );
  }
}
