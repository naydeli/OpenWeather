import React from 'react'
import Spinner from './Spinner'

const Card = ({loadingData, showData, weather, forecast}) => {

    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() +1;
    const year = today.getFullYear();
    const date = day +'/'+ month +'/'+ year;

    let url = "";
    

    let iconUrl = "";
    let iconUrl3 = "";
    let iconUrl6 = "";
    let iconUrl9 = "";

    const forecastDate3 = "";
    const forecastDate6 = "";
    const forecastDate9 = "";

    if(loadingData){
        return <Spinner/>
    }
    
    if(showData){
        url = "http://openweathermap.org/img/w/";
        iconUrl = url + weather.weather[0].icon + ".png";

        iconUrl3 = url + forecast.list[1].weather[0].icon +"png";
        iconUrl6 = url + forecast.list[2].weather[0].icon +"png";
        iconUrl9 = url + forecast.list[3].weather[0].icon +"png";

        forecastData3 = forecast.list[1].dt_text.substring(8, 10) + '/' + forecast.list[1].dt_txt.substring(5, 7) + '/' +  forecast.list[1].dt_txt.substring(0, 4) + '' + forecast.list[1].dt_txt.substring(11, 7);
        forecastData6 = forecast.list[2].dt_text.substring(8, 10) + '/' + forecast.list[2].dt_txt.substring(5, 7) + '/' +  forecast.list[1].dt_txt.substring(0, 4) + '' + forecast.list[1].dt_txt.substring(11, 7);
        forecastData9 = forecast.list[3].dt_text.substring(8, 10) + '/' + forecast.list[3].dt_txt.substring(5, 7) + '/' +  forecast.list[1].dt_txt.substring(0, 4) + '' + forecast.list[1].dt_txt.substring(11, 7);
        

    } 

  return (
    <div className='mt-5'>
        {
            showData === true ?(
                <div className='container'>
                    <div className='card mb-3 mx-15 bg-drak text-light'>
                        <div className='g-0'>
                            <div className='auto md-4'>
                                <h3 className='card-title'>{weather.name}</h3>
                                <p className='card-date'>{date}</p>
                                <h1 className='card-temp'>{(weather.main.temp - 273.15).toFixed(1)}°C</h1>
                                <p className='card-desc'><img src={iconUrl} alt="icon" />{weather.weather[0].description}</p>

                                <img src="https://images.pexels.com/photos/1334605/pexels-photo-1334605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='img-fluid rounded-start' alt='..' />
                            </div>
                           
                        </div>
                        <div className='md-8 bg-slate-400'>
                               <div className='card-body text-start mt-2'>
                                <h5 className='card-text'>Temperatura Maxima : {(weather.main.temp_max - 273.15).toFixed(1)}°C</h5>
                                <h5 className='card-text'>Temperatura Minima : {(weather.main.temp_man - 273.15).toFixed(1)}°C</h5>
                                <h5 className='card-text'>Sensación Térmica : {(weather.main.feels_like - 273.15).toFixed(1)}°C</h5>
                                <h5 className='card-text'>Humedad : {weather.main.humidity}%</h5>
                                <h5 className='card-text'>Velocidad del viento : {weather.main.speed}m/s</h5>
                              </div>
                              <hr/>
                              <div className='row mt-4'>
                                <div className='col'>
                                    <p>{forecastDate3}h</p>
                                    <p className='description'><img src="iconUrl3" alt="icon" />{forecast.list[1].weather[0].description}</p>
                                    <p className='temp'>{(forecast.list[1].main.temp -273.15).toFixed(1)}°C</p>
                                </div>
                              </div>
                              <div className='col'>
                                    <p>{forecastDate6}h</p>
                                    <p className='description'><img src="iconUrl6" alt="icon" />{forecast.list[2].weather[0].description}</p>
                                    <p className='temp'>{(forecast.list[2].main.temp -273.15).toFixed(1)}°C</p>
                                </div>
                                <div className='col'>
                                    <p>{forecastDate9}h</p>
                                    <p className='description'><img src="iconUrl9" alt="icon" />{forecast.list[3].weather[0].description}</p>
                                    <p className='temp'>{(forecast.list[3].main.temp -273.15).toFixed(1)}°C</p>
                                </div>

                            </div>
                        

                    </div>

                </div>

            ):(
                <h2 className="text-light">Sin Datos </h2>

            )
        }
      
    </div>
  )
}

export default Card;
