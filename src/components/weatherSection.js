import React from "react";

const WeatherSection = ({weather, forecast}) => (
    <section id="forecast" className="py-4 items-center justify-center">
        <div>
            <h2>Weather Section</h2>
            <h3>{weather.name}</h3>
            <p>Temperature: {weather.main.temp} degrees Celcius</p>
            <p>Humidity: { weather.main.humidity} %</p>
            <p>Weather: {weather.weather[0].description} </p>
        </div>
    </section>
);

export default WeatherSection;