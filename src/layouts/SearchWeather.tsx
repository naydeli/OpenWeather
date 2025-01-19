import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useEffect } from 'react';

const SearchWeather = ({ newLocation }) => {
  const [city, setCity] = useState('');



  const onSubmit = (e) => {
    e.preventDefault();
    console.log('Ciudad', city );


    if (city === '' || !city) return;

    newLocation(city);
  };

    useEffect(() => {
      // Get location using geolocation API
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords.latitude, position.coords.longitude);
        
      //Using https://api.openweathermap.org/data/2.5/weather? get the city name passing the latitude and longitude
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=3be3544cfcdfda1a26148a2d10a5968d`)
      .then(response => response.json())
      .then(data => {
        setCity(data.name);

        if (city !== ''){
          setTimeout(function(){
            newLocation(city);
          }, 3000)
          
        }
  
        // Optain the forecast for the city
        //fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${data.name}&appid=3be3544cfcdfda1a26148a2d10a5968d`)
        //.then(response => response.json())
        //.then(data => {
        //  console.log(data);
      //  })
      })
    })
    }, [city]);


  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <div className="flex items-center w-full space-x-2 max auto">
          <Input
            value={city}
            type="text"
            placeholder="City"
            onBlur={(e) => setCity(e.target.value)}
            onChange={(e) => setCity(e.target.value)}
          />
          <Button type="submit">Buscar</Button>
        </div>
      </form>
    </div>
    );
  };
  export default SearchWeather;