import {
    useParams
} from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import WeatherDay from "./WeatherDay";
import _ from "lodash";
import './WeatherByLocation.scss';
import moment from "moment";
import { ROUTE_WEATHER } from "../../navigator/constants";

const WeatherByLocation = (props) => {
    let { woeid } = useParams();
    const [locationWeather, setLocationWeather] = useState({});
    let history = useHistory();

    useEffect(() => {
        getWeatherByLocation();
        // eslint-disable-next-line
    }, []);
    const getWeatherByLocation = async () => {
        if (!woeid) {
            woeid = props.woeidFromParent;
        }
        let res = await axios({
            method: 'post',
            url: 'https://be-metaweather20221105.herokuapp.com/get-data-by-url',
            data: {
                //"url": "https://goweather.herokuapp.com/weather/ho-chi-minh"
                url: `https://be-metaweather20221105.herokuapp.com/weathers/by-woeid/${woeid}`,
            },
        });

        if (res && res.data && res.data.data) {
            setLocationWeather(res.data.data)
        }
    }

    const handleBack = () => {
        history.push(ROUTE_WEATHER)
    }
    return (
        <div className="w-b-l-container">
            {!props.woeidFromParent &&
                <div className="back">
                    <span onClick={() => handleBack()}>--Back--</span>
                </div>
            }
            <div className="list-weather-day">
                {!_.isEmpty(locationWeather) && locationWeather.consolidated_weather
                    && locationWeather.consolidated_weather.length > 0
                    && locationWeather.consolidated_weather.map((item, index) => {
                        return (
                            <div key={`weatherday-${index}`} className={`weather-day-${index}`}>
                                {index === 0 &&
                                    <div className="location-data">
                                        <div className="title">{locationWeather.title}</div>
                                        <div className="time">{moment(locationWeather.time).format("hh:mm:ss A")}</div>
                                    </div>
                                }
                                <WeatherDay
                                    dataWeather={item}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default WeatherByLocation;