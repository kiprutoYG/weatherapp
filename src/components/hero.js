import React from 'react';
import SearchForm from './cityForm';

const Hero = ({onSearch, onCurrentLocation}) => (
    <section id="home" className="bg-cover bg-center h-screen flex flex-col items-center justify-center text-center animate-zoomIn" 
    style={{backgroundImage: `url(${require("./clouds.jpg")})`, height: '700px', margin: '10px', opacity: '0.7'}}>
        <div className="absolute top-auto bg-accent opacity-80 rounded-2xl h-fit">
            <h1 className="font-bold text-secondary text-5xl animate-fadeIn">Welcome to WeatherNow</h1>
            <p className="font-bold text-lg text-secondary mt-4 animate-fadeIn">Get real time weather updates, accurate and timely</p>
            <div className="flex justify-center">
                <SearchForm onSearch={onSearch} />
                <button onClick={onCurrentLocation } className="bg-try text-white text-center px-6 py-2 rounded-lg hover:bg-blue-800 gap-2 h-10 align-middle mt-2">Use Current Location</button>
            </div>
        </div>
    </section>
);

export default Hero;