import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const SearchWeather = ({ newLocation }) => {
  const [city, setCity] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ city });
    if (city === '' || !city) return;

    newLocation(city);
  };
  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <div className="flex items-center w-full space-x-2 max auto">
          <Input
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
