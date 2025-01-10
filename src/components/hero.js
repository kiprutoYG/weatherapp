import React from 'react';
import SearchForm from './cityForm';

const Hero = ({onSearch, onCurrentLocation}) => (
    <section id="home" className="bg-cover bg-center w-screen h-screen flex flex-col items-center justify-center text-center animate-zoomIn sm:text-2xl md:text-3xl" 
    style={{backgroundImage: `url(${require("./clouds.jpg")})`, height: '600px', opacity: '0.7'}}>
        <div className="absolute top-auto bg-accent opacity-80 rounded-2xl h-fit flex flex-col flex-grow">
            <h1 className="font-bold text-secondary animate-fadeIn sm:text-3xl md:text-4xl">Welcome to WeatherNow</h1>
            <p className="font-bold text-secondary mt-4 animate-fadeIn sm:text-sm md:text-lg">Get real time weather updates, accurate and timely</p>
            <div className="flex justify-center">
                <SearchForm onSearch={onSearch} />
                <button onClick={onCurrentLocation } className="flex flex-col sm:flex-row flex-grow bg-try items-center p-4 mr-1 mb-1 rounded-lg gap-4 sm:text-sm md:text-lg">My Location</button>
            </div>
        </div>
    </section>
);

export default Hero;