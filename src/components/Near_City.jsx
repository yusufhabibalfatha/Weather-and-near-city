import { useEffect, useState } from "react";

const NearCity = ({currentCity, positionContent}) => {
    const [nearCurrentCity, setNearCurrentCity] = useState(false)
    const [city, setCity] = useState(false)
    const [weather, setWeather] = useState()
    let indexData = positionContent == 'left' ? 2 : 3
    useEffect(() => {
        const fetchNearCity = async () => {
            const key_api = '04099e38a7msh82c1ed5da644150p16653djsne44c569195a1';
            const hostAPI = 'geocodeapi.p.rapidapi.com';
            const url = `https://geocodeapi.p.rapidapi.com/GetNearestCities?latitude=${currentCity.lat}&longitude=${currentCity.lon}&range=0`;
            
            const res = await fetch(url, {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': key_api,
                    'X-RapidAPI-Host': hostAPI
                }
            })
            const data = await res.json()
            setNearCurrentCity(data[indexData])
            fetchWeather(data[indexData])
        }
        const fetchWeather = async (city) => {
            const key_api = '8e537e7385aa49e58a875612231306'
            const city_location = `${city.Latitude},${city.Longitude}`
            const url = `https://api.weatherapi.com/v1/current.json?key=${key_api}&q=${city_location}&aqi=no`
            const res = await fetch(url)
            const data = await res.json()
            setCity(data.location)
            setWeather(data.current)
            console.log('data => ', data)
        }
        fetchNearCity()
    }, [])

    return (
        <div className="near-city-one bg-purple-200 w-full">
            <p>CONTENT {positionContent}</p>
            {nearCurrentCity && <p>{nearCurrentCity.City}</p>}
            {weather && <div className="content">
                <h3>{city.name}</h3>
                <div className="region">
                    <p>{city.region}, {city.country}</p>
                </div>
                <div className="weather">
                    <p>{weather.condition.text}</p>
                    <h5>{weather.temp_c}° C</h5>
                    <h5>{weather.temp_f}° F</h5>
                </div>
            </div>}
        </div>
    );
}
 
export default NearCity;