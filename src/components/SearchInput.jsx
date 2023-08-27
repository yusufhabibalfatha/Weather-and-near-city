import {BiSearch} from 'react-icons/bi'
const SearchInput = () => {
    return (
        <div className={tailwind.search_input}>
            <label htmlFor="search">Search :</label>
            <div className={tailwind.div}>
                <input type="text" name="search" placeholder="city region country" autoComplete="off"/>
                <BiSearch />
            </div>
        </div>
    );
}
 
export default SearchInput;

const tailwind = {
    search_input : 'search-input bg-blue-100 flex flex-col',
    div : 'bg-blue-200 flex'
}