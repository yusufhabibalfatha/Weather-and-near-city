import { useEffect, useState } from "react";

const Main = () => {
    const [city, setCity] = useState(false)
    const [weather, setWeather] = useState()
    useEffect(() => {
        const fetchWeather = async () => {
            const key_api = '8e537e7385aa49e58a875612231306'
            const default_city = 'tarakan'
            const url = `https://api.weatherapi.com/v1/current.json?key=${key_api}&q=${default_city}&aqi=no`
            const res = await fetch(url)
            const data = await res.json()
            setCity(data.location)
            setWeather(data.current)
            // console.log('data => ', data)
        }   
        fetchWeather()
    }, [])
    // {city && console.log('city => ', city)}
    // {weather && console.log('weather => ', weather)}
    return (
        <main>
            <div className="bg-blue-100 w-1/2 mx-auto">
                <p className="text-center">CONTENT CENTER</p>
                <div className="content">
                    <h3>{city.name}</h3>
                    <div className="region">
                        <p>{city.region}, {city.country}</p>
                    </div>
                    {/* <WeatherSVG code={weather.condition.code} name={city.name + 'weather'} /> */}
                    <div className="weather">
                        <p>{weather.condition.text}</p>
                        <h5>{weather.temp_c}° C</h5>
                        <h5>{weather.temp_f}° F</h5>
                    </div>
                </div>
            </div>
        </main>
    );
}
 
export default Main;