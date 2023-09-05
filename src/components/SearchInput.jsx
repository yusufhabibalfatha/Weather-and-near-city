import {BiSearch} from 'react-icons/bi'
const SearchInput = ({setUserCity, setCity}) => {
    const handleSubmit =(e)=>{
        setCity(false)
        e.preventDefault()
        setUserCity(e.target.search.value)
    }
    return (
        <div className='flex flex-col'>
            <form className='flex gap-4 items-center' onSubmit={(e)=>handleSubmit(e)}>
                <input className='p-1 bg-transparent border-b-2 border-black' type="text" name="search" placeholder="Search city..." autoComplete="off"/>
                <button className='h-fit w-fit'><BiSearch className='scale-150' /></button>
            </form>
        </div>
    );
}
 
export default SearchInput;