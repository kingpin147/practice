import {changeEvent, FormEvent, useState} from  'react'

interface searchBarProps{
    onSearch: (query:string)=> void;
}

const searchBar = ({onSearch}:searchBarProps)  =>{
    const [query,setQuery]= useState('');
    
    const handleChange   = (e: changeEvent<HTMLInputElement>)=>{
        setQuery(e.target.value);
    }

    const handleSubmit  = (e:FormEvent)=>{
        e.preventDefault();
        onSearch(query);
    }
    
    return(

        <form onSubmit={handleSubmit} className='flex items-center w-screen max-w-3xl'>
            <input type='text' className='border border-gray-300 rounded-1 py-2 px-4 w-full focus:outline-none focus:border-blue-500'
            value={query}
            onChange={handleChange}
            />
            <button
            type="submit"
            className='bg-red-600 text-white py-2 px-6 rounded-r hover:bg-blue-600 focus:outline-none'>
                
            </button>
        </form>
    )
}

export default searchBar;