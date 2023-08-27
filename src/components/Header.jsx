import SearchInput from "./SearchInput";

const Header = () => {
    return (
        <header className={tailwind.header}>
            <h1>Weather App</h1>
            <SearchInput />
            {/* error components */}
        </header>
    );
}
 
export default Header;

const tailwind = {
    header: 'bg-red-100 flex items-center justify-center flex-col'
}