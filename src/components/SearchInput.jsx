import {BiSearch} from 'react-icons/bi'
const SearchInput = ({setUserCity}) => {
    const handleSubmit =(e)=>{
        e.preventDefault()
        setUserCity(e.target.search.value)
        console.log(e.target.search.value)
    }
    return (
        <div className={tailwind.search_input}>
            <label htmlFor="search">Search :</label>
            <form className={tailwind.form} onSubmit={(e)=>handleSubmit(e)}>
                <input type="text" name="search" placeholder="city, region..." autoComplete="off"/>
                <button><BiSearch /></button>
            </form>
        </div>
    );
}
 
export default SearchInput;

const tailwind = {
    search_input : 'search-input bg-blue-100 flex flex-col',
    form : 'bg-blue-200 flex'
}