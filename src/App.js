import "./App.css";
import Search from "./Search";
import WeatherDetails from "./WeatherDetails";

export default function App() {
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
                  alt=""
                  id="main-icon"
                />
              </div>
              <div className="col-6 header">
                <h1>
                  <span id="temperature">22</span>
                  <span className="units">
                    <a href="index.html" className="celsius-link active">
                      °C
                    </a>
                    |
                    <a href="index.html" className="fahrenheit-link">
                      °F
                    </a>
                  </span>
                </h1>
                <h1 id="city">Kyiv</h1>
              </div>
              <div className="col-auto">
                <WeatherDetails />
              </div>
            </div>
            <hr />
            <div id="forecast-container"></div>
          </div>
        </div>
      </div>
      <footer>
        This is an
        <a href="/" target="_blank" rel="noreferrer" className="github-link">
          {" "}
          open-source{" "}
        </a>
        code by Sofiia Hrebeniuk
      </footer>
    </div>
  );
}
