import { useState } from 'react'
import React  from 'react'
import SearchWeather from './SearchWeather';
import Card from './Card';

const WeatherPanel = () => {

    let urlWeather = "https://api.openweathermap.org/data/2.5/weather?appid=3be3544cfcdfda1a26148a2d10a5968d&lang=es"
    let cityUrl = "&q="

    let urlForecast ="https://api.openweathermap.org/data/2.5/forecast?appid=3be3544cfcdfda1a26148a2d10a5968d&lang=es"
 
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

        const response = await fetch(urlForecast).then(response => response.json())
         .then((forecastData) => {
            console.log(forecastData);
            setWeather(forecastData);
            setForecast(forecastData)

            setLoading(false);
            setShow(true);

        }).catch(error =>{
            console.log(error);
            setLoading(false);
            setShow(false);
        })

        
        return response;
        
        
    }
    return ( 
    
        
        <React.Fragment>
         <SearchWeather newLocation={getLocation} />
         <Card
          showData = {show}
          loadingData = {loading}
          weather = {weather}
          forecast = {forecast}
          />
        </React.Fragment>
           
       
    );

}

export default WeatherPanel;
