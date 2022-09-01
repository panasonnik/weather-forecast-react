import React from "react";
import FormatDate from "./FormatDate";

export default function WeatherDetails(props) {
  return (
    <ul className="WeatherDetails">
      <li id="date" className="bold-li">
        <FormatDate date={props.date} />
      </li>
      <br />
      <li>
        Humidity: <span id="humidity">{props.humidity}</span>%
      </li>
      <li>
        Wind speed: <span id="wind-speed">{props.wind}</span> km/h
      </li>
      <li id="description" className="bold-li">
        {props.description}
      </li>
    </ul>
  );
}
