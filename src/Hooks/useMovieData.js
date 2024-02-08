import React, { useEffect, useState } from 'react'

function useMovieData({title,movieID,season,page}) {
    console.log(title)
    console.log(movieID)
    console.log(season)
    console.log(page)
    const [movieData , setMovieData] = useState(null);
    useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=14402bcc${title ? '&s=' + title :""}${movieID ? '&i=' + movieID: ""}${page ? '&page='+ page : ""}${season ? '&season=' +season: ""}`)
            .then((response) => response.ok && response.json())
            .then((response) => setMovieData(response))
    }, [title , movieID , season , page])
    return(movieData)
}

export default useMovieData