const City = ({city, weather}) => {
    return (
        <div className="sm:min-w-0 sm:w-60 min-w-full min-h-40 md:min-h-60 md:h-60 border-4 border-black font-bold flex flex-col text-center py-4 px-8 -order-1 md:-order-none">
            <div className="content flex justify-between flex-col h-full">
                <div className="region">
                    <h3 className="uppercase text-xl">{city.name}</h3>
                    <p className="text-slate-600 text-xs">{city.region}, {city.country}</p>
                </div>
                {/* --- WEATHER SVG --- */}
                {weather && (
                    <div className="weather">
                        <p className="text-sm  text-blue-500">{weather.condition.text}</p>
                        <h5 className="text-xl">{weather.temp_c}° C <span className="text-sm ">/ {weather.temp_f}° F</span></h5>
                    </div>
                )}
            </div>
        </div>
    );
}
 
export default City;