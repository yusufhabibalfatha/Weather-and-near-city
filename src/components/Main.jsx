import { useEffect, useState } from "react";
import NearCity from "./Near_City";
import City from "./City";

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
        <main className="flex flex-col md:flex-row items-center md:items-start justify-center w-full h-full gap-4 p-8">
            {city && (
                <>
                    <NearCity currentCity={city} positionContent='left' />
                    <City city={city} weather={weather}/>
                    <NearCity currentCity={city} positionContent='right' />
                </>
        )}
            {error && <p>ada error = {error}</p>}
        </main>
    );
}
 
export default Main;