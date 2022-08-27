import React from "react";

export default function WeatherDetails() {
  return (
    <ul className="WeatherDetails">
      <li id="date" className="bold-li"></li>
      <br />
      <li>
        Humidity: <span id="humidity">80</span>%
      </li>
      <li>
        Wind speed: <span id="wind-speed">2</span> km/h
      </li>
      <li id="description" className="bold-li">
        Sunny
      </li>
    </ul>
  );
}
