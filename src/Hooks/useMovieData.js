import React, { useEffect, useState } from 'react'

function useMovieData({param,movieID}) {
    console.log(param)
    console.log(movieID)
    const [movieData , setMovieData] = useState(null);
    useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=14402bcc${param ? '&s=' + param:""} ${movieID ? '&i=' + movieID : ""}`)
            .then((response) => response.ok && response.json())
            .then((response) => setMovieData(response))
    }, [param])
    return(movieData)
}

export default useMovieData