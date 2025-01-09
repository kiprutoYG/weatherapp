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


  return (
    <div>
      <Navbar />
      <Hero onSearch={fetchWeather} />
      <div className="relative  w-full mx-auto bg-main bg-opacity-65">
        <h2 className="text-3xl font-bold text-center">Current Weather:</h2>
      </div>
      <WeatherDisplay weather={weather} error={error} />
      <About/>
      <Contact/>
      <Footer />
    </div>
  );
};

export default App;