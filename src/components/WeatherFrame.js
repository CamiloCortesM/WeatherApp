import React, { useEffect, useState } from 'react'
import { WeatherFetch } from '../helpers/WeatherFetch'

const WeatherFrame = ({city}) => {

    const [data, setData] = useState({})

    useEffect(() => {
        WeatherFetch(city).then(weath => setData(weath))
    }, [city])
  

  return (
    <div>
        <h2>{data.temps}</h2>
    </div>
  )
}

export default WeatherFrame