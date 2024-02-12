import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Search({ styles}) {

    const [value, setValue] = useState('')
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/search/${value}/page/1`)
        setValue('')
    }
   
    
    return (
        <>
        <form className={styles}
            // style={{display:hamburgerSearch? "flex": ""}}
            onSubmit={handleSubmit}>
            <input
                required
                value={value}
                type="search"
                placeholder='Search movies / series....'
                onChange={(e) => setValue(e.target.value)}
            />
            <button type="submit">🔍</button>
        </form>
       
        </>
    )
}

export default Search


