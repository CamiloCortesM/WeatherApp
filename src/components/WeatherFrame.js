import React, { useEffect, useState } from 'react'
import { WeatherFetch } from '../helpers/WeatherFetch'

const WeatherFrame = ({city}) => {

    const [data, setData] = useState({})
    
    console.log(data)

    useEffect(() => {
        WeatherFetch(city).then(weath => setData(weath))
    }, [city])
  

  return (
    <div>
        <h2>{data.temps}</h2>
        <h2>{data.name}</h2>
        <h2>{data.country}</h2>
        <h2>{data.weather.main}</h2>
        <h2>{data.weather.icon}</h2>
        <h2>{data.weather.description}</h2>
        <h2>{data.weather.id}</h2>
        
    </div>
  )
}

export default WeatherFrame