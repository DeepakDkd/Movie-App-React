import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import useMovieData from '../Hooks/useMovieData';
function Season() {
    // const [ data , setData] = useState(null);
    const {movieID , season} = useParams();
    const data = useMovieData({movieID,season})
    console.log(data)
  return data?.Episodes ?(
        <div className="season">
            {
                 data && Object.keys(data).map((key, index) => (
                    key === 'Poster' || data[key] == 'N/A'  || key === 'Ratings' || key === 'Response' || key === 'imdbID' ? (
                        null
                    ) : <p key={key}><strong>{`${key} : `}</strong> {`${data[key]}`}</p>

                ))
            }
        </div>
    ): null
}

export default Season