import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let maxTemp = Math.round(props.data.temp.max);
    return `${maxTemp}°`;
  }
  function minTemperature() {
    let minTemp = Math.round(props.data.temp.min);
    return `${minTemp}°`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  let icon = props.data.weather[0].icon;
  return (
    <div className="WeatherForecastDay">
      <div className="text-center mb-1">{day()}</div>
      <WeatherIcon iconUrl={icon} size={48} />
      <div className="WeatherForecast-temperature text-center">
        <span className="forecast-temperature-min text-muted">
          {maxTemperature()}/{" "}
        </span>
        <span className="forecast-temperature-max fw-bold">
          {minTemperature()}
        </span>
      </div>
    </div>
  );
}
