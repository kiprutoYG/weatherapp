import { useEffect } from "react";
import { useState } from "react";
import React from "react";

const WeatherDisplay = ({ weather, error }) => {
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    if (weather) {
      const updateLocalTime = () => {
        const utcTime = new Date();
        const localOffset = weather.timezone * 1000; // Convert seconds to milliseconds
        const localDate = new Date(utcTime.getTime());
        setLocalTime(localDate.toLocaleTimeString());
      };

      updateLocalTime(); // Set initial time
      const interval = setInterval(updateLocalTime, 1000); // Update every second

      return () => clearInterval(interval); // Cleanup on unmount
    }
  }, [weather]);
    if (error) {
      return <p className="text-red-500 text-center">{error}</p>;
    }
  
    if (!weather) {
      return null;
    }
  
    return (
      <section id="forecast" className="bg-accent bg-opacity-60 pt-3 pb-8">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold">{weather.name}</h2>
        <p className="text-lg ">{weather.weather[0].description}</p>
        <p className="text-2xl font-bold ">{weather.main.temp}°C</p>
        <p className="text-lg">Humidity: {weather.main.humidity}%</p>
        <p className="text-lg">Wind Speed: {weather.wind.speed} m/s</p>
        <p className="text-lg font-semibold mt-4">
        Local Time: <span className="text-blue-600">{localTime}</span>
        </p>
        <div class="flex items-center pt-12 mb-0 sm:text-sm md:text-2xl font-bold container mx-auto text-center">
            <hr class="flex-grow"/>
              <span classname="">TriGIS</span>
            <hr class="flex-grow"/>
        </div>
      </div>
      </section>
    );
  };
  
  export default WeatherDisplay;