import React, { useState } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import WeatherDisplay from "./components/weatherDisplay";
import Footer from "./components/footer";
import About from "./components/about";
import Contact from "./components/contact";

const App = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const apiKey = "8057fae2f4a1910db7d33775e12ef772";

  const fetchWeather = async (city) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      );
      if (!response.ok) {
        throw new Error("City not found!");
      }
      const data = await response.json();
      setWeather(data);
      setError("");
    } catch (err) {
      setError(err.message);
      setWeather(null);
    }
  };

  // Fetch weather data by coordinates
  const fetchWeatherByCoords = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
      );
      if (!response.ok) {
        throw new Error("Location not found!");
      }
      const data = await response.json();
      setWeather(data);
      setError("");
    } catch (err) {
      setError(err.message);
      setWeather(null);
    }
  };

  // Handle "Current Location" button
  const handleCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeatherByCoords(latitude, longitude);
        },
        (err) => {
          setError("Unable to retrieve location. Please enable location access.");
        }
      );
    } else {
      setError("Geolocation is not supported by your browser.");
    }
  };




  return (
    <div>
      <Navbar />
      <Hero onSearch={fetchWeather}  onCurrentLocation={handleCurrentLocation} />
      <div className="container  w-full mx-auto bg-accent bg-opacity-60 pt-2">
        <h2 className="md:text-3xl sm:text-2xl font-bold text-center hover:scale-105 transition-transform">Current Weather:</h2>
      </div>
      <WeatherDisplay weather={weather} error={error} />
      <About/>
      <Contact/>
      <Footer />
    </div>
  );
};

export default App;