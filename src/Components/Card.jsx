import React from 'react';
import { useParams } from 'react-router-dom';
import useMovieData from '../Hooks/useMovieData';

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
                    <strong>Language:</strong> {movie.Language}
                    <br />
                    <strong>Actors:</strong> {movie.Actors}
                    <br />
                    <strong>Box Office:</strong> {movie.BoxOffice}
                </p>
                <h3>Plot</h3>
                <p>{movie.Plot}</p>
                <h3>Ratings</h3>
                <ul>
                    {movie.Ratings.map((rating, index) => (
                        <li key={index}>
                            <strong>{rating.Source}:</strong> {rating.Value}
                        </li>
                    ))}
                </ul>
                <h3>Awards</h3>
                <p>{movie.Awards}</p>
                <h3>IMDb Votes</h3>
                <p>{movie.imdbVotes}</p>
                {/* Add more details as needed */}
            </div>
        </div>
    ) : null;
}

export default Card;
