import {BiSearch} from 'react-icons/bi'
const SearchInput = ({setUserCity}) => {
    const handleSubmit =(e)=>{
        e.preventDefault()
        setUserCity(e.target.search.value)
    }
    return (
        <div className='search-input flex flex-col'>
            {/* <p className='text-xs'>Search :</p> */}
            <form className='flex gap-4 items-center' onSubmit={(e)=>handleSubmit(e)}>
                <input className='p-1 bg-transparent border-b-2 border-black' type="text" name="search" placeholder="Search city..." autoComplete="off"/>
                <button className='h-fit w-fit'><BiSearch className='scale-150' /></button>
            </form>
        </div>
    );
}
 
export default SearchInput;

const tailwind = {
    search_input : 'search-input bg-blue-100 flex flex-col',
    form : 'bg-blue-200 flex'
}