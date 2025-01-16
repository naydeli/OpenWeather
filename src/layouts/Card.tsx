import React from 'react';
import Spinner from './Spinner';

const Card = ({ loadingData, showData, weather, forecast }) => {
  console.log('forecast: ', forecast);
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = day + '/' + month + '/' + year;
  let url = '';
  let iconUrl = '';
  let iconUrl3 = '';
  let iconUrl6 = '';
  let iconUrl9 = '';
  let forecastDate3 = '';
  let forecastDate6 = '';
  let forecastDate9 = '';
  if (loadingData) {
    return <Spinner />;
  }
  if (showData) {
    console.log('Tiempo', weather);
    url = 'http://openweathermap.org/img/w/';
    iconUrl = url + weather.list[0].weather[0].icon + '.png';
    iconUrl3 = url + forecast.list[1].weather[0].icon + '.png';
    iconUrl6 = url + forecast.list[2].weather[0].icon + '.png';
    iconUrl9 = url + forecast.list[3].weather[0].icon + '.png';
    const dia810 = forecast?.list[1].dt_txt.substring(8, 10);
    const dia57 = forecast?.list[2].dt_txt.substring(5, 7);
    const dia04 = forecast?.list[3].dt_txt.substring(0, 4);
    const dia117 = forecast?.list[1].dt_txt.substring(11, 7);
    forecastDate3 = dia810 + '/' + dia57 + '/' + dia04 + '' + dia117;
    forecastDate6 =
      forecast?.list[2].dt_txt.substring(8, 10) +
      '/' +
      forecast?.list[2].dt_txt.substring(5, 7) +
      '/' +
      forecast?.list[1].dt_txt.substring(0, 4) +
      '' +
      forecast?.list[1].dt_txt.substring(11, 7);
    forecastDate9 =
      forecast?.list[3].dt_txt.substring(8, 10) +
      '/' +
      forecast?.list[3].dt_txt.substring(5, 7) +
      '/' +
      forecast?.list[1].dt_txt.substring(0, 4) +
      '' +
      forecast?.list[1].dt_txt.substring(11, 7);
  }

  return (
    <div className="mt-8">
      {showData === true ? (
        <div className="container bg-inherit mx-auto rounded-start">
          <div className="row g-0">
            
              <div className="col-md-4 ">
                <h3 className="card-title  text-white  font-semibold mb-4">{weather.city.name}</h3>
                <p className="card-date   text-white  font-semibold mb-5">{date}</p>
                <h1 className="card-temp ">
                  {(weather.list[0].main.temp - 273.15).toFixed(1)}°C
                </h1>
                <p className="card-desc  d-flex align-items-center justify-content-center">
                  <img
                    src={iconUrl}
                    alt="icon"
                  />
                  {weather.list[0].weather[0].description}
                </p>
                <img
                  src="https://images.pexels.com/photos/1334605/pexels-photo-1334605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  className="img-fluid rounded-start"
                  alt=".."
                />
              </div>
            </div>
            <div className=" md-6 bg-gradient-to-r from-blue-500 to-slate-400 mx-8 p-8 rounded-lg shadow-lg mt-10">
              <div className="card-body  text-start mt-2">
                <h5 className="card-text text-white text-lg font-semibold mb-2">
                  Temperatura Maxima :{' '}
                  {(weather.list[0].main.temp_max - 273.15).toFixed(1)}°C
                </h5>
                <h5 className="card-text text-white text-lg font-semibold mb-2">
                  Temperatura Minima :{' '}
                  {(weather.list[0].main.temp_min - 273.15).toFixed(1)}°C
                </h5>
                <h5 className="card-text text-white text-lg font-semibold mb-2">
                  Sensación Térmica :{' '}
                  {(weather.list[0].main.feels_like - 273.15).toFixed(1)}°C
                </h5>
                <h5 className="card-text text-white text-lg font-semibold mb-2">
                  Humedad : {weather.list[0].main.humidity}%
                </h5>
                <h5 className="card-text text-white text-lg font-semibold mb-2">
                  Velocidad del viento : {weather.list[0].wind.speed}m/s
                </h5>
              </div>
              <hr />
              <div className="row mt-6  card-body text-start text-aling ">
                <div className=" col-4 card-body text-white text-lg  font-semibold mb-8">
                  <p>{forecastDate3}h</p>
                  <p className="d-flex align-items-center">
                    <img
                      src={iconUrl3}
                      alt="icon"
                    />
                    {forecast.list[1].weather[0].description}
                  </p>
                  <p className="temp">
                    {(forecast.list[1].main.temp - 273.15).toFixed(1)}°C
                  </p>
                </div>
                <div className="col-4 card-body text-white text-lg font-semibold mb-2">
                <p>{forecastDate6}h</p>
                <p className="d-flex align-items-center">
                  <img
                    src={iconUrl6}
                    alt="icon"
                    
                  />
                  {forecast.list[2].weather[0].description}
                </p>
                <p className="d-flex align-items-center">
                  {(forecast.list[2].main.temp - 273.15).toFixed(1)}°C
                </p>
              </div>
              <div className="col-4 card-body text-white text-lg font-semibold mb-2">
                <p>{forecastDate9}h</p>
                <p className="d-flex align-items-center">
                  <img
                    src={iconUrl9}
                    alt="icon"
                  />
                  {forecast.list[3].weather[0].description}
                </p>
                <p className="temp">
                  {(forecast.list[3].main.temp - 273.15).toFixed(1)}°C
                </p>
              </div>

              </div>
              
            </div>
          
        </div>
      ) : (
        <h2 className="text-light">Sin Datos </h2>
      )}
    </div>
    );
};
export default Card;