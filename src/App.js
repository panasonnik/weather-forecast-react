import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Search from "./Search";
import WeatherDetails from "./WeatherDetails";
import { MutatingDots } from "react-loader-spinner";

export default function App() {
  let [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
    });
  }
  if (weatherData.ready) {
    return (
      <div className="App">
        <div className="container">
          <div className="card">
            <div className="card-body">
              <Search />
              <div className="row">
                <div className="col-auto">
                  <img
                    src="http://openweathermap.org/img/wn/01d@2x.png"
                    alt={weatherData.description}
                    id="main-icon"
                  />
                </div>
                <div className="col-6 header">
                  <h1>
                    <span id="temperature">{weatherData.temperature}</span>
                    <span className="units">
                      <a href="/" className="celsius-link active">
                        °C
                      </a>
                      |
                      <a href="/" className="fahrenheit-link">
                        °F
                      </a>
                    </span>
                  </h1>
                  <h1 id="city">{weatherData.city}</h1>
                </div>
                <div className="col-auto">
                  <WeatherDetails
                    description={weatherData.description}
                    humidity={weatherData.humidity}
                    wind={weatherData.wind}
                    date={weatherData.date}
                  />
                </div>
              </div>
              <hr />
              <div id="forecast-container"></div>
            </div>
          </div>
        </div>
        <footer>
          This is an
          <a
            href="https://github.com/panasonnik/weather-forecast-react"
            target="_blank"
            rel="noreferrer"
            className="github-link"
          >
            {" "}
            open-source{" "}
          </a>
          code by Sofiia Hrebeniuk
        </footer>
      </div>
    );
  } else {
    const apiKey = "63116731662a94eebc651f7bb7447ea1";
    let primaryCity = "Paris";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${primaryCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return (
      <div className="App">
        <div className="loader">
          <MutatingDots
            height="100"
            width="100"
            color="#6f4c5b"
            secondaryColor="#6f4c5b"
            radius="12.5"
            ariaLabel="mutating-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      </div>
    );
  }
}
