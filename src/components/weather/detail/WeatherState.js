import './WeatherState.scss';
import sn from '../../../assets/images/weatherStates/sn.svg';
import sl from '../../../assets/images/weatherStates/sl.svg';
import h from '../../../assets/images/weatherStates/h.svg';
import t from '../../../assets/images/weatherStates/t.svg';
import hr from '../../../assets/images/weatherStates/hr.svg';
import lr from '../../../assets/images/weatherStates/lr.svg';
import s from '../../../assets/images/weatherStates/s.svg';
import hc from '../../../assets/images/weatherStates/hc.svg';
import lc from '../../../assets/images/weatherStates/lc.svg';
import c from '../../../assets/images/weatherStates/c.svg';

const WeatherState = (props) => {
    const weatherState = props.weatherState;
    const allWeatherState = {
        "Snow": {
            "code": "sn",
            "file": sn,
        },
        "Sleet": {
            "code": "sl",
            "file": sl,
        },
        "Hail": {
            "code": "h",
            "file": h,
        },
        "Thunderstorm": {
            "code": "t",
            "file": t,
        },
        "Heavy Rain": {
            "code": "hr",
            "file": hr
        },
        "Light Rain": {
            "code": "lr",
            "file": lr
        },
        "Showers": {
            "code": "s",
            "file": s
        },
        "Heavy Cloud": {
            "code": "hc",
            "file": hc
        },
        "Light Cloud": {
            "code": "lc",
            "file": lc
        },
        "Clear": {
            "code": "c",
            "file": c
        },
    }

    const getWeatherIcon = (weatherState) => {
        const fetchState = allWeatherState[weatherState]["file"];
        return fetchState;
    }

    return (
        <div className="weather-state-container">
            <div className="icon-state">
                <img src={getWeatherIcon(weatherState)} alt={weatherState} />
            </div>
            <div className="name-state">
                {weatherState}
            </div>
        </div>
    )
}

export default WeatherState;