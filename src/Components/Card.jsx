import React from 'react';
import { useParams } from 'react-router-dom';
import useMovieData from '../Hooks/useMovieData';

function Card() {
    const { movieID } = useParams();
    const movie = useMovieData({ movieID });
    console.log(movie)

    return movie ? (
        <div className='card' style={{ backgroundImage: `url(${movie.Poster})` }}>
            <div className="container">

                <div className="moviePoster">
                    <img src={movie.Poster} alt={movie.Title} />
                </div>
                <div className="movieInfo">
                    
                    <h2>{movie.Title} </h2>
                    {
                        movie && Object.keys(movie).map((key, index) => (
                            key === 'Poster' || movie[key] == 'N/A' || key === 'Title' || key === 'Ratings' || key === 'Response' || key === 'imdbID' ? (
                                null
                            ) : <p><strong>{`${key} : `}</strong> {`${movie[key]}`}</p>

                        ))
                    }
                    {
                        movie.Ratings.map((rating, index) => (
                            <p key={index}>

                                <strong>Ratings :  </strong>{rating.Source} -  {rating.Value}
                            </p>
                        ))
                    }

                    <br/>

                    {
                        movie?.totalSeasons &&
                        <div className='seasonBtn'>
                            <h3>{movie.totalSeasons} seasons available</h3>

                            {

                                Array.from({ length: movie.totalSeasons }).map((j, i) => (
                                    <button>{i + 1}</button>
                                ))

                            }


                        </div>
                    }

                </div>
            </div>

        </div>
    ) : null;
}

export default Card;
