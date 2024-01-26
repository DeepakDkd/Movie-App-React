import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useMovieData from '../Hooks/useMovieData';
function Season() {
    // const [ data , setData] = useState(null);
    const { movieID, season } = useParams();
    const data = useMovieData({ movieID, season })
    const Episodes = data?.Episodes
    console.log(Episodes)
    console.log(data)
    return data?.Episodes ? (
        <div className="season">
            {
                data && Object.keys(data).map((key) => (
                    key === 'Title' || key === 'Season' ?
                        (

                            <p key={key}><strong>{`${key} : `}</strong> {`${data[key]}`}</p>

                        )
                        : 
                        null

                ))
            }
            <h1>Episodes</h1>
            <div className="Episodes">
            {

                data && Episodes.map((key,value,l) => (

                   <p>{value+1}. {key.Title}</p>
                ))
            }
            </div>
        </div>
    ) : null
}

export default Season