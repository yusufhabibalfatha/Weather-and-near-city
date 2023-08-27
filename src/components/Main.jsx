import { useEffect, useState } from "react";
import NearCity from "./Near_City";

const Main = ({userCity}) => {
    const [city, setCity] = useState()
    const [weather, setWeather] = useState()
    const [error, setError] = useState(false)
    useEffect(() => {
        const fetchWeather = async () => {
            const key_api = '8e537e7385aa49e58a875612231306'
            const default_city = userCity
            const url = `https://api.weatherapi.com/v1/current.json?key=${key_api}&q=${default_city}&aqi=no`
            try{
                const res = await fetch(url)
                const data = await res.json()
                setCity(data.location)
                setWeather(data.current)
            }catch(err){
                console.log('error main.jsx ', err)
            }
        }
        fetchWeather()
    }, [userCity])
    return (
        <main className="flex bg-yellow-100 h-5/6 w-full">
            {city && (
                <>
                    <NearCity currentCity={city} positionContent='left' />
                    <div className="bg-blue-100 w-full mx-auto">
                        <p className="text-center">CONTENT CENTER</p>
                        <div className="content">
                            <h3>{city.name}</h3>
                            <div className="region">
                                <p>{city.region}, {city.country}</p>
                            </div>
                            {weather && (
                                <div className="weather">
                                    <p>{weather.condition.text}</p>
                                    <h5>{weather.temp_c}° C</h5>
                                    <h5>{weather.temp_f}° F</h5>
                                </div>
                            )}
                        </div>
                    </div>
                    <NearCity currentCity={city} positionContent='right' />
                </>
        )}
            {error && <p>ada error = {error}</p>}
        </main>
    );
}
 
export default Main;