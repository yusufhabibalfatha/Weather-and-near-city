import SearchInput from "./SearchInput";

const Header = ({setUserCity}) => {
    return (
        <header className='flex items-center gap-4  flex-col w-full'>
            <h1 className="text-2xl font-bold ">Weather App</h1>
            <SearchInput setUserCity={setUserCity}/>
            {/* error components */}
        </header>
    );
}
 
export default Header;

const tailwind = {
    header: 'bg-red-100 flex items-center justify-center flex-col'
}