import React from 'react';
import SearchForm from './cityForm';

const Hero = ({onSearch}) => (
    <section id="home" className="bg-cover bg-center h-screen flex flex-col items-center justify-center text-center" 
    style={{backgroundImage: `url(${require("./clouds.jpg")})`, height: '700px', margin: '10px', opacity: '0.7'}}>
        <h1 className="font-bold text-try text-5xl">Welcome to WeatherNow</h1>
        <p className="font-bold text-lg text-try mt-4">Get real time weather updates, accurate and timely</p>
        <div className="flex justify-center">
            <SearchForm onSearch={onSearch} />
        </div>
    </section>
);

export default Hero;