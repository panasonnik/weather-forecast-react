import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col-2">
          <div className="text-center mb-1">Mon</div>
          <WeatherIcon iconUrl="02d" size={48} />
          <div className="WeatherForecast-temperature text-center">
            <span className="forecast-temperature-min text-muted">19 / </span>
            <span className="forecast-temperature-max fw-bold">24</span>
          </div>
        </div>
      </div>
    </div>
  );
}
