export const WeatherFetch = async(ct) => {
    const key = "5e01649e42a949268682b984b6012bd0";
    const resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ct}&appid=${key}`);
    const {main:temp,name,sys,weather} = await resp.json();
    const climate={
        temps: ConCentigrade(temp.temp),
        name:name,
        country:sys.country,
        weather:weather[0]
    }

    return climate;
};


const ConCentigrade = (data)=>{
    return data-273.15
}