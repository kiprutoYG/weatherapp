import React from "react";

function WeatherForecast({forecast}){
    if(!forecast)return null;

    return(
        <div className="bg-secondary shadow-md rounded p-6 mt-4 text-center">
                <div>
                    <p className="text-accent text-lg">Temperature: {forecast} degrees Celcius</p>
                </div>
        </div>
    );
};

export default WeatherForecast;