import React from 'react';
import SearchForm from './cityForm';

const Hero = ({onSearch, onCurrentLocation}) => (
    <section id="home" className="bg-cover bg-center w-screen h-screen flex flex-col items-center justify-center text-center animate-zoomIn sm:text-2xl md:text-3xl" 
    style={{backgroundImage: `url(${require("./clouds.jpg")})`, height: '700px', opacity: '0.7'}}>
        <div className="absolute top-auto bg-accent opacity-80 rounded-2xl h-fit flex flex-col flex-grow">
            <h1 className="font-bold text-secondary text-5xl animate-fadeIn sm:text-3xl md:text-4xl">Welcome to WeatherNow</h1>
            <p className="font-bold text-lg text-secondary mt-4 animate-fadeIn sm:text-sm md:text-lg">Get real time weather updates, accurate and timely</p>
            <div className="flex justify-center">
                <SearchForm onSearch={onSearch} />
                <button onClick={onCurrentLocation } className="bg-try text-white text-center px-6 py-2 rounded-lg hover:bg-blue-800 align-middle mt-2 sm:text-sm md:text-lg">Use Current Location</button>
            </div>
        </div>
    </section>
);

export default Hero;