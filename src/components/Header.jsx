import { lazy } from "react";
const SearchInput = lazy(() => import("./SearchInput"))

const Header = ({setUserCity, setCity}) => {
    return (
        <header className='flex items-center gap-4 flex-col w-full'>
            <h1 className="text-2xl font-bold">Weather App</h1>
            <SearchInput setUserCity={setUserCity} setCity={setCity}/>
        </header>
    );
}
 
export default Header;
