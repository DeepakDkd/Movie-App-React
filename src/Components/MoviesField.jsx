import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import useMovieData from '../Hooks/useMovieData';

function MoviesField() {
    const { title, page } = useParams();
    const data = useMovieData({ title, page });
    console.log(data?.totalResults / 10)
    let navigate = useNavigate();


    const handlePrevBtn = () => {
        if (page > 0) {
            navigate(`/search/${title}/page/${Number(page) - 1}`)
        }
    }
    const handleNextBtn = () => {
        if (page < Math.ceil(data?.totalResults / 10)) {
            navigate(`/search/${title}/page/${Number(page) + 1}`)
        }

    }

    return (
        <>
            <div className="moviesField">
                <p>dat</p>
                {
                    data && data?.Search?.map((movie) => (
                        <div key={movie.imdbID} className='movie-card' onClick={() => navigate(`/movie/${movie.imdbID}`)}>
                            <img src={movie.Poster == 'N/A' ? "https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg" : movie.Poster} alt="" />
                            <div className="title">

                                <h1>{movie.Title}</h1>
                                <p>{movie.Type} Year : {movie.Year}</p>

                            </div>
                        </div>
                    ))

                }
                {
                    data &&

                    <div className="fieldPageBtn">
                        <p>Page - {page} / {Math.ceil(data?.totalResults / 10)}</p>
                        <div className='pageBtns'>
                            <input type="button" value="Previous" onClick={handlePrevBtn} disabled={page == 1 && true} />
                            <input type="button" value="Next" onClick={handleNextBtn} disabled={page >= data.totalResults / 10 && true} />
                        </div>
                    </div>
                }
            </div>

        </>
    )
}

export default MoviesField