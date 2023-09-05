import WeatherSVG from "./WeatherSVG";
import {motion} from 'framer-motion'

const City = ({city, weather}) => {
    const parentVariant = {
        hidden: {
            opacity: 0,
            y: -10
        },
        visible: {
            opacity: 1,
            y: 0
        }
    }
    return (
        <main className="min-w-0 w-60 min-h-40 md:min-h-60 border-4 border-black font-bold flex flex-col text-center py-4 px-8 -order-1 md:-order-none">
            {!city && (
                <h1>Loading</h1>
            )}
            {city && (
                <motion.div variants={parentVariant} initial="hidden" animate="visible" className="flex justify-between items-center sm:items-stretch flex-col h-full">
                    <div>
                        <h3 className="uppercase text-xl">{city.name}</h3>
                        <p className="text-slate-600 text-xs">{city.region}, {city.country}</p>
                    </div>
                    {weather && <WeatherSVG code={weather.condition.code} alt_img={city.name + 'weather'}/>}
                    {weather && (
                        <div>
                            <p className="text-sm text-blue-500">{weather.condition.text}</p>
                            <h5 className="text-xl">{weather.temp_c}° C <span className="text-sm">/ {weather.temp_f}° F</span></h5>
                        </div>
                    )}
                </motion.div>
            )}
        </main>
    );
}
 
export default City;