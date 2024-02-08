import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useMovieData from '../Hooks/useMovieData';
function Episode() {
    const { movieID, episode } = useParams();
    const [episodeData, setEpisodeData] = useState()
    const data = useMovieData({ movieID, episode })
    // useEffect(()=>{
    // if(data)setEpisodeData(data)
    // console.log(episodeData)
    // },[data])
    console.log(data)
    console.log(episode)
    return data ? (
        <div className="episodeBg" style={{ backgroundImage: `url(${data.Poster})` }}>

            <div className="episode">
                <h1>{data.Title}</h1>
                <div className="episodeData">

                    <img src={data.Poster} alt="" />

                    <div className='episodeInfo'>
                        {

                            data &&
                            Object.keys(data).map((key, index, obj) => (

                                key != "Poster" && key != "Response" && key != "imdbID" && data[key] != "N/A" && key != "Ratings" &&
                                <p key={index}>

                                    <strong>{`${key} : `}</strong>
                                    {`${data[key]}`}

                                </p>
                            ))
                        }
                        {

                            data.Ratings.map((rating) => (
                                <p>
                                    <strong>{`Source: ${rating.Source}`}</strong>: {`${rating.Value}`}
                                </p>
                            ))
                        }
                    </div>
                </div>
            </div>

        </div>
    ) : null
}

export default Episode