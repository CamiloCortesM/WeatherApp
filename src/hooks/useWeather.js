import { useEffect, useState } from "react";
import { WeatherFetch } from "../helpers/WeatherFetch";

const useWeather = (city) => {
    const [data, setData] = useState({
        data:{},
        loading:false
    })

    useEffect(() => {
        WeatherFetch(city).then(weath => setData({
            data:weath,
            loading:true
        }))
    }, [city])

    return data;
};

export default useWeather;
