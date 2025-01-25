import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useEffect } from 'react';

const SearchWeather = ({ newLocation }) => {
  const [city, setCity] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('Ciudad', city );

    if (!city) {
      
      return;
    }

    newLocation(city); 
  };

  useEffect(() => {
    // Obtener la ubicación actual usando la API de geolocalización
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;

      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=b224c5e421318de0a3b4c2ce90611833`)
        .then((response) => response.json())
        .then((data) => {
          const cityName = data.name;
          setCity(cityName);

          // Actualiza la ubicación automáticamente si se encuentra una ciudad
          if (cityName) {
            setTimeout(() => {
              newLocation(cityName);
            }, 3000);
          }
        })
        
    });
  }, []);

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <div className="flex items-center w-full space-x-2 max-auto">
          <Input
            value={city}
            type="text"
            placeholder="City"
            onChange={(e) => setCity(e.target.value)}
          />
          <Button type="submit">Buscar</Button>
        </div>
      </form>
    </div>
  );
};

export default SearchWeather;
