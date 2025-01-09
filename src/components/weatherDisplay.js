import React from "react";

const WeatherDisplay = ({ weather, error }) => {
    if (error) {
      return <p className="text-red-500 text-center">{error}</p>;
    }
  
    if (!weather) {
      return null;
    }
  
    return (
      <div className="relative  w-full mx-auto text-center bg-main bg-opacity-65">
        <h2 className="text-2xl font-bold">{weather.name}</h2>
        <p className="text-lg ">{weather.weather[0].description}</p>
        <p className="text-3xl font-bold ">{weather.main.temp}°C</p>
        <p className="">Humidity: {weather.main.humidity}%</p>
        <p className="">Wind Speed: {weather.wind.speed} m/s</p>
      </div>
    );
  };
  
  export default WeatherDisplay;