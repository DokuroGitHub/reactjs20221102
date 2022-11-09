import React from "react";
import WeatherByLocation from "./detail/WeatherByLocation";
import Search from "./Search";

const Weather = () => {
    return (
        <div className="weather-app-container">
            <Search />
            <hr />
            <WeatherByLocation woeidFromParent={"1236594"} />
            <hr />
            <WeatherByLocation woeidFromParent={"1252431"} />
        </div>
    )
}

export default Weather;