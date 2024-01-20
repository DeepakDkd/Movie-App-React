import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useMovieData from '../Hooks/useMovieData'

function Search() {

    const [value, setValue] = useState('')
    const navigate = useNavigate()
    console.log(value)
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/search/${value}`)
        setValue('')
    }
   
    
    return (
        <>
        <form className="search-space"
            onSubmit={handleSubmit}>
            <input
                required
                value={value}
                type="search"
                placeholder='Search movies / series....'
                onChange={(e) => setValue(e.target.value)}
            />
            <button type="submit">Search</button>
        </form>
       
        </>
    )
}

export default Search

