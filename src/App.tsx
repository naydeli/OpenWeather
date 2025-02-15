import './App.css'
import Page from './layouts/page'
import Header from './layouts/Header'
import WeatherPanel from './layouts/WeatherPanel'
import { useEffect, useState } from 'react'
import Login from './layouts/Login'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      // Get location using geolocation API
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords.latitude, position.coords.longitude);

        //Using https://api.openweathermap.org/data/2.5/weather? get the city name passing the latitude and longitude
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=b224c5e421318de0a3b4c2ce90611833`)
          .then(response => response.json())
          .then(data => {
            console.log(data.name);

            // Obtain the forecast for the city
            fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${data.name}&appid=b224c5e421318de0a3b4c2ce90611833`)
              .then(response => response.json())
              .then(data => {
                console.log(data);
              })
          })
      });
    }
  }, [isLoggedIn]);

  return (
    <Page>
      {isLoggedIn ? (
        <>
          <Header />
          <WeatherPanel />
        </>
      ) : (
        <Login onLogin={() => setIsLoggedIn(true)} />
      )}
    </Page>
  )
}

export default App