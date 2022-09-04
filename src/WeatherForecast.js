import axios from "axios";
import React, { useState } from "react";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [forecast, setForecast] = useState(null);
  const [ready, setReady] = useState(false);
  function handleResponse(response) {
    setForecast(response.data.daily);
    setReady(true);
  }
  if (ready) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col-2">
            <WeatherForecastDay data={forecast[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "63116731662a94eebc651f7bb7447ea1";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
