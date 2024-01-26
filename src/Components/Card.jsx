import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useMovieData from '../Hooks/useMovieData';
import Season from './Season';

function Card() {
    const { movieID } = useParams();
    const movie = useMovieData({ movieID });
    console.log(movie)
    const navigate = useNavigate()
    return movie ? (
        <div className='cardBg' style={{ backgroundImage: `url(${movie.Poster})` }} >


            <div className="card" >
                <div className='movieCard'>


                    <div className="moviePoster">
                        <img src={movie.Poster} alt={movie.Title} />
                    </div>
                    <div className="movieInfo" >

                        <h2>{movie.Title} </h2>
                        {
                            movie && Object.keys(movie).map((key, index) => (
                                key === 'Poster' || movie[key] == 'N/A' || key === 'Title' || key === 'Ratings' || key === 'Response' || key === 'imdbID' ? (
                                    null
                                ) : <p key={key}><strong>{`${key} : `}</strong> {`${movie[key]}`}</p>

                            ))
                        }
                        {
                            movie.Ratings.map((rating, index) => (
                                <p key={index}>

                                    <strong>Ratings :  </strong>{rating.Source} -  {rating.Value}
                                </p>
                            ))
                        }

                        <br />

                        

                    </div>
                </div>
                {
                            movie?.totalSeasons &&
                            <div className='seasonBtn'>
                                <h3>{movie.totalSeasons} season available</h3>

                                {

                                    Array.from({ length: movie.totalSeasons }).map((j, i) => (
                                        <button onClick={() => navigate(`/movie/${movie.imdbID}/${i + 1}`)} key={i + 1}>{i + 1}</button>
                                    ))

                                }


                            </div>
                        }
                <Season />
            </div>
        // </div>
    ) : null;
}

export default Card;
