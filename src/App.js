import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import "./search.css";
import WeatherInfo from "./WeatherInfo";
import { MutatingDots } from "react-loader-spinner";

export default function App() {
  const [city, setCity] = useState("Kyiv");
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
    });
  }
  function search(city) {
    const apiKey = "63116731662a94eebc651f7bb7447ea1";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div className="App">
        <div className="container">
          <div className="card">
            <div className="card-body">
              <div className="Search">
                <form className="search-city-form" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-6">
                      <div className="input-group mb-3">
                        <input
                          type="search"
                          className="form-control entered-city"
                          placeholder="Enter the city"
                          onChange={handleCityChange}
                        />
                      </div>
                    </div>
                    <div className="col-auto">
                      <input
                        className="form-control"
                        type="submit"
                        value="Check weather"
                        id="submit-btn"
                      />
                    </div>
                  </div>
                </form>
                <div className="col-auto">
                  <button className="btn-location">
                    <i className="fa-solid fa-location-dot"></i>
                  </button>
                </div>
              </div>
              <WeatherInfo data={weatherData} />
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
    search(city);
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
