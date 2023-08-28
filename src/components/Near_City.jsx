import { useEffect, useState } from "react";
import { getDistanceAndCompass } from "../Utility";

const NearCity = ({currentCity, positionContent}) => {
    const [nearCurrentCity, setNearCurrentCity] = useState(false)
    const [city, setCity] = useState(false)
    const [weather, setWeather] = useState()
    const [distance, setDistance] = useState()
    let indexData = positionContent == 'left' ? 2 : 3
    useEffect(() => {
        const fetchNearCity = async () => {
            const key_api = '04099e38a7msh82c1ed5da644150p16653djsne44c569195a1';
            const hostAPI = 'geocodeapi.p.rapidapi.com';
            const url = `https://geocodeapi.p.rapidapi.com/GetNearestCities?latitude=${currentCity.lat}&longitude=${currentCity.lon}&range=0`;
            try{
                const res = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Key': key_api,
                        'X-RapidAPI-Host': hostAPI
                    }
                })
                const data = await res.json()
                setNearCurrentCity(data[indexData])
                const dataDistance = getDistanceAndCompass(data[indexData])
                setDistance(dataDistance)
                fetchWeather(data[indexData])
            }catch(err){
                console.log('err ', err)
            }
        }
        const fetchWeather = async (city) => {
            const key_api = '8e537e7385aa49e58a875612231306'
            const city_location = `${city.Latitude},${city.Longitude}`
            const url = `https://api.weatherapi.com/v1/current.json?key=${key_api}&q=${city_location}&aqi=no`
            const res = await fetch(url)
            const data = await res.json()
            setCity(data.location)
            setWeather(data.current)
        }
        fetchNearCity()
    }, [currentCity])

    return (
        <div className="sm:min-w-0 sm:w-60 min-w-full min-h-40 md:min-h-0 md:h-60 bg-red-100 border-4 border-black font-bold flex flex-col py-4 px-8 mt-8">
            {nearCurrentCity && (
                <div className="content flex justify-between flex-col bg-blue-100 h-full">
                    <div className="region">
                        {distance && (
                        <div className="near-you font-normal text-xs flex justify-between">
                            <p>{ distance.distance } km</p>
                            <p>{ distance.compass }</p>
                        </div>
                        )}
                        <h3 className="uppercase text-xl">{city.name}</h3>
                        <p className="text-slate-600 text-xs">{city.region}, {city.country}</p>
                    </div>
                    {/* --- WEATHER SVG --- */}
                    {weather && (
                        <div className="weather">
                            <p className="text-sm text-blue-500">{weather.condition.text}</p>
                            <h5 className="text-xl">{weather.temp_c}° C <span className="text-sm ">/ {weather.temp_f}° F</span></h5>
                        </div>
                    )}
                </div>
            )}
            </div>
    );
}
 
export default NearCity;