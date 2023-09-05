
const WeatherSVG = ({ code, alt_img }) => {
    let source
    const sunny = 1000;
    const thunder = [1087, 1273, 1276, 1279, 1282];
    const cloudy = [1003, 1006, 1135, 1147, 1009, 1030];
    const rain = [1063, 1180, 1183, 1186, 1189, 1192, 1195, 1198, 1201, 1240, 1243, 1246];
    const snow = [1066, 1114, 1210, 1213, 1216, 1219, 1222, 1225, 1255, 1258, 1168, 1171, 1237];
    const rainBad = [1072, 1150, 1153];
    const snowBad = [1117, 1204, 1207];
    const rainEasy = [1069, 1249, 1252];
    const snowEasy = [1261, 1264];
    
    if( thunder.includes(code)) source = 'https://raw.githubusercontent.com/yusufhabibalfatha/Assets/main/Weather%20Icon/animated/thunder.svg'
    if( cloudy.includes(code)) source = 'https://raw.githubusercontent.com/yusufhabibalfatha/Assets/main/Weather%20Icon/animated/cloudy.svg'
    if( code == sunny ) source = 'https://raw.githubusercontent.com/yusufhabibalfatha/Assets/main/Weather%20Icon/animated/day.svg'
    if( rainEasy.includes(code)) source = 'https://raw.githubusercontent.com/yusufhabibalfatha/Assets/main/Weather%20Icon/animated/rainy-1.svg'
    if( rain.includes(code)) source = 'https://raw.githubusercontent.com/yusufhabibalfatha/Assets/main/Weather%20Icon/animated/rainy-2.svg'
    if( rainBad.includes(code)) source = 'https://raw.githubusercontent.com/yusufhabibalfatha/Assets/main/Weather%20Icon/animated/rainy-3.svg'
    if( snowEasy.includes(code)) source = 'https://raw.githubusercontent.com/yusufhabibalfatha/Assets/main/Weather%20Icon/animated/snowy-1.svg'
    if( snow.includes(code)) source = 'https://raw.githubusercontent.com/yusufhabibalfatha/Assets/main/Weather%20Icon/animated/snowy-2.svg'
    if( snowBad.includes(code)) source = 'https://raw.githubusercontent.com/yusufhabibalfatha/Assets/main/Weather%20Icon/animated/snowy-3.svg'

    return (
        <img src={source} alt={alt_img}/>
    );
}
 
export default WeatherSVG;