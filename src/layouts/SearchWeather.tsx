import React, {useState} from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const SearchWeather = (newLocation) => {
   
  const [city,setCity] =useState("");

  const onSubmit =  (e) => {
    e.preventDefault();
    console.log({city});
    if(city === "" || !city) return;

   newLocation(city);
  }
  return (
    
    <div className='container'>
     <form onSubmit={onSubmit}>
       <div className="flex w-full max auto items-center space-x-2">
         <Input type="text" placeholder="City"onChange={(e) =>setCity(e.target.value)} />
         <Button type="submit">Buscar</Button>
        </div>
      </form>
    </div>
    
    
  )
}

export default SearchWeather;
