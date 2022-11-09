import WeatherState from "./WeatherState";
import './WeatherDay.scss';
import moment from "moment";
const WeatherDay = (props) => {
    const dataWeather = props.dataWeather;

    return (
        <div className="weather-day-container">
            <div className="date">{moment(dataWeather.applicableDate).format("ddd DD MMM YY")}</div>
            <div className="state">
                <WeatherState
                    weatherState={dataWeather.weatherStateName}
                />
            </div>
            <div className="max">
                Max: {Math.round(dataWeather.maxTemp)}°C
            </div>
            <div className="min">
                Min:{Math.round(dataWeather.minTemp)}°C
            </div>
            <div className="wind">
                <span className={`dir dir-${dataWeather.windDirectionCompass.toLowerCase()}`}></span>
                {Math.round(dataWeather.windSpeed)}mph
            </div>
        </div>
    )
}

export default WeatherDay;