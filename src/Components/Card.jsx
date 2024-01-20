// import React from 'react'
// import { useParams } from 'react-router-dom'
// import useMovieData from '../Hooks/useMovieData';

// function Card() {

//     const { movieID } = useParams();
//     console.log(movieID)

//     const movie = useMovieData({ movieID })
//     console.log(movie)

//     return movie ? (

//         <div className='card'>
//             <div className="moviePoster">
//                 <img src={movie.Poster} alt="" />
//             </div>
//             <div className="movieInfo">
//                 <h1>{movie.Title}</h1>
//                 <p>Director: {movie.Director}</p>
//                 <p>Rating: {movie.Ratings[0].Value}</p>
//                 <p>Year Released: {movie.Released}</p>
//                 <p>Genre: {movie.Genre}</p>
//                 <button onClick={() => window.open(`https://imdb.com/title/
//                 ${movie.IMDB_Code}`, "_blank")}>View on IMDB</button
//                 ><br></br><br></br>
//                 <hr></hr>
//                 <p>{movie.Plot}</p>
                

//             </div>
//         </div>
//     ) : ""
// }

// export default Card
import React from 'react';
import { useParams } from 'react-router-dom';
import useMovieData from '../Hooks/useMovieData';
// import './Card.css'; // Import your CSS file

function Card() {
    const { movieID } = useParams();
    const movie = useMovieData({ movieID });
    console.log(movie)

    return movie ? (
        <div className='card'>
            <div className="moviePoster">
                <img src={movie.Poster} alt={movie.Title} />
            </div>
            <div className="movieInfo">
                <h2>{movie.Title} ({movie.Year})</h2>
                <p>
                    <strong>Director:</strong> {movie.Director}
                    <br />
                    <strong>Genre:</strong> {movie.Genre}
                    <br />
                    <strong>Released:</strong> {movie.Released}
                    <br />
                    <strong>Runtime:</strong> {movie.Runtime}
                    <br />
                    <strong>Rated:</strong> {movie.Rated}
                    <br />
                    <strong>IMDb Rating:</strong> {movie.imdbRating}
                </p>
                <h3>Plot</h3>
                <p>{movie.Plot}</p>
                <h3>Awards</h3>
                <p>{movie.Awards}</p>
                {/* Add more details as needed */}
            </div>
        </div>
    ) : null;
}

export default Card;
