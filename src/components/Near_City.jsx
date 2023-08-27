import { useEffect, useState } from "react";

const NearCity = ({currentCity, positionContent}) => {
    const [nearCurrentCity, setNearCurrentCity] = useState()
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
        }
        fetchNearCity()
    }, [currentCity])

    return (
        <div className="near-city-one bg-purple-200 w-full">
            <p>CONTENT {positionContent}</p>
            {nearCurrentCity && <p>{nearCurrentCity.City}</p>}
        </div>
    );
}
 
export default NearCity;