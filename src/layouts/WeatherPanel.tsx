import { useState } from 'react'
import React  from 'react'
import SearchWeather from './SearchWeather';


const WeatherPanel = () => {

    let urlWeather = "https://api.openweathermap.org/data/2.5/weather?appid=b224c5e421318de0a3b4c2ce90611833&lang=es";
    let cityUrl = "&q=";

    let urlForecast ="https://api.openweathermap.org/data/2.5/forecast?appid=b224c5e421318de0a3b4c2ce90611833&lang=es"
 
    const [weather, setWeather] = useState ([]);
    const [forecast, setForecast] = useState ([]);
    const [loading, setLoading] = useState (false);
    const [show, setShow] = useState(false);
    const [location, setLocation] = useState("");

    const getLocation = async(loc) => {
        setLoading(true);
        setLocation(loc);


        // Weather
        urlWeather = urlWeather + cityUrl + loc;

        await fetch(urlWeather).then((response) =>{
            if(!response.ok) throw {response}
            return response.json();

        }).then((weatherData) => {
            console.log(weatherData);
            setWeather(weatherData);

        }).catch(error =>{
            console.log(error);
            setLoading(false);
            setShow(false);
        })
        // Forecast
        urlForecast =urlForecast + cityUrl + loc;

        await fetch(urlForecast).then((response) =>{
            if(!response.ok) throw {response}
            return response.json();

        }).then((forecastData) => {
            console.log(forecastData);
            setWeather(forecastData);

            setLoading(false);
            setShow(true);

        }).catch(error =>{
            console.log(error);
            setLoading(false);
            setShow(false);
        })
        
        
    }
    return ( 
    
            <div>
               <React.Fragment>
               <SearchWeather newLocation={getLocation} />
               </React.Fragment>
            </div>
           
       
    );

}

export default WeatherPanel;
