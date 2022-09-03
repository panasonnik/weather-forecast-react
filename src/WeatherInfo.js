import WeatherDetails from "./WeatherDetails";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-auto">
          <div id="main-icon">
            <WeatherIcon iconUrl={props.data.icon} />
          </div>
        </div>
        <div className="col-6 header">
          <h1>
            <span id="temperature">{props.data.temperature}</span>
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
          <h1 id="city">{props.data.city}</h1>
        </div>
        <div className="col-auto">
          <WeatherDetails
            description={props.data.description}
            humidity={props.data.humidity}
            wind={props.data.wind}
            date={props.data.date}
          />
        </div>
      </div>
    </div>
  );
}
