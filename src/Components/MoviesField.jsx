import React from 'react'
import { useParams , useNavigate} from 'react-router-dom'
import useMovieData from '../Hooks/useMovieData';

function MoviesField() {
    const { title } = useParams();
    const data = useMovieData({title});
    console.log(data)
    let navigate = useNavigate();
    return (
        <div className="moviesField">
            {
                data && data?.Search?.map((movie) => (
                    <div key={movie.imdbID} className='movie-card' onClick={()=> navigate(`/movie/${movie.imdbID}`)}>
                        <img src={movie.Poster} alt="" />
                        <div className="title">

                            <h1>{movie.Title}</h1>
                            <p>{movie.Type} Year : {movie.Year}</p>
                        
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default MoviesField