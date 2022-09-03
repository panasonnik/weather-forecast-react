import WeatherDetails from "./WeatherDetails";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

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
            <WeatherTemperature celsius={props.data.temperature} />
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
