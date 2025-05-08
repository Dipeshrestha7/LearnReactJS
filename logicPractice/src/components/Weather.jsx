import React from 'react'
import { useState, useEffect} from 'react'

function Weather() {
    const [city, setCity] =useState([])

    useEffect(()=>{
        fetch("https://api.openweathermap.org/data/2.5/weather?q={city}&appid=YOUR_API_KEY&units=metric")
        .then(response => response.json())
        .then(data=>setCity(data))
    })
  return (
    <>
    <div>Weather</div>
    {city.map((item)=>(
            <h2>{item.name}</h2>
            )
    )}
    </>
  )
}

export default Weather